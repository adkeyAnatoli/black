!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";
  var t = [],
    E = C.document,
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.concat,
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    h = n.hasOwnProperty,
    a = h.toString,
    l = a.call(Object),
    m = {};
  function v(e, t) {
    var n = (t = t || E).createElement("script");
    (n.text = e), t.head.appendChild(n).parentNode.removeChild(n);
  }
  function c(e, t) {
    return t.toUpperCase();
  }
  var f = "3.1.1",
    k = function (e, t) {
      return new k.fn.init(e, t);
    },
    p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    d = /^-ms-/,
    y = /-([a-z])/g;
  function x(e) {
    var t = !!e && "length" in e && e.length,
      n = k.type(e);
    return (
      "function" !== n &&
      !k.isWindow(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (k.fn = k.prototype =
    {
      jquery: f,
      constructor: k,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = k.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return k.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          k.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
    }),
    (k.extend = k.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || k.isFunction(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (n = a[t]),
                a !== (r = e[t]) &&
                  (l && r && (k.isPlainObject(r) || (i = k.isArray(r)))
                    ? ((o = i
                        ? ((i = !1), n && k.isArray(n) ? n : [])
                        : n && k.isPlainObject(n)
                        ? n
                        : {}),
                      (a[t] = k.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    k.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isFunction: function (e) {
        return "function" === k.type(e);
      },
      isArray: Array.isArray,
      isWindow: function (e) {
        return null != e && e === e.window;
      },
      isNumeric: function (e) {
        var t = k.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
      },
      isPlainObject: function (e) {
        var t, n;
        return !(
          !e ||
          "[object Object]" !== o.call(e) ||
          ((t = r(e)) &&
            ("function" !=
              typeof (n = h.call(t, "constructor") && t.constructor) ||
              a.call(n) !== l))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      type: function (e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? n[o.call(e)] || "object"
          : typeof e;
      },
      globalEval: function (e) {
        v(e);
      },
      camelCase: function (e) {
        return e.replace(d, "ms-").replace(y, c);
      },
      nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (x(e))
          for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
        else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(p, "");
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (x(Object(e))
              ? k.merge(n, "string" == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) != a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (x(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g.apply([], a);
      },
      guid: 1,
      proxy: function (e, t) {
        var n, r, i;
        if (
          ("string" == typeof t && ((n = e[t]), (t = e), (e = n)),
          k.isFunction(e))
        )
          return (
            (r = s.call(arguments, 2)),
            ((i = function () {
              return e.apply(t || this, r.concat(s.call(arguments)));
            }).guid = e.guid =
              e.guid || k.guid++),
            i
          );
      },
      now: Date.now,
      support: m,
    }),
    "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]),
    k.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var b = (function (n) {
    function f(e, t, n) {
      var r = "0x" + t - 65536;
      return r != r || n
        ? t
        : r < 0
        ? String.fromCharCode(65536 + r)
        : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
    }
    function i() {
      T();
    }
    var e,
      d,
      b,
      o,
      a,
      h,
      p,
      g,
      w,
      u,
      l,
      T,
      C,
      s,
      E,
      m,
      c,
      v,
      y,
      k = "sizzle" + 1 * new Date(),
      x = n.document,
      N = 0,
      r = 0,
      S = ae(),
      D = ae(),
      j = ae(),
      A = function (e, t) {
        return e === t && (l = !0), 0;
      },
      q = {}.hasOwnProperty,
      t = [],
      L = t.pop,
      H = t.push,
      F = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      W =
        "\\[" +
        M +
        "*(" +
        I +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        I +
        "))|)" +
        M +
        "*\\]",
      $ =
        ":(" +
        I +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        W +
        ")*)|.*)\\)|)",
      B = new RegExp(M + "+", "g"),
      _ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      z = new RegExp("^" + M + "*," + M + "*"),
      X = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
      V = new RegExp($),
      G = new RegExp("^" + I + "$"),
      Y = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + $),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
      ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      re = function (e, t) {
        return t
          ? "\0" === e
            ? "�"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      ie = ye(
        function (e) {
          return !0 === e.disabled && ("form" in e || "label" in e);
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      F.apply((t = O.call(x.childNodes)), x.childNodes),
        t[x.childNodes.length].nodeType;
    } catch (e) {
      F = {
        apply: t.length
          ? function (e, t) {
              H.apply(e, O.call(t));
            }
          : function (e, t) {
              for (var n = e.length, r = 0; (e[n++] = t[r++]); );
              e.length = n - 1;
            },
      };
    }
    function oe(e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = t && t.ownerDocument,
        p = t ? t.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof e || !e || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (
        !r &&
        ((t ? t.ownerDocument || t : x) !== C && T(t), (t = t || C), E)
      ) {
        if (11 !== p && (u = Z.exec(e)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = t.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && y(t, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return F.apply(n, t.getElementsByTagName(e)), n;
            if (
              (i = u[3]) &&
              d.getElementsByClassName &&
              t.getElementsByClassName
            )
              return F.apply(n, t.getElementsByClassName(i)), n;
          }
        if (d.qsa && !j[e + " "] && (!m || !m.test(e))) {
          if (1 !== p) (f = t), (c = e);
          else if ("object" !== t.nodeName.toLowerCase()) {
            for (
              (s = t.getAttribute("id"))
                ? (s = s.replace(ne, re))
                : t.setAttribute("id", (s = k)),
                o = (l = h(e)).length;
              o--;

            )
              l[o] = "#" + s + " " + ve(l[o]);
            (c = l.join(",")), (f = (ee.test(e) && ge(t.parentNode)) || t);
          }
          if (c)
            try {
              return F.apply(n, f.querySelectorAll(c)), n;
            } catch (e) {
            } finally {
              s === k && t.removeAttribute("id");
            }
        }
      }
      return g(e.replace(_, "$1"), t, n, r);
    }
    function ae() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function se(e) {
      return (e[k] = !0), e;
    }
    function ue(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function le(e, t) {
      for (var n = e.split("|"), r = n.length; r--; ) b.attrHandle[n[r]] = t;
    }
    function ce(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function fe(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function pe(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function de(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ie(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function he(a) {
      return se(function (o) {
        return (
          (o = +o),
          se(function (e, t) {
            for (var n, r = a([], e.length, o), i = r.length; i--; )
              e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ge(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (e in ((d = oe.support = {}),
    (a = oe.isXML =
      function (e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && "HTML" !== t.nodeName;
      }),
    (T = oe.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : x;
        return (
          r !== C &&
            9 === r.nodeType &&
            r.documentElement &&
            ((s = (C = r).documentElement),
            (E = !a(C)),
            x !== C &&
              (n = C.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", i, !1)
                : n.attachEvent && n.attachEvent("onunload", i)),
            (d.attributes = ue(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (d.getElementsByTagName = ue(function (e) {
              return (
                e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
            (d.getById = ue(function (e) {
              return (
                (s.appendChild(e).id = k),
                !C.getElementsByName || !C.getElementsByName(k).length
              );
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(te, f);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var n = e.replace(te, f);
                  return function (e) {
                    var t =
                      void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      for (i = t.getElementsByName(e), r = 0; (o = i[r++]); )
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return void 0 !== t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : d.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" !== e) return o;
                  for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                  return r;
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if (void 0 !== t.getElementsByClassName && E)
                  return t.getElementsByClassName(e);
              }),
            (c = []),
            (m = []),
            (d.qsa = K.test(C.querySelectorAll)) &&
              (ue(function (e) {
                (s.appendChild(e).innerHTML =
                  "<a id='" +
                  k +
                  "'></a><select id='" +
                  k +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    m.push("[*^$]=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    m.push("\\[" + M + "*(?:value|" + R + ")"),
                  e.querySelectorAll("[id~=" + k + "-]").length || m.push("~="),
                  e.querySelectorAll(":checked").length || m.push(":checked"),
                  e.querySelectorAll("a#" + k + "+*").length ||
                    m.push(".#.+[+~]");
              }),
              ue(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    m.push("name" + M + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    m.push(":enabled", ":disabled"),
                  (s.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    m.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  m.push(",.*:");
              })),
            (d.matchesSelector = K.test(
              (v =
                s.matches ||
                s.webkitMatchesSelector ||
                s.mozMatchesSelector ||
                s.oMatchesSelector ||
                s.msMatchesSelector)
            )) &&
              ue(function (e) {
                (d.disconnectedMatch = v.call(e, "*")),
                  v.call(e, "[s!='']:x"),
                  c.push("!=", $);
              }),
            (m = m.length && new RegExp(m.join("|"))),
            (c = c.length && new RegExp(c.join("|"))),
            (t = K.test(s.compareDocumentPosition)),
            (y =
              t || K.test(s.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (A = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) === (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e === C || (e.ownerDocument === x && y(x, e))
                        ? -1
                        : t === C || (t.ownerDocument === x && y(x, t))
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e === C
                      ? -1
                      : t === C
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : u
                      ? P(u, e) - P(u, t)
                      : 0;
                  if (i === o) return ce(e, t);
                  for (n = e; (n = n.parentNode); ) a.unshift(n);
                  for (n = t; (n = n.parentNode); ) s.unshift(n);
                  for (; a[r] === s[r]; ) r++;
                  return r
                    ? ce(a[r], s[r])
                    : a[r] === x
                    ? -1
                    : s[r] === x
                    ? 1
                    : 0;
                })),
          C
        );
      }),
    (oe.matches = function (e, t) {
      return oe(e, null, null, t);
    }),
    (oe.matchesSelector = function (e, t) {
      if (
        ((e.ownerDocument || e) !== C && T(e),
        (t = t.replace(U, "='$1']")),
        d.matchesSelector &&
          E &&
          !j[t + " "] &&
          (!c || !c.test(t)) &&
          (!m || !m.test(t)))
      )
        try {
          var n = v.call(e, t);
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {}
      return 0 < oe(t, C, null, [e]).length;
    }),
    (oe.contains = function (e, t) {
      return (e.ownerDocument || e) !== C && T(e), y(e, t);
    }),
    (oe.attr = function (e, t) {
      (e.ownerDocument || e) !== C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && q.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r
        ? r
        : d.attributes || !E
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (oe.escape = function (e) {
      return (e + "").replace(ne, re);
    }),
    (oe.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (oe.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((l = !d.detectDuplicates),
        (u = !d.sortStable && e.slice(0)),
        e.sort(A),
        l)
      ) {
        for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
        for (; r--; ) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = oe.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else for (; (t = e[r++]); ) n += o(t);
        return n;
      }),
    ((b = oe.selectors =
      {
        cacheLength: 50,
        createPseudo: se,
        match: Y,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, f)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, f)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || oe.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && oe.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return Y.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    V.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, f).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = S[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                S(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = oe.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i)
                      : "|=" === r &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (h, e, t, g, m) {
            var v = "nth" !== h.slice(0, 3),
              y = "last" !== h.slice(-4),
              x = "of-type" === e;
            return 1 === g && 0 === m
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = v != y ? "nextSibling" : "previousSibling",
                    c = e.parentNode,
                    f = x && e.nodeName.toLowerCase(),
                    p = !n && !x,
                    d = !1;
                  if (c) {
                    if (v) {
                      for (; l; ) {
                        for (a = e; (a = a[l]); )
                          if (
                            x
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType
                          )
                            return !1;
                        u = l = "only" === h && !u && "nextSibling";
                      }
                      return !0;
                    }
                    if (((u = [y ? c.firstChild : c.lastChild]), y && p)) {
                      for (
                        d =
                          (s =
                            (r =
                              (i =
                                (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] ||
                                (o[a.uniqueID] = {}))[h] || [])[0] === N &&
                            r[1]) && r[2],
                          a = s && c.childNodes[s];
                        (a = (++s && a && a[l]) || (d = s = 0) || u.pop());

                      )
                        if (1 === a.nodeType && ++d && a === e) {
                          i[h] = [N, s, d];
                          break;
                        }
                    } else if (
                      (p &&
                        (d = s =
                          (r =
                            (i =
                              (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === N && r[1]),
                      !1 === d)
                    )
                      for (
                        ;
                        (a = (++s && a && a[l]) || (d = s = 0) || u.pop()) &&
                        ((x
                          ? a.nodeName.toLowerCase() !== f
                          : 1 !== a.nodeType) ||
                          !++d ||
                          (p &&
                            ((i =
                              (o = a[k] || (a[k] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] = [N, d]),
                          a !== e));

                      );
                    return (d -= m) === g || (d % g == 0 && 0 <= d / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                oe.error("unsupported pseudo: " + e);
            return a[k]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, "", o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? se(function (e, t) {
                      for (var n, r = a(e, o), i = r.length; i--; )
                        e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: se(function (e) {
            var r = [],
              i = [],
              s = p(e.replace(_, "$1"));
            return s[k]
              ? se(function (e, t, n, r) {
                  for (var i, o = s(e, null, r, []), a = e.length; a--; )
                    (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: se(function (t) {
            return function (e) {
              return 0 < oe(t, e).length;
            };
          }),
          contains: se(function (t) {
            return (
              (t = t.replace(te, f)),
              function (e) {
                return -1 < (e.textContent || e.innerText || o(e)).indexOf(t);
              }
            );
          }),
          lang: se(function (n) {
            return (
              G.test(n || "") || oe.error("unsupported lang: " + n),
              (n = n.replace(te, f).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = E
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === s;
          },
          focus: function (e) {
            return (
              e === C.activeElement &&
              (!C.hasFocus || C.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: de(!1),
          disabled: de(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return J.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: he(function () {
            return [0];
          }),
          last: he(function (e, t) {
            return [t - 1];
          }),
          eq: he(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: he(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: he(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: he(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: he(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = fe(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = pe(e);
    function me() {}
    function ve(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function ye(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        p = r++;
      return e.first
        ? function (e, t, n) {
            for (; (e = e[u]); ) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [N, p];
            if (n) {
              for (; (e = e[u]); )
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              for (; (e = e[u]); )
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[k] || (e[k] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === N && r[1] === p)
                      return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function xe(i) {
      return 1 < i.length
        ? function (e, t, n) {
            for (var r = i.length; r--; ) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function be(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function we(d, h, g, m, v, e) {
      return (
        m && !m[k] && (m = we(m)),
        v && !v[k] && (v = we(v, e)),
        se(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            f = !d || (!e && h) ? c : be(c, s, d, n, r),
            p = g ? (v || (e ? d : l || m) ? [] : t) : f;
          if ((g && g(f, p, n, r), m))
            for (i = be(p, u), m(i, [], n, r), o = i.length; o--; )
              (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          if (e) {
            if (v || d) {
              if (v) {
                for (i = [], o = p.length; o--; )
                  (a = p[o]) && i.push((f[o] = a));
                v(null, (p = []), i, r);
              }
              for (o = p.length; o--; )
                (a = p[o]) &&
                  -1 < (i = v ? P(e, a) : s[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (p = be(p === t ? p.splice(l, p.length) : p)), v ? v(null, t, p, r) : F.apply(t, p);
        })
      );
    }
    function Te(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = ye(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = ye(
            function (e) {
              return -1 < P(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [ye(xe(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
            for (n = ++s; n < r && !b.relative[e[n].type]; n++);
            return we(
              1 < s && xe(c),
              1 < s &&
                ve(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace(_, "$1"),
              t,
              s < n && Te(e.slice(s, n)),
              n < r && Te((e = e.slice(n))),
              n < r && ve(e)
            );
          }
          c.push(t);
        }
      return xe(c);
    }
    return (
      (me.prototype = b.filters = b.pseudos),
      (b.setFilters = new me()),
      (h = oe.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = D[e + " "];
          if (l) return t ? 0 : l.slice(0);
          for (a = e, s = [], u = b.preFilter; a; ) {
            for (o in ((n && !(r = z.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = X.exec(a)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace(_, " ") }),
              (a = a.slice(n.length))),
            b.filter))
              !(r = Y[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()),
                i.push({ value: n, type: o, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? oe.error(e) : D(e, s).slice(0);
        }),
      (p = oe.compile =
        function (e, t) {
          var n,
            r = [],
            i = [],
            o = j[e + " "];
          if (!o) {
            for (n = (t = t || h(e)).length; n--; )
              (o = Te(t[n]))[k] ? r.push(o) : i.push(o);
            (o = j(
              e,
              (function (m, v) {
                function e(e, t, n, r, i) {
                  var o,
                    a,
                    s,
                    u = 0,
                    l = "0",
                    c = e && [],
                    f = [],
                    p = w,
                    d = e || (x && b.find.TAG("*", i)),
                    h = (N += null == p ? 1 : Math.random() || 0.1),
                    g = d.length;
                  for (
                    i && (w = t === C || t || i);
                    l !== g && null != (o = d[l]);
                    l++
                  ) {
                    if (x && o) {
                      for (
                        a = 0, t || o.ownerDocument === C || (T(o), (n = !E));
                        (s = m[a++]);

                      )
                        if (s(o, t || C, n)) {
                          r.push(o);
                          break;
                        }
                      i && (N = h);
                    }
                    y && ((o = !s && o) && u--, e && c.push(o));
                  }
                  if (((u += l), y && l !== u)) {
                    for (a = 0; (s = v[a++]); ) s(c, f, t, n);
                    if (e) {
                      if (0 < u)
                        for (; l--; ) c[l] || f[l] || (f[l] = L.call(r));
                      f = be(f);
                    }
                    F.apply(r, f),
                      i &&
                        !e &&
                        0 < f.length &&
                        1 < u + v.length &&
                        oe.uniqueSort(r);
                  }
                  return i && ((N = h), (w = p)), c;
                }
                var y = 0 < v.length,
                  x = 0 < m.length;
                return y ? se(e) : e;
              })(i, r)
            )).selector = e;
          }
          return o;
        }),
      (g = oe.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = "function" == typeof e && e,
            c = !r && h((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              "ID" === (a = o[0]).type &&
              9 === t.nodeType &&
              E &&
              b.relative[o[1].type]
            ) {
              if (!(t = (b.find.ID(a.matches[0].replace(te, f), t) || [])[0]))
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            for (
              i = Y.needsContext.test(e) ? 0 : o.length;
              i-- && ((a = o[i]), !b.relative[(s = a.type)]);

            )
              if (
                (u = b.find[s]) &&
                (r = u(
                  a.matches[0].replace(te, f),
                  (ee.test(o[0].type) && ge(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && ve(o))))
                  return F.apply(n, r), n;
                break;
              }
          }
          return (
            (l || p(e, c))(
              r,
              t,
              !E,
              n,
              !t || (ee.test(e) && ge(t.parentNode)) || t
            ),
            n
          );
        }),
      (d.sortStable = k.split("").sort(A).join("") === k),
      (d.detectDuplicates = !!l),
      T(),
      (d.sortDetached = ue(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
      })),
      ue(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        le("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        ue(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        le("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ue(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        le(R, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      oe
    );
  })(C);
  (k.find = b),
    (k.expr = b.selectors),
    (k.expr[":"] = k.expr.pseudos),
    (k.uniqueSort = k.unique = b.uniqueSort),
    (k.text = b.getText),
    (k.isXMLDoc = b.isXML),
    (k.contains = b.contains),
    (k.escapeSelector = b.escape);
  function w(e, t, n) {
    for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
      if (1 === e.nodeType) {
        if (i && k(e).is(n)) break;
        r.push(e);
      }
    return r;
  }
  function T(e, t) {
    for (var n = []; e; e = e.nextSibling)
      1 === e.nodeType && e !== t && n.push(e);
    return n;
  }
  var N = k.expr.match.needsContext,
    S = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
    D = /^.[^:#\[\.,]*$/;
  function j(e, n, r) {
    return k.isFunction(n)
      ? k.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? k.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? k.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        })
      : D.test(n)
      ? k.filter(n, e, r)
      : ((n = k.filter(n, e)),
        k.grep(e, function (e) {
          return -1 < i.call(n, e) !== r && 1 === e.nodeType;
        }));
  }
  (k.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? k.find.matchesSelector(r, e)
          ? [r]
          : []
        : k.find.matches(
            e,
            k.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    k.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            k(e).filter(function () {
              for (t = 0; t < r; t++) if (k.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
        return 1 < r ? k.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function (e) {
        return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1)
          .length;
      },
    });
  var A,
    q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((k.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || A), "string" != typeof e))
      return e.nodeType
        ? ((this[0] = e), (this.length = 1), this)
        : k.isFunction(e)
        ? void 0 !== n.ready
          ? n.ready(e)
          : e(k)
        : k.makeArray(e, this);
    if (
      !(r =
        "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
          ? [null, e, null]
          : q.exec(e)) ||
      (!r[1] && t)
    )
      return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
    if (r[1]) {
      if (
        ((t = t instanceof k ? t[0] : t),
        k.merge(
          this,
          k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
        ),
        S.test(r[1]) && k.isPlainObject(t))
      )
        for (r in t) k.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
      return this;
    }
    return (
      (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
    );
  }).prototype = k.fn),
    (A = k(E));
  var L = /^(?:parents|prev(?:Until|All))/,
    H = { children: !0, contents: !0, next: !0, prev: !0 };
  function F(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  k.fn.extend({
    has: function (e) {
      var t = k(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (k.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && k(e);
      if (!N.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && k.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? k.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? i.call(k(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    k.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return w(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return w(e, "parentNode", n);
        },
        next: function (e) {
          return F(e, "nextSibling");
        },
        prev: function (e) {
          return F(e, "previousSibling");
        },
        nextAll: function (e) {
          return w(e, "nextSibling");
        },
        prevAll: function (e) {
          return w(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return w(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return w(e, "previousSibling", n);
        },
        siblings: function (e) {
          return T((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return T(e.firstChild);
        },
        contents: function (e) {
          return e.contentDocument || k.merge([], e.childNodes);
        },
      },
      function (r, i) {
        k.fn[r] = function (e, t) {
          var n = k.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = k.filter(t, n)),
            1 < this.length &&
              (H[r] || k.uniqueSort(n), L.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var O = /[^\x20\t\r\n\f]+/g;
  function P(e) {
    return e;
  }
  function R(e) {
    throw e;
  }
  function M(e, t, n) {
    var r;
    try {
      e && k.isFunction((r = e.promise))
        ? r.call(e).done(t).fail(n)
        : e && k.isFunction((r = e.then))
        ? r.call(e, t, n)
        : t.call(void 0, e);
    } catch (e) {
      n.call(void 0, e);
    }
  }
  (k.Callbacks = function (r) {
    r =
      "string" == typeof r
        ? (function (e) {
            var n = {};
            return (
              k.each(e.match(O) || [], function (e, t) {
                n[t] = !0;
              }),
              n
            );
          })(r)
        : k.extend({}, r);
    function n() {
      for (o = r.once, t = i = !0; s.length; u = -1)
        for (e = s.shift(); ++u < a.length; )
          !1 === a[u].apply(e[0], e[1]) &&
            r.stopOnFalse &&
            ((u = a.length), (e = !1));
      r.memory || (e = !1), (i = !1), o && (a = e ? [] : "");
    }
    var i,
      e,
      t,
      o,
      a = [],
      s = [],
      u = -1,
      l = {
        add: function () {
          return (
            a &&
              (e && !i && ((u = a.length - 1), s.push(e)),
              (function n(e) {
                k.each(e, function (e, t) {
                  k.isFunction(t)
                    ? (r.unique && l.has(t)) || a.push(t)
                    : t && t.length && "string" !== k.type(t) && n(t);
                });
              })(arguments),
              e && !i && n()),
            this
          );
        },
        remove: function () {
          return (
            k.each(arguments, function (e, t) {
              for (var n; -1 < (n = k.inArray(t, a, n)); )
                a.splice(n, 1), n <= u && u--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < k.inArray(e, a) : 0 < a.length;
        },
        empty: function () {
          return (a = a && []), this;
        },
        disable: function () {
          return (o = s = []), (a = e = ""), this;
        },
        disabled: function () {
          return !a;
        },
        lock: function () {
          return (o = s = []), e || i || (a = e = ""), this;
        },
        locked: function () {
          return !!o;
        },
        fireWith: function (e, t) {
          return (
            o ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              s.push(t),
              i || n()),
            this
          );
        },
        fire: function () {
          return l.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!t;
        },
      };
    return l;
  }),
    k.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              k.Callbacks("memory"),
              k.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              k.Callbacks("once memory"),
              k.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              k.Callbacks("once memory"),
              k.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return k
                .Deferred(function (r) {
                  k.each(o, function (e, t) {
                    var n = k.isFunction(i[t[4]]) && i[t[4]];
                    s[t[1]](function () {
                      var e = n && n.apply(this, arguments);
                      e && k.isFunction(e.promise)
                        ? e
                            .promise()
                            .progress(r.notify)
                            .done(r.resolve)
                            .fail(r.reject)
                        : r[t[0] + "With"](this, n ? [e] : arguments);
                    });
                  }),
                    (i = null);
                })
                .promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  function e() {
                    var e, t;
                    if (!(i < u)) {
                      if ((e = a.apply(n, r)) === o.promise())
                        throw new TypeError("Thenable self-resolution");
                      (t =
                        e &&
                        ("object" == typeof e || "function" == typeof e) &&
                        e.then),
                        k.isFunction(t)
                          ? s
                            ? t.call(e, l(u, o, P, s), l(u, o, R, s))
                            : (u++,
                              t.call(
                                e,
                                l(u, o, P, s),
                                l(u, o, R, s),
                                l(u, o, P, o.notifyWith)
                              ))
                          : (a !== P && ((n = void 0), (r = [e])),
                            (s || o.resolveWith)(n, r));
                    }
                  }
                  var n = this,
                    r = arguments,
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            k.Deferred.exceptionHook &&
                              k.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== R && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (k.Deferred.getStackHook &&
                        (t.stackTrace = k.Deferred.getStackHook()),
                      C.setTimeout(t));
                };
              }
              return k
                .Deferred(function (e) {
                  o[0][3].add(l(0, e, k.isFunction(r) ? r : P, e.notifyWith)),
                    o[1][3].add(l(0, e, k.isFunction(t) ? t : P)),
                    o[2][3].add(l(0, e, k.isFunction(n) ? n : R));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? k.extend(e, a) : a;
            },
          },
          s = {};
        return (
          k.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[0][2].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        function t(t) {
          return function (e) {
            (i[t] = this),
              (o[t] = 1 < arguments.length ? s.call(arguments) : e),
              --n || a.resolveWith(i, o);
          };
        }
        var n = arguments.length,
          r = n,
          i = Array(r),
          o = s.call(arguments),
          a = k.Deferred();
        if (
          n <= 1 &&
          (M(e, a.done(t(r)).resolve, a.reject),
          "pending" === a.state() || k.isFunction(o[r] && o[r].then))
        )
          return a.then();
        for (; r--; ) M(o[r], t(r), a.reject);
        return a.promise();
      },
    });
  var I = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (k.Deferred.exceptionHook = function (e, t) {
    C.console &&
      C.console.warn &&
      e &&
      I.test(e.name) &&
      C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (k.readyException = function (e) {
      C.setTimeout(function () {
        throw e;
      });
    });
  var W = k.Deferred();
  function $() {
    E.removeEventListener("DOMContentLoaded", $),
      C.removeEventListener("load", $),
      k.ready();
  }
  (k.fn.ready = function (e) {
    return (
      W.then(e).catch(function (e) {
        k.readyException(e);
      }),
      this
    );
  }),
    k.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (e) {
        e ? k.readyWait++ : k.ready(!0);
      },
      ready: function (e) {
        (!0 === e ? --k.readyWait : k.isReady) ||
          ((k.isReady = !0) !== e && 0 < --k.readyWait) ||
          W.resolveWith(E, [k]);
      },
    }),
    (k.ready.then = W.then),
    "complete" === E.readyState ||
    ("loading" !== E.readyState && !E.documentElement.doScroll)
      ? C.setTimeout(k.ready)
      : (E.addEventListener("DOMContentLoaded", $),
        C.addEventListener("load", $));
  function B(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  }
  var _ = function (e, t, n, r, i, o, a) {
    var s = 0,
      u = e.length,
      l = null == n;
    if ("object" === k.type(n))
      for (s in ((i = !0), n)) _(e, t, s, n[s], !0, o, a);
    else if (
      void 0 !== r &&
      ((i = !0),
      k.isFunction(r) || (a = !0),
      l &&
        (t = a
          ? (t.call(e, r), null)
          : ((l = t),
            function (e, t, n) {
              return l.call(k(e), n);
            })),
      t)
    )
      for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  };
  function z() {
    this.expando = k.expando + z.uid++;
  }
  (z.uid = 1),
    (z.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            B(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[k.camelCase(t)] = n;
        else for (r in t) i[k.camelCase(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][k.camelCase(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = k.isArray(t)
              ? t.map(k.camelCase)
              : (t = k.camelCase(t)) in r
              ? [t]
              : t.match(O) || []).length;
            for (; n--; ) delete r[t[n]];
          }
          (void 0 !== t && !k.isEmptyObject(r)) ||
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !k.isEmptyObject(t);
      },
    });
  var X = new z(),
    U = new z(),
    V = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    G = /[A-Z]/g;
  function Y(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(G, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n = (function (e) {
            return (
              "true" === e ||
              ("false" !== e &&
                ("null" === e
                  ? null
                  : e === +e + ""
                  ? +e
                  : V.test(e)
                  ? JSON.parse(e)
                  : e))
            );
          })(n);
        } catch (e) {}
        U.set(e, t, n);
      } else n = void 0;
    return n;
  }
  k.extend({
    hasData: function (e) {
      return U.hasData(e) || X.hasData(e);
    },
    data: function (e, t, n) {
      return U.access(e, t, n);
    },
    removeData: function (e, t) {
      U.remove(e, t);
    },
    _data: function (e, t, n) {
      return X.access(e, t, n);
    },
    _removeData: function (e, t) {
      X.remove(e, t);
    },
  }),
    k.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 !== n)
          return "object" == typeof n
            ? this.each(function () {
                U.set(this, n);
              })
            : _(
                this,
                function (e) {
                  var t;
                  if (o && void 0 === e) {
                    if (void 0 !== (t = U.get(o, n))) return t;
                    if (void 0 !== (t = Y(o, n))) return t;
                  } else
                    this.each(function () {
                      U.set(this, n, e);
                    });
                },
                null,
                e,
                1 < arguments.length,
                null,
                !0
              );
        if (
          this.length &&
          ((i = U.get(o)), 1 === o.nodeType && !X.get(o, "hasDataAttrs"))
        ) {
          for (t = a.length; t--; )
            a[t] &&
              0 === (r = a[t].name).indexOf("data-") &&
              ((r = k.camelCase(r.slice(5))), Y(o, r, i[r]));
          X.set(o, "hasDataAttrs", !0);
        }
        return i;
      },
      removeData: function (e) {
        return this.each(function () {
          U.remove(this, e);
        });
      },
    }),
    k.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = X.get(e, t)),
            n &&
              (!r || k.isArray(n)
                ? (r = X.access(e, t, k.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = k.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = k._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                k.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          X.get(e, n) ||
          X.access(e, n, {
            empty: k.Callbacks("once memory").add(function () {
              X.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    k.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? k.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = k.queue(this, t, n);
                k._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          k.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        function n() {
          --i || o.resolveWith(a, [a]);
        }
        var r,
          i = 1,
          o = k.Deferred(),
          a = this,
          s = this.length;
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          s--;

        )
          (r = X.get(a[s], e + "queueHooks")) &&
            r.empty &&
            (i++, r.empty.add(n));
        return n(), o.promise(t);
      },
    });
  function Q(e, t, n, r) {
    var i,
      o,
      a = {};
    for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
    for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = a[o];
    return i;
  }
  var J = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    K = new RegExp("^(?:([+-])=|)(" + J + ")([a-z%]*)$", "i"),
    Z = ["Top", "Right", "Bottom", "Left"],
    ee = function (e, t) {
      return (
        "none" === (e = t || e).style.display ||
        ("" === e.style.display &&
          k.contains(e.ownerDocument, e) &&
          "none" === k.css(e, "display"))
      );
    };
  function te(e, t, n, r) {
    var i,
      o = 1,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return k.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (k.cssNumber[t] ? "" : "px"),
      c = (k.cssNumber[t] || ("px" !== l && +u)) && K.exec(k.css(e, t));
    if (c && c[3] !== l)
      for (
        l = l || c[3], n = n || [], c = +u || 1;
        (c /= o = o || ".5"),
          k.style(e, t, c + l),
          o !== (o = s() / u) && 1 !== o && --a;

      );
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ne = {};
  function re(e, t) {
    for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
      (r = e[o]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((i[o] = X.get(r, "display") || null),
              i[o] || (r.style.display = "")),
            "" === r.style.display &&
              ee(r) &&
              (i[o] =
                ((f = l = u = void 0),
                (l = (s = r).ownerDocument),
                (c = s.nodeName),
                (f = ne[c]) ||
                  ((u = l.body.appendChild(l.createElement(c))),
                  (f = k.css(u, "display")),
                  u.parentNode.removeChild(u),
                  "none" === f && (f = "block"),
                  (ne[c] = f)))))
          : "none" !== n && ((i[o] = "none"), X.set(r, "display", n)));
    var s, u, l, c, f;
    for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
    return e;
  }
  k.fn.extend({
    show: function () {
      return re(this, !0);
    },
    hide: function () {
      return re(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ee(this) ? k(this).show() : k(this).hide();
          });
    },
  });
  var ie = /^(?:checkbox|radio)$/i,
    oe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    ae = /^$|\/(?:java|ecma)script/i,
    se = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  function ue(e, t) {
    var n;
    return (
      (n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && k.nodeName(e, t)) ? k.merge([e], n) : n
    );
  }
  function le(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      X.set(e[n], "globalEval", !t || X.get(t[n], "globalEval"));
  }
  (se.optgroup = se.option),
    (se.tbody = se.tfoot = se.colgroup = se.caption = se.thead),
    (se.th = se.td);
  var ce,
    fe,
    pe = /<|&#?\w+;/;
  function de(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === k.type(o)) k.merge(p, o.nodeType ? [o] : o);
        else if (pe.test(o)) {
          for (
            a = a || f.appendChild(t.createElement("div")),
              s = (oe.exec(o) || ["", ""])[1].toLowerCase(),
              u = se[s] || se._default,
              a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2],
              c = u[0];
            c--;

          )
            a = a.lastChild;
          k.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    for (f.textContent = "", d = 0; (o = p[d++]); )
      if (r && -1 < k.inArray(o, r)) i && i.push(o);
      else if (
        ((l = k.contains(o.ownerDocument, o)),
        (a = ue(f.appendChild(o), "script")),
        l && le(a),
        n)
      )
        for (c = 0; (o = a[c++]); ) ae.test(o.type || "") && n.push(o);
    return f;
  }
  (ce = E.createDocumentFragment().appendChild(E.createElement("div"))),
    (fe = E.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    (m.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ce.innerHTML = "<textarea>x</textarea>"),
    (m.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue);
  var he = E.documentElement,
    ge = /^key/,
    me = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    ve = /^([^.]*)(?:\.(.+)|)/;
  function ye() {
    return !0;
  }
  function xe() {
    return !1;
  }
  function be() {
    try {
      return E.activeElement;
    } catch (e) {}
  }
  function we(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        we(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = xe;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return k().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = k.guid++))),
      e.each(function () {
        k.event.add(this, t, i, r, n);
      })
    );
  }
  (k.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        m = X.get(t);
      if (m)
        for (
          n.handler && ((n = (o = n).handler), (i = o.selector)),
            i && k.find.matchesSelector(he, i),
            n.guid || (n.guid = k.guid++),
            (u = m.events) || (u = m.events = {}),
            (a = m.handle) ||
              (a = m.handle =
                function (e) {
                  return void 0 !== k && k.event.triggered !== e.type
                    ? k.event.dispatch.apply(t, arguments)
                    : void 0;
                }),
            l = (e = (e || "").match(O) || [""]).length;
          l--;

        )
          (d = g = (s = ve.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = k.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = k.event.special[d] || {}),
              (c = k.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && k.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (k.event.global[d] = !0));
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        m = X.hasData(e) && X.get(e);
      if (m && (u = m.events)) {
        for (l = (t = (t || "").match(O) || [""]).length; l--; )
          if (
            ((d = g = (s = ve.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            for (
              f = k.event.special[d] || {},
                p = u[(d = (r ? f.delegateType : f.bindType) || d)] || [],
                s =
                  s[2] &&
                  new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                a = o = p.length;
              o--;

            )
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, m.handle)) ||
                k.removeEvent(e, d, m.handle),
              delete u[d]);
          } else for (d in u) k.event.remove(e, d + t[l], n, r, !0);
        k.isEmptyObject(u) && X.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = k.event.fix(e),
        u = new Array(arguments.length),
        l = (X.get(this, "events") || {})[s.type] || [],
        c = k.event.special[s.type] || {};
      for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
      if (
        ((s.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, s))
      ) {
        for (
          a = k.event.handlers.call(this, s, l), t = 0;
          (i = a[t++]) && !s.isPropagationStopped();

        )
          for (
            s.currentTarget = i.elem, n = 0;
            (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();

          )
            (s.rnamespace && !s.rnamespace.test(o.namespace)) ||
              ((s.handleObj = o),
              (s.data = o.data),
              void 0 !==
                (r = (
                  (k.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, u)) &&
                !1 === (s.result = r) &&
                (s.preventDefault(), s.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < k(i, this).index(l)
                  : k.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(k.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: k.isFunction(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[k.expando] ? e : new k.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== be() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === be() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if (
            "checkbox" === this.type &&
            this.click &&
            k.nodeName(this, "input")
          )
            return this.click(), !1;
        },
        _default: function (e) {
          return k.nodeName(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (k.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (k.Event = function (e, t) {
      return this instanceof k.Event
        ? (e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? ye
                  : xe),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
          t && k.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || k.now()),
          void (this[k.expando] = !0))
        : new k.Event(e, t);
    }),
    (k.Event.prototype = {
      constructor: k.Event,
      isDefaultPrevented: xe,
      isPropagationStopped: xe,
      isImmediatePropagationStopped: xe,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = ye),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = ye),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = ye),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    k.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && ge.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && me.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      k.event.addProp
    ),
    k.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        k.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || k.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    k.fn.extend({
      on: function (e, t, n, r) {
        return we(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return we(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            k(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" != typeof e)
          return (
            (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
            !1 === n && (n = xe),
            this.each(function () {
              k.event.remove(this, e, n, t);
            })
          );
        for (i in e) this.off(i, t, e[i]);
        return this;
      },
    });
  var Te =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Ce = /<script|<style|<link/i,
    Ee = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ke = /^true\/(.*)/,
    Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Se(e, t) {
    return (
      (k.nodeName(e, "table") &&
        k.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        e.getElementsByTagName("tbody")[0]) ||
      e
    );
  }
  function De(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function je(e) {
    var t = ke.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
  }
  function Ae(e, t) {
    var n, r, i, o, a, s, u, l;
    if (1 === t.nodeType) {
      if (
        X.hasData(e) &&
        ((o = X.access(e)), (a = X.set(t, o)), (l = o.events))
      )
        for (i in (delete a.handle, (a.events = {}), l))
          for (n = 0, r = l[i].length; n < r; n++) k.event.add(t, i, l[i][n]);
      U.hasData(e) && ((s = U.access(e)), (u = k.extend({}, s)), U.set(t, u));
    }
  }
  function qe(n, r, i, o) {
    r = g.apply([], r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = k.isFunction(d);
    if (h || (1 < f && "string" == typeof d && !m.checkClone && Ee.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), qe(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = de(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = k.map(ue(e, "script"), De)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = k.clone(u, !0, !0)), s && k.merge(a, ue(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, k.map(a, je), c = 0; c < s; c++)
          (u = a[c]),
            ae.test(u.type || "") &&
              !X.access(u, "globalEval") &&
              k.contains(l, u) &&
              (u.src
                ? k._evalUrl && k._evalUrl(u.src)
                : v(u.textContent.replace(Ne, ""), l));
    }
    return n;
  }
  function Le(e, t, n) {
    for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || k.cleanData(ue(r)),
        r.parentNode &&
          (n && k.contains(r.ownerDocument, r) && le(ue(r, "script")),
          r.parentNode.removeChild(r));
    return e;
  }
  k.extend({
    htmlPrefilter: function (e) {
      return e.replace(Te, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = k.contains(e.ownerDocument, e);
      if (
        !(
          m.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          k.isXMLDoc(e)
        )
      )
        for (a = ue(c), r = 0, i = (o = ue(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && ie.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ue(e), a = a || ue(c), r = 0, i = o.length; r < i; r++)
            Ae(o[r], a[r]);
        else Ae(e, c);
      return (
        0 < (a = ue(c, "script")).length && le(a, !f && ue(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (B(n)) {
          if ((t = n[X.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
            n[X.expando] = void 0;
          }
          n[U.expando] && (n[U.expando] = void 0);
        }
    },
  }),
    k.fn.extend({
      detach: function (e) {
        return Le(this, e, !0);
      },
      remove: function (e) {
        return Le(this, e);
      },
      text: function (e) {
        return _(
          this,
          function (e) {
            return void 0 === e
              ? k.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return qe(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Se(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return qe(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Se(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return qe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return qe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (k.cleanData(ue(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return k.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return _(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Ce.test(e) &&
              !se[(oe.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = k.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (k.cleanData(ue(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return qe(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            k.inArray(this, n) < 0 &&
              (k.cleanData(ue(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    k.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        k.fn[e] = function (e) {
          for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              k(r[o])[a](t),
              u.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var He,
    Fe,
    Oe,
    Pe,
    Re,
    Me,
    Ie = /^margin/,
    We = new RegExp("^(" + J + ")(?!px)[a-z%]+$", "i"),
    $e = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = C), t.getComputedStyle(e);
    };
  function Be() {
    if (Me) {
      (Me.style.cssText =
        "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
        (Me.innerHTML = ""),
        he.appendChild(Re);
      var e = C.getComputedStyle(Me);
      (He = "1%" !== e.top),
        (Pe = "2px" === e.marginLeft),
        (Fe = "4px" === e.width),
        (Me.style.marginRight = "50%"),
        (Oe = "4px" === e.marginRight),
        he.removeChild(Re),
        (Me = null);
    }
  }
  function _e(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || $e(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          k.contains(e.ownerDocument, e) ||
          (a = k.style(e, t)),
        !m.pixelMarginRight() &&
          We.test(a) &&
          Ie.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function ze(e, t) {
    return {
      get: function () {
        return e()
          ? void delete this.get
          : (this.get = t).apply(this, arguments);
      },
    };
  }
  (Re = E.createElement("div")),
    (Me = E.createElement("div")).style &&
      ((Me.style.backgroundClip = "content-box"),
      (Me.cloneNode(!0).style.backgroundClip = ""),
      (m.clearCloneStyle = "content-box" === Me.style.backgroundClip),
      (Re.style.cssText =
        "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
      Re.appendChild(Me),
      k.extend(m, {
        pixelPosition: function () {
          return Be(), He;
        },
        boxSizingReliable: function () {
          return Be(), Fe;
        },
        pixelMarginRight: function () {
          return Be(), Oe;
        },
        reliableMarginLeft: function () {
          return Be(), Pe;
        },
      }));
  var Xe = /^(none|table(?!-c[ea]).+)/,
    Ue = { position: "absolute", visibility: "hidden", display: "block" },
    Ve = { letterSpacing: "0", fontWeight: "400" },
    Ge = ["Webkit", "Moz", "ms"],
    Ye = E.createElement("div").style;
  function Qe(e) {
    if (e in Ye) return e;
    for (var t = e[0].toUpperCase() + e.slice(1), n = Ge.length; n--; )
      if ((e = Ge[n] + t) in Ye) return e;
  }
  function Je(e, t, n) {
    var r = K.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Ke(e, t, n, r, i) {
    var o,
      a = 0;
    for (
      o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0;
      o < 4;
      o += 2
    )
      "margin" === n && (a += k.css(e, n + Z[o], !0, i)),
        r
          ? ("content" === n && (a -= k.css(e, "padding" + Z[o], !0, i)),
            "margin" !== n && (a -= k.css(e, "border" + Z[o] + "Width", !0, i)))
          : ((a += k.css(e, "padding" + Z[o], !0, i)),
            "padding" !== n &&
              (a += k.css(e, "border" + Z[o] + "Width", !0, i)));
    return a;
  }
  function Ze(e, t, n) {
    var r,
      i = !0,
      o = $e(e),
      a = "border-box" === k.css(e, "boxSizing", !1, o);
    if (
      (e.getClientRects().length && (r = e.getBoundingClientRect()[t]),
      r <= 0 || null == r)
    ) {
      if (
        (((r = _e(e, t, o)) < 0 || null == r) && (r = e.style[t]), We.test(r))
      )
        return r;
      (i = a && (m.boxSizingReliable() || r === e.style[t])),
        (r = parseFloat(r) || 0);
    }
    return r + Ke(e, t, n || (a ? "border" : "content"), i, o) + "px";
  }
  function et(e, t, n, r, i) {
    return new et.prototype.init(e, t, n, r, i);
  }
  k.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = _e(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = k.camelCase(t),
          u = e.style;
        return (
          (t = k.cssProps[s] || (k.cssProps[s] = Qe(s) || s)),
          (a = k.cssHooks[t] || k.cssHooks[s]),
          void 0 === n
            ? a && "get" in a && void 0 !== (i = a.get(e, !1, r))
              ? i
              : u[t]
            : ("string" === (o = typeof n) &&
                (i = K.exec(n)) &&
                i[1] &&
                ((n = te(e, t, i)), (o = "number")),
              void (
                null != n &&
                n == n &&
                ("number" === o &&
                  (n += (i && i[3]) || (k.cssNumber[s] ? "" : "px")),
                m.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (u[t] = "inherit"),
                (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                  (u[t] = n))
              ))
        );
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = k.camelCase(t);
      return (
        (t = k.cssProps[s] || (k.cssProps[s] = Qe(s) || s)),
        (a = k.cssHooks[t] || k.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = _e(e, t, r)),
        "normal" === i && t in Ve && (i = Ve[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    k.each(["height", "width"], function (e, a) {
      k.cssHooks[a] = {
        get: function (e, t, n) {
          if (t)
            return !Xe.test(k.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Ze(e, a, n)
              : Q(e, Ue, function () {
                  return Ze(e, a, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = n && $e(e),
            o =
              n &&
              Ke(e, a, n, "border-box" === k.css(e, "boxSizing", !1, i), i);
          return (
            o &&
              (r = K.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[a] = t), (t = k.css(e, a))),
            Je(0, t, o)
          );
        },
      };
    }),
    (k.cssHooks.marginLeft = ze(m.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(_e(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Q(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    k.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (k.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + Z[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        Ie.test(i) || (k.cssHooks[i + o].set = Je);
    }),
    k.fn.extend({
      css: function (e, t) {
        return _(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (k.isArray(t)) {
              for (r = $e(e), i = t.length; a < i; a++)
                o[t[a]] = k.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((k.Tween = et).prototype = {
      constructor: et,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || k.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (k.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = et.propHooks[this.prop];
        return e && e.get ? e.get(this) : et.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = et.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                k.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : et.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = et.prototype),
    ((et.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = k.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          k.fx.step[e.prop]
            ? k.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (null == e.elem.style[k.cssProps[e.prop]] && !k.cssHooks[e.prop])
            ? (e.elem[e.prop] = e.now)
            : k.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = et.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (k.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (k.fx = et.prototype.init),
    (k.fx.step = {});
  var tt,
    nt,
    rt,
    it,
    ot = /^(?:toggle|show|hide)$/,
    at = /queueHooks$/;
  function st() {
    nt && (C.requestAnimationFrame(st), k.fx.tick());
  }
  function ut() {
    return (
      C.setTimeout(function () {
        tt = void 0;
      }),
      (tt = k.now())
    );
  }
  function lt(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = Z[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function ct(e, t, n) {
    for (
      var r,
        i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function ft(o, e, t) {
    var n,
      a,
      r = 0,
      i = ft.prefilters.length,
      s = k.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = tt || ut(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i ? t : (s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: k.extend({}, e),
        opts: k.extend(!0, { specialEasing: {}, easing: k.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: tt || ut(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = k.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      (function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = k.camelCase(n))]),
            (o = e[n]),
            k.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = k.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = ft.prefilters[r].call(l, o, c, l.opts)))
        return (
          k.isFunction(n.stop) &&
            (k._queueHooks(l.elem, l.opts.queue).stop = k.proxy(n.stop, n)),
          n
        );
    return (
      k.map(c, ct, l),
      k.isFunction(l.opts.start) && l.opts.start.call(o, l),
      k.fx.timer(k.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always)
    );
  }
  (k.Animation = k.extend(ft, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return te(n.elem, e, K.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      for (
        var n,
          r = 0,
          i = (e = k.isFunction(e) ? ((t = e), ["*"]) : e.match(O)).length;
        r < i;
        r++
      )
        (n = e[r]),
          (ft.tweeners[n] = ft.tweeners[n] || []),
          ft.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ee(e),
          m = X.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = k._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, k.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), ot.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !m || void 0 === m[r]) continue;
              g = !0;
            }
            d[r] = (m && m[r]) || k.style(e, r);
          }
        if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = m && m.display) && (l = X.get(e, "display")),
            "none" === (c = k.css(e, "display")) &&
              (l
                ? (c = l)
                : (re([e], !0),
                  (l = e.style.display || l),
                  (c = k.css(e, "display")),
                  re([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === k.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (m
                ? "hidden" in m && (g = m.hidden)
                : (m = X.access(e, "fxshow", { display: l })),
              o && (m.hidden = !g),
              g && re([e], !0),
              p.done(function () {
                for (r in (g || re([e]), X.remove(e, "fxshow"), d))
                  k.style(e, r, d[r]);
              })),
              (u = ct(g ? m[r] : 0, r, p)),
              r in m ||
                ((m[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
    },
  })),
    (k.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? k.extend({}, e)
          : {
              complete: n || (!n && t) || (k.isFunction(e) && e),
              duration: e,
              easing: (n && t) || (t && !k.isFunction(t) && t),
            };
      return (
        k.fx.off || E.hidden
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in k.fx.speeds
              ? (r.duration = k.fx.speeds[r.duration])
              : (r.duration = k.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          k.isFunction(r.old) && r.old.call(this),
            r.queue && k.dequeue(this, r.queue);
        }),
        r
      );
    }),
    k.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ee)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        function i() {
          var e = ft(this, k.extend({}, t), a);
          (o || X.get(this, "finish")) && e.stop(!0);
        }
        var o = k.isEmptyObject(t),
          a = k.speed(e, n, r);
        return (
          (i.finish = i),
          o || !1 === a.queue ? this.each(i) : this.queue(a.queue, i)
        );
      },
      stop: function (i, e, o) {
        function a(e) {
          var t = e.stop;
          delete e.stop, t(o);
        }
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && !1 !== i && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = k.timers,
              r = X.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || k.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = X.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = k.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                k.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    k.each(["toggle", "show", "hide"], function (e, r) {
      var i = k.fn[r];
      k.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(lt(r, !0), e, t, n);
      };
    }),
    k.each(
      {
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        k.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (k.timers = []),
    (k.fx.tick = function () {
      var e,
        t = 0,
        n = k.timers;
      for (tt = k.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || k.fx.stop(), (tt = void 0);
    }),
    (k.fx.timer = function (e) {
      k.timers.push(e), e() ? k.fx.start() : k.timers.pop();
    }),
    (k.fx.interval = 13),
    (k.fx.start = function () {
      nt =
        nt ||
        (C.requestAnimationFrame
          ? C.requestAnimationFrame(st)
          : C.setInterval(k.fx.tick, k.fx.interval));
    }),
    (k.fx.stop = function () {
      C.cancelAnimationFrame ? C.cancelAnimationFrame(nt) : C.clearInterval(nt),
        (nt = null);
    }),
    (k.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (k.fn.delay = function (r, e) {
      return (
        (r = (k.fx && k.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function () {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (rt = E.createElement("input")),
    (it = E.createElement("select").appendChild(E.createElement("option"))),
    (rt.type = "checkbox"),
    (m.checkOn = "" !== rt.value),
    (m.optSelected = it.selected),
    ((rt = E.createElement("input")).value = "t"),
    (rt.type = "radio"),
    (m.radioValue = "t" === rt.value);
  var pt,
    dt = k.expr.attrHandle;
  k.fn.extend({
    attr: function (e, t) {
      return _(this, k.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        k.removeAttr(this, e);
      });
    },
  }),
    k.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === e.getAttribute
            ? k.prop(e, t, n)
            : ((1 === o && k.isXMLDoc(e)) ||
                (i =
                  k.attrHooks[t.toLowerCase()] ||
                  (k.expr.match.bool.test(t) ? pt : void 0)),
              void 0 !== n
                ? null === n
                  ? void k.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = k.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!m.radioValue && "radio" === t && k.nodeName(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(O);
        if (i && 1 === e.nodeType) for (; (n = i[r++]); ) e.removeAttribute(n);
      },
    }),
    (pt = {
      set: function (e, t, n) {
        return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = dt[t] || k.find.attr;
      dt[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = dt[o]),
            (dt[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (dt[o] = i)),
          r
        );
      };
    });
  var ht = /^(?:input|select|textarea|button)$/i,
    gt = /^(?:a|area)$/i;
  function mt(e) {
    return (e.match(O) || []).join(" ");
  }
  function vt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  k.fn.extend({
    prop: function (e, t) {
      return _(this, k.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[k.propFix[e] || e];
      });
    },
  }),
    k.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && k.isXMLDoc(e)) ||
              ((t = k.propFix[t] || t), (i = k.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = k.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : ht.test(e.nodeName) || (gt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    m.optSelected ||
      (k.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    k.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        k.propFix[this.toLowerCase()] = this;
      }
    ),
    k.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (k.isFunction(t))
          return this.each(function (e) {
            k(this).addClass(t.call(this, e, vt(this)));
          });
        if ("string" == typeof t && t)
          for (e = t.match(O) || []; (n = this[u++]); )
            if (((i = vt(n)), (r = 1 === n.nodeType && " " + mt(i) + " "))) {
              for (a = 0; (o = e[a++]); )
                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (s = mt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (k.isFunction(t))
          return this.each(function (e) {
            k(this).removeClass(t.call(this, e, vt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof t && t)
          for (e = t.match(O) || []; (n = this[u++]); )
            if (((i = vt(n)), (r = 1 === n.nodeType && " " + mt(i) + " "))) {
              for (a = 0; (o = e[a++]); )
                for (; -1 < r.indexOf(" " + o + " "); )
                  r = r.replace(" " + o + " ", " ");
              i !== (s = mt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (i, t) {
        var o = typeof i;
        return "boolean" == typeof t && "string" == o
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : k.isFunction(i)
          ? this.each(function (e) {
              k(this).toggleClass(i.call(this, e, vt(this), t), t);
            })
          : this.each(function () {
              var e, t, n, r;
              if ("string" == o)
                for (t = 0, n = k(this), r = i.match(O) || []; (e = r[t++]); )
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              else
                (void 0 !== i && "boolean" != o) ||
                  ((e = vt(this)) && X.set(this, "__className__", e),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      e || !1 === i ? "" : X.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        for (t = " " + e + " "; (n = this[r++]); )
          if (1 === n.nodeType && -1 < (" " + mt(vt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var yt = /\r/g;
  k.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = k.isFunction(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, k(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : k.isArray(t) &&
                  (t = k.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                k.valHooks[this.type] ||
                k.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(yt, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    k.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = k.find.attr(e, "value");
            return null != t ? t : mt(k.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled ||
                  !k.nodeName(n.parentNode, "optgroup"))
              ) {
                if (((t = k(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            for (
              var n, r, i = e.options, o = k.makeArray(t), a = i.length;
              a--;

            )
              ((r = i[a]).selected =
                -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    k.each(["radio", "checkbox"], function () {
      (k.valHooks[this] = {
        set: function (e, t) {
          if (k.isArray(t)) return (e.checked = -1 < k.inArray(k(e).val(), t));
        },
      }),
        m.checkOn ||
          (k.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    });
  var xt = /^(?:focusinfocus|focusoutblur)$/;
  k.extend(k.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = [n || E],
        p = h.call(e, "type") ? e.type : e,
        d = h.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = a = n = n || E),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !xt.test(p + k.event.triggered) &&
          (-1 < p.indexOf(".") && ((p = (d = p.split(".")).shift()), d.sort()),
          (u = p.indexOf(":") < 0 && "on" + p),
          ((e = e[k.expando]
            ? e
            : new k.Event(p, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = d.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : k.makeArray(t, [e])),
          (c = k.event.special[p] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !k.isWindow(n)) {
          for (
            s = c.delegateType || p, xt.test(s + p) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            f.push(o), (a = o);
          a === (n.ownerDocument || E) &&
            f.push(a.defaultView || a.parentWindow || C);
        }
        for (i = 0; (o = f[i++]) && !e.isPropagationStopped(); )
          (e.type = 1 < i ? s : c.bindType || p),
            (l = (X.get(o, "events") || {})[e.type] && X.get(o, "handle")) &&
              l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              B(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = p),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(f.pop(), t)) ||
            !B(n) ||
            (u &&
              k.isFunction(n[p]) &&
              !k.isWindow(n) &&
              ((a = n[u]) && (n[u] = null),
              n[(k.event.triggered = p)](),
              (k.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = k.extend(new k.Event(), n, { type: e, isSimulated: !0 });
      k.event.trigger(r, null, t);
    },
  }),
    k.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          k.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return k.event.trigger(e, t, n, !0);
      },
    }),
    k.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        k.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    ),
    k.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    (m.focusin = "onfocusin" in C),
    m.focusin ||
      k.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        function i(e) {
          k.event.simulate(r, e.target, k.event.fix(e));
        }
        k.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this,
              t = X.access(e, r);
            t || e.addEventListener(n, i, !0), X.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this,
              t = X.access(e, r) - 1;
            t
              ? X.access(e, r, t)
              : (e.removeEventListener(n, i, !0), X.remove(e, r));
          },
        };
      });
  var bt = C.location,
    wt = k.now(),
    Tt = /\?/;
  k.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }
    return (
      (t && !t.getElementsByTagName("parsererror").length) ||
        k.error("Invalid XML: " + e),
      t
    );
  };
  var Ct = /\[\]$/,
    Et = /\r?\n/g,
    kt = /^(?:submit|button|image|reset|file)$/i,
    Nt = /^(?:input|select|textarea|keygen)/i;
  function St(n, e, r, i) {
    var t;
    if (k.isArray(e))
      k.each(e, function (e, t) {
        r || Ct.test(n)
          ? i(n, t)
          : St(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i
            );
      });
    else if (r || "object" !== k.type(e)) i(n, e);
    else for (t in e) St(n + "[" + t + "]", e[t], r, i);
  }
  (k.param = function (e, t) {
    function n(e, t) {
      var n = k.isFunction(t) ? t() : t;
      i[i.length] =
        encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    }
    var r,
      i = [];
    if (k.isArray(e) || (e.jquery && !k.isPlainObject(e)))
      k.each(e, function () {
        n(this.name, this.value);
      });
    else for (r in e) St(r, e[r], t, n);
    return i.join("&");
  }),
    k.fn.extend({
      serialize: function () {
        return k.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = k.prop(this, "elements");
          return e ? k.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !k(this).is(":disabled") &&
              Nt.test(this.nodeName) &&
              !kt.test(e) &&
              (this.checked || !ie.test(e))
            );
          })
          .map(function (e, t) {
            var n = k(this).val();
            return null == n
              ? null
              : k.isArray(n)
              ? k.map(n, function (e) {
                  return { name: t.name, value: e.replace(Et, "\r\n") };
                })
              : { name: t.name, value: n.replace(Et, "\r\n") };
          })
          .get();
      },
    });
  var Dt = /%20/g,
    jt = /#.*$/,
    At = /([?&])_=[^&]*/,
    qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Lt = /^(?:GET|HEAD)$/,
    Ht = /^\/\//,
    Ft = {},
    Ot = {},
    Pt = "*/".concat("*"),
    Rt = E.createElement("a");
  function Mt(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(O) || [];
      if (k.isFunction(t))
        for (; (n = i[r++]); )
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function It(t, i, o, a) {
    var s = {},
      u = t === Ot;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        k.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function Wt(e, t) {
    var n,
      r,
      i = k.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : (r = r || {}))[n] = t[n]);
    return r && k.extend(!0, e, r), e;
  }
  (Rt.href = bt.href),
    k.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: bt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            bt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Pt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": k.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Wt(Wt(e, k.ajaxSettings), t) : Wt(k.ajaxSettings, e);
      },
      ajaxPrefilter: Mt(Ft),
      ajaxTransport: Mt(Ot),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          m = k.ajaxSetup({}, t),
          v = m.context || m,
          y = m.context && (v.nodeType || v.jquery) ? k(v) : k.event,
          x = k.Deferred(),
          b = k.Callbacks("once memory"),
          w = m.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n)
                  for (n = {}; (t = qt.exec(p)); ) n[t[1].toLowerCase()] = t[2];
                t = n[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (m.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (m.url = ((e || m.url || bt.href) + "").replace(
            Ht,
            bt.protocol + "//"
          )),
          (m.type = t.method || t.type || m.method || m.type),
          (m.dataTypes = (m.dataType || "*").toLowerCase().match(O) || [""]),
          null == m.crossDomain)
        ) {
          r = E.createElement("a");
          try {
            (r.href = m.url),
              (r.href = r.href),
              (m.crossDomain =
                Rt.protocol + "//" + Rt.host != r.protocol + "//" + r.host);
          } catch (e) {
            m.crossDomain = !0;
          }
        }
        if (
          (m.data &&
            m.processData &&
            "string" != typeof m.data &&
            (m.data = k.param(m.data, m.traditional)),
          It(Ft, m, t, T),
          h)
        )
          return T;
        for (i in ((g = k.event && m.global) &&
          0 == k.active++ &&
          k.event.trigger("ajaxStart"),
        (m.type = m.type.toUpperCase()),
        (m.hasContent = !Lt.test(m.type)),
        (f = m.url.replace(jt, "")),
        m.hasContent
          ? m.data &&
            m.processData &&
            0 ===
              (m.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (m.data = m.data.replace(Dt, "+"))
          : ((o = m.url.slice(f.length)),
            m.data && ((f += (Tt.test(f) ? "&" : "?") + m.data), delete m.data),
            !1 === m.cache &&
              ((f = f.replace(At, "$1")),
              (o = (Tt.test(f) ? "&" : "?") + "_=" + wt++ + o)),
            (m.url = f + o)),
        m.ifModified &&
          (k.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", k.lastModified[f]),
          k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])),
        ((m.data && m.hasContent && !1 !== m.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", m.contentType),
        T.setRequestHeader(
          "Accept",
          m.dataTypes[0] && m.accepts[m.dataTypes[0]]
            ? m.accepts[m.dataTypes[0]] +
                ("*" !== m.dataTypes[0] ? ", " + Pt + "; q=0.01" : "")
            : m.accepts["*"]
        ),
        m.headers))
          T.setRequestHeader(i, m.headers[i]);
        if (m.beforeSend && (!1 === m.beforeSend.call(v, T, m) || h))
          return T.abort();
        if (
          ((u = "abort"),
          b.add(m.complete),
          T.done(m.success),
          T.fail(m.error),
          (c = It(Ot, m, t, T)))
        ) {
          if (((T.readyState = 1), g && y.trigger("ajaxSend", [T, m]), h))
            return T;
          m.async &&
            0 < m.timeout &&
            (d = C.setTimeout(function () {
              T.abort("timeout");
            }, m.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && C.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                for (
                  var r, i, o, a, s = e.contents, u = e.dataTypes;
                  "*" === u[0];

                )
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    a = a || i;
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(m, T, n)),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              for (o = c.shift(); o; )
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = l[u + " " + s[0]] || l["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e.throws) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(m, s, T, i)),
            i
              ? (m.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (k.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (k.etag[f] = u)),
                204 === e || "HEAD" === m.type
                  ? (l = "nocontent")
                  : 304 === e
                  ? (l = "notmodified")
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(v, [o, l, T]) : x.rejectWith(v, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && y.trigger(i ? "ajaxSuccess" : "ajaxError", [T, m, i ? o : a]),
            b.fireWith(v, [T, l]),
            g &&
              (y.trigger("ajaxComplete", [T, m]),
              --k.active || k.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return k.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return k.get(e, void 0, t, "script");
      },
    }),
    k.each(["get", "post"], function (e, i) {
      k[i] = function (e, t, n, r) {
        return (
          k.isFunction(t) && ((r = r || n), (n = t), (t = void 0)),
          k.ajax(
            k.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              k.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (k._evalUrl = function (e) {
      return k.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    k.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (k.isFunction(e) && (e = e.call(this[0])),
            (t = k(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return k.isFunction(n)
          ? this.each(function (e) {
              k(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = k(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = k.isFunction(t);
        return this.each(function (e) {
          k(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              k(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (k.expr.pseudos.hidden = function (e) {
      return !k.expr.pseudos.visible(e);
    }),
    (k.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (k.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest();
      } catch (e) {}
    });
  var $t = { 0: 200, 1223: 204 },
    Bt = k.ajaxSettings.xhr();
  (m.cors = !!Bt && "withCredentials" in Bt),
    (m.ajax = Bt = !!Bt),
    k.ajaxTransport(function (i) {
      var o, a;
      if (m.cors || (Bt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.onreadystatechange =
                      null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                    ? "number" != typeof r.status
                      ? t(0, "error")
                      : t(r.status, r.statusText)
                    : t(
                        $t[r.status] || r.status,
                        r.statusText,
                        "text" !== (r.responseType || "text") ||
                          "string" != typeof r.responseText
                          ? { binary: r.response }
                          : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      C.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o("abort"));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    k.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    k.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return k.globalEval(e), e;
        },
      },
    }),
    k.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    k.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain)
        return {
          send: function (e, t) {
            (r = k("<script>")
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              E.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var _t,
    zt = [],
    Xt = /(=)\?(?=&|$)|\?\?/;
  function Ut(e) {
    return k.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
  }
  k.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = zt.pop() || k.expando + "_" + wt++;
      return (this[e] = !0), e;
    },
  }),
    k.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Xt.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Xt.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            k.isFunction(e.jsonpCallback)
              ? e.jsonpCallback()
              : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Xt, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || k.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = C[r]),
          (C[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? k(C).removeProp(r) : (C[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), zt.push(r)),
              o && k.isFunction(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (m.createHTMLDocument =
      (((_t = E.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === _t.childNodes.length)),
    (k.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (m.createHTMLDocument
              ? (((r = (t =
                  E.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = E.location.href),
                t.head.appendChild(r))
              : (t = E)),
          (o = !n && []),
          (i = S.exec(e))
            ? [t.createElement(i[1])]
            : ((i = de([e], t, o)),
              o && o.length && k(o).remove(),
              k.merge([], i.childNodes)));
      var r, i, o;
    }),
    (k.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = mt(e.slice(s))), (e = e.slice(0, s))),
        k.isFunction(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          k
            .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    k.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        k.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (k.expr.pseudos.animated = function (t) {
      return k.grep(k.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (k.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = k.css(e, "position"),
          c = k(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = k.css(e, "top")),
          (u = k.css(e, "left")),
          (i =
            ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
              ? ((a = (r = c.position()).top), r.left)
              : ((a = parseFloat(o) || 0), parseFloat(u) || 0)),
          k.isFunction(t) && (t = t.call(e, n, k.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    k.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                k.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r,
          i,
          o = this[0];
        return o
          ? o.getClientRects().length
            ? (r = o.getBoundingClientRect()).width || r.height
              ? ((n = Ut((i = o.ownerDocument))),
                (e = i.documentElement),
                {
                  top: r.top + n.pageYOffset - e.clientTop,
                  left: r.left + n.pageXOffset - e.clientLeft,
                })
              : r
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n = this[0],
            r = { top: 0, left: 0 };
          return (
            "fixed" === k.css(n, "position")
              ? (t = n.getBoundingClientRect())
              : ((e = this.offsetParent()),
                (t = this.offset()),
                k.nodeName(e[0], "html") || (r = e.offset()),
                (r = {
                  top: r.top + k.css(e[0], "borderTopWidth", !0),
                  left: r.left + k.css(e[0], "borderLeftWidth", !0),
                })),
            {
              top: t.top - r.top - k.css(n, "marginTop", !0),
              left: t.left - r.left - k.css(n, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && "static" === k.css(e, "position");

          )
            e = e.offsetParent;
          return e || he;
        });
      },
    }),
    k.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        k.fn[t] = function (e) {
          return _(
            this,
            function (e, t, n) {
              var r = Ut(e);
              return void 0 === n
                ? r
                  ? r[i]
                  : e[t]
                : void (r
                    ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                    : (e[t] = n));
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    k.each(["top", "left"], function (e, n) {
      k.cssHooks[n] = ze(m.pixelPosition, function (e, t) {
        if (t)
          return (t = _e(e, n)), We.test(t) ? k(e).position()[n] + "px" : t;
      });
    }),
    k.each({ Height: "height", Width: "width" }, function (a, s) {
      k.each(
        { padding: "inner" + a, content: s, "": "outer" + a },
        function (r, o) {
          k.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return _(
              this,
              function (e, t, n) {
                var r;
                return k.isWindow(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + a]
                    : e.document.documentElement["client" + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + a],
                      r["scroll" + a],
                      e.body["offset" + a],
                      r["offset" + a],
                      r["client" + a]
                    ))
                  : void 0 === n
                  ? k.css(e, t, i)
                  : k.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    k.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    }),
    (k.parseJSON = JSON.parse),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return k;
      });
  var Vt = C.jQuery,
    Gt = C.$;
  return (
    (k.noConflict = function (e) {
      return C.$ === k && (C.$ = Gt), e && C.jQuery === k && (C.jQuery = Vt), k;
    }),
    e || (C.jQuery = C.$ = k),
    k
  );
});
!(function (e) {
  var t = (function (c, D, u) {
    "use strict";
    var k, H;
    if (
      ((function () {
        var e,
          t = {
            lazyClass: "lazyload",
            loadedClass: "lazyloaded",
            loadingClass: "lazyloading",
            preloadClass: "lazypreload",
            errorClass: "lazyerror",
            autosizesClass: "lazyautosizes",
            srcAttr: "data-src",
            srcsetAttr: "data-srcset",
            sizesAttr: "data-sizes",
            minSize: 40,
            customMedia: {},
            init: !0,
            expFactor: 1.5,
            hFac: 0.8,
            loadMode: 2,
            loadHidden: !0,
            ricTimeout: 0,
            throttleDelay: 125,
          };
        H = c.lazySizesConfig || c.lazysizesConfig || {};
        for (e in t) e in H || (H[e] = t[e]);
      })(),
      !D || !D.getElementsByClassName)
    )
      return { init: function () {}, cfg: H, noSupport: !0 };
    var O = D.documentElement,
      a = c.HTMLPictureElement,
      P = "addEventListener",
      $ = "getAttribute",
      q = c[P].bind(c),
      I = c.setTimeout,
      U = c.requestAnimationFrame || I,
      s = c.requestIdleCallback,
      j = /^picture$/i,
      i = ["load", "error", "lazyincluded", "_lazyloaded"],
      n = {},
      G = Array.prototype.forEach,
      J = function (e, t) {
        return (
          n[t] || (n[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")),
          n[t].test(e[$]("class") || "") && n[t]
        );
      },
      K = function (e, t) {
        J(e, t) ||
          e.setAttribute("class", (e[$]("class") || "").trim() + " " + t);
      },
      Q = function (e, t) {
        var n;
        (n = J(e, t)) &&
          e.setAttribute("class", (e[$]("class") || "").replace(n, " "));
      },
      V = function (t, n, e) {
        var a = e ? P : "removeEventListener";
        e && V(t, n),
          i.forEach(function (e) {
            t[a](e, n);
          });
      },
      X = function (e, t, n, a, i) {
        var r = D.createEvent("Event");
        return (
          n || (n = {}),
          (n.instance = k),
          r.initEvent(t, !a, !i),
          (r.detail = n),
          e.dispatchEvent(r),
          r
        );
      },
      Y = function (e, t) {
        var n;
        !a && (n = c.picturefill || H.pf)
          ? (t && t.src && !e[$]("srcset") && e.setAttribute("srcset", t.src),
            n({ reevaluate: !0, elements: [e] }))
          : t && t.src && (e.src = t.src);
      },
      Z = function (e, t) {
        return (getComputedStyle(e, null) || {})[t];
      },
      o = function (e, t, n) {
        for (n = n || e.offsetWidth; n < H.minSize && t && !e._lazysizesWidth; )
          (n = t.offsetWidth), (t = t.parentNode);
        return n;
      },
      ee = (function () {
        var n,
          a,
          t = [],
          i = [],
          r = t,
          o = function () {
            var e = r;
            for (r = t.length ? i : t, n = !0, a = !1; e.length; ) e.shift()();
            n = !1;
          },
          e = function (e, t) {
            n && !t
              ? e.apply(this, arguments)
              : (r.push(e), a || ((a = !0), (D.hidden ? I : U)(o)));
          };
        return (e._lsFlush = o), e;
      })(),
      te = function (n, e) {
        return e
          ? function () {
              ee(n);
            }
          : function () {
              var e = this,
                t = arguments;
              ee(function () {
                n.apply(e, t);
              });
            };
      },
      ne = function (e) {
        var n,
          a = 0,
          i = H.throttleDelay,
          r = H.ricTimeout,
          t = function () {
            (n = !1), (a = u.now()), e();
          },
          o =
            s && r > 49
              ? function () {
                  s(t, { timeout: r }),
                    r !== H.ricTimeout && (r = H.ricTimeout);
                }
              : te(function () {
                  I(t);
                }, !0);
        return function (e) {
          var t;
          (e = !0 === e) && (r = 33),
            n ||
              ((n = !0),
              (t = i - (u.now() - a)),
              t < 0 && (t = 0),
              e || t < 9 ? o() : I(o, t));
        };
      },
      ae = function (e) {
        var t,
          n,
          a = 99,
          i = function () {
            (t = null), e();
          },
          r = function () {
            var e = u.now() - n;
            e < a ? I(r, a - e) : (s || i)(i);
          };
        return function () {
          (n = u.now()), t || (t = I(r, a));
        };
      },
      e = (function () {
        var m,
          y,
          d,
          h,
          e,
          z,
          v,
          g,
          p,
          C,
          b,
          A,
          r = /^img$/i,
          f = /^iframe$/i,
          E = "onscroll" in c && !/(gle|ing)bot/.test(navigator.userAgent),
          _ = 0,
          w = 0,
          N = 0,
          M = -1,
          x = function (e) {
            N--, (!e || N < 0 || !e.target) && (N = 0);
          },
          W = function (e) {
            return (
              null == A && (A = "hidden" == Z(D.body, "visibility")),
              A ||
                !(
                  "hidden" == Z(e.parentNode, "visibility") &&
                  "hidden" == Z(e, "visibility")
                )
            );
          },
          S = function (e, t) {
            var n,
              a = e,
              i = W(e);
            for (
              g -= t, b += t, p -= t, C += t;
              i && (a = a.offsetParent) && a != D.body && a != O;

            )
              (i = (Z(a, "opacity") || 1) > 0) &&
                "visible" != Z(a, "overflow") &&
                ((n = a.getBoundingClientRect()),
                (i =
                  C > n.left &&
                  p < n.right &&
                  b > n.top - 1 &&
                  g < n.bottom + 1));
            return i;
          },
          t = function () {
            var e,
              t,
              n,
              a,
              i,
              r,
              o,
              s,
              l,
              c,
              u,
              d,
              f = k.elements;
            if ((h = H.loadMode) && N < 8 && (e = f.length)) {
              for (t = 0, M++; t < e; t++)
                if (f[t] && !f[t]._lazyRace)
                  if (!E || (k.prematureUnveil && k.prematureUnveil(f[t])))
                    R(f[t]);
                  else if (
                    (((s = f[t][$]("data-expand")) && (r = 1 * s)) || (r = w),
                    c ||
                      ((c =
                        !H.expand || H.expand < 1
                          ? O.clientHeight > 500 && O.clientWidth > 500
                            ? 500
                            : 370
                          : H.expand),
                      (k._defEx = c),
                      (u = c * H.expFactor),
                      (d = H.hFac),
                      (A = null),
                      w < u && N < 1 && M > 2 && h > 2 && !D.hidden
                        ? ((w = u), (M = 0))
                        : (w = h > 1 && M > 1 && N < 6 ? c : _)),
                    l !== r &&
                      ((z = innerWidth + r * d),
                      (v = innerHeight + r),
                      (o = -1 * r),
                      (l = r)),
                    (n = f[t].getBoundingClientRect()),
                    (b = n.bottom) >= o &&
                      (g = n.top) <= v &&
                      (C = n.right) >= o * d &&
                      (p = n.left) <= z &&
                      (b || C || p || g) &&
                      (H.loadHidden || W(f[t])) &&
                      ((y && N < 3 && !s && (h < 3 || M < 4)) || S(f[t], r)))
                  ) {
                    if ((R(f[t]), (i = !0), N > 9)) break;
                  } else
                    !i &&
                      y &&
                      !a &&
                      N < 4 &&
                      M < 4 &&
                      h > 2 &&
                      (m[0] || H.preloadAfterLoad) &&
                      (m[0] ||
                        (!s &&
                          (b ||
                            C ||
                            p ||
                            g ||
                            "auto" != f[t][$](H.sizesAttr)))) &&
                      (a = m[0] || f[t]);
              a && !i && R(a);
            }
          },
          n = ne(t),
          B = function (e) {
            var t = e.target;
            if (t._lazyCache) return void delete t._lazyCache;
            x(e),
              K(t, H.loadedClass),
              Q(t, H.loadingClass),
              V(t, L),
              X(t, "lazyloaded");
          },
          a = te(B),
          L = function (e) {
            a({ target: e.target });
          },
          T = function (t, n) {
            try {
              t.contentWindow.location.replace(n);
            } catch (e) {
              t.src = n;
            }
          },
          F = function (e) {
            var t,
              n = e[$](H.srcsetAttr);
            (t = H.customMedia[e[$]("data-media") || e[$]("media")]) &&
              e.setAttribute("media", t),
              n && e.setAttribute("srcset", n);
          },
          o = te(function (t, e, n, a, i) {
            var r, o, s, l, c, u;
            (c = X(t, "lazybeforeunveil", e)).defaultPrevented ||
              (a && (n ? K(t, H.autosizesClass) : t.setAttribute("sizes", a)),
              (o = t[$](H.srcsetAttr)),
              (r = t[$](H.srcAttr)),
              i && ((s = t.parentNode), (l = s && j.test(s.nodeName || ""))),
              (u = e.firesLoad || ("src" in t && (o || r || l))),
              (c = { target: t }),
              K(t, H.loadingClass),
              u && (clearTimeout(d), (d = I(x, 2500)), V(t, L, !0)),
              l && G.call(s.getElementsByTagName("source"), F),
              o
                ? t.setAttribute("srcset", o)
                : r && !l && (f.test(t.nodeName) ? T(t, r) : (t.src = r)),
              i && (o || l) && Y(t, { src: r })),
              t._lazyRace && delete t._lazyRace,
              Q(t, H.lazyClass),
              ee(function () {
                var e = t.complete && t.naturalWidth > 1;
                (u && !e) ||
                  (e && K(t, "ls-is-cached"),
                  B(c),
                  (t._lazyCache = !0),
                  I(function () {
                    "_lazyCache" in t && delete t._lazyCache;
                  }, 9)),
                  "lazy" == t.loading && N--;
              }, !0);
          }),
          R = function (e) {
            if (!e._lazyRace) {
              var t,
                n = r.test(e.nodeName),
                a = n && (e[$](H.sizesAttr) || e[$]("sizes")),
                i = "auto" == a;
              ((!i && y) ||
                !n ||
                (!e[$]("src") && !e.srcset) ||
                e.complete ||
                J(e, H.errorClass) ||
                !J(e, H.lazyClass)) &&
                ((t = X(e, "lazyunveilread").detail),
                i && ie.updateElem(e, !0, e.offsetWidth),
                (e._lazyRace = !0),
                N++,
                o(e, t, i, a, n));
            }
          },
          i = ae(function () {
            (H.loadMode = 3), n();
          }),
          s = function () {
            3 == H.loadMode && (H.loadMode = 2), i();
          },
          l = function () {
            if (!y) {
              if (u.now() - e < 999) return void I(l, 999);
              (y = !0), (H.loadMode = 3), n(), q("scroll", s, !0);
            }
          };
        return {
          _: function () {
            (e = u.now()),
              (k.elements = D.getElementsByClassName(H.lazyClass)),
              (m = D.getElementsByClassName(
                H.lazyClass + " " + H.preloadClass
              )),
              q("scroll", n, !0),
              q("resize", n, !0),
              q("pageshow", function (e) {
                if (e.persisted) {
                  var t = D.querySelectorAll("." + H.loadingClass);
                  t.length &&
                    t.forEach &&
                    U(function () {
                      t.forEach(function (e) {
                        e.complete && R(e);
                      });
                    });
                }
              }),
              c.MutationObserver
                ? new MutationObserver(n).observe(O, {
                    childList: !0,
                    subtree: !0,
                    attributes: !0,
                  })
                : (O[P]("DOMNodeInserted", n, !0),
                  O[P]("DOMAttrModified", n, !0),
                  setInterval(n, 999)),
              q("hashchange", n, !0),
              [
                "focus",
                "mouseover",
                "click",
                "load",
                "transitionend",
                "animationend",
              ].forEach(function (e) {
                D[P](e, n, !0);
              }),
              /d$|^c/.test(D.readyState)
                ? l()
                : (q("load", l), D[P]("DOMContentLoaded", n), I(l, 2e4)),
              k.elements.length ? (t(), ee._lsFlush()) : n();
          },
          checkElems: n,
          unveil: R,
          _aLSL: s,
        };
      })(),
      ie = (function () {
        var n,
          r = te(function (e, t, n, a) {
            var i, r, o;
            if (
              ((e._lazysizesWidth = a),
              (a += "px"),
              e.setAttribute("sizes", a),
              j.test(t.nodeName || ""))
            )
              for (
                i = t.getElementsByTagName("source"), r = 0, o = i.length;
                r < o;
                r++
              )
                i[r].setAttribute("sizes", a);
            n.detail.dataAttr || Y(e, n.detail);
          }),
          a = function (e, t, n) {
            var a,
              i = e.parentNode;
            i &&
              ((n = o(e, i, n)),
              (a = X(e, "lazybeforesizes", { width: n, dataAttr: !!t })),
              a.defaultPrevented ||
                ((n = a.detail.width) &&
                  n !== e._lazysizesWidth &&
                  r(e, i, a, n)));
          },
          e = function () {
            var e,
              t = n.length;
            if (t) for (e = 0; e < t; e++) a(n[e]);
          },
          t = ae(e);
        return {
          _: function () {
            (n = D.getElementsByClassName(H.autosizesClass)), q("resize", t);
          },
          checkElems: t,
          updateElem: a,
        };
      })(),
      t = function () {
        !t.i && D.getElementsByClassName && ((t.i = !0), ie._(), e._());
      };
    return (
      I(function () {
        H.init && t();
      }),
      (k = {
        cfg: H,
        autoSizer: ie,
        loader: e,
        init: t,
        uP: Y,
        aC: K,
        rC: Q,
        hC: J,
        fire: X,
        gW: o,
        rAF: ee,
      })
    );
  })(e, e.document, Date);
  (e.lazySizes = t),
    "object" == typeof module && module.exports && (module.exports = t);
})("undefined" != typeof window ? window : {});
if ("undefined" == typeof jQuery)
  throw new Error("Bootstrap's JavaScript requires jQuery");
!(function () {
  "use strict";
  var t = jQuery.fn.jquery.split(" ")[0].split(".");
  if (
    (t[0] < 2 && t[1] < 9) ||
    (1 == t[0] && 9 == t[1] && t[2] < 1) ||
    3 < t[0]
  )
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4"
    );
})(),
  (function (r) {
    "use strict";
    function a(t) {
      var e = t.attr("data-target");
      e ||
        (e =
          (e = t.attr("href")) &&
          /#[A-Za-z]/.test(e) &&
          e.replace(/.*(?=#[^\s]*$)/, ""));
      var i = e && r(e);
      return i && i.length ? i : t.parent();
    }
    function s(o) {
      (o && 3 === o.which) ||
        (r(".dropdown-backdrop").remove(),
        r(l).each(function () {
          var t = r(this),
            e = a(t),
            i = { relatedTarget: this };
          e.hasClass("open") &&
            ((o &&
              "click" == o.type &&
              /input|textarea/i.test(o.target.tagName) &&
              r.contains(e[0], o.target)) ||
              (e.trigger((o = r.Event("hide.bs.dropdown", i))),
              o.isDefaultPrevented() ||
                (t.attr("aria-expanded", "false"),
                e
                  .removeClass("open")
                  .trigger(r.Event("hidden.bs.dropdown", i)))));
        }));
    }
    function o(t) {
      r(t).on("click.bs.dropdown", this.toggle);
    }
    var l = '[data-toggle="dropdown"]';
    (o.VERSION = "3.3.7"),
      (o.prototype.toggle = function (t) {
        var e = r(this);
        if (!e.is(".disabled, :disabled")) {
          var i = a(e),
            o = i.hasClass("open");
          if ((s(), !o)) {
            "ontouchstart" in document.documentElement &&
              !i.closest(".navbar-nav").length &&
              r(document.createElement("div"))
                .addClass("dropdown-backdrop")
                .insertAfter(r(this))
                .on("click", s);
            var n = { relatedTarget: this };
            if (
              (i.trigger((t = r.Event("show.bs.dropdown", n))),
              t.isDefaultPrevented())
            )
              return;
            e.trigger("focus").attr("aria-expanded", "true"),
              i.toggleClass("open").trigger(r.Event("shown.bs.dropdown", n));
          }
          return !1;
        }
      }),
      (o.prototype.keydown = function (t) {
        if (
          /(38|40|27|32)/.test(t.which) &&
          !/input|textarea/i.test(t.target.tagName)
        ) {
          var e = r(this);
          if (
            (t.preventDefault(),
            t.stopPropagation(),
            !e.is(".disabled, :disabled"))
          ) {
            var i = a(e),
              o = i.hasClass("open");
            if ((!o && 27 != t.which) || (o && 27 == t.which))
              return (
                27 == t.which && i.find(l).trigger("focus"), e.trigger("click")
              );
            var n = i.find(".dropdown-menu li:not(.disabled):visible a");
            if (n.length) {
              var s = n.index(t.target);
              38 == t.which && 0 < s && s--,
                40 == t.which && s < n.length - 1 && s++,
                ~s || (s = 0),
                n.eq(s).trigger("focus");
            }
          }
        }
      });
    var t = r.fn.dropdown;
    (r.fn.dropdown = function (i) {
      return this.each(function () {
        var t = r(this),
          e = t.data("bs.dropdown");
        e || t.data("bs.dropdown", (e = new o(this))),
          "string" == typeof i && e[i].call(t);
      });
    }),
      (r.fn.dropdown.Constructor = o),
      (r.fn.dropdown.noConflict = function () {
        return (r.fn.dropdown = t), this;
      }),
      r(document)
        .on("click.bs.dropdown.data-api", s)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
          t.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", l, o.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", l, o.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          ".dropdown-menu",
          o.prototype.keydown
        );
  })(jQuery),
  (function (s) {
    "use strict";
    function r(o, n) {
      return this.each(function () {
        var t = s(this),
          e = t.data("bs.modal"),
          i = s.extend({}, a.DEFAULTS, t.data(), "object" == typeof o && o);
        e || t.data("bs.modal", (e = new a(this, i))),
          "string" == typeof o ? e[o](n) : i.show && e.show(n);
      });
    }
    function a(t, e) {
      (this.options = e),
        (this.$body = s(document.body)),
        (this.$element = s(t)),
        (this.$dialog = this.$element.find(".modal-dialog")),
        (this.$backdrop = null),
        (this.isShown = null),
        (this.originalBodyPad = null),
        (this.scrollbarWidth = 0),
        (this.ignoreBackdropClick = !1),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            s.proxy(function () {
              this.$element.trigger("loaded.bs.modal");
            }, this)
          );
    }
    (a.VERSION = "3.3.7"),
      (a.TRANSITION_DURATION = 300),
      (a.BACKDROP_TRANSITION_DURATION = 150),
      (a.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (a.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t);
      }),
      (a.prototype.show = function (i) {
        var o = this,
          t = s.Event("show.bs.modal", { relatedTarget: i });
        this.$element.trigger(t),
          this.isShown ||
            t.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              s.proxy(this.hide, this)
            ),
            this.$dialog.on("mousedown.dismiss.bs.modal", function () {
              o.$element.one("mouseup.dismiss.bs.modal", function (t) {
                s(t.target).is(o.$element) && (o.ignoreBackdropClick = !0);
              });
            }),
            this.backdrop(function () {
              var t = s.support.transition && o.$element.hasClass("fade");
              o.$element.parent().length || o.$element.appendTo(o.$body),
                o.$element.show().scrollTop(0),
                o.adjustDialog(),
                t && o.$element[0].offsetWidth,
                o.$element.addClass("in"),
                o.enforceFocus();
              var e = s.Event("shown.bs.modal", { relatedTarget: i });
              t
                ? o.$dialog
                    .one("bsTransitionEnd", function () {
                      o.$element.trigger("focus").trigger(e);
                    })
                    .emulateTransitionEnd(a.TRANSITION_DURATION)
                : o.$element.trigger("focus").trigger(e);
            }));
      }),
      (a.prototype.hide = function (t) {
        t && t.preventDefault(),
          (t = s.Event("hide.bs.modal")),
          this.$element.trigger(t),
          this.isShown &&
            !t.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            s(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .off("click.dismiss.bs.modal")
              .off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"),
            s.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one("bsTransitionEnd", s.proxy(this.hideModal, this))
                  .emulateTransitionEnd(a.TRANSITION_DURATION)
              : this.hideModal());
      }),
      (a.prototype.enforceFocus = function () {
        s(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            s.proxy(function (t) {
              document === t.target ||
                this.$element[0] === t.target ||
                this.$element.has(t.target).length ||
                this.$element.trigger("focus");
            }, this)
          );
      }),
      (a.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keydown.dismiss.bs.modal",
              s.proxy(function (t) {
                27 == t.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      }),
      (a.prototype.resize = function () {
        this.isShown
          ? s(window).on("resize.bs.modal", s.proxy(this.handleUpdate, this))
          : s(window).off("resize.bs.modal");
      }),
      (a.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(),
          this.backdrop(function () {
            t.$body.removeClass("modal-open"),
              t.resetAdjustments(),
              t.resetScrollbar(),
              t.$element.trigger("hidden.bs.modal");
          });
      }),
      (a.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (a.prototype.backdrop = function (t) {
        var e = this,
          i = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var o = s.support.transition && i;
          if (
            ((this.$backdrop = s(document.createElement("div"))
              .addClass("modal-backdrop " + i)
              .appendTo(this.$body)),
            this.$element.on(
              "click.dismiss.bs.modal",
              s.proxy(function (t) {
                return this.ignoreBackdropClick
                  ? void (this.ignoreBackdropClick = !1)
                  : void (
                      t.target === t.currentTarget &&
                      ("static" == this.options.backdrop
                        ? this.$element[0].focus()
                        : this.hide())
                    );
              }, this)
            ),
            o && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !t)
          )
            return;
          o
            ? this.$backdrop
                .one("bsTransitionEnd", t)
                .emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION)
            : t();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var n = function () {
            e.removeBackdrop(), t && t();
          };
          s.support.transition && this.$element.hasClass("fade")
            ? this.$backdrop
                .one("bsTransitionEnd", n)
                .emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION)
            : n();
        } else t && t();
      }),
      (a.prototype.handleUpdate = function () {
        this.adjustDialog();
      }),
      (a.prototype.adjustDialog = function () {
        var t =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : "",
        });
      }),
      (a.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
      }),
      (a.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
          var e = document.documentElement.getBoundingClientRect();
          t = e.right - Math.abs(e.left);
        }
        (this.bodyIsOverflowing = document.body.clientWidth < t),
          (this.scrollbarWidth = this.measureScrollbar());
      }),
      (a.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        (this.originalBodyPad = document.body.style.paddingRight || ""),
          this.bodyIsOverflowing &&
            this.$body.css("padding-right", t + this.scrollbarWidth);
      }),
      (a.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad);
      }),
      (a.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        (t.className = "modal-scrollbar-measure"), this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e;
      });
    var t = s.fn.modal;
    (s.fn.modal = r),
      (s.fn.modal.Constructor = a),
      (s.fn.modal.noConflict = function () {
        return (s.fn.modal = t), this;
      }),
      s(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (t) {
          var e = s(this),
            i = e.attr("href"),
            o = s(
              e.attr("data-target") || (i && i.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            n = o.data("bs.modal")
              ? "toggle"
              : s.extend({ remote: !/#/.test(i) && i }, o.data(), e.data());
          e.is("a") && t.preventDefault(),
            o.one("show.bs.modal", function (t) {
              t.isDefaultPrevented() ||
                o.one("hidden.bs.modal", function () {
                  e.is(":visible") && e.trigger("focus");
                });
            }),
            r.call(o, n, this);
        }
      );
  })(jQuery),
  (function (g) {
    "use strict";
    function m(t, e) {
      (this.type = null),
        (this.options = null),
        (this.enabled = null),
        (this.timeout = null),
        (this.hoverState = null),
        (this.$element = null),
        (this.inState = null),
        this.init("tooltip", t, e);
    }
    (m.VERSION = "3.3.7"),
      (m.TRANSITION_DURATION = 150),
      (m.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 },
      }),
      (m.prototype.init = function (t, e, i) {
        if (
          ((this.enabled = !0),
          (this.type = t),
          (this.$element = g(e)),
          (this.options = this.getOptions(i)),
          (this.$viewport =
            this.options.viewport &&
            g(
              g.isFunction(this.options.viewport)
                ? this.options.viewport.call(this, this.$element)
                : this.options.viewport.selector || this.options.viewport
            )),
          (this.inState = { click: !1, hover: !1, focus: !1 }),
          this.$element[0] instanceof document.constructor &&
            !this.options.selector)
        )
          throw new Error(
            "`selector` option must be specified when initializing " +
              this.type +
              " on the window.document object!"
          );
        for (var o = this.options.trigger.split(" "), n = o.length; n--; ) {
          var s = o[n];
          if ("click" == s)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              g.proxy(this.toggle, this)
            );
          else if ("manual" != s) {
            var r = "hover" == s ? "mouseenter" : "focusin",
              a = "hover" == s ? "mouseleave" : "focusout";
            this.$element.on(
              r + "." + this.type,
              this.options.selector,
              g.proxy(this.enter, this)
            ),
              this.$element.on(
                a + "." + this.type,
                this.options.selector,
                g.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? (this._options = g.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (m.prototype.getDefaults = function () {
        return m.DEFAULTS;
      }),
      (m.prototype.getOptions = function (t) {
        return (
          (t = g.extend({}, this.getDefaults(), this.$element.data(), t))
            .delay &&
            "number" == typeof t.delay &&
            (t.delay = { show: t.delay, hide: t.delay }),
          t
        );
      }),
      (m.prototype.getDelegateOptions = function () {
        var i = {},
          o = this.getDefaults();
        return (
          this._options &&
            g.each(this._options, function (t, e) {
              o[t] != e && (i[t] = e);
            }),
          i
        );
      }),
      (m.prototype.enter = function (t) {
        var e =
          t instanceof this.constructor
            ? t
            : g(t.currentTarget).data("bs." + this.type);
        return (
          e ||
            ((e = new this.constructor(
              t.currentTarget,
              this.getDelegateOptions()
            )),
            g(t.currentTarget).data("bs." + this.type, e)),
          t instanceof g.Event &&
            (e.inState["focusin" == t.type ? "focus" : "hover"] = !0),
          e.tip().hasClass("in") || "in" == e.hoverState
            ? void (e.hoverState = "in")
            : (clearTimeout(e.timeout),
              (e.hoverState = "in"),
              e.options.delay && e.options.delay.show
                ? void (e.timeout = setTimeout(function () {
                    "in" == e.hoverState && e.show();
                  }, e.options.delay.show))
                : e.show())
        );
      }),
      (m.prototype.isInStateTrue = function () {
        for (var t in this.inState) if (this.inState[t]) return !0;
        return !1;
      }),
      (m.prototype.leave = function (t) {
        var e =
          t instanceof this.constructor
            ? t
            : g(t.currentTarget).data("bs." + this.type);
        return (
          e ||
            ((e = new this.constructor(
              t.currentTarget,
              this.getDelegateOptions()
            )),
            g(t.currentTarget).data("bs." + this.type, e)),
          t instanceof g.Event &&
            (e.inState["focusout" == t.type ? "focus" : "hover"] = !1),
          e.isInStateTrue()
            ? void 0
            : (clearTimeout(e.timeout),
              (e.hoverState = "out"),
              e.options.delay && e.options.delay.hide
                ? void (e.timeout = setTimeout(function () {
                    "out" == e.hoverState && e.hide();
                  }, e.options.delay.hide))
                : e.hide())
        );
      }),
      (m.prototype.show = function () {
        var t = g.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(t);
          var e = g.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (t.isDefaultPrevented() || !e) return;
          var i = this,
            o = this.tip(),
            n = this.getUID(this.type);
          this.setContent(),
            o.attr("id", n),
            this.$element.attr("aria-describedby", n),
            this.options.animation && o.addClass("fade");
          var s =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, o[0], this.$element[0])
                : this.options.placement,
            r = /\s?auto?\s?/i,
            a = r.test(s);
          a && (s = s.replace(r, "") || "top"),
            o
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(s)
              .data("bs." + this.type, this),
            this.options.container
              ? o.appendTo(this.options.container)
              : o.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
          var l = this.getPosition(),
            h = o[0].offsetWidth,
            d = o[0].offsetHeight;
          if (a) {
            var p = s,
              c = this.getPosition(this.$viewport);
            (s =
              "bottom" == s && l.bottom + d > c.bottom
                ? "top"
                : "top" == s && l.top - d < c.top
                ? "bottom"
                : "right" == s && l.right + h > c.width
                ? "left"
                : "left" == s && l.left - h < c.left
                ? "right"
                : s),
              o.removeClass(p).addClass(s);
          }
          var f = this.getCalculatedOffset(s, l, h, d);
          this.applyPlacement(f, s);
          var u = function () {
            var t = i.hoverState;
            i.$element.trigger("shown.bs." + i.type),
              (i.hoverState = null),
              "out" == t && i.leave(i);
          };
          g.support.transition && this.$tip.hasClass("fade")
            ? o
                .one("bsTransitionEnd", u)
                .emulateTransitionEnd(m.TRANSITION_DURATION)
            : u();
        }
      }),
      (m.prototype.applyPlacement = function (t, e) {
        var i = this.tip(),
          o = i[0].offsetWidth,
          n = i[0].offsetHeight,
          s = parseInt(i.css("margin-top"), 10),
          r = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0),
          isNaN(r) && (r = 0),
          (t.top += s),
          (t.left += r),
          g.offset.setOffset(
            i[0],
            g.extend(
              {
                using: function (t) {
                  i.css({ top: Math.round(t.top), left: Math.round(t.left) });
                },
              },
              t
            ),
            0
          ),
          i.addClass("in");
        var a = i[0].offsetWidth,
          l = i[0].offsetHeight;
        "top" == e && l != n && (t.top = t.top + n - l);
        var h = this.getViewportAdjustedDelta(e, t, a, l);
        h.left ? (t.left += h.left) : (t.top += h.top);
        var d = /top|bottom/.test(e),
          p = d ? 2 * h.left - o + a : 2 * h.top - n + l,
          c = d ? "offsetWidth" : "offsetHeight";
        i.offset(t), this.replaceArrow(p, i[0][c], d);
      }),
      (m.prototype.replaceArrow = function (t, e, i) {
        this.arrow()
          .css(i ? "left" : "top", 50 * (1 - t / e) + "%")
          .css(i ? "top" : "left", "");
      }),
      (m.prototype.setContent = function () {
        var t = this.tip(),
          e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e),
          t.removeClass("fade in top bottom left right");
      }),
      (m.prototype.hide = function (t) {
        function e() {
          "in" != i.hoverState && o.detach(),
            i.$element &&
              i.$element
                .removeAttr("aria-describedby")
                .trigger("hidden.bs." + i.type),
            t && t();
        }
        var i = this,
          o = g(this.$tip),
          n = g.Event("hide.bs." + this.type);
        return (
          this.$element.trigger(n),
          n.isDefaultPrevented()
            ? void 0
            : (o.removeClass("in"),
              g.support.transition && o.hasClass("fade")
                ? o
                    .one("bsTransitionEnd", e)
                    .emulateTransitionEnd(m.TRANSITION_DURATION)
                : e(),
              (this.hoverState = null),
              this)
        );
      }),
      (m.prototype.fixTitle = function () {
        var t = this.$element;
        (!t.attr("title") &&
          "string" == typeof t.attr("data-original-title")) ||
          t
            .attr("data-original-title", t.attr("title") || "")
            .attr("title", "");
      }),
      (m.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (m.prototype.getPosition = function (t) {
        var e = (t = t || this.$element)[0],
          i = "BODY" == e.tagName,
          o = e.getBoundingClientRect();
        null == o.width &&
          (o = g.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top,
          }));
        var n = window.SVGElement && e instanceof window.SVGElement,
          s = i ? { top: 0, left: 0 } : n ? null : t.offset(),
          r = {
            scroll: i
              ? document.documentElement.scrollTop || document.body.scrollTop
              : t.scrollTop(),
          },
          a = i
            ? { width: g(window).width(), height: g(window).height() }
            : null;
        return g.extend({}, o, r, a, s);
      }),
      (m.prototype.getCalculatedOffset = function (t, e, i, o) {
        return "bottom" == t
          ? { top: e.top + e.height, left: e.left + e.width / 2 - i / 2 }
          : "top" == t
          ? { top: e.top - o, left: e.left + e.width / 2 - i / 2 }
          : "left" == t
          ? { top: e.top + e.height / 2 - o / 2, left: e.left - i }
          : { top: e.top + e.height / 2 - o / 2, left: e.left + e.width };
      }),
      (m.prototype.getViewportAdjustedDelta = function (t, e, i, o) {
        var n = { top: 0, left: 0 };
        if (!this.$viewport) return n;
        var s = (this.options.viewport && this.options.viewport.padding) || 0,
          r = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
          var a = e.top - s - r.scroll,
            l = e.top + s - r.scroll + o;
          a < r.top
            ? (n.top = r.top - a)
            : l > r.top + r.height && (n.top = r.top + r.height - l);
        } else {
          var h = e.left - s,
            d = e.left + s + i;
          h < r.left
            ? (n.left = r.left - h)
            : d > r.right && (n.left = r.left + r.width - d);
        }
        return n;
      }),
      (m.prototype.getTitle = function () {
        var t = this.$element,
          e = this.options;
        return (
          t.attr("data-original-title") ||
          ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
        );
      }),
      (m.prototype.getUID = function (t) {
        for (; (t += ~~(1e6 * Math.random())), document.getElementById(t); );
        return t;
      }),
      (m.prototype.tip = function () {
        if (
          !this.$tip &&
          ((this.$tip = g(this.options.template)), 1 != this.$tip.length)
        )
          throw new Error(
            this.type +
              " `template` option must consist of exactly 1 top-level element!"
          );
        return this.$tip;
      }),
      (m.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (m.prototype.enable = function () {
        this.enabled = !0;
      }),
      (m.prototype.disable = function () {
        this.enabled = !1;
      }),
      (m.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (m.prototype.toggle = function (t) {
        var e = this;
        t &&
          ((e = g(t.currentTarget).data("bs." + this.type)) ||
            ((e = new this.constructor(
              t.currentTarget,
              this.getDelegateOptions()
            )),
            g(t.currentTarget).data("bs." + this.type, e))),
          t
            ? ((e.inState.click = !e.inState.click),
              e.isInStateTrue() ? e.enter(e) : e.leave(e))
            : e.tip().hasClass("in")
            ? e.leave(e)
            : e.enter(e);
      }),
      (m.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout),
          this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type),
              t.$tip && t.$tip.detach(),
              (t.$tip = null),
              (t.$arrow = null),
              (t.$viewport = null),
              (t.$element = null);
          });
      });
    var t = g.fn.tooltip;
    (g.fn.tooltip = function (o) {
      return this.each(function () {
        var t = g(this),
          e = t.data("bs.tooltip"),
          i = "object" == typeof o && o;
        (!e && /destroy|hide/.test(o)) ||
          (e || t.data("bs.tooltip", (e = new m(this, i))),
          "string" == typeof o && e[o]());
      });
    }),
      (g.fn.tooltip.Constructor = m),
      (g.fn.tooltip.noConflict = function () {
        return (g.fn.tooltip = t), this;
      });
  })(jQuery),
  (function (n) {
    "use strict";
    function s(t, e) {
      this.init("popover", t, e);
    }
    if (!n.fn.tooltip) throw new Error("Popover requires tooltip.js");
    (s.VERSION = "3.3.7"),
      (s.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (((s.prototype = n.extend(
        {},
        n.fn.tooltip.Constructor.prototype
      )).constructor = s).prototype.getDefaults = function () {
        return s.DEFAULTS;
      }),
      (s.prototype.setContent = function () {
        var t = this.tip(),
          e = this.getTitle(),
          i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e),
          t
            .find(".popover-content")
            .children()
            .detach()
            .end()
            [
              this.options.html
                ? "string" == typeof i
                  ? "html"
                  : "append"
                : "text"
            ](i),
          t.removeClass("fade top bottom left right in"),
          t.find(".popover-title").html() || t.find(".popover-title").hide();
      }),
      (s.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (s.prototype.getContent = function () {
        var t = this.$element,
          e = this.options;
        return (
          t.attr("data-content") ||
          ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        );
      }),
      (s.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      });
    var t = n.fn.popover;
    (n.fn.popover = function (o) {
      return this.each(function () {
        var t = n(this),
          e = t.data("bs.popover"),
          i = "object" == typeof o && o;
        (!e && /destroy|hide/.test(o)) ||
          (e || t.data("bs.popover", (e = new s(this, i))),
          "string" == typeof o && e[o]());
      });
    }),
      (n.fn.popover.Constructor = s),
      (n.fn.popover.noConflict = function () {
        return (n.fn.popover = t), this;
      });
  })(jQuery),
  (function (a) {
    "use strict";
    function e(i) {
      return this.each(function () {
        var t = a(this),
          e = t.data("bs.tab");
        e || t.data("bs.tab", (e = new r(this))),
          "string" == typeof i && e[i]();
      });
    }
    function r(t) {
      this.element = a(t);
    }
    (r.VERSION = "3.3.7"),
      (r.TRANSITION_DURATION = 150),
      (r.prototype.show = function () {
        var t = this.element,
          e = t.closest("ul:not(.dropdown-menu)"),
          i = t.data("target");
        if (
          (i || (i = (i = t.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")),
          !t.parent("li").hasClass("active"))
        ) {
          var o = e.find(".active:last a"),
            n = a.Event("hide.bs.tab", { relatedTarget: t[0] }),
            s = a.Event("show.bs.tab", { relatedTarget: o[0] });
          if (
            (o.trigger(n),
            t.trigger(s),
            !s.isDefaultPrevented() && !n.isDefaultPrevented())
          ) {
            var r = a(i);
            this.activate(t.closest("li"), e),
              this.activate(r, r.parent(), function () {
                o.trigger({ type: "hidden.bs.tab", relatedTarget: t[0] }),
                  t.trigger({ type: "shown.bs.tab", relatedTarget: o[0] });
              });
          }
        }
      }),
      (r.prototype.activate = function (t, e, i) {
        function o() {
          n
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            t
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"),
            t.parent(".dropdown-menu").length &&
              t
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            i && i();
        }
        var n = e.find("> .active"),
          s =
            i &&
            a.support.transition &&
            ((n.length && n.hasClass("fade")) || !!e.find("> .fade").length);
        n.length && s
          ? n
              .one("bsTransitionEnd", o)
              .emulateTransitionEnd(r.TRANSITION_DURATION)
          : o(),
          n.removeClass("in");
      });
    var t = a.fn.tab;
    (a.fn.tab = e),
      (a.fn.tab.Constructor = r),
      (a.fn.tab.noConflict = function () {
        return (a.fn.tab = t), this;
      });
    function i(t) {
      t.preventDefault(), e.call(a(this), "show");
    }
    a(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', i)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', i);
  })(jQuery),
  (function (l) {
    "use strict";
    function i(o) {
      return this.each(function () {
        var t = l(this),
          e = t.data("bs.affix"),
          i = "object" == typeof o && o;
        e || t.data("bs.affix", (e = new h(this, i))),
          "string" == typeof o && e[o]();
      });
    }
    var h = function (t, e) {
      (this.options = l.extend({}, h.DEFAULTS, e)),
        (this.$target = l(this.options.target)
          .on("scroll.bs.affix.data-api", l.proxy(this.checkPosition, this))
          .on(
            "click.bs.affix.data-api",
            l.proxy(this.checkPositionWithEventLoop, this)
          )),
        (this.$element = l(t)),
        (this.affixed = null),
        (this.unpin = null),
        (this.pinnedOffset = null),
        this.checkPosition();
    };
    (h.VERSION = "3.3.7"),
      (h.RESET = "affix affix-top affix-bottom"),
      (h.DEFAULTS = { offset: 0, target: window }),
      (h.prototype.getState = function (t, e, i, o) {
        var n = this.$target.scrollTop(),
          s = this.$element.offset(),
          r = this.$target.height();
        if (null != i && "top" == this.affixed) return n < i && "top";
        if ("bottom" == this.affixed)
          return null != i
            ? !(n + this.unpin <= s.top) && "bottom"
            : !(n + r <= t - o) && "bottom";
        var a = null == this.affixed,
          l = a ? n : s.top;
        return null != i && n <= i
          ? "top"
          : null != o && t - o <= l + (a ? r : e) && "bottom";
      }),
      (h.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(h.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
          e = this.$element.offset();
        return (this.pinnedOffset = e.top - t);
      }),
      (h.prototype.checkPositionWithEventLoop = function () {
        setTimeout(l.proxy(this.checkPosition, this), 1);
      }),
      (h.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
          var t = this.$element.height(),
            e = this.options.offset,
            i = e.top,
            o = e.bottom,
            n = Math.max(l(document).height(), l(document.body).height());
          "object" != typeof e && (o = i = e),
            "function" == typeof i && (i = e.top(this.$element)),
            "function" == typeof o && (o = e.bottom(this.$element));
          var s = this.getState(n, t, i, o);
          if (this.affixed != s) {
            null != this.unpin && this.$element.css("top", "");
            var r = "affix" + (s ? "-" + s : ""),
              a = l.Event(r + ".bs.affix");
            if ((this.$element.trigger(a), a.isDefaultPrevented())) return;
            (this.affixed = s),
              (this.unpin = "bottom" == s ? this.getPinnedOffset() : null),
              this.$element
                .removeClass(h.RESET)
                .addClass(r)
                .trigger(r.replace("affix", "affixed") + ".bs.affix");
          }
          "bottom" == s && this.$element.offset({ top: n - t - o });
        }
      });
    var t = l.fn.affix;
    (l.fn.affix = i),
      (l.fn.affix.Constructor = h),
      (l.fn.affix.noConflict = function () {
        return (l.fn.affix = t), this;
      }),
      l(window).on("load", function () {
        l('[data-spy="affix"]').each(function () {
          var t = l(this),
            e = t.data();
          (e.offset = e.offset || {}),
            null != e.offsetBottom && (e.offset.bottom = e.offsetBottom),
            null != e.offsetTop && (e.offset.top = e.offsetTop),
            i.call(t, e);
        });
      });
  })(jQuery),
  (function (r) {
    "use strict";
    function n(t) {
      var e,
        i =
          t.attr("data-target") ||
          ((e = t.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, ""));
      return r(i);
    }
    function a(o) {
      return this.each(function () {
        var t = r(this),
          e = t.data("bs.collapse"),
          i = r.extend({}, l.DEFAULTS, t.data(), "object" == typeof o && o);
        !e && i.toggle && /show|hide/.test(o) && (i.toggle = !1),
          e || t.data("bs.collapse", (e = new l(this, i))),
          "string" == typeof o && e[o]();
      });
    }
    var l = function (t, e) {
      (this.$element = r(t)),
        (this.options = r.extend({}, l.DEFAULTS, e)),
        (this.$trigger = r(
          '[data-toggle="collapse"][href="#' +
            t.id +
            '"],[data-toggle="collapse"][data-target="#' +
            t.id +
            '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    (l.VERSION = "3.3.7"),
      (l.TRANSITION_DURATION = 350),
      (l.DEFAULTS = { toggle: !0 }),
      (l.prototype.dimension = function () {
        return this.$element.hasClass("width") ? "width" : "height";
      }),
      (l.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var t,
            e =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
            !(e && e.length && (t = e.data("bs.collapse")) && t.transitioning)
          ) {
            var i = r.Event("show.bs.collapse");
            if ((this.$element.trigger(i), !i.isDefaultPrevented())) {
              e &&
                e.length &&
                (a.call(e, "hide"), t || e.data("bs.collapse", null));
              var o = this.dimension();
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [o](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1);
              var n = function () {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [o](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse");
              };
              if (!r.support.transition) return n.call(this);
              var s = r.camelCase(["scroll", o].join("-"));
              this.$element
                .one("bsTransitionEnd", r.proxy(n, this))
                .emulateTransitionEnd(l.TRANSITION_DURATION)
                [o](this.$element[0][s]);
            }
          }
        }
      }),
      (l.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var t = r.Event("hide.bs.collapse");
          if ((this.$element.trigger(t), !t.isDefaultPrevented())) {
            var e = this.dimension();
            this.$element[e](this.$element[e]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1);
            var i = function () {
              (this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse");
            };
            return r.support.transition
              ? void this.$element[e](0)
                  .one("bsTransitionEnd", r.proxy(i, this))
                  .emulateTransitionEnd(l.TRANSITION_DURATION)
              : i.call(this);
          }
        }
      }),
      (l.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (l.prototype.getParent = function () {
        return r(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            r.proxy(function (t, e) {
              var i = r(e);
              this.addAriaAndCollapsedClass(n(i), i);
            }, this)
          )
          .end();
      }),
      (l.prototype.addAriaAndCollapsedClass = function (t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i),
          e.toggleClass("collapsed", !i).attr("aria-expanded", i);
      });
    var t = r.fn.collapse;
    (r.fn.collapse = a),
      (r.fn.collapse.Constructor = l),
      (r.fn.collapse.noConflict = function () {
        return (r.fn.collapse = t), this;
      }),
      r(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (t) {
          var e = r(this);
          e.attr("data-target") || t.preventDefault();
          var i = n(e),
            o = i.data("bs.collapse") ? "toggle" : e.data();
          a.call(i, o);
        }
      );
  })(jQuery),
  (function (s) {
    "use strict";
    function n(t, e) {
      (this.$body = s(document.body)),
        (this.$scrollElement = s(s(t).is(document.body) ? window : t)),
        (this.options = s.extend({}, n.DEFAULTS, e)),
        (this.selector = (this.options.target || "") + " .nav li > a"),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on(
          "scroll.bs.scrollspy",
          s.proxy(this.process, this)
        ),
        this.refresh(),
        this.process();
    }
    function e(o) {
      return this.each(function () {
        var t = s(this),
          e = t.data("bs.scrollspy"),
          i = "object" == typeof o && o;
        e || t.data("bs.scrollspy", (e = new n(this, i))),
          "string" == typeof o && e[o]();
      });
    }
    (n.VERSION = "3.3.7"),
      (n.DEFAULTS = { offset: 10 }),
      (n.prototype.getScrollHeight = function () {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }),
      (n.prototype.refresh = function () {
        var t = this,
          o = "offset",
          n = 0;
        (this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight()),
          s.isWindow(this.$scrollElement[0]) ||
            ((o = "position"), (n = this.$scrollElement.scrollTop())),
          this.$body
            .find(this.selector)
            .map(function () {
              var t = s(this),
                e = t.data("target") || t.attr("href"),
                i = /^#./.test(e) && s(e);
              return (
                (i && i.length && i.is(":visible") && [[i[o]().top + n, e]]) ||
                null
              );
            })
            .sort(function (t, e) {
              return t[0] - e[0];
            })
            .each(function () {
              t.offsets.push(this[0]), t.targets.push(this[1]);
            });
      }),
      (n.prototype.process = function () {
        var t,
          e = this.$scrollElement.scrollTop() + this.options.offset,
          i = this.getScrollHeight(),
          o = this.options.offset + i - this.$scrollElement.height(),
          n = this.offsets,
          s = this.targets,
          r = this.activeTarget;
        if ((this.scrollHeight != i && this.refresh(), o <= e))
          return r != (t = s[s.length - 1]) && this.activate(t);
        if (r && e < n[0]) return (this.activeTarget = null), this.clear();
        for (t = n.length; t--; )
          r != s[t] &&
            e >= n[t] &&
            (void 0 === n[t + 1] || e < n[t + 1]) &&
            this.activate(s[t]);
      }),
      (n.prototype.activate = function (t) {
        (this.activeTarget = t), this.clear();
        var e =
            this.selector +
            '[data-target="' +
            t +
            '"],' +
            this.selector +
            '[href="' +
            t +
            '"]',
          i = s(e).parents("li").addClass("active");
        i.parent(".dropdown-menu").length &&
          (i = i.closest("li.dropdown").addClass("active")),
          i.trigger("activate.bs.scrollspy");
      }),
      (n.prototype.clear = function () {
        s(this.selector)
          .parentsUntil(this.options.target, ".active")
          .removeClass("active");
      });
    var t = s.fn.scrollspy;
    (s.fn.scrollspy = e),
      (s.fn.scrollspy.Constructor = n),
      (s.fn.scrollspy.noConflict = function () {
        return (s.fn.scrollspy = t), this;
      }),
      s(window).on("load.bs.scrollspy.data-api", function () {
        s('[data-spy="scroll"]').each(function () {
          var t = s(this);
          e.call(t, t.data());
        });
      });
  })(jQuery),
  (function (o) {
    "use strict";
    (o.fn.emulateTransitionEnd = function (t) {
      var e = !1,
        i = this;
      o(this).one("bsTransitionEnd", function () {
        e = !0;
      });
      return (
        setTimeout(function () {
          e || o(i).trigger(o.support.transition.end);
        }, t),
        this
      );
    }),
      o(function () {
        (o.support.transition = (function () {
          var t = document.createElement("bootstrap"),
            e = {
              WebkitTransition: "webkitTransitionEnd",
              MozTransition: "transitionend",
              OTransition: "oTransitionEnd otransitionend",
              transition: "transitionend",
            };
          for (var i in e) if (void 0 !== t.style[i]) return { end: e[i] };
          return !1;
        })()),
          o.support.transition &&
            (o.event.special.bsTransitionEnd = {
              bindType: o.support.transition.end,
              delegateType: o.support.transition.end,
              handle: function (t) {
                return o(t.target).is(this)
                  ? t.handleObj.handler.apply(this, arguments)
                  : void 0;
              },
            });
      });
  })(jQuery);
!(function (i) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], i)
    : "undefined" != typeof exports
    ? (module.exports = i(require("jquery")))
    : i(jQuery);
})(function (a) {
  "use strict";
  var s,
    r = window.Slick || {};
  (((s = 0),
  (r = function (i, e) {
    var t,
      o = this;
    (o.defaults = {
      accessibility: !0,
      adaptiveHeight: !1,
      appendArrows: a(i),
      appendDots: a(i),
      arrows: !0,
      asNavFor: null,
      prevArrow:
        '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
      nextArrow:
        '<button class="slick-next" aria-label="Next" type="button">Next</button>',
      autoplay: !1,
      autoplaySpeed: 3e3,
      centerMode: !1,
      centerPadding: "50px",
      cssEase: "ease",
      customPaging: function (i, e) {
        return a('<button type="button" />').text(e + 1);
      },
      dots: !1,
      dotsClass: "slick-dots",
      draggable: !0,
      easing: "linear",
      edgeFriction: 0.35,
      fade: !1,
      focusOnSelect: !1,
      focusOnChange: !1,
      infinite: !0,
      initialSlide: 0,
      lazyLoad: "ondemand",
      mobileFirst: !1,
      pauseOnHover: !0,
      pauseOnFocus: !0,
      pauseOnDotsHover: !1,
      respondTo: "window",
      responsive: null,
      rows: 1,
      rtl: !1,
      slide: "",
      slidesPerRow: 1,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      swipe: !0,
      swipeToSlide: !1,
      touchMove: !0,
      touchThreshold: 5,
      useCSS: !0,
      useTransform: !0,
      variableWidth: !1,
      vertical: !1,
      verticalSwiping: !1,
      waitForAnimate: !0,
      zIndex: 1e3,
    }),
      (o.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: !1,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        swiping: !1,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1,
      }),
      a.extend(o, o.initials),
      (o.activeBreakpoint = null),
      (o.animType = null),
      (o.animProp = null),
      (o.breakpoints = []),
      (o.breakpointSettings = []),
      (o.cssTransitions = !1),
      (o.focussed = !1),
      (o.interrupted = !1),
      (o.hidden = "hidden"),
      (o.paused = !0),
      (o.positionProp = null),
      (o.respondTo = null),
      (o.rowCount = 1),
      (o.shouldClick = !0),
      (o.$slider = a(i)),
      (o.$slidesCache = null),
      (o.transformType = null),
      (o.transitionType = null),
      (o.visibilityChange = "visibilitychange"),
      (o.windowWidth = 0),
      (o.windowTimer = null),
      (t = a(i).data("slick") || {}),
      (o.options = a.extend({}, o.defaults, e, t)),
      (o.currentSlide = o.options.initialSlide),
      (o.originalSettings = o.options),
      void 0 !== document.mozHidden
        ? ((o.hidden = "mozHidden"),
          (o.visibilityChange = "mozvisibilitychange"))
        : void 0 !== document.webkitHidden &&
          ((o.hidden = "webkitHidden"),
          (o.visibilityChange = "webkitvisibilitychange")),
      (o.autoPlay = a.proxy(o.autoPlay, o)),
      (o.autoPlayClear = a.proxy(o.autoPlayClear, o)),
      (o.autoPlayIterator = a.proxy(o.autoPlayIterator, o)),
      (o.changeSlide = a.proxy(o.changeSlide, o)),
      (o.clickHandler = a.proxy(o.clickHandler, o)),
      (o.selectHandler = a.proxy(o.selectHandler, o)),
      (o.setPosition = a.proxy(o.setPosition, o)),
      (o.swipeHandler = a.proxy(o.swipeHandler, o)),
      (o.dragHandler = a.proxy(o.dragHandler, o)),
      (o.keyHandler = a.proxy(o.keyHandler, o)),
      (o.instanceUid = s++),
      (o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
      o.registerBreakpoints(),
      o.init(!0);
  })).prototype.activateADA = function () {
    this.$slideTrack
      .find(".slick-active")
      .attr({ "aria-hidden": "false" })
      .find("a, input, button, select")
      .attr({ tabindex: "0" });
  }),
    (r.prototype.addSlide = r.prototype.slickAdd =
      function (i, e, t) {
        var o = this;
        if ("boolean" == typeof e) (t = e), (e = null);
        else if (e < 0 || e >= o.slideCount) return !1;
        o.unload(),
          "number" == typeof e
            ? 0 === e && 0 === o.$slides.length
              ? a(i).appendTo(o.$slideTrack)
              : t
              ? a(i).insertBefore(o.$slides.eq(e))
              : a(i).insertAfter(o.$slides.eq(e))
            : !0 === t
            ? a(i).prependTo(o.$slideTrack)
            : a(i).appendTo(o.$slideTrack),
          (o.$slides = o.$slideTrack.children(this.options.slide)),
          o.$slideTrack.children(this.options.slide).detach(),
          o.$slideTrack.append(o.$slides),
          o.$slides.each(function (i, e) {
            a(e).attr("data-slick-index", i);
          }),
          (o.$slidesCache = o.$slides),
          o.reinit();
      }),
    (r.prototype.animateHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.animate({ height: e }, i.options.speed);
      }
    }),
    (r.prototype.animateSlide = function (i, e) {
      var t = {},
        o = this;
      o.animateHeight(),
        !0 === o.options.rtl && !1 === o.options.vertical && (i = -i),
        !1 === o.transformsEnabled
          ? !1 === o.options.vertical
            ? o.$slideTrack.animate(
                { left: i },
                o.options.speed,
                o.options.easing,
                e
              )
            : o.$slideTrack.animate(
                { top: i },
                o.options.speed,
                o.options.easing,
                e
              )
          : !1 === o.cssTransitions
          ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft),
            a({ animStart: o.currentLeft }).animate(
              { animStart: i },
              {
                duration: o.options.speed,
                easing: o.options.easing,
                step: function (i) {
                  (i = Math.ceil(i)),
                    !1 === o.options.vertical
                      ? (t[o.animType] = "translate(" + i + "px, 0px)")
                      : (t[o.animType] = "translate(0px," + i + "px)"),
                    o.$slideTrack.css(t);
                },
                complete: function () {
                  e && e.call();
                },
              }
            ))
          : (o.applyTransition(),
            (i = Math.ceil(i)),
            !1 === o.options.vertical
              ? (t[o.animType] = "translate3d(" + i + "px, 0px, 0px)")
              : (t[o.animType] = "translate3d(0px," + i + "px, 0px)"),
            o.$slideTrack.css(t),
            e &&
              setTimeout(function () {
                o.disableTransition(), e.call();
              }, o.options.speed));
    }),
    (r.prototype.getNavTarget = function () {
      var i = this.options.asNavFor;
      return i && null !== i && (i = a(i).not(this.$slider)), i;
    }),
    (r.prototype.asNavFor = function (e) {
      var i = this.getNavTarget();
      null !== i &&
        "object" == typeof i &&
        i.each(function () {
          var i = a(this).slick("getSlick");
          i.unslicked || i.slideHandler(e, !0);
        });
    }),
    (r.prototype.applyTransition = function (i) {
      var e = this,
        t = {};
      !1 === e.options.fade
        ? (t[e.transitionType] =
            e.transformType + " " + e.options.speed + "ms " + e.options.cssEase)
        : (t[e.transitionType] =
            "opacity " + e.options.speed + "ms " + e.options.cssEase),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (r.prototype.autoPlay = function () {
      var i = this;
      i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow &&
          (i.autoPlayTimer = setInterval(
            i.autoPlayIterator,
            i.options.autoplaySpeed
          ));
    }),
    (r.prototype.autoPlayClear = function () {
      this.autoPlayTimer && clearInterval(this.autoPlayTimer);
    }),
    (r.prototype.autoPlayIterator = function () {
      var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
      i.paused ||
        i.interrupted ||
        i.focussed ||
        (!1 === i.options.infinite &&
          (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1
            ? (i.direction = 0)
            : 0 === i.direction &&
              ((e = i.currentSlide - i.options.slidesToScroll),
              i.currentSlide - 1 == 0 && (i.direction = 1))),
        i.slideHandler(e));
    }),
    (r.prototype.buildArrows = function () {
      var i = this;
      !0 === i.options.arrows &&
        ((i.$prevArrow = a(i.options.prevArrow).addClass("slick-arrow")),
        (i.$nextArrow = a(i.options.nextArrow).addClass("slick-arrow")),
        i.slideCount > i.options.slidesToShow
          ? (i.$prevArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            i.$nextArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            i.htmlExpr.test(i.options.prevArrow) &&
              i.$prevArrow.prependTo(i.options.appendArrows),
            i.htmlExpr.test(i.options.nextArrow) &&
              i.$nextArrow.appendTo(i.options.appendArrows),
            !0 !== i.options.infinite &&
              i.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"))
          : i.$prevArrow
              .add(i.$nextArrow)
              .addClass("slick-hidden")
              .attr({ "aria-disabled": "true", tabindex: "-1" }));
    }),
    (r.prototype.buildDots = function () {
      var i,
        e,
        t = this;
      if (!0 === t.options.dots) {
        for (
          t.$slider.addClass("slick-dotted"),
            e = a("<ul />").addClass(t.options.dotsClass),
            i = 0;
          i <= t.getDotCount();
          i += 1
        )
          e.append(a("<li />").append(t.options.customPaging.call(this, t, i)));
        (t.$dots = e.appendTo(t.options.appendDots)),
          t.$dots.find("li").first().addClass("slick-active");
      }
    }),
    (r.prototype.buildOut = function () {
      var i = this;
      (i.$slides = i.$slider
        .children(i.options.slide + ":not(.slick-cloned)")
        .addClass("slick-slide")),
        (i.slideCount = i.$slides.length),
        i.$slides.each(function (i, e) {
          a(e)
            .attr("data-slick-index", i)
            .data("originalStyling", a(e).attr("style") || "");
        }),
        i.$slider.addClass("slick-slider"),
        (i.$slideTrack =
          0 === i.slideCount
            ? a('<div class="slick-track"/>').appendTo(i.$slider)
            : i.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (i.$list = i.$slideTrack.wrap('<div class="slick-list"/>').parent()),
        i.$slideTrack.css("opacity", 0),
        (!0 !== i.options.centerMode && !0 !== i.options.swipeToSlide) ||
          (i.options.slidesToScroll = 1),
        a("img[data-lazy]", i.$slider).not("[src]").addClass("slick-loading"),
        i.setupInfinite(),
        i.buildArrows(),
        i.buildDots(),
        i.updateDots(),
        i.setSlideClasses(
          "number" == typeof i.currentSlide ? i.currentSlide : 0
        ),
        !0 === i.options.draggable && i.$list.addClass("draggable");
    }),
    (r.prototype.buildRows = function () {
      var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      if (
        ((o = document.createDocumentFragment()),
        (n = l.$slider.children()),
        1 < l.options.rows)
      ) {
        for (
          r = l.options.slidesPerRow * l.options.rows,
            s = Math.ceil(n.length / r),
            i = 0;
          i < s;
          i++
        ) {
          var d = document.createElement("div");
          for (e = 0; e < l.options.rows; e++) {
            var a = document.createElement("div");
            for (t = 0; t < l.options.slidesPerRow; t++) {
              var c = i * r + (e * l.options.slidesPerRow + t);
              n.get(c) && a.appendChild(n.get(c));
            }
            d.appendChild(a);
          }
          o.appendChild(d);
        }
        l.$slider.empty().append(o),
          l.$slider
            .children()
            .children()
            .children()
            .css({
              width: 100 / l.options.slidesPerRow + "%",
              display: "inline-block",
            });
      }
    }),
    (r.prototype.checkResponsive = function (i, e) {
      var t,
        o,
        s,
        n = this,
        r = !1,
        l = n.$slider.width(),
        d = window.innerWidth || a(window).width();
      if (
        ("window" === n.respondTo
          ? (s = d)
          : "slider" === n.respondTo
          ? (s = l)
          : "min" === n.respondTo && (s = Math.min(d, l)),
        n.options.responsive &&
          n.options.responsive.length &&
          null !== n.options.responsive)
      ) {
        for (t in ((o = null), n.breakpoints))
          n.breakpoints.hasOwnProperty(t) &&
            (!1 === n.originalSettings.mobileFirst
              ? s < n.breakpoints[t] && (o = n.breakpoints[t])
              : s > n.breakpoints[t] && (o = n.breakpoints[t]));
        null !== o
          ? null !== n.activeBreakpoint
            ? (o === n.activeBreakpoint && !e) ||
              ((n.activeBreakpoint = o),
              "unslick" === n.breakpointSettings[o]
                ? n.unslick(o)
                : ((n.options = a.extend(
                    {},
                    n.originalSettings,
                    n.breakpointSettings[o]
                  )),
                  !0 === i && (n.currentSlide = n.options.initialSlide),
                  n.refresh(i)),
              (r = o))
            : ((n.activeBreakpoint = o),
              "unslick" === n.breakpointSettings[o]
                ? n.unslick(o)
                : ((n.options = a.extend(
                    {},
                    n.originalSettings,
                    n.breakpointSettings[o]
                  )),
                  !0 === i && (n.currentSlide = n.options.initialSlide),
                  n.refresh(i)),
              (r = o))
          : null !== n.activeBreakpoint &&
            ((n.activeBreakpoint = null),
            (n.options = n.originalSettings),
            !0 === i && (n.currentSlide = n.options.initialSlide),
            n.refresh(i),
            (r = o)),
          i || !1 === r || n.$slider.trigger("breakpoint", [n, r]);
      }
    }),
    (r.prototype.changeSlide = function (i, e) {
      var t,
        o,
        s = this,
        n = a(i.currentTarget);
      switch (
        (n.is("a") && i.preventDefault(),
        n.is("li") || (n = n.closest("li")),
        (t =
          s.slideCount % s.options.slidesToScroll != 0
            ? 0
            : (s.slideCount - s.currentSlide) % s.options.slidesToScroll),
        i.data.message)
      ) {
        case "previous":
          (o = 0 == t ? s.options.slidesToScroll : s.options.slidesToShow - t),
            s.slideCount > s.options.slidesToShow &&
              s.slideHandler(s.currentSlide - o, !1, e);
          break;
        case "next":
          (o = 0 == t ? s.options.slidesToScroll : t),
            s.slideCount > s.options.slidesToShow &&
              s.slideHandler(s.currentSlide + o, !1, e);
          break;
        case "index":
          var r =
            0 === i.data.index
              ? 0
              : i.data.index || n.index() * s.options.slidesToScroll;
          s.slideHandler(s.checkNavigable(r), !1, e),
            n.children().trigger("focus");
          break;
        default:
          return;
      }
    }),
    (r.prototype.checkNavigable = function (i) {
      var e, t;
      if (((t = 0), i > (e = this.getNavigableIndexes())[e.length - 1]))
        i = e[e.length - 1];
      else
        for (var o in e) {
          if (i < e[o]) {
            i = t;
            break;
          }
          t = e[o];
        }
      return i;
    }),
    (r.prototype.cleanUpEvents = function () {
      var i = this;
      i.options.dots &&
        null !== i.$dots &&
        (a("li", i.$dots)
          .off("click.slick", i.changeSlide)
          .off("mouseenter.slick", a.proxy(i.interrupt, i, !0))
          .off("mouseleave.slick", a.proxy(i.interrupt, i, !1)),
        !0 === i.options.accessibility &&
          i.$dots.off("keydown.slick", i.keyHandler)),
        i.$slider.off("focus.slick blur.slick"),
        !0 === i.options.arrows &&
          i.slideCount > i.options.slidesToShow &&
          (i.$prevArrow && i.$prevArrow.off("click.slick", i.changeSlide),
          i.$nextArrow && i.$nextArrow.off("click.slick", i.changeSlide),
          !0 === i.options.accessibility &&
            (i.$prevArrow && i.$prevArrow.off("keydown.slick", i.keyHandler),
            i.$nextArrow && i.$nextArrow.off("keydown.slick", i.keyHandler))),
        i.$list.off("touchstart.slick mousedown.slick", i.swipeHandler),
        i.$list.off("touchmove.slick mousemove.slick", i.swipeHandler),
        i.$list.off("touchend.slick mouseup.slick", i.swipeHandler),
        i.$list.off("touchcancel.slick mouseleave.slick", i.swipeHandler),
        i.$list.off("click.slick", i.clickHandler),
        a(document).off(i.visibilityChange, i.visibility),
        i.cleanUpSlideEvents(),
        !0 === i.options.accessibility &&
          i.$list.off("keydown.slick", i.keyHandler),
        !0 === i.options.focusOnSelect &&
          a(i.$slideTrack).children().off("click.slick", i.selectHandler),
        a(window).off(
          "orientationchange.slick.slick-" + i.instanceUid,
          i.orientationChange
        ),
        a(window).off("resize.slick.slick-" + i.instanceUid, i.resize),
        a("[draggable!=true]", i.$slideTrack).off(
          "dragstart",
          i.preventDefault
        ),
        a(window).off("load.slick.slick-" + i.instanceUid, i.setPosition);
    }),
    (r.prototype.cleanUpSlideEvents = function () {
      var i = this;
      i.$list.off("mouseenter.slick", a.proxy(i.interrupt, i, !0)),
        i.$list.off("mouseleave.slick", a.proxy(i.interrupt, i, !1));
    }),
    (r.prototype.cleanUpRows = function () {
      var i;
      1 < this.options.rows &&
        ((i = this.$slides.children().children()).removeAttr("style"),
        this.$slider.empty().append(i));
    }),
    (r.prototype.clickHandler = function (i) {
      !1 === this.shouldClick &&
        (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
    }),
    (r.prototype.destroy = function (i) {
      var e = this;
      e.autoPlayClear(),
        (e.touchObject = {}),
        e.cleanUpEvents(),
        a(".slick-cloned", e.$slider).detach(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow &&
          e.$prevArrow.length &&
          (e.$prevArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove()),
        e.$nextArrow &&
          e.$nextArrow.length &&
          (e.$nextArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove()),
        e.$slides &&
          (e.$slides
            .removeClass(
              "slick-slide slick-active slick-center slick-visible slick-current"
            )
            .removeAttr("aria-hidden")
            .removeAttr("data-slick-index")
            .each(function () {
              a(this).attr("style", a(this).data("originalStyling"));
            }),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slideTrack.detach(),
          e.$list.detach(),
          e.$slider.append(e.$slides)),
        e.cleanUpRows(),
        e.$slider.removeClass("slick-slider"),
        e.$slider.removeClass("slick-initialized"),
        e.$slider.removeClass("slick-dotted"),
        (e.unslicked = !0),
        i || e.$slider.trigger("destroy", [e]);
    }),
    (r.prototype.disableTransition = function (i) {
      var e = {};
      (e[this.transitionType] = ""),
        !1 === this.options.fade
          ? this.$slideTrack.css(e)
          : this.$slides.eq(i).css(e);
    }),
    (r.prototype.fadeSlide = function (i, e) {
      var t = this;
      !1 === t.cssTransitions
        ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
          t.$slides
            .eq(i)
            .animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
        : (t.applyTransition(i),
          t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
          e &&
            setTimeout(function () {
              t.disableTransition(i), e.call();
            }, t.options.speed));
    }),
    (r.prototype.fadeSlideOut = function (i) {
      var e = this;
      !1 === e.cssTransitions
        ? e.$slides
            .eq(i)
            .animate(
              { opacity: 0, zIndex: e.options.zIndex - 2 },
              e.options.speed,
              e.options.easing
            )
        : (e.applyTransition(i),
          e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
    }),
    (r.prototype.filterSlides = r.prototype.slickFilter =
      function (i) {
        var e = this;
        null !== i &&
          ((e.$slidesCache = e.$slides),
          e.unload(),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slidesCache.filter(i).appendTo(e.$slideTrack),
          e.reinit());
      }),
    (r.prototype.focusHandler = function () {
      var t = this;
      t.$slider
        .off("focus.slick blur.slick")
        .on("focus.slick blur.slick", "*", function (i) {
          i.stopImmediatePropagation();
          var e = a(this);
          setTimeout(function () {
            t.options.pauseOnFocus &&
              ((t.focussed = e.is(":focus")), t.autoPlay());
          }, 0);
        });
    }),
    (r.prototype.getCurrent = r.prototype.slickCurrentSlide =
      function () {
        return this.currentSlide;
      }),
    (r.prototype.getDotCount = function () {
      var i = this,
        e = 0,
        t = 0,
        o = 0;
      if (!0 === i.options.infinite)
        if (i.slideCount <= i.options.slidesToShow) ++o;
        else
          for (; e < i.slideCount; )
            ++o,
              (e = t + i.options.slidesToScroll),
              (t +=
                i.options.slidesToScroll <= i.options.slidesToShow
                  ? i.options.slidesToScroll
                  : i.options.slidesToShow);
      else if (!0 === i.options.centerMode) o = i.slideCount;
      else if (i.options.asNavFor)
        for (; e < i.slideCount; )
          ++o,
            (e = t + i.options.slidesToScroll),
            (t +=
              i.options.slidesToScroll <= i.options.slidesToShow
                ? i.options.slidesToScroll
                : i.options.slidesToShow);
      else
        o =
          1 +
          Math.ceil(
            (i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll
          );
      return o - 1;
    }),
    (r.prototype.getLeft = function (i) {
      var e,
        t,
        o,
        s,
        n = this,
        r = 0;
      return (
        (n.slideOffset = 0),
        (t = n.$slides.first().outerHeight(!0)),
        !0 === n.options.infinite
          ? (n.slideCount > n.options.slidesToShow &&
              ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
              (s = -1),
              !0 === n.options.vertical &&
                !0 === n.options.centerMode &&
                (2 === n.options.slidesToShow
                  ? (s = -1.5)
                  : 1 === n.options.slidesToShow && (s = -2)),
              (r = t * n.options.slidesToShow * s)),
            n.slideCount % n.options.slidesToScroll != 0 &&
              i + n.options.slidesToScroll > n.slideCount &&
              n.slideCount > n.options.slidesToShow &&
              (r =
                i > n.slideCount
                  ? ((n.slideOffset =
                      (n.options.slidesToShow - (i - n.slideCount)) *
                      n.slideWidth *
                      -1),
                    (n.options.slidesToShow - (i - n.slideCount)) * t * -1)
                  : ((n.slideOffset =
                      (n.slideCount % n.options.slidesToScroll) *
                      n.slideWidth *
                      -1),
                    (n.slideCount % n.options.slidesToScroll) * t * -1)))
          : i + n.options.slidesToShow > n.slideCount &&
            ((n.slideOffset =
              (i + n.options.slidesToShow - n.slideCount) * n.slideWidth),
            (r = (i + n.options.slidesToShow - n.slideCount) * t)),
        n.slideCount <= n.options.slidesToShow && (r = n.slideOffset = 0),
        !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow
          ? (n.slideOffset =
              (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 -
              (n.slideWidth * n.slideCount) / 2)
          : !0 === n.options.centerMode && !0 === n.options.infinite
          ? (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2) -
              n.slideWidth)
          : !0 === n.options.centerMode &&
            ((n.slideOffset = 0),
            (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
        (e =
          !1 === n.options.vertical
            ? i * n.slideWidth * -1 + n.slideOffset
            : i * t * -1 + r),
        !0 === n.options.variableWidth &&
          ((o =
            n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite
              ? n.$slideTrack.children(".slick-slide").eq(i)
              : n.$slideTrack
                  .children(".slick-slide")
                  .eq(i + n.options.slidesToShow)),
          (e =
            !0 === n.options.rtl
              ? o[0]
                ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                : 0
              : o[0]
              ? -1 * o[0].offsetLeft
              : 0),
          !0 === n.options.centerMode &&
            ((o =
              n.slideCount <= n.options.slidesToShow ||
              !1 === n.options.infinite
                ? n.$slideTrack.children(".slick-slide").eq(i)
                : n.$slideTrack
                    .children(".slick-slide")
                    .eq(i + n.options.slidesToShow + 1)),
            (e =
              !0 === n.options.rtl
                ? o[0]
                  ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                  : 0
                : o[0]
                ? -1 * o[0].offsetLeft
                : 0),
            (e += (n.$list.width() - o.outerWidth()) / 2))),
        e
      );
    }),
    (r.prototype.getOption = r.prototype.slickGetOption =
      function (i) {
        return this.options[i];
      }),
    (r.prototype.getNavigableIndexes = function () {
      var i,
        e = this,
        t = 0,
        o = 0,
        s = [];
      for (
        i =
          !1 === e.options.infinite
            ? e.slideCount
            : ((t = -1 * e.options.slidesToScroll),
              (o = -1 * e.options.slidesToScroll),
              2 * e.slideCount);
        t < i;

      )
        s.push(t),
          (t = o + e.options.slidesToScroll),
          (o +=
            e.options.slidesToScroll <= e.options.slidesToShow
              ? e.options.slidesToScroll
              : e.options.slidesToShow);
      return s;
    }),
    (r.prototype.getSlick = function () {
      return this;
    }),
    (r.prototype.getSlideCount = function () {
      var t,
        o,
        s = this;
      return (
        (o =
          !0 === s.options.centerMode
            ? s.slideWidth * Math.floor(s.options.slidesToShow / 2)
            : 0),
        !0 === s.options.swipeToSlide
          ? (s.$slideTrack.find(".slick-slide").each(function (i, e) {
              if (e.offsetLeft - o + a(e).outerWidth() / 2 > -1 * s.swipeLeft)
                return (t = e), !1;
            }),
            Math.abs(a(t).attr("data-slick-index") - s.currentSlide) || 1)
          : s.options.slidesToScroll
      );
    }),
    (r.prototype.goTo = r.prototype.slickGoTo =
      function (i, e) {
        this.changeSlide({ data: { message: "index", index: parseInt(i) } }, e);
      }),
    (r.prototype.init = function (i) {
      var e = this;
      a(e.$slider).hasClass("slick-initialized") ||
        (a(e.$slider).addClass("slick-initialized"),
        e.buildRows(),
        e.buildOut(),
        e.setProps(),
        e.startLoad(),
        e.loadSlider(),
        e.initializeEvents(),
        e.updateArrows(),
        e.updateDots(),
        e.checkResponsive(!0),
        e.focusHandler()),
        i && e.$slider.trigger("init", [e]),
        !0 === e.options.accessibility && e.initADA(),
        e.options.autoplay && ((e.paused = !1), e.autoPlay());
    }),
    (r.prototype.initADA = function () {
      var t = this,
        o = Math.ceil(t.slideCount / t.options.slidesToShow),
        s = t.getNavigableIndexes().filter(function (i) {
          return 0 <= i && i < t.slideCount;
        });
      t.$slides
        .add(t.$slideTrack.find(".slick-cloned"))
        .attr({ "aria-hidden": "true", tabindex: "-1" })
        .find("a, input, button, select")
        .attr({ tabindex: "-1" }),
        null !== t.$dots &&
          (t.$slides
            .not(t.$slideTrack.find(".slick-cloned"))
            .each(function (i) {
              var e = s.indexOf(i);
              a(this).attr({
                role: "tabpanel",
                id: "slick-slide" + t.instanceUid + i,
                tabindex: -1,
              }),
                -1 !== e &&
                  a(this).attr({
                    "aria-describedby":
                      "slick-slide-control" + t.instanceUid + e,
                  });
            }),
          t.$dots
            .attr("role", "tablist")
            .find("li")
            .each(function (i) {
              var e = s[i];
              a(this).attr({ role: "presentation" }),
                a(this)
                  .find("button")
                  .first()
                  .attr({
                    role: "tab",
                    id: "slick-slide-control" + t.instanceUid + i,
                    "aria-controls": "slick-slide" + t.instanceUid + e,
                    "aria-label": i + 1 + " of " + o,
                    "aria-selected": null,
                    tabindex: "-1",
                  });
            })
            .eq(t.currentSlide)
            .find("button")
            .attr({ "aria-selected": "true", tabindex: "0" })
            .end());
      for (var i = t.currentSlide, e = i + t.options.slidesToShow; i < e; i++)
        t.$slides.eq(i).attr("tabindex", 0);
      t.activateADA();
    }),
    (r.prototype.initArrowEvents = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow
          .off("click.slick")
          .on("click.slick", { message: "previous" }, i.changeSlide),
        i.$nextArrow
          .off("click.slick")
          .on("click.slick", { message: "next" }, i.changeSlide),
        !0 === i.options.accessibility &&
          (i.$prevArrow.on("keydown.slick", i.keyHandler),
          i.$nextArrow.on("keydown.slick", i.keyHandler)));
    }),
    (r.prototype.initDotEvents = function () {
      var i = this;
      !0 === i.options.dots &&
        (a("li", i.$dots).on(
          "click.slick",
          { message: "index" },
          i.changeSlide
        ),
        !0 === i.options.accessibility &&
          i.$dots.on("keydown.slick", i.keyHandler)),
        !0 === i.options.dots &&
          !0 === i.options.pauseOnDotsHover &&
          a("li", i.$dots)
            .on("mouseenter.slick", a.proxy(i.interrupt, i, !0))
            .on("mouseleave.slick", a.proxy(i.interrupt, i, !1));
    }),
    (r.prototype.initSlideEvents = function () {
      var i = this;
      i.options.pauseOnHover &&
        (i.$list.on("mouseenter.slick", a.proxy(i.interrupt, i, !0)),
        i.$list.on("mouseleave.slick", a.proxy(i.interrupt, i, !1)));
    }),
    (r.prototype.initializeEvents = function () {
      var i = this;
      i.initArrowEvents(),
        i.initDotEvents(),
        i.initSlideEvents(),
        i.$list.on(
          "touchstart.slick mousedown.slick",
          { action: "start" },
          i.swipeHandler
        ),
        i.$list.on(
          "touchmove.slick mousemove.slick",
          { action: "move" },
          i.swipeHandler
        ),
        i.$list.on(
          "touchend.slick mouseup.slick",
          { action: "end" },
          i.swipeHandler
        ),
        i.$list.on(
          "touchcancel.slick mouseleave.slick",
          { action: "end" },
          i.swipeHandler
        ),
        i.$list.on("click.slick", i.clickHandler),
        a(document).on(i.visibilityChange, a.proxy(i.visibility, i)),
        !0 === i.options.accessibility &&
          i.$list.on("keydown.slick", i.keyHandler),
        !0 === i.options.focusOnSelect &&
          a(i.$slideTrack).children().on("click.slick", i.selectHandler),
        a(window).on(
          "orientationchange.slick.slick-" + i.instanceUid,
          a.proxy(i.orientationChange, i)
        ),
        a(window).on(
          "resize.slick.slick-" + i.instanceUid,
          a.proxy(i.resize, i)
        ),
        a("[draggable!=true]", i.$slideTrack).on("dragstart", i.preventDefault),
        a(window).on("load.slick.slick-" + i.instanceUid, i.setPosition),
        a(i.setPosition);
    }),
    (r.prototype.initUI = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.show(), i.$nextArrow.show()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.show();
    }),
    (r.prototype.keyHandler = function (i) {
      var e = this;
      i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
        (37 === i.keyCode && !0 === e.options.accessibility
          ? e.changeSlide({
              data: { message: !0 === e.options.rtl ? "next" : "previous" },
            })
          : 39 === i.keyCode &&
            !0 === e.options.accessibility &&
            e.changeSlide({
              data: { message: !0 === e.options.rtl ? "previous" : "next" },
            }));
    }),
    (r.prototype.lazyLoad = function () {
      function i(i) {
        a("img[data-lazy]", i).each(function () {
          var i = a(this),
            e = a(this).attr("data-lazy"),
            t = a(this).attr("data-srcset"),
            o = a(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
            s = document.createElement("img");
          (s.onload = function () {
            i.animate({ opacity: 0 }, 100, function () {
              t && (i.attr("srcset", t), o && i.attr("sizes", o)),
                i.attr("src", e).animate({ opacity: 1 }, 200, function () {
                  i.removeAttr("data-lazy data-srcset data-sizes").removeClass(
                    "slick-loading"
                  );
                }),
                n.$slider.trigger("lazyLoaded", [n, i, e]);
            });
          }),
            (s.onerror = function () {
              i
                .removeAttr("data-lazy")
                .removeClass("slick-loading")
                .addClass("slick-lazyload-error"),
                n.$slider.trigger("lazyLoadError", [n, i, e]);
            }),
            (s.src = e);
        });
      }
      var e,
        t,
        o,
        n = this;
      if (
        (!0 === n.options.centerMode
          ? (o =
              !0 === n.options.infinite
                ? (t = n.currentSlide + (n.options.slidesToShow / 2 + 1)) +
                  n.options.slidesToShow +
                  2
                : ((t = Math.max(
                    0,
                    n.currentSlide - (n.options.slidesToShow / 2 + 1)
                  )),
                  n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide))
          : ((t = n.options.infinite
              ? n.options.slidesToShow + n.currentSlide
              : n.currentSlide),
            (o = Math.ceil(t + n.options.slidesToShow)),
            !0 === n.options.fade && (0 < t && t--, o <= n.slideCount && o++)),
        (e = n.$slider.find(".slick-slide").slice(t, o)),
        "anticipated" === n.options.lazyLoad)
      )
        for (
          var s = t - 1, r = o, l = n.$slider.find(".slick-slide"), d = 0;
          d < n.options.slidesToScroll;
          d++
        )
          s < 0 && (s = n.slideCount - 1),
            (e = (e = e.add(l.eq(s))).add(l.eq(r))),
            s--,
            r++;
      i(e),
        n.slideCount <= n.options.slidesToShow
          ? i(n.$slider.find(".slick-slide"))
          : n.currentSlide >= n.slideCount - n.options.slidesToShow
          ? i(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow))
          : 0 === n.currentSlide &&
            i(
              n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow)
            );
    }),
    (r.prototype.loadSlider = function () {
      var i = this;
      i.setPosition(),
        i.$slideTrack.css({ opacity: 1 }),
        i.$slider.removeClass("slick-loading"),
        i.initUI(),
        "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
    }),
    (r.prototype.next = r.prototype.slickNext =
      function () {
        this.changeSlide({ data: { message: "next" } });
      }),
    (r.prototype.orientationChange = function () {
      this.checkResponsive(), this.setPosition();
    }),
    (r.prototype.pause = r.prototype.slickPause =
      function () {
        this.autoPlayClear(), (this.paused = !0);
      }),
    (r.prototype.play = r.prototype.slickPlay =
      function () {
        var i = this;
        i.autoPlay(),
          (i.options.autoplay = !0),
          (i.paused = !1),
          (i.focussed = !1),
          (i.interrupted = !1);
      }),
    (r.prototype.postSlide = function (i) {
      var e = this;
      e.unslicked ||
        (e.$slider.trigger("afterChange", [e, i]),
        (e.animating = !1),
        e.slideCount > e.options.slidesToShow && e.setPosition(),
        (e.swipeLeft = null),
        e.options.autoplay && e.autoPlay(),
        !0 === e.options.accessibility &&
          (e.initADA(),
          e.options.focusOnChange &&
            a(e.$slides.get(e.currentSlide)).attr("tabindex", 0).focus()));
    }),
    (r.prototype.prev = r.prototype.slickPrev =
      function () {
        this.changeSlide({ data: { message: "previous" } });
      }),
    (r.prototype.preventDefault = function (i) {
      i.preventDefault();
    }),
    (r.prototype.progressiveLazyLoad = function (i) {
      i = i || 1;
      var e,
        t,
        o,
        s,
        n,
        r = this,
        l = a("img[data-lazy]", r.$slider);
      l.length
        ? ((e = l.first()),
          (t = e.attr("data-lazy")),
          (o = e.attr("data-srcset")),
          (s = e.attr("data-sizes") || r.$slider.attr("data-sizes")),
          ((n = document.createElement("img")).onload = function () {
            o && (e.attr("srcset", o), s && e.attr("sizes", s)),
              e
                .attr("src", t)
                .removeAttr("data-lazy data-srcset data-sizes")
                .removeClass("slick-loading"),
              !0 === r.options.adaptiveHeight && r.setPosition(),
              r.$slider.trigger("lazyLoaded", [r, e, t]),
              r.progressiveLazyLoad();
          }),
          (n.onerror = function () {
            i < 3
              ? setTimeout(function () {
                  r.progressiveLazyLoad(i + 1);
                }, 500)
              : (e
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                r.$slider.trigger("lazyLoadError", [r, e, t]),
                r.progressiveLazyLoad());
          }),
          (n.src = t))
        : r.$slider.trigger("allImagesLoaded", [r]);
    }),
    (r.prototype.refresh = function (i) {
      var e,
        t,
        o = this;
      (t = o.slideCount - o.options.slidesToShow),
        !o.options.infinite && o.currentSlide > t && (o.currentSlide = t),
        o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
        (e = o.currentSlide),
        o.destroy(!0),
        a.extend(o, o.initials, { currentSlide: e }),
        o.init(),
        i || o.changeSlide({ data: { message: "index", index: e } }, !1);
    }),
    (r.prototype.registerBreakpoints = function () {
      var i,
        e,
        t,
        o = this,
        s = o.options.responsive || null;
      if ("array" === a.type(s) && s.length) {
        for (i in ((o.respondTo = o.options.respondTo || "window"), s))
          if (((t = o.breakpoints.length - 1), s.hasOwnProperty(i))) {
            for (e = s[i].breakpoint; 0 <= t; )
              o.breakpoints[t] &&
                o.breakpoints[t] === e &&
                o.breakpoints.splice(t, 1),
                t--;
            o.breakpoints.push(e), (o.breakpointSettings[e] = s[i].settings);
          }
        o.breakpoints.sort(function (i, e) {
          return o.options.mobileFirst ? i - e : e - i;
        });
      }
    }),
    (r.prototype.reinit = function () {
      var i = this;
      (i.$slides = i.$slideTrack
        .children(i.options.slide)
        .addClass("slick-slide")),
        (i.slideCount = i.$slides.length),
        i.currentSlide >= i.slideCount &&
          0 !== i.currentSlide &&
          (i.currentSlide = i.currentSlide - i.options.slidesToScroll),
        i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0),
        i.registerBreakpoints(),
        i.setProps(),
        i.setupInfinite(),
        i.buildArrows(),
        i.updateArrows(),
        i.initArrowEvents(),
        i.buildDots(),
        i.updateDots(),
        i.initDotEvents(),
        i.cleanUpSlideEvents(),
        i.initSlideEvents(),
        i.checkResponsive(!1, !0),
        !0 === i.options.focusOnSelect &&
          a(i.$slideTrack).children().on("click.slick", i.selectHandler),
        i.setSlideClasses(
          "number" == typeof i.currentSlide ? i.currentSlide : 0
        ),
        i.setPosition(),
        i.focusHandler(),
        (i.paused = !i.options.autoplay),
        i.autoPlay(),
        i.$slider.trigger("reInit", [i]);
    }),
    (r.prototype.resize = function () {
      var i = this;
      a(window).width() !== i.windowWidth &&
        (clearTimeout(i.windowDelay),
        (i.windowDelay = window.setTimeout(function () {
          (i.windowWidth = a(window).width()),
            i.checkResponsive(),
            i.unslicked || i.setPosition();
        }, 50)));
    }),
    (r.prototype.removeSlide = r.prototype.slickRemove =
      function (i, e, t) {
        var o = this;
        if (
          ((i =
            "boolean" == typeof i
              ? !0 === (e = i)
                ? 0
                : o.slideCount - 1
              : !0 === e
              ? --i
              : i),
          o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
        )
          return !1;
        o.unload(),
          !0 === t
            ? o.$slideTrack.children().remove()
            : o.$slideTrack.children(this.options.slide).eq(i).remove(),
          (o.$slides = o.$slideTrack.children(this.options.slide)),
          o.$slideTrack.children(this.options.slide).detach(),
          o.$slideTrack.append(o.$slides),
          (o.$slidesCache = o.$slides),
          o.reinit();
      }),
    (r.prototype.setCSS = function (i) {
      var e,
        t,
        o = this,
        s = {};
      !0 === o.options.rtl && (i = -i),
        (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (s[o.positionProp] = i),
        !1 === o.transformsEnabled ||
          (!(s = {}) === o.cssTransitions
            ? (s[o.animType] = "translate(" + e + ", " + t + ")")
            : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)")),
        o.$slideTrack.css(s);
    }),
    (r.prototype.setDimensions = function () {
      var i = this;
      !1 === i.options.vertical
        ? !0 === i.options.centerMode &&
          i.$list.css({ padding: "0px " + i.options.centerPadding })
        : (i.$list.height(
            i.$slides.first().outerHeight(!0) * i.options.slidesToShow
          ),
          !0 === i.options.centerMode &&
            i.$list.css({ padding: i.options.centerPadding + " 0px" })),
        (i.listWidth = i.$list.width()),
        (i.listHeight = i.$list.height()),
        !1 === i.options.vertical && !1 === i.options.variableWidth
          ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)),
            i.$slideTrack.width(
              Math.ceil(
                i.slideWidth * i.$slideTrack.children(".slick-slide").length
              )
            ))
          : !0 === i.options.variableWidth
          ? i.$slideTrack.width(5e3 * i.slideCount)
          : ((i.slideWidth = Math.ceil(i.listWidth)),
            i.$slideTrack.height(
              Math.ceil(
                i.$slides.first().outerHeight(!0) *
                  i.$slideTrack.children(".slick-slide").length
              )
            ));
      var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
      !1 === i.options.variableWidth &&
        i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
    }),
    (r.prototype.setFade = function () {
      var t,
        o = this;
      o.$slides.each(function (i, e) {
        (t = o.slideWidth * i * -1),
          !0 === o.options.rtl
            ? a(e).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: o.options.zIndex - 2,
                opacity: 0,
              })
            : a(e).css({
                position: "relative",
                left: t,
                top: 0,
                zIndex: o.options.zIndex - 2,
                opacity: 0,
              });
      }),
        o.$slides
          .eq(o.currentSlide)
          .css({ zIndex: o.options.zIndex - 1, opacity: 1 });
    }),
    (r.prototype.setHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.css("height", e);
      }
    }),
    (r.prototype.setOption = r.prototype.slickSetOption =
      function () {
        var i,
          e,
          t,
          o,
          s,
          n = this,
          r = !1;
        if (
          ("object" === a.type(arguments[0])
            ? ((t = arguments[0]), (r = arguments[1]), (s = "multiple"))
            : "string" === a.type(arguments[0]) &&
              ((o = arguments[1]),
              (r = arguments[2]),
              "responsive" === (t = arguments[0]) &&
              "array" === a.type(arguments[1])
                ? (s = "responsive")
                : void 0 !== arguments[1] && (s = "single")),
          "single" === s)
        )
          n.options[t] = o;
        else if ("multiple" === s)
          a.each(t, function (i, e) {
            n.options[i] = e;
          });
        else if ("responsive" === s)
          for (e in o)
            if ("array" !== a.type(n.options.responsive))
              n.options.responsive = [o[e]];
            else {
              for (i = n.options.responsive.length - 1; 0 <= i; )
                n.options.responsive[i].breakpoint === o[e].breakpoint &&
                  n.options.responsive.splice(i, 1),
                  i--;
              n.options.responsive.push(o[e]);
            }
        r && (n.unload(), n.reinit());
      }),
    (r.prototype.setPosition = function () {
      var i = this;
      i.setDimensions(),
        i.setHeight(),
        !1 === i.options.fade
          ? i.setCSS(i.getLeft(i.currentSlide))
          : i.setFade(),
        i.$slider.trigger("setPosition", [i]);
    }),
    (r.prototype.setProps = function () {
      var i = this,
        e = document.body.style;
      (i.positionProp = !0 === i.options.vertical ? "top" : "left"),
        "top" === i.positionProp
          ? i.$slider.addClass("slick-vertical")
          : i.$slider.removeClass("slick-vertical"),
        (void 0 === e.WebkitTransition &&
          void 0 === e.MozTransition &&
          void 0 === e.msTransition) ||
          (!0 === i.options.useCSS && (i.cssTransitions = !0)),
        i.options.fade &&
          ("number" == typeof i.options.zIndex
            ? i.options.zIndex < 3 && (i.options.zIndex = 3)
            : (i.options.zIndex = i.defaults.zIndex)),
        void 0 !== e.OTransform &&
          ((i.animType = "OTransform"),
          (i.transformType = "-o-transform"),
          (i.transitionType = "OTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.MozTransform &&
          ((i.animType = "MozTransform"),
          (i.transformType = "-moz-transform"),
          (i.transitionType = "MozTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.MozPerspective &&
            (i.animType = !1)),
        void 0 !== e.webkitTransform &&
          ((i.animType = "webkitTransform"),
          (i.transformType = "-webkit-transform"),
          (i.transitionType = "webkitTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.msTransform &&
          ((i.animType = "msTransform"),
          (i.transformType = "-ms-transform"),
          (i.transitionType = "msTransition"),
          void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform &&
          !1 !== i.animType &&
          ((i.animType = "transform"),
          (i.transformType = "transform"),
          (i.transitionType = "transition")),
        (i.transformsEnabled =
          i.options.useTransform && null !== i.animType && !1 !== i.animType);
    }),
    (r.prototype.setSlideClasses = function (i) {
      var e,
        t,
        o,
        s,
        n = this;
      if (
        ((t = n.$slider
          .find(".slick-slide")
          .removeClass("slick-active slick-center slick-current")
          .attr("aria-hidden", "true")),
        n.$slides.eq(i).addClass("slick-current"),
        !0 === n.options.centerMode)
      ) {
        var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
        (e = Math.floor(n.options.slidesToShow / 2)),
          !0 === n.options.infinite &&
            (e <= i && i <= n.slideCount - 1 - e
              ? n.$slides
                  .slice(i - e + r, i + e + 1)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : ((o = n.options.slidesToShow + i),
                t
                  .slice(o - e + 1 + r, o + e + 2)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")),
            0 === i
              ? t
                  .eq(t.length - 1 - n.options.slidesToShow)
                  .addClass("slick-center")
              : i === n.slideCount - 1 &&
                t.eq(n.options.slidesToShow).addClass("slick-center")),
          n.$slides.eq(i).addClass("slick-center");
      } else
        0 <= i && i <= n.slideCount - n.options.slidesToShow
          ? n.$slides
              .slice(i, i + n.options.slidesToShow)
              .addClass("slick-active")
              .attr("aria-hidden", "false")
          : t.length <= n.options.slidesToShow
          ? t.addClass("slick-active").attr("aria-hidden", "false")
          : ((s = n.slideCount % n.options.slidesToShow),
            (o = !0 === n.options.infinite ? n.options.slidesToShow + i : i),
            n.options.slidesToShow == n.options.slidesToScroll &&
            n.slideCount - i < n.options.slidesToShow
              ? t
                  .slice(o - (n.options.slidesToShow - s), o + s)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : t
                  .slice(o, o + n.options.slidesToShow)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false"));
      ("ondemand" !== n.options.lazyLoad &&
        "anticipated" !== n.options.lazyLoad) ||
        n.lazyLoad();
    }),
    (r.prototype.setupInfinite = function () {
      var i,
        e,
        t,
        o = this;
      if (
        (!0 === o.options.fade && (o.options.centerMode = !1),
        !0 === o.options.infinite &&
          !1 === o.options.fade &&
          ((e = null), o.slideCount > o.options.slidesToShow))
      ) {
        for (
          t =
            !0 === o.options.centerMode
              ? o.options.slidesToShow + 1
              : o.options.slidesToShow,
            i = o.slideCount;
          i > o.slideCount - t;
          i -= 1
        )
          (e = i - 1),
            a(o.$slides[e])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", e - o.slideCount)
              .prependTo(o.$slideTrack)
              .addClass("slick-cloned");
        for (i = 0; i < t + o.slideCount; i += 1)
          (e = i),
            a(o.$slides[e])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", e + o.slideCount)
              .appendTo(o.$slideTrack)
              .addClass("slick-cloned");
        o.$slideTrack
          .find(".slick-cloned")
          .find("[id]")
          .each(function () {
            a(this).attr("id", "");
          });
      }
    }),
    (r.prototype.interrupt = function (i) {
      i || this.autoPlay(), (this.interrupted = i);
    }),
    (r.prototype.selectHandler = function (i) {
      var e = a(i.target).is(".slick-slide")
          ? a(i.target)
          : a(i.target).parents(".slick-slide"),
        t = parseInt(e.attr("data-slick-index"));
      (t = t || 0),
        this.slideCount <= this.options.slidesToShow
          ? this.slideHandler(t, !1, !0)
          : this.slideHandler(t);
    }),
    (r.prototype.slideHandler = function (i, e, t) {
      var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;
      if (
        ((e = e || !1),
        !(
          (!0 === a.animating && !0 === a.options.waitForAnimate) ||
          (!0 === a.options.fade && a.currentSlide === i)
        ))
      )
        if (
          (!1 === e && a.asNavFor(i),
          (o = i),
          (d = a.getLeft(o)),
          (r = a.getLeft(a.currentSlide)),
          (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
          !1 === a.options.infinite &&
            !1 === a.options.centerMode &&
            (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else if (
          !1 === a.options.infinite &&
          !0 === a.options.centerMode &&
          (i < 0 || i > a.slideCount - a.options.slidesToScroll)
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else {
          if (
            (a.options.autoplay && clearInterval(a.autoPlayTimer),
            (s =
              o < 0
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                  : a.slideCount + o
                : o >= a.slideCount
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? 0
                  : o - a.slideCount
                : o),
            (a.animating = !0),
            a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
            (n = a.currentSlide),
            (a.currentSlide = s),
            a.setSlideClasses(a.currentSlide),
            a.options.asNavFor &&
              (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <=
                l.options.slidesToShow &&
              l.setSlideClasses(a.currentSlide),
            a.updateDots(),
            a.updateArrows(),
            !0 === a.options.fade)
          )
            return (
              !0 !== t
                ? (a.fadeSlideOut(n),
                  a.fadeSlide(s, function () {
                    a.postSlide(s);
                  }))
                : a.postSlide(s),
              void a.animateHeight()
            );
          !0 !== t
            ? a.animateSlide(d, function () {
                a.postSlide(s);
              })
            : a.postSlide(s);
        }
    }),
    (r.prototype.startLoad = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.hide(), i.$nextArrow.hide()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.hide(),
        i.$slider.addClass("slick-loading");
    }),
    (r.prototype.swipeDirection = function () {
      var i,
        e,
        t,
        o,
        s = this;
      return (
        (i = s.touchObject.startX - s.touchObject.curX),
        (e = s.touchObject.startY - s.touchObject.curY),
        (t = Math.atan2(e, i)),
        (o = Math.round((180 * t) / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && 0 <= o
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : o <= 360 && 315 <= o
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : 135 <= o && o <= 225
          ? !1 === s.options.rtl
            ? "right"
            : "left"
          : !0 === s.options.verticalSwiping
          ? 35 <= o && o <= 135
            ? "down"
            : "up"
          : "vertical"
      );
    }),
    (r.prototype.swipeEnd = function (i) {
      var e,
        t,
        o = this;
      if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
        return (o.scrolling = !1);
      if (
        ((o.interrupted = !1),
        (o.shouldClick = !(10 < o.touchObject.swipeLength)),
        void 0 === o.touchObject.curX)
      )
        return !1;
      if (
        (!0 === o.touchObject.edgeHit &&
          o.$slider.trigger("edge", [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe)
      ) {
        switch ((t = o.swipeDirection())) {
          case "left":
          case "down":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide + o.getSlideCount())
              : o.currentSlide + o.getSlideCount()),
              (o.currentDirection = 0);
            break;
          case "right":
          case "up":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide - o.getSlideCount())
              : o.currentSlide - o.getSlideCount()),
              (o.currentDirection = 1);
        }
        "vertical" != t &&
          (o.slideHandler(e),
          (o.touchObject = {}),
          o.$slider.trigger("swipe", [o, t]));
      } else
        o.touchObject.startX !== o.touchObject.curX &&
          (o.slideHandler(o.currentSlide), (o.touchObject = {}));
    }),
    (r.prototype.swipeHandler = function (i) {
      var e = this;
      if (
        !(
          !1 === e.options.swipe ||
          ("ontouchend" in document && !1 === e.options.swipe) ||
          (!1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))
        )
      )
        switch (
          ((e.touchObject.fingerCount =
            i.originalEvent && void 0 !== i.originalEvent.touches
              ? i.originalEvent.touches.length
              : 1),
          (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
          !0 === e.options.verticalSwiping &&
            (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
          i.data.action)
        ) {
          case "start":
            e.swipeStart(i);
            break;
          case "move":
            e.swipeMove(i);
            break;
          case "end":
            e.swipeEnd(i);
        }
    }),
    (r.prototype.swipeMove = function (i) {
      var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      return (
        (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
        !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
          ((e = l.getLeft(l.currentSlide)),
          (l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
          (l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
          (l.touchObject.swipeLength = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))
          )),
          (r = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))
          )),
          !l.options.verticalSwiping && !l.swiping && 4 < r
            ? !(l.scrolling = !0)
            : (!0 === l.options.verticalSwiping &&
                (l.touchObject.swipeLength = r),
              (t = l.swipeDirection()),
              void 0 !== i.originalEvent &&
                4 < l.touchObject.swipeLength &&
                ((l.swiping = !0), i.preventDefault()),
              (s =
                (!1 === l.options.rtl ? 1 : -1) *
                (l.touchObject.curX > l.touchObject.startX ? 1 : -1)),
              !0 === l.options.verticalSwiping &&
                (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
              (o = l.touchObject.swipeLength),
              (l.touchObject.edgeHit = !1) === l.options.infinite &&
                ((0 === l.currentSlide && "right" === t) ||
                  (l.currentSlide >= l.getDotCount() && "left" === t)) &&
                ((o = l.touchObject.swipeLength * l.options.edgeFriction),
                (l.touchObject.edgeHit = !0)),
              !1 === l.options.vertical
                ? (l.swipeLeft = e + o * s)
                : (l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s),
              !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
              !0 !== l.options.fade &&
                !1 !== l.options.touchMove &&
                (!0 === l.animating
                  ? ((l.swipeLeft = null), !1)
                  : void l.setCSS(l.swipeLeft))))
      );
    }),
    (r.prototype.swipeStart = function (i) {
      var e,
        t = this;
      if (
        ((t.interrupted = !0),
        1 !== t.touchObject.fingerCount ||
          t.slideCount <= t.options.slidesToShow)
      )
        return !(t.touchObject = {});
      void 0 !== i.originalEvent &&
        void 0 !== i.originalEvent.touches &&
        (e = i.originalEvent.touches[0]),
        (t.touchObject.startX = t.touchObject.curX =
          void 0 !== e ? e.pageX : i.clientX),
        (t.touchObject.startY = t.touchObject.curY =
          void 0 !== e ? e.pageY : i.clientY),
        (t.dragging = !0);
    }),
    (r.prototype.unfilterSlides = r.prototype.slickUnfilter =
      function () {
        var i = this;
        null !== i.$slidesCache &&
          (i.unload(),
          i.$slideTrack.children(this.options.slide).detach(),
          i.$slidesCache.appendTo(i.$slideTrack),
          i.reinit());
      }),
    (r.prototype.unload = function () {
      var i = this;
      a(".slick-cloned", i.$slider).remove(),
        i.$dots && i.$dots.remove(),
        i.$prevArrow &&
          i.htmlExpr.test(i.options.prevArrow) &&
          i.$prevArrow.remove(),
        i.$nextArrow &&
          i.htmlExpr.test(i.options.nextArrow) &&
          i.$nextArrow.remove(),
        i.$slides
          .removeClass("slick-slide slick-active slick-visible slick-current")
          .attr("aria-hidden", "true")
          .css("width", "");
    }),
    (r.prototype.unslick = function (i) {
      this.$slider.trigger("unslick", [this, i]), this.destroy();
    }),
    (r.prototype.updateArrows = function () {
      var i = this;
      Math.floor(i.options.slidesToShow / 2),
        !0 === i.options.arrows &&
          i.slideCount > i.options.slidesToShow &&
          !i.options.infinite &&
          (i.$prevArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          i.$nextArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          0 === i.currentSlide
            ? (i.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$nextArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - i.options.slidesToShow &&
              !1 === i.options.centerMode
            ? (i.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - 1 &&
              !0 === i.options.centerMode &&
              (i.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false")));
    }),
    (r.prototype.updateDots = function () {
      var i = this;
      null !== i.$dots &&
        (i.$dots.find("li").removeClass("slick-active").end(),
        i.$dots
          .find("li")
          .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
          .addClass("slick-active"));
    }),
    (r.prototype.visibility = function () {
      this.options.autoplay &&
        (document[this.hidden]
          ? (this.interrupted = !0)
          : (this.interrupted = !1));
    }),
    (a.fn.slick = function () {
      var i,
        e,
        t = this,
        o = arguments[0],
        s = Array.prototype.slice.call(arguments, 1),
        n = t.length;
      for (i = 0; i < n; i++)
        if (
          ("object" == typeof o || void 0 === o
            ? (t[i].slick = new r(t[i], o))
            : (e = t[i].slick[o].apply(t[i].slick, s)),
          void 0 !== e)
        )
          return e;
      return t;
    });
});
!(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : "object" == typeof exports
    ? (module.exports = e)
    : e(jQuery);
})(function (h) {
  function t(e) {
    var t = e || window.event,
      o = v.call(arguments, 1),
      n = 0,
      a = 0,
      i = 0,
      l = 0,
      r = 0,
      s = 0;
    if (
      (((e = h.event.fix(t)).type = "mousewheel"),
      "detail" in t && (i = -1 * t.detail),
      "wheelDelta" in t && (i = t.wheelDelta),
      "wheelDeltaY" in t && (i = t.wheelDeltaY),
      "wheelDeltaX" in t && (a = -1 * t.wheelDeltaX),
      "axis" in t && t.axis === t.HORIZONTAL_AXIS && ((a = -1 * i), (i = 0)),
      (n = 0 === i ? a : i),
      "deltaY" in t && (n = i = -1 * t.deltaY),
      "deltaX" in t && ((a = t.deltaX), 0 === i && (n = -1 * a)),
      0 !== i || 0 !== a)
    ) {
      if (1 === t.deltaMode) {
        var c = h.data(this, "mousewheel-line-height");
        (n *= c), (i *= c), (a *= c);
      } else if (2 === t.deltaMode) {
        var d = h.data(this, "mousewheel-page-height");
        (n *= d), (i *= d), (a *= d);
      }
      if (
        ((l = Math.max(Math.abs(i), Math.abs(a))),
        (!g || l < g) && m(t, (g = l)) && (g /= 40),
        m(t, l) && ((n /= 40), (a /= 40), (i /= 40)),
        (n = Math[1 <= n ? "floor" : "ceil"](n / g)),
        (a = Math[1 <= a ? "floor" : "ceil"](a / g)),
        (i = Math[1 <= i ? "floor" : "ceil"](i / g)),
        x.settings.normalizeOffset && this.getBoundingClientRect)
      ) {
        var u = this.getBoundingClientRect();
        (r = e.clientX - u.left), (s = e.clientY - u.top);
      }
      return (
        (e.deltaX = a),
        (e.deltaY = i),
        (e.deltaFactor = g),
        (e.offsetX = r),
        (e.offsetY = s),
        (e.deltaMode = 0),
        o.unshift(e, n, a, i),
        p && clearTimeout(p),
        (p = setTimeout(f, 200)),
        (h.event.dispatch || h.event.handle).apply(this, o)
      );
    }
  }
  function f() {
    g = null;
  }
  function m(e, t) {
    return (
      x.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
    );
  }
  var p,
    g,
    e = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
    o =
      "onwheel" in document || 9 <= document.documentMode
        ? ["wheel"]
        : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
    v = Array.prototype.slice;
  if (h.event.fixHooks)
    for (var n = e.length; n; ) h.event.fixHooks[e[--n]] = h.event.mouseHooks;
  var x = (h.event.special.mousewheel = {
    version: "3.1.12",
    setup: function () {
      if (this.addEventListener)
        for (var e = o.length; e; ) this.addEventListener(o[--e], t, !1);
      else this.onmousewheel = t;
      h.data(this, "mousewheel-line-height", x.getLineHeight(this)),
        h.data(this, "mousewheel-page-height", x.getPageHeight(this));
    },
    teardown: function () {
      if (this.removeEventListener)
        for (var e = o.length; e; ) this.removeEventListener(o[--e], t, !1);
      else this.onmousewheel = null;
      h.removeData(this, "mousewheel-line-height"),
        h.removeData(this, "mousewheel-page-height");
    },
    getLineHeight: function (e) {
      var t = h(e),
        o = t["offsetParent" in h.fn ? "offsetParent" : "parent"]();
      return (
        o.length || (o = h("body")),
        parseInt(o.css("fontSize"), 10) || parseInt(t.css("fontSize"), 10) || 16
      );
    },
    getPageHeight: function (e) {
      return h(e).height();
    },
    settings: { adjustOldDeltas: !0, normalizeOffset: !0 },
  });
  h.fn.extend({
    mousewheel: function (e) {
      return e ? this.bind("mousewheel", e) : this.trigger("mousewheel");
    },
    unmousewheel: function (e) {
      return this.unbind("mousewheel", e);
    },
  });
}),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "object" == typeof exports
      ? (module.exports = e)
      : e(jQuery);
  })(function (h) {
    function t(e) {
      var t = e || window.event,
        o = v.call(arguments, 1),
        n = 0,
        a = 0,
        i = 0,
        l = 0,
        r = 0,
        s = 0;
      if (
        (((e = h.event.fix(t)).type = "mousewheel"),
        "detail" in t && (i = -1 * t.detail),
        "wheelDelta" in t && (i = t.wheelDelta),
        "wheelDeltaY" in t && (i = t.wheelDeltaY),
        "wheelDeltaX" in t && (a = -1 * t.wheelDeltaX),
        "axis" in t && t.axis === t.HORIZONTAL_AXIS && ((a = -1 * i), (i = 0)),
        (n = 0 === i ? a : i),
        "deltaY" in t && (n = i = -1 * t.deltaY),
        "deltaX" in t && ((a = t.deltaX), 0 === i && (n = -1 * a)),
        0 !== i || 0 !== a)
      ) {
        if (1 === t.deltaMode) {
          var c = h.data(this, "mousewheel-line-height");
          (n *= c), (i *= c), (a *= c);
        } else if (2 === t.deltaMode) {
          var d = h.data(this, "mousewheel-page-height");
          (n *= d), (i *= d), (a *= d);
        }
        if (
          ((l = Math.max(Math.abs(i), Math.abs(a))),
          (!g || l < g) && m(t, (g = l)) && (g /= 40),
          m(t, l) && ((n /= 40), (a /= 40), (i /= 40)),
          (n = Math[1 <= n ? "floor" : "ceil"](n / g)),
          (a = Math[1 <= a ? "floor" : "ceil"](a / g)),
          (i = Math[1 <= i ? "floor" : "ceil"](i / g)),
          x.settings.normalizeOffset && this.getBoundingClientRect)
        ) {
          var u = this.getBoundingClientRect();
          (r = e.clientX - u.left), (s = e.clientY - u.top);
        }
        return (
          (e.deltaX = a),
          (e.deltaY = i),
          (e.deltaFactor = g),
          (e.offsetX = r),
          (e.offsetY = s),
          (e.deltaMode = 0),
          o.unshift(e, n, a, i),
          p && clearTimeout(p),
          (p = setTimeout(f, 200)),
          (h.event.dispatch || h.event.handle).apply(this, o)
        );
      }
    }
    function f() {
      g = null;
    }
    function m(e, t) {
      return (
        x.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
      );
    }
    var p,
      g,
      e = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
      o =
        "onwheel" in document || 9 <= document.documentMode
          ? ["wheel"]
          : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
      v = Array.prototype.slice;
    if (h.event.fixHooks)
      for (var n = e.length; n; ) h.event.fixHooks[e[--n]] = h.event.mouseHooks;
    var x = (h.event.special.mousewheel = {
      version: "3.1.12",
      setup: function () {
        if (this.addEventListener)
          for (var e = o.length; e; ) this.addEventListener(o[--e], t, !1);
        else this.onmousewheel = t;
        h.data(this, "mousewheel-line-height", x.getLineHeight(this)),
          h.data(this, "mousewheel-page-height", x.getPageHeight(this));
      },
      teardown: function () {
        if (this.removeEventListener)
          for (var e = o.length; e; ) this.removeEventListener(o[--e], t, !1);
        else this.onmousewheel = null;
        h.removeData(this, "mousewheel-line-height"),
          h.removeData(this, "mousewheel-page-height");
      },
      getLineHeight: function (e) {
        var t = h(e),
          o = t["offsetParent" in h.fn ? "offsetParent" : "parent"]();
        return (
          o.length || (o = h("body")),
          parseInt(o.css("fontSize"), 10) ||
            parseInt(t.css("fontSize"), 10) ||
            16
        );
      },
      getPageHeight: function (e) {
        return h(e).height();
      },
      settings: { adjustOldDeltas: !0, normalizeOffset: !0 },
    });
    h.fn.extend({
      mousewheel: function (e) {
        return e ? this.bind("mousewheel", e) : this.trigger("mousewheel");
      },
      unmousewheel: function (e) {
        return this.unbind("mousewheel", e);
      },
    });
  }),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "undefined" != typeof module && module.exports
      ? (module.exports = e)
      : e(jQuery, window, document);
  })(function (z) {
    var H,
      f,
      P,
      n,
      a,
      r,
      i,
      g,
      X,
      S,
      m,
      c,
      s,
      d,
      u,
      h,
      p,
      v,
      x,
      w,
      _,
      b,
      y,
      C,
      B,
      T,
      M,
      k,
      Y,
      l,
      D,
      O,
      I,
      E,
      j,
      L,
      R,
      A,
      W,
      U,
      F,
      q,
      N,
      V,
      Q,
      Z,
      G,
      J,
      K,
      $,
      ee,
      te,
      oe,
      ne,
      ae,
      ie,
      le,
      e,
      t,
      o;
    (e = "function" == typeof define && define.amd),
      (t = "undefined" != typeof module && module.exports),
      (o = "https:" == document.location.protocol ? "https:" : "http:"),
      e ||
        (t
          ? require("jquery-mousewheel")(z)
          : z.event.special.mousewheel ||
            z("head").append(
              decodeURI(
                "%3Cscript src=" +
                  o +
                  "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E"
              )
            )),
      (f = "mCustomScrollbar"),
      (P = "mCS"),
      (n = ".mCustomScrollbar"),
      (a = {
        setTop: 0,
        setLeft: 0,
        axis: "y",
        scrollbarPosition: "inside",
        scrollInertia: 950,
        autoDraggerLength: !0,
        alwaysShowScrollbar: 0,
        snapOffset: 0,
        mouseWheel: {
          enable: !0,
          scrollAmount: "auto",
          axis: "y",
          deltaFactor: "auto",
          disableOver: ["select", "option", "keygen", "datalist", "textarea"],
        },
        scrollButtons: { scrollType: "stepless", scrollAmount: "auto" },
        keyboard: { enable: !0, scrollType: "stepless", scrollAmount: "auto" },
        contentTouchScroll: 25,
        documentTouchScroll: !0,
        advanced: {
          autoScrollOnFocus:
            "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
          updateOnContentResize: !0,
          updateOnImageLoad: "auto",
          autoUpdateTimeout: 60,
        },
        theme: "light",
        callbacks: {
          onTotalScrollOffset: 0,
          onTotalScrollBackOffset: 0,
          alwaysTriggerOffsets: !0,
        },
      }),
      (r = 0),
      (i = {}),
      (g = window.attachEvent && !window.addEventListener ? 1 : 0),
      (X = !1),
      (S = [
        "mCSB_dragger_onDrag",
        "mCSB_scrollTools_onDrag",
        "mCS_img_loaded",
        "mCS_disabled",
        "mCS_destroyed",
        "mCS_no_scrollbar",
        "mCS-autoHide",
        "mCS-dir-rtl",
        "mCS_no_scrollbar_y",
        "mCS_no_scrollbar_x",
        "mCS_y_hidden",
        "mCS_x_hidden",
        "mCSB_draggerContainer",
        "mCSB_buttonUp",
        "mCSB_buttonDown",
        "mCSB_buttonLeft",
        "mCSB_buttonRight",
      ]),
      (m = {
        init: function (l) {
          var l = z.extend(!0, {}, a, l),
            e = c.call(this);
          if (l.live) {
            var t = l.liveSelector || this.selector || n,
              o = z(t);
            if ("off" === l.live) return void d(t);
            i[t] = setTimeout(function () {
              o.mCustomScrollbar(l), "once" === l.live && o.length && d(t);
            }, 500);
          } else d(t);
          return (
            (l.setWidth = l.set_width ? l.set_width : l.setWidth),
            (l.setHeight = l.set_height ? l.set_height : l.setHeight),
            (l.axis = l.horizontalScroll ? "x" : u(l.axis)),
            (l.scrollInertia =
              0 < l.scrollInertia && l.scrollInertia < 17
                ? 17
                : l.scrollInertia),
            "object" != typeof l.mouseWheel &&
              1 == l.mouseWheel &&
              (l.mouseWheel = {
                enable: !0,
                scrollAmount: "auto",
                axis: "y",
                preventDefault: !1,
                deltaFactor: "auto",
                normalizeDelta: !1,
                invert: !1,
              }),
            (l.mouseWheel.scrollAmount = l.mouseWheelPixels
              ? l.mouseWheelPixels
              : l.mouseWheel.scrollAmount),
            (l.mouseWheel.normalizeDelta = l.advanced.normalizeMouseWheelDelta
              ? l.advanced.normalizeMouseWheelDelta
              : l.mouseWheel.normalizeDelta),
            (l.scrollButtons.scrollType = h(l.scrollButtons.scrollType)),
            s(l),
            z(e).each(function () {
              var e = z(this);
              if (!e.data(P)) {
                e.data(P, {
                  idx: ++r,
                  opt: l,
                  scrollRatio: { y: null, x: null },
                  overflowed: null,
                  contentReset: { y: null, x: null },
                  bindEvents: !1,
                  tweenRunning: !1,
                  sequential: {},
                  langDir: e.css("direction"),
                  cbOffsets: null,
                  trigger: null,
                  poll: {
                    size: { o: 0, n: 0 },
                    img: { o: 0, n: 0 },
                    change: { o: 0, n: 0 },
                  },
                });
                var t = e.data(P),
                  o = t.opt,
                  n = e.data("mcs-axis"),
                  a = e.data("mcs-scrollbar-position"),
                  i = e.data("mcs-theme");
                n && (o.axis = n),
                  a && (o.scrollbarPosition = a),
                  i && ((o.theme = i), s(o)),
                  p.call(this),
                  t &&
                    o.callbacks.onCreate &&
                    "function" == typeof o.callbacks.onCreate &&
                    o.callbacks.onCreate.call(this),
                  z(
                    "#mCSB_" + t.idx + "_container img:not(." + S[2] + ")"
                  ).addClass(S[2]),
                  m.update.call(null, e);
              }
            })
          );
        },
        update: function (e, r) {
          var t = e || c.call(this);
          return z(t).each(function () {
            var e = z(this);
            if (e.data(P)) {
              var t = e.data(P),
                o = t.opt,
                n = z("#mCSB_" + t.idx + "_container"),
                a = z("#mCSB_" + t.idx),
                i = [
                  z("#mCSB_" + t.idx + "_dragger_vertical"),
                  z("#mCSB_" + t.idx + "_dragger_horizontal"),
                ];
              if (!n.length) return;
              t.tweenRunning && G(e),
                r &&
                  t &&
                  o.callbacks.onBeforeUpdate &&
                  "function" == typeof o.callbacks.onBeforeUpdate &&
                  o.callbacks.onBeforeUpdate.call(this),
                e.hasClass(S[3]) && e.removeClass(S[3]),
                e.hasClass(S[4]) && e.removeClass(S[4]),
                a.css("max-height", "none"),
                a.height() !== e.height() && a.css("max-height", e.height()),
                x.call(this),
                "y" === o.axis ||
                  o.advanced.autoExpandHorizontalScroll ||
                  n.css("width", v(n)),
                (t.overflowed = C.call(this)),
                k.call(this),
                o.autoDraggerLength && _.call(this),
                b.call(this),
                T.call(this);
              var l = [Math.abs(n[0].offsetTop), Math.abs(n[0].offsetLeft)];
              "x" !== o.axis &&
                (t.overflowed[0]
                  ? i[0].height() > i[0].parent().height()
                    ? B.call(this)
                    : (J(e, l[0].toString(), {
                        dir: "y",
                        dur: 0,
                        overwrite: "none",
                      }),
                      (t.contentReset.y = null))
                  : (B.call(this),
                    "y" === o.axis
                      ? M.call(this)
                      : "yx" === o.axis &&
                        t.overflowed[1] &&
                        J(e, l[1].toString(), {
                          dir: "x",
                          dur: 0,
                          overwrite: "none",
                        }))),
                "y" !== o.axis &&
                  (t.overflowed[1]
                    ? i[1].width() > i[1].parent().width()
                      ? B.call(this)
                      : (J(e, l[1].toString(), {
                          dir: "x",
                          dur: 0,
                          overwrite: "none",
                        }),
                        (t.contentReset.x = null))
                    : (B.call(this),
                      "x" === o.axis
                        ? M.call(this)
                        : "yx" === o.axis &&
                          t.overflowed[0] &&
                          J(e, l[0].toString(), {
                            dir: "y",
                            dur: 0,
                            overwrite: "none",
                          }))),
                r &&
                  t &&
                  (2 === r &&
                  o.callbacks.onImageLoad &&
                  "function" == typeof o.callbacks.onImageLoad
                    ? o.callbacks.onImageLoad.call(this)
                    : 3 === r &&
                      o.callbacks.onSelectorChange &&
                      "function" == typeof o.callbacks.onSelectorChange
                    ? o.callbacks.onSelectorChange.call(this)
                    : o.callbacks.onUpdate &&
                      "function" == typeof o.callbacks.onUpdate &&
                      o.callbacks.onUpdate.call(this)),
                Z.call(this);
            }
          });
        },
        scrollTo: function (r, s) {
          if (void 0 !== r && null != r) {
            var e = c.call(this);
            return z(e).each(function () {
              var e = z(this);
              if (e.data(P)) {
                var t = e.data(P),
                  o = t.opt,
                  n = {
                    trigger: "external",
                    scrollInertia: o.scrollInertia,
                    scrollEasing: "mcsEaseInOut",
                    moveDragger: !1,
                    timeout: 60,
                    callbacks: !0,
                    onStart: !0,
                    onUpdate: !0,
                    onComplete: !0,
                  },
                  a = z.extend(!0, {}, n, s),
                  i = V.call(this, r),
                  l =
                    0 < a.scrollInertia && a.scrollInertia < 17
                      ? 17
                      : a.scrollInertia;
                (i[0] = Q.call(this, i[0], "y")),
                  (i[1] = Q.call(this, i[1], "x")),
                  a.moveDragger &&
                    ((i[0] *= t.scrollRatio.y), (i[1] *= t.scrollRatio.x)),
                  (a.dur = le() ? 0 : l),
                  setTimeout(function () {
                    null !== i[0] &&
                      void 0 !== i[0] &&
                      "x" !== o.axis &&
                      t.overflowed[0] &&
                      ((a.dir = "y"),
                      (a.overwrite = "all"),
                      J(e, i[0].toString(), a)),
                      null !== i[1] &&
                        void 0 !== i[1] &&
                        "y" !== o.axis &&
                        t.overflowed[1] &&
                        ((a.dir = "x"),
                        (a.overwrite = "none"),
                        J(e, i[1].toString(), a));
                  }, a.timeout);
              }
            });
          }
        },
        stop: function () {
          var e = c.call(this);
          return z(e).each(function () {
            var e = z(this);
            e.data(P) && G(e);
          });
        },
        disable: function (t) {
          var e = c.call(this);
          return z(e).each(function () {
            var e = z(this);
            e.data(P) &&
              (e.data(P),
              Z.call(this, "remove"),
              M.call(this),
              t && B.call(this),
              k.call(this, !0),
              e.addClass(S[3]));
          });
        },
        destroy: function () {
          var l = c.call(this);
          return z(l).each(function () {
            var e = z(this);
            if (e.data(P)) {
              var t = e.data(P),
                o = t.opt,
                n = z("#mCSB_" + t.idx),
                a = z("#mCSB_" + t.idx + "_container"),
                i = z(".mCSB_" + t.idx + "_scrollbar");
              o.live && d(o.liveSelector || z(l).selector),
                Z.call(this, "remove"),
                M.call(this),
                B.call(this),
                e.removeData(P),
                te(this, "mcs"),
                i.remove(),
                a.find("img." + S[2]).removeClass(S[2]),
                n.replaceWith(a.contents()),
                e
                  .removeClass(
                    f +
                      " _" +
                      P +
                      "_" +
                      t.idx +
                      " " +
                      S[6] +
                      " " +
                      S[7] +
                      " " +
                      S[5] +
                      " " +
                      S[3]
                  )
                  .addClass(S[4]);
            }
          });
        },
      }),
      (c = function () {
        return "object" != typeof z(this) || z(this).length < 1 ? n : this;
      }),
      (s = function (e) {
        (e.autoDraggerLength =
          !(
            -1 <
            z.inArray(e.theme, [
              "rounded",
              "rounded-dark",
              "rounded-dots",
              "rounded-dots-dark",
            ])
          ) && e.autoDraggerLength),
          (e.autoExpandScrollbar =
            !(
              -1 <
              z.inArray(e.theme, [
                "rounded-dots",
                "rounded-dots-dark",
                "3d",
                "3d-dark",
                "3d-thick",
                "3d-thick-dark",
                "inset",
                "inset-dark",
                "inset-2",
                "inset-2-dark",
                "inset-3",
                "inset-3-dark",
              ])
            ) && e.autoExpandScrollbar),
          (e.scrollButtons.enable =
            !(-1 < z.inArray(e.theme, ["minimal", "minimal-dark"])) &&
            e.scrollButtons.enable),
          (e.autoHideScrollbar =
            -1 < z.inArray(e.theme, ["minimal", "minimal-dark"]) ||
            e.autoHideScrollbar),
          (e.scrollbarPosition =
            -1 < z.inArray(e.theme, ["minimal", "minimal-dark"])
              ? "outside"
              : e.scrollbarPosition);
      }),
      (d = function (e) {
        i[e] && (clearTimeout(i[e]), te(i, e));
      }),
      (u = function (e) {
        return "yx" === e || "xy" === e || "auto" === e
          ? "yx"
          : "x" === e || "horizontal" === e
          ? "x"
          : "y";
      }),
      (h = function (e) {
        return "stepped" === e ||
          "pixels" === e ||
          "step" === e ||
          "click" === e
          ? "stepped"
          : "stepless";
      }),
      (p = function () {
        var e = z(this),
          t = e.data(P),
          o = t.opt,
          n = o.autoExpandScrollbar ? " " + S[1] + "_expand" : "",
          a = [
            "<div id='mCSB_" +
              t.idx +
              "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" +
              t.idx +
              "_scrollbar mCS-" +
              o.theme +
              " mCSB_scrollTools_vertical" +
              n +
              "'><div class='" +
              S[12] +
              "'><div id='mCSB_" +
              t.idx +
              "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>",
            "<div id='mCSB_" +
              t.idx +
              "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" +
              t.idx +
              "_scrollbar mCS-" +
              o.theme +
              " mCSB_scrollTools_horizontal" +
              n +
              "'><div class='" +
              S[12] +
              "'><div id='mCSB_" +
              t.idx +
              "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>",
          ],
          i =
            "yx" === o.axis
              ? "mCSB_vertical_horizontal"
              : "x" === o.axis
              ? "mCSB_horizontal"
              : "mCSB_vertical",
          l = "yx" === o.axis ? a[0] + a[1] : "x" === o.axis ? a[1] : a[0],
          r =
            "yx" === o.axis
              ? "<div id='mCSB_" +
                t.idx +
                "_container_wrapper' class='mCSB_container_wrapper' />"
              : "",
          s = o.autoHideScrollbar ? " " + S[6] : "",
          c = "x" !== o.axis && "rtl" === t.langDir ? " " + S[7] : "";
        o.setWidth && e.css("width", o.setWidth),
          o.setHeight && e.css("height", o.setHeight),
          (o.setLeft =
            "y" !== o.axis && "rtl" === t.langDir ? "989999px" : o.setLeft),
          e
            .addClass(f + " _" + P + "_" + t.idx + s + c)
            .wrapInner(
              "<div id='mCSB_" +
                t.idx +
                "' class='mCustomScrollBox mCS-" +
                o.theme +
                " " +
                i +
                "'><div id='mCSB_" +
                t.idx +
                "_container' class='mCSB_container' style='position:relative; top:" +
                o.setTop +
                "; left:" +
                o.setLeft +
                ";' dir='" +
                t.langDir +
                "' /></div>"
            );
        var d = z("#mCSB_" + t.idx),
          u = z("#mCSB_" + t.idx + "_container");
        "y" === o.axis ||
          o.advanced.autoExpandHorizontalScroll ||
          u.css("width", v(u)),
          "outside" === o.scrollbarPosition
            ? ("static" === e.css("position") && e.css("position", "relative"),
              e.css("overflow", "visible"),
              d.addClass("mCSB_outside").after(l))
            : (d.addClass("mCSB_inside").append(l), u.wrap(r)),
          w.call(this);
        var h = [
          z("#mCSB_" + t.idx + "_dragger_vertical"),
          z("#mCSB_" + t.idx + "_dragger_horizontal"),
        ];
        h[0].css("min-height", h[0].height()),
          h[1].css("min-width", h[1].width());
      }),
      (v = function (e) {
        var t = [
            e[0].scrollWidth,
            Math.max.apply(
              Math,
              e
                .children()
                .map(function () {
                  return z(this).outerWidth(!0);
                })
                .get()
            ),
          ],
          o = e.parent().width();
        return o < t[0] ? t[0] : o < t[1] ? t[1] : "100%";
      }),
      (x = function () {
        var e = z(this),
          t = e.data(P),
          o = t.opt,
          n = z("#mCSB_" + t.idx + "_container");
        if (o.advanced.autoExpandHorizontalScroll && "y" !== o.axis) {
          n.css({ width: "auto", "min-width": 0, "overflow-x": "scroll" });
          var a = Math.ceil(n[0].scrollWidth);
          3 === o.advanced.autoExpandHorizontalScroll ||
          (2 !== o.advanced.autoExpandHorizontalScroll &&
            a > n.parent().width())
            ? n.css({ width: a, "min-width": "100%", "overflow-x": "inherit" })
            : n
                .css({ "overflow-x": "inherit", position: "absolute" })
                .wrap(
                  "<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />"
                )
                .css({
                  width:
                    Math.ceil(n[0].getBoundingClientRect().right + 0.4) -
                    Math.floor(n[0].getBoundingClientRect().left),
                  "min-width": "100%",
                  position: "relative",
                })
                .unwrap();
        }
      }),
      (w = function () {
        var e = z(this),
          t = e.data(P),
          o = t.opt,
          n = z(".mCSB_" + t.idx + "_scrollbar:first"),
          a = ae(o.scrollButtons.tabindex)
            ? "tabindex='" + o.scrollButtons.tabindex + "'"
            : "",
          i = [
            "<a href='#' class='" + S[13] + "' " + a + " />",
            "<a href='#' class='" + S[14] + "' " + a + " />",
            "<a href='#' class='" + S[15] + "' " + a + " />",
            "<a href='#' class='" + S[16] + "' " + a + " />",
          ],
          l = [
            "x" === o.axis ? i[2] : i[0],
            "x" === o.axis ? i[3] : i[1],
            i[2],
            i[3],
          ];
        o.scrollButtons.enable &&
          n
            .prepend(l[0])
            .append(l[1])
            .next(".mCSB_scrollTools")
            .prepend(l[2])
            .append(l[3]);
      }),
      (_ = function () {
        var e = z(this),
          t = e.data(P),
          o = z("#mCSB_" + t.idx),
          n = z("#mCSB_" + t.idx + "_container"),
          a = [
            z("#mCSB_" + t.idx + "_dragger_vertical"),
            z("#mCSB_" + t.idx + "_dragger_horizontal"),
          ],
          i = [o.height() / n.outerHeight(!1), o.width() / n.outerWidth(!1)],
          l = [
            parseInt(a[0].css("min-height")),
            Math.round(i[0] * a[0].parent().height()),
            parseInt(a[1].css("min-width")),
            Math.round(i[1] * a[1].parent().width()),
          ],
          r = g && l[1] < l[0] ? l[0] : l[1],
          s = g && l[3] < l[2] ? l[2] : l[3];
        a[0]
          .css({ height: r, "max-height": a[0].parent().height() - 10 })
          .find(".mCSB_dragger_bar")
          .css({ "line-height": l[0] + "px" }),
          a[1].css({ width: s, "max-width": a[1].parent().width() - 10 });
      }),
      (b = function () {
        var e = z(this),
          t = e.data(P),
          o = z("#mCSB_" + t.idx),
          n = z("#mCSB_" + t.idx + "_container"),
          a = [
            z("#mCSB_" + t.idx + "_dragger_vertical"),
            z("#mCSB_" + t.idx + "_dragger_horizontal"),
          ],
          i = [n.outerHeight(!1) - o.height(), n.outerWidth(!1) - o.width()],
          l = [
            i[0] / (a[0].parent().height() - a[0].height()),
            i[1] / (a[1].parent().width() - a[1].width()),
          ];
        t.scrollRatio = { y: l[0], x: l[1] };
      }),
      (y = function (e, t, o) {
        var n = o ? S[0] + "_expanded" : "",
          a = e.closest(".mCSB_scrollTools");
        "active" === t
          ? (e.toggleClass(S[0] + " " + n),
            a.toggleClass(S[1]),
            (e[0]._draggable = e[0]._draggable ? 0 : 1))
          : e[0]._draggable ||
            ("hide" === t
              ? (e.removeClass(S[0]), a.removeClass(S[1]))
              : (e.addClass(S[0]), a.addClass(S[1])));
      }),
      (C = function () {
        var e = z(this),
          t = e.data(P),
          o = z("#mCSB_" + t.idx),
          n = z("#mCSB_" + t.idx + "_container"),
          a = null == t.overflowed ? n.height() : n.outerHeight(!1),
          i = null == t.overflowed ? n.width() : n.outerWidth(!1),
          l = n[0].scrollHeight,
          r = n[0].scrollWidth;
        return (
          a < l && (a = l), i < r && (i = r), [a > o.height(), i > o.width()]
        );
      }),
      (B = function () {
        var e = z(this),
          t = e.data(P),
          o = t.opt,
          n = z("#mCSB_" + t.idx),
          a = z("#mCSB_" + t.idx + "_container"),
          i = [
            z("#mCSB_" + t.idx + "_dragger_vertical"),
            z("#mCSB_" + t.idx + "_dragger_horizontal"),
          ];
        if (
          (G(e),
          (("x" !== o.axis && !t.overflowed[0]) ||
            ("y" === o.axis && t.overflowed[0])) &&
            (i[0].add(a).css("top", 0), J(e, "_resetY")),
          ("y" !== o.axis && !t.overflowed[1]) ||
            ("x" === o.axis && t.overflowed[1]))
        ) {
          var l = (dx = 0);
          "rtl" === t.langDir &&
            ((l = n.width() - a.outerWidth(!1)),
            (dx = Math.abs(l / t.scrollRatio.x))),
            a.css("left", l),
            i[1].css("left", dx),
            J(e, "_resetX");
        }
      }),
      (T = function () {
        var t = z(this),
          e = t.data(P),
          o = e.opt;
        if (!e.bindEvents) {
          var n;
          if (
            (l.call(this),
            o.contentTouchScroll && D.call(this),
            O.call(this),
            o.mouseWheel.enable)
          )
            !(function e() {
              n = setTimeout(function () {
                z.event.special.mousewheel
                  ? (clearTimeout(n), I.call(t[0]))
                  : e();
              }, 100);
            })();
          A.call(this),
            U.call(this),
            o.advanced.autoScrollOnFocus && W.call(this),
            o.scrollButtons.enable && F.call(this),
            o.keyboard.enable && q.call(this),
            (e.bindEvents = !0);
        }
      }),
      (M = function () {
        var e = z(this),
          t = e.data(P),
          o = t.opt,
          n = "mCS_" + t.idx,
          a = ".mCSB_" + t.idx + "_scrollbar",
          i = z(
            "#mCSB_" +
              t.idx +
              ",#mCSB_" +
              t.idx +
              "_container,#mCSB_" +
              t.idx +
              "_container_wrapper," +
              a +
              " ." +
              S[12] +
              ",#mCSB_" +
              t.idx +
              "_dragger_vertical,#mCSB_" +
              t.idx +
              "_dragger_horizontal," +
              a +
              ">a"
          ),
          l = z("#mCSB_" + t.idx + "_container");
        o.advanced.releaseDraggableSelectors &&
          i.add(z(o.advanced.releaseDraggableSelectors)),
          o.advanced.extraDraggableSelectors &&
            i.add(z(o.advanced.extraDraggableSelectors)),
          t.bindEvents &&
            (z(document)
              .add(z(!j() || top.document))
              .unbind("." + n),
            i.each(function () {
              z(this).unbind("." + n);
            }),
            clearTimeout(e[0]._focusTimeout),
            te(e[0], "_focusTimeout"),
            clearTimeout(t.sequential.step),
            te(t.sequential, "step"),
            clearTimeout(l[0].onCompleteTimeout),
            te(l[0], "onCompleteTimeout"),
            (t.bindEvents = !1));
      }),
      (k = function (e) {
        var t = z(this),
          o = t.data(P),
          n = o.opt,
          a = z("#mCSB_" + o.idx + "_container_wrapper"),
          i = a.length ? a : z("#mCSB_" + o.idx + "_container"),
          l = [
            z("#mCSB_" + o.idx + "_scrollbar_vertical"),
            z("#mCSB_" + o.idx + "_scrollbar_horizontal"),
          ],
          r = [l[0].find(".mCSB_dragger"), l[1].find(".mCSB_dragger")];
        "x" !== n.axis &&
          (o.overflowed[0] && !e
            ? (l[0].add(r[0]).add(l[0].children("a")).css("display", "block"),
              i.removeClass(S[8] + " " + S[10]))
            : (n.alwaysShowScrollbar
                ? (2 !== n.alwaysShowScrollbar && r[0].css("display", "none"),
                  i.removeClass(S[10]))
                : (l[0].css("display", "none"), i.addClass(S[10])),
              i.addClass(S[8]))),
          "y" !== n.axis &&
            (o.overflowed[1] && !e
              ? (l[1].add(r[1]).add(l[1].children("a")).css("display", "block"),
                i.removeClass(S[9] + " " + S[11]))
              : (n.alwaysShowScrollbar
                  ? (2 !== n.alwaysShowScrollbar && r[1].css("display", "none"),
                    i.removeClass(S[11]))
                  : (l[1].css("display", "none"), i.addClass(S[11])),
                i.addClass(S[9]))),
          o.overflowed[0] || o.overflowed[1]
            ? t.removeClass(S[5])
            : t.addClass(S[5]);
      }),
      (Y = function (e) {
        var t = e.type,
          o =
            e.target.ownerDocument !== document && null !== frameElement
              ? [z(frameElement).offset().top, z(frameElement).offset().left]
              : null,
          n =
            j() &&
            e.target.ownerDocument !== top.document &&
            null !== frameElement
              ? [
                  z(e.view.frameElement).offset().top,
                  z(e.view.frameElement).offset().left,
                ]
              : [0, 0];
        switch (t) {
          case "pointerdown":
          case "MSPointerDown":
          case "pointermove":
          case "MSPointerMove":
          case "pointerup":
          case "MSPointerUp":
            return o
              ? [
                  e.originalEvent.pageY - o[0] + n[0],
                  e.originalEvent.pageX - o[1] + n[1],
                  !1,
                ]
              : [e.originalEvent.pageY, e.originalEvent.pageX, !1];
          case "touchstart":
          case "touchmove":
          case "touchend":
            var a =
                e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
              i =
                e.originalEvent.touches.length ||
                e.originalEvent.changedTouches.length;
            return e.target.ownerDocument !== document
              ? [a.screenY, a.screenX, 1 < i]
              : [a.pageY, a.pageX, 1 < i];
          default:
            return o
              ? [e.pageY - o[0] + n[0], e.pageX - o[1] + n[1], !1]
              : [e.pageY, e.pageX, !1];
        }
      }),
      (l = function () {
        function a(e, t, o, n) {
          if (
            ((f[0].idleTimer = u.scrollInertia < 233 ? 250 : 0),
            l.attr("id") === h[1])
          )
            var a = "x",
              i = (l[0].offsetLeft - t + n) * d.scrollRatio.x;
          else
            var a = "y",
              i = (l[0].offsetTop - e + o) * d.scrollRatio.y;
          J(c, i.toString(), { dir: a, drag: !0 });
        }
        var l,
          r,
          s,
          c = z(this),
          d = c.data(P),
          u = d.opt,
          e = "mCS_" + d.idx,
          h = [
            "mCSB_" + d.idx + "_dragger_vertical",
            "mCSB_" + d.idx + "_dragger_horizontal",
          ],
          f = z("#mCSB_" + d.idx + "_container"),
          t = z("#" + h[0] + ",#" + h[1]),
          o = u.advanced.releaseDraggableSelectors
            ? t.add(z(u.advanced.releaseDraggableSelectors))
            : t,
          n = u.advanced.extraDraggableSelectors
            ? z(!j() || top.document).add(z(u.advanced.extraDraggableSelectors))
            : z(!j() || top.document);
        t
          .bind("contextmenu." + e, function (e) {
            e.preventDefault();
          })
          .bind(
            "mousedown." +
              e +
              " touchstart." +
              e +
              " pointerdown." +
              e +
              " MSPointerDown." +
              e,
            function (e) {
              if ((e.stopImmediatePropagation(), e.preventDefault(), oe(e))) {
                (X = !0),
                  g &&
                    (document.onselectstart = function () {
                      return !1;
                    }),
                  L.call(f, !1),
                  G(c);
                var t = (l = z(this)).offset(),
                  o = Y(e)[0] - t.top,
                  n = Y(e)[1] - t.left,
                  a = l.height() + t.top,
                  i = l.width() + t.left;
                o < a && 0 < o && n < i && 0 < n && ((r = o), (s = n)),
                  y(l, "active", u.autoExpandScrollbar);
              }
            }
          )
          .bind("touchmove." + e, function (e) {
            e.stopImmediatePropagation(), e.preventDefault();
            var t = l.offset(),
              o = Y(e)[0] - t.top,
              n = Y(e)[1] - t.left;
            a(r, s, o, n);
          }),
          z(document)
            .add(n)
            .bind(
              "mousemove." + e + " pointermove." + e + " MSPointerMove." + e,
              function (e) {
                if (l) {
                  var t = l.offset(),
                    o = Y(e)[0] - t.top,
                    n = Y(e)[1] - t.left;
                  if (r === o && s === n) return;
                  a(r, s, o, n);
                }
              }
            )
            .add(o)
            .bind(
              "mouseup." +
                e +
                " touchend." +
                e +
                " pointerup." +
                e +
                " MSPointerUp." +
                e,
              function () {
                l && (y(l, "active", u.autoExpandScrollbar), (l = null)),
                  (X = !1),
                  g && (document.onselectstart = null),
                  L.call(f, !0);
              }
            );
      }),
      (D = function () {
        function t(e) {
          if (!ne(e) || X || Y(e)[2]) H = 0;
          else {
            (y = C = 0), (h = H = 1), B.removeClass("mCS_touch_action");
            var t = D.offset();
            (c = Y(e)[0] - t.top),
              (f = Y(e)[1] - t.left),
              (A = [Y(e)[0], Y(e)[1]]);
          }
        }
        function o(e) {
          if (
            ne(e) &&
            !X &&
            !Y(e)[2] &&
            (M.documentTouchScroll || e.preventDefault(),
            e.stopImmediatePropagation(),
            (!y || C) && h)
          ) {
            v = $();
            var t = k.offset(),
              o = Y(e)[0] - t.top,
              n = Y(e)[1] - t.left,
              a = "mcsLinearOut";
            if (
              (I.push(o),
              E.push(n),
              (A[2] = Math.abs(Y(e)[0] - A[0])),
              (A[3] = Math.abs(Y(e)[1] - A[1])),
              T.overflowed[0])
            )
              var i = O[0].parent().height() - O[0].height(),
                l =
                  0 < c - o &&
                  o - c > -i * T.scrollRatio.y &&
                  (2 * A[3] < A[2] || "yx" === M.axis);
            if (T.overflowed[1])
              var r = O[1].parent().width() - O[1].width(),
                s =
                  0 < f - n &&
                  n - f > -r * T.scrollRatio.x &&
                  (2 * A[2] < A[3] || "yx" === M.axis);
            l || s
              ? (W || e.preventDefault(), (C = 1))
              : ((y = 1), B.addClass("mCS_touch_action")),
              W && e.preventDefault(),
              (S =
                "yx" === M.axis
                  ? [c - o, f - n]
                  : "x" === M.axis
                  ? [null, f - n]
                  : [c - o, null]),
              (D[0].idleTimer = 250),
              T.overflowed[0] && u(S[0], L, a, "y", "all", !0),
              T.overflowed[1] && u(S[1], L, a, "x", R, !0);
          }
        }
        function n(e) {
          if (!ne(e) || X || Y(e)[2]) H = 0;
          else {
            (H = 1), e.stopImmediatePropagation(), G(B), (g = $());
            var t = k.offset();
            (m = Y(e)[0] - t.top), (p = Y(e)[1] - t.left), (I = []), (E = []);
          }
        }
        function a(e) {
          if (ne(e) && !X && !Y(e)[2]) {
            (h = 0), e.stopImmediatePropagation(), (y = C = 0), (x = $());
            var t = k.offset(),
              o = Y(e)[0] - t.top,
              n = Y(e)[1] - t.left;
            if (!(30 < x - v)) {
              var a = "mcsEaseOut",
                i = (_ = 1e3 / (x - g)) < 2.5,
                l = i ? [I[I.length - 2], E[E.length - 2]] : [0, 0];
              w = i ? [o - l[0], n - l[1]] : [o - m, n - p];
              var r = [Math.abs(w[0]), Math.abs(w[1])];
              _ = i ? [Math.abs(w[0] / 4), Math.abs(w[1] / 4)] : [_, _];
              var s = [
                Math.abs(D[0].offsetTop) - w[0] * d(r[0] / _[0], _[0]),
                Math.abs(D[0].offsetLeft) - w[1] * d(r[1] / _[1], _[1]),
              ];
              (S =
                "yx" === M.axis
                  ? [s[0], s[1]]
                  : "x" === M.axis
                  ? [null, s[1]]
                  : [s[0], null]),
                (b = [4 * r[0] + M.scrollInertia, 4 * r[1] + M.scrollInertia]);
              var c = parseInt(M.contentTouchScroll) || 0;
              (S[0] = c < r[0] ? S[0] : 0),
                (S[1] = c < r[1] ? S[1] : 0),
                T.overflowed[0] && u(S[0], b[0], a, "y", R, !1),
                T.overflowed[1] && u(S[1], b[1], a, "x", R, !1);
            }
          }
        }
        function d(e, t) {
          var o = [1.5 * t, 2 * t, t / 1.5, t / 2];
          return 90 < e
            ? 4 < t
              ? o[0]
              : o[3]
            : 60 < e
            ? 3 < t
              ? o[3]
              : o[2]
            : 30 < e
            ? 8 < t
              ? o[1]
              : 6 < t
              ? o[0]
              : 4 < t
              ? t
              : o[2]
            : 8 < t
            ? t
            : o[3];
        }
        function u(e, t, o, n, a, i) {
          e &&
            J(B, e.toString(), {
              dur: t,
              scrollEasing: o,
              dir: n,
              overwrite: a,
              drag: i,
            });
        }
        var h,
          c,
          f,
          m,
          p,
          g,
          v,
          x,
          w,
          _,
          S,
          b,
          C,
          y,
          B = z(this),
          T = B.data(P),
          M = T.opt,
          e = "mCS_" + T.idx,
          k = z("#mCSB_" + T.idx),
          D = z("#mCSB_" + T.idx + "_container"),
          O = [
            z("#mCSB_" + T.idx + "_dragger_vertical"),
            z("#mCSB_" + T.idx + "_dragger_horizontal"),
          ],
          I = [],
          E = [],
          L = 0,
          R = "yx" === M.axis ? "none" : "all",
          A = [],
          i = D.find("iframe"),
          l = [
            "touchstart." + e + " pointerdown." + e + " MSPointerDown." + e,
            "touchmove." + e + " pointermove." + e + " MSPointerMove." + e,
            "touchend." + e + " pointerup." + e + " MSPointerUp." + e,
          ],
          W =
            void 0 !== document.body.style.touchAction &&
            "" !== document.body.style.touchAction;
        D.bind(l[0], function (e) {
          t(e);
        }).bind(l[1], function (e) {
          o(e);
        }),
          k
            .bind(l[0], function (e) {
              n(e);
            })
            .bind(l[2], function (e) {
              a(e);
            }),
          i.length &&
            i.each(function () {
              z(this).bind("load", function () {
                j(this) &&
                  z(this.contentDocument || this.contentWindow.document)
                    .bind(l[0], function (e) {
                      t(e), n(e);
                    })
                    .bind(l[1], function (e) {
                      o(e);
                    })
                    .bind(l[2], function (e) {
                      a(e);
                    });
              });
            });
      }),
      (O = function () {
        function a(e, t, o) {
          (s.type = o && i ? "stepped" : "stepless"),
            (s.scrollAmount = 10),
            N(n, e, t, "mcsLinearOut", o ? 60 : null);
        }
        var i,
          n = z(this),
          l = n.data(P),
          r = l.opt,
          s = l.sequential,
          e = "mCS_" + l.idx,
          c = z("#mCSB_" + l.idx + "_container"),
          d = c.parent();
        c.bind("mousedown." + e, function () {
          H || i || ((i = 1), (X = !0));
        })
          .add(document)
          .bind("mousemove." + e, function (e) {
            if (
              !H &&
              i &&
              (window.getSelection
                ? window.getSelection().toString()
                : document.selection &&
                  "Control" != document.selection.type &&
                  document.selection.createRange().text)
            ) {
              var t = c.offset(),
                o = Y(e)[0] - t.top + c[0].offsetTop,
                n = Y(e)[1] - t.left + c[0].offsetLeft;
              0 < o && o < d.height() && 0 < n && n < d.width()
                ? s.step && a("off", null, "stepped")
                : ("x" !== r.axis &&
                    l.overflowed[0] &&
                    (o < 0 ? a("on", 38) : o > d.height() && a("on", 40)),
                  "y" !== r.axis &&
                    l.overflowed[1] &&
                    (n < 0 ? a("on", 37) : n > d.width() && a("on", 39)));
            }
          })
          .bind("mouseup." + e + " dragend." + e, function () {
            H || (i && ((i = 0), a("off", null)), (X = !1));
          });
      }),
      (I = function () {
        function o(e, t) {
          if ((G(u), !R(u, e.target))) {
            var o =
                "auto" !== f.mouseWheel.deltaFactor
                  ? parseInt(f.mouseWheel.deltaFactor)
                  : g && e.deltaFactor < 100
                  ? 100
                  : e.deltaFactor || 100,
              n = f.scrollInertia;
            if ("x" === f.axis || "x" === f.mouseWheel.axis)
              var a = "x",
                i = [
                  Math.round(o * h.scrollRatio.x),
                  parseInt(f.mouseWheel.scrollAmount),
                ],
                l =
                  "auto" !== f.mouseWheel.scrollAmount
                    ? i[1]
                    : i[0] >= m.width()
                    ? 0.9 * m.width()
                    : i[0],
                r = Math.abs(z("#mCSB_" + h.idx + "_container")[0].offsetLeft),
                s = p[1][0].offsetLeft,
                c = p[1].parent().width() - p[1].width(),
                d = "y" === f.mouseWheel.axis ? e.deltaY || t : e.deltaX;
            else
              var a = "y",
                i = [
                  Math.round(o * h.scrollRatio.y),
                  parseInt(f.mouseWheel.scrollAmount),
                ],
                l =
                  "auto" !== f.mouseWheel.scrollAmount
                    ? i[1]
                    : i[0] >= m.height()
                    ? 0.9 * m.height()
                    : i[0],
                r = Math.abs(z("#mCSB_" + h.idx + "_container")[0].offsetTop),
                s = p[0][0].offsetTop,
                c = p[0].parent().height() - p[0].height(),
                d = e.deltaY || t;
            ("y" === a && !h.overflowed[0]) ||
              ("x" === a && !h.overflowed[1]) ||
              ((f.mouseWheel.invert || e.webkitDirectionInvertedFromDevice) &&
                (d = -d),
              f.mouseWheel.normalizeDelta && (d = d < 0 ? -1 : 1),
              ((0 < d && 0 !== s) ||
                (d < 0 && s !== c) ||
                f.mouseWheel.preventDefault) &&
                (e.stopImmediatePropagation(), e.preventDefault()),
              e.deltaFactor < 5 &&
                !f.mouseWheel.normalizeDelta &&
                ((l = e.deltaFactor), (n = 17)),
              J(u, (r - d * l).toString(), { dir: a, dur: n }));
          }
        }
        if (z(this).data(P)) {
          var u = z(this),
            h = u.data(P),
            f = h.opt,
            e = "mCS_" + h.idx,
            m = z("#mCSB_" + h.idx),
            p = [
              z("#mCSB_" + h.idx + "_dragger_vertical"),
              z("#mCSB_" + h.idx + "_dragger_horizontal"),
            ],
            t = z("#mCSB_" + h.idx + "_container").find("iframe");
          t.length &&
            t.each(function () {
              z(this).bind("load", function () {
                j(this) &&
                  z(this.contentDocument || this.contentWindow.document).bind(
                    "mousewheel." + e,
                    function (e, t) {
                      o(e, t);
                    }
                  );
              });
            }),
            m.bind("mousewheel." + e, function (e, t) {
              o(e, t);
            });
        }
      }),
      (E = new Object()),
      (j = function (e) {
        var t = !1,
          o = !1,
          n = null;
        if (
          (void 0 === e
            ? (o = "#empty")
            : void 0 !== z(e).attr("id") && (o = z(e).attr("id")),
          !1 !== o && void 0 !== E[o])
        )
          return E[o];
        if (e) {
          try {
            var a = e.contentDocument || e.contentWindow.document;
            n = a.body.innerHTML;
          } catch (e) {}
          t = null !== n;
        } else {
          try {
            var a = top.document;
            n = a.body.innerHTML;
          } catch (e) {}
          t = null !== n;
        }
        return !1 !== o && (E[o] = t), t;
      }),
      (L = function (e) {
        var t = this.find("iframe");
        if (t.length) {
          var o = e ? "auto" : "none";
          t.css("pointer-events", o);
        }
      }),
      (R = function (e, t) {
        var o = t.nodeName.toLowerCase(),
          n = e.data(P).opt.mouseWheel.disableOver;
        return (
          -1 < z.inArray(o, n) &&
          !(-1 < z.inArray(o, ["select", "textarea"]) && !z(t).is(":focus"))
        );
      }),
      (A = function () {
        var l,
          r = z(this),
          s = r.data(P),
          e = "mCS_" + s.idx,
          c = z("#mCSB_" + s.idx + "_container"),
          d = c.parent(),
          t = z(".mCSB_" + s.idx + "_scrollbar ." + S[12]);
        t.bind(
          "mousedown." +
            e +
            " touchstart." +
            e +
            " pointerdown." +
            e +
            " MSPointerDown." +
            e,
          function (e) {
            (X = !0), z(e.target).hasClass("mCSB_dragger") || (l = 1);
          }
        )
          .bind(
            "touchend." + e + " pointerup." + e + " MSPointerUp." + e,
            function () {
              X = !1;
            }
          )
          .bind("click." + e, function (e) {
            if (
              l &&
              ((l = 0),
              z(e.target).hasClass(S[12]) ||
                z(e.target).hasClass("mCSB_draggerRail"))
            ) {
              G(r);
              var t = z(this),
                o = t.find(".mCSB_dragger");
              if (0 < t.parent(".mCSB_scrollTools_horizontal").length) {
                if (!s.overflowed[1]) return;
                var n = "x",
                  a = e.pageX > o.offset().left ? -1 : 1,
                  i = Math.abs(c[0].offsetLeft) - a * (0.9 * d.width());
              } else {
                if (!s.overflowed[0]) return;
                var n = "y",
                  a = e.pageY > o.offset().top ? -1 : 1,
                  i = Math.abs(c[0].offsetTop) - a * (0.9 * d.height());
              }
              J(r, i.toString(), { dir: n, scrollEasing: "mcsEaseInOut" });
            }
          });
      }),
      (W = function () {
        var i = z(this),
          e = i.data(P),
          l = e.opt,
          t = "mCS_" + e.idx,
          r = z("#mCSB_" + e.idx + "_container"),
          s = r.parent();
        r.bind("focusin." + t, function () {
          var a = z(document.activeElement),
            e = r.find(".mCustomScrollBox").length;
          a.is(l.advanced.autoScrollOnFocus) &&
            (G(i),
            clearTimeout(i[0]._focusTimeout),
            (i[0]._focusTimer = e ? 17 * e : 0),
            (i[0]._focusTimeout = setTimeout(function () {
              var e = [ie(a)[0], ie(a)[1]],
                t = [r[0].offsetTop, r[0].offsetLeft],
                o = [
                  0 <= t[0] + e[0] &&
                    t[0] + e[0] < s.height() - a.outerHeight(!1),
                  0 <= t[1] + e[1] &&
                    t[0] + e[1] < s.width() - a.outerWidth(!1),
                ],
                n = "yx" !== l.axis || o[0] || o[1] ? "all" : "none";
              "x" === l.axis ||
                o[0] ||
                J(i, e[0].toString(), {
                  dir: "y",
                  scrollEasing: "mcsEaseInOut",
                  overwrite: n,
                  dur: 0,
                }),
                "y" === l.axis ||
                  o[1] ||
                  J(i, e[1].toString(), {
                    dir: "x",
                    scrollEasing: "mcsEaseInOut",
                    overwrite: n,
                    dur: 0,
                  });
            }, i[0]._focusTimer)));
        });
      }),
      (U = function () {
        var e = z(this),
          t = e.data(P),
          o = "mCS_" + t.idx,
          n = z("#mCSB_" + t.idx + "_container").parent();
        n.bind("scroll." + o, function () {
          (0 === n.scrollTop() && 0 === n.scrollLeft()) ||
            z(".mCSB_" + t.idx + "_scrollbar").css("visibility", "hidden");
        });
      }),
      (F = function () {
        var n = z(this),
          a = n.data(P),
          i = a.opt,
          l = a.sequential,
          e = "mCS_" + a.idx,
          t = ".mCSB_" + a.idx + "_scrollbar",
          o = z(t + ">a");
        o.bind("contextmenu." + e, function (e) {
          e.preventDefault();
        }).bind(
          "mousedown." +
            e +
            " touchstart." +
            e +
            " pointerdown." +
            e +
            " MSPointerDown." +
            e +
            " mouseup." +
            e +
            " touchend." +
            e +
            " pointerup." +
            e +
            " MSPointerUp." +
            e +
            " mouseout." +
            e +
            " pointerout." +
            e +
            " MSPointerOut." +
            e +
            " click." +
            e,
          function (e) {
            function t(e, t) {
              (l.scrollAmount = i.scrollButtons.scrollAmount), N(n, e, t);
            }
            if ((e.preventDefault(), oe(e))) {
              var o = z(this).attr("class");
              switch (((l.type = i.scrollButtons.scrollType), e.type)) {
                case "mousedown":
                case "touchstart":
                case "pointerdown":
                case "MSPointerDown":
                  if ("stepped" === l.type) return;
                  (X = !0), (a.tweenRunning = !1), t("on", o);
                  break;
                case "mouseup":
                case "touchend":
                case "pointerup":
                case "MSPointerUp":
                case "mouseout":
                case "pointerout":
                case "MSPointerOut":
                  if ("stepped" === l.type) return;
                  (X = !1), l.dir && t("off", o);
                  break;
                case "click":
                  if ("stepped" !== l.type || a.tweenRunning) return;
                  t("on", o);
              }
            }
          }
        );
      }),
      (q = function () {
        function t(e) {
          function t(e, t) {
            (d.type = c.keyboard.scrollType),
              (d.scrollAmount = c.keyboard.scrollAmount),
              ("stepped" === d.type && s.tweenRunning) || N(r, e, t);
          }
          switch (e.type) {
            case "blur":
              s.tweenRunning && d.dir && t("off", null);
              break;
            case "keydown":
            case "keyup":
              var o = e.keyCode ? e.keyCode : e.which,
                n = "on";
              if (
                ("x" !== c.axis && (38 === o || 40 === o)) ||
                ("y" !== c.axis && (37 === o || 39 === o))
              ) {
                if (
                  ((38 === o || 40 === o) && !s.overflowed[0]) ||
                  ((37 === o || 39 === o) && !s.overflowed[1])
                )
                  return;
                "keyup" === e.type && (n = "off"),
                  z(document.activeElement).is(f) ||
                    (e.preventDefault(), e.stopImmediatePropagation(), t(n, o));
              } else if (33 === o || 34 === o) {
                if (
                  ((s.overflowed[0] || s.overflowed[1]) &&
                    (e.preventDefault(), e.stopImmediatePropagation()),
                  "keyup" === e.type)
                ) {
                  G(r);
                  var a = 34 === o ? -1 : 1;
                  if (
                    "x" === c.axis ||
                    ("yx" === c.axis && s.overflowed[1] && !s.overflowed[0])
                  )
                    var i = "x",
                      l = Math.abs(u[0].offsetLeft) - a * (0.9 * h.width());
                  else
                    var i = "y",
                      l = Math.abs(u[0].offsetTop) - a * (0.9 * h.height());
                  J(r, l.toString(), { dir: i, scrollEasing: "mcsEaseInOut" });
                }
              } else if (
                (35 === o || 36 === o) &&
                !z(document.activeElement).is(f) &&
                ((s.overflowed[0] || s.overflowed[1]) &&
                  (e.preventDefault(), e.stopImmediatePropagation()),
                "keyup" === e.type)
              ) {
                if (
                  "x" === c.axis ||
                  ("yx" === c.axis && s.overflowed[1] && !s.overflowed[0])
                )
                  var i = "x",
                    l = 35 === o ? Math.abs(h.width() - u.outerWidth(!1)) : 0;
                else
                  var i = "y",
                    l = 35 === o ? Math.abs(h.height() - u.outerHeight(!1)) : 0;
                J(r, l.toString(), { dir: i, scrollEasing: "mcsEaseInOut" });
              }
          }
        }
        var r = z(this),
          s = r.data(P),
          c = s.opt,
          d = s.sequential,
          e = "mCS_" + s.idx,
          o = z("#mCSB_" + s.idx),
          u = z("#mCSB_" + s.idx + "_container"),
          h = u.parent(),
          f = "input,textarea,select,datalist,keygen,[contenteditable='true']",
          n = u.find("iframe"),
          a = ["blur." + e + " keydown." + e + " keyup." + e];
        n.length &&
          n.each(function () {
            z(this).bind("load", function () {
              j(this) &&
                z(this.contentDocument || this.contentWindow.document).bind(
                  a[0],
                  function (e) {
                    t(e);
                  }
                );
            });
          }),
          o.attr("tabindex", "0").bind(a[0], function (e) {
            t(e);
          });
      }),
      (N = function (u, e, t, h, f) {
        function m(e) {
          g.snapAmount &&
            (v.scrollAmount =
              g.snapAmount instanceof Array
                ? "x" === v.dir[0]
                  ? g.snapAmount[1]
                  : g.snapAmount[0]
                : g.snapAmount);
          var t = "stepped" !== v.type,
            o = f || (e ? (t ? w / 1.5 : _) : 1e3 / 60),
            n = e ? (t ? 7.5 : 40) : 2.5,
            a = [Math.abs(x[0].offsetTop), Math.abs(x[0].offsetLeft)],
            i = [
              10 < p.scrollRatio.y ? 10 : p.scrollRatio.y,
              10 < p.scrollRatio.x ? 10 : p.scrollRatio.x,
            ],
            l =
              "x" === v.dir[0]
                ? a[1] + v.dir[1] * (i[1] * n)
                : a[0] + v.dir[1] * (i[0] * n),
            r =
              "x" === v.dir[0]
                ? a[1] + v.dir[1] * parseInt(v.scrollAmount)
                : a[0] + v.dir[1] * parseInt(v.scrollAmount),
            s = "auto" !== v.scrollAmount ? r : l,
            c = h || (e ? (t ? "mcsLinearOut" : "mcsEaseInOut") : "mcsLinear"),
            d = !!e;
          return (
            e && o < 17 && (s = "x" === v.dir[0] ? a[1] : a[0]),
            J(u, s.toString(), {
              dir: v.dir[0],
              scrollEasing: c,
              dur: o,
              onComplete: d,
            }),
            e
              ? void (v.dir = !1)
              : (clearTimeout(v.step),
                void (v.step = setTimeout(function () {
                  m();
                }, o)))
          );
        }
        var p = u.data(P),
          g = p.opt,
          v = p.sequential,
          x = z("#mCSB_" + p.idx + "_container"),
          o = "stepped" === v.type,
          w = g.scrollInertia < 26 ? 26 : g.scrollInertia,
          _ = g.scrollInertia < 1 ? 17 : g.scrollInertia;
        switch (e) {
          case "on":
            if (
              ((v.dir = [
                t === S[16] || t === S[15] || 39 === t || 37 === t ? "x" : "y",
                t === S[13] || t === S[15] || 38 === t || 37 === t ? -1 : 1,
              ]),
              G(u),
              ae(t) && "stepped" === v.type)
            )
              return;
            m(o);
            break;
          case "off":
            clearTimeout(v.step),
              te(v, "step"),
              G(u),
              (o || (p.tweenRunning && v.dir)) && m(!0);
        }
      }),
      (V = function (e) {
        var t = z(this).data(P).opt,
          o = [];
        return (
          "function" == typeof e && (e = e()),
          e instanceof Array
            ? (o =
                1 < e.length
                  ? [e[0], e[1]]
                  : "x" === t.axis
                  ? [null, e[0]]
                  : [e[0], null])
            : ((o[0] = e.y ? e.y : e.x || "x" === t.axis ? null : e),
              (o[1] = e.x ? e.x : e.y || "y" === t.axis ? null : e)),
          "function" == typeof o[0] && (o[0] = o[0]()),
          "function" == typeof o[1] && (o[1] = o[1]()),
          o
        );
      }),
      (Q = function (e, t) {
        if (null != e && void 0 !== e) {
          var o = z(this),
            n = o.data(P),
            a = n.opt,
            i = z("#mCSB_" + n.idx + "_container"),
            l = i.parent(),
            r = typeof e,
            s =
              "x" === (t = t || ("x" === a.axis ? "x" : "y"))
                ? i.outerWidth(!1) - l.width()
                : i.outerHeight(!1) - l.height(),
            c = "x" === t ? i[0].offsetLeft : i[0].offsetTop,
            d = "x" === t ? "left" : "top";
          switch (r) {
            case "function":
              return e();
            case "object":
              var u = e.jquery ? e : z(e);
              if (!u.length) return;
              return "x" === t ? ie(u)[1] : ie(u)[0];
            case "string":
            case "number":
              if (ae(e)) return Math.abs(e);
              if (-1 !== e.indexOf("%"))
                return Math.abs((s * parseInt(e)) / 100);
              if (-1 !== e.indexOf("-="))
                return Math.abs(c - parseInt(e.split("-=")[1]));
              if (-1 !== e.indexOf("+=")) {
                var h = c + parseInt(e.split("+=")[1]);
                return 0 <= h ? 0 : Math.abs(h);
              }
              if (-1 !== e.indexOf("px") && ae(e.split("px")[0]))
                return Math.abs(e.split("px")[0]);
              if ("top" === e || "left" === e) return 0;
              if ("bottom" === e)
                return Math.abs(l.height() - i.outerHeight(!1));
              if ("right" === e) return Math.abs(l.width() - i.outerWidth(!1));
              if ("first" !== e && "last" !== e)
                return z(e).length
                  ? "x" === t
                    ? ie(z(e))[1]
                    : ie(z(e))[0]
                  : (i.css(d, e), void m.update.call(null, o[0]));
              var u = i.find(":" + e);
              return "x" === t ? ie(u)[1] : ie(u)[0];
          }
        }
      }),
      (Z = function (e) {
        function t(e) {
          function t() {
            (this.onload = null), z(e).addClass(S[2]), i(2);
          }
          if (z(e).hasClass(S[2])) i();
          else {
            var o,
              n,
              a = new Image();
            (a.onload =
              ((o = a),
              (n = t),
              function () {
                return n.apply(o, arguments);
              })),
              (a.src = e.src);
          }
        }
        function o() {
          !0 === l.advanced.updateOnSelectorChange &&
            (l.advanced.updateOnSelectorChange = "*");
          var e = 0,
            t = r.find(l.advanced.updateOnSelectorChange);
          return (
            l.advanced.updateOnSelectorChange &&
              0 < t.length &&
              t.each(function () {
                e += this.offsetHeight + this.offsetWidth;
              }),
            e
          );
        }
        function i(e) {
          clearTimeout(r[0].autoUpdate), m.update.call(null, n[0], e);
        }
        var n = z(this),
          a = n.data(P),
          l = a.opt,
          r = z("#mCSB_" + a.idx + "_container");
        return e
          ? (clearTimeout(r[0].autoUpdate), void te(r[0], "autoUpdate"))
          : void (function e() {
              return (
                clearTimeout(r[0].autoUpdate),
                0 === n.parents("html").length
                  ? void (n = null)
                  : void (r[0].autoUpdate = setTimeout(function () {
                      return l.advanced.updateOnSelectorChange &&
                        ((a.poll.change.n = o()),
                        a.poll.change.n !== a.poll.change.o)
                        ? ((a.poll.change.o = a.poll.change.n), void i(3))
                        : l.advanced.updateOnContentResize &&
                          ((a.poll.size.n =
                            n[0].scrollHeight +
                            n[0].scrollWidth +
                            r[0].offsetHeight +
                            n[0].offsetHeight +
                            n[0].offsetWidth),
                          a.poll.size.n !== a.poll.size.o)
                        ? ((a.poll.size.o = a.poll.size.n), void i(1))
                        : !l.advanced.updateOnImageLoad ||
                          ("auto" === l.advanced.updateOnImageLoad &&
                            "y" === l.axis) ||
                          ((a.poll.img.n = r.find("img").length),
                          a.poll.img.n === a.poll.img.o)
                        ? void (
                            (l.advanced.updateOnSelectorChange ||
                              l.advanced.updateOnContentResize ||
                              l.advanced.updateOnImageLoad) &&
                            e()
                          )
                        : ((a.poll.img.o = a.poll.img.n),
                          void r.find("img").each(function () {
                            t(this);
                          }));
                    }, l.advanced.autoUpdateTimeout))
              );
            })();
      }),
      (G = function (e) {
        var t = e.data(P),
          o = z(
            "#mCSB_" +
              t.idx +
              "_container,#mCSB_" +
              t.idx +
              "_container_wrapper,#mCSB_" +
              t.idx +
              "_dragger_vertical,#mCSB_" +
              t.idx +
              "_dragger_horizontal"
          );
        o.each(function () {
          ee.call(this);
        });
      }),
      (J = function (a, e, i) {
        function t(e) {
          return n && l.callbacks[e] && "function" == typeof l.callbacks[e];
        }
        function o() {
          var e = [d[0].offsetTop, d[0].offsetLeft],
            t = [p[0].offsetTop, p[0].offsetLeft],
            o = [d.outerHeight(!1), d.outerWidth(!1)],
            n = [c.height(), c.width()];
          a[0].mcs = {
            content: d,
            top: e[0],
            left: e[1],
            draggerTop: t[0],
            draggerLeft: t[1],
            topPct: Math.round(
              (100 * Math.abs(e[0])) / (Math.abs(o[0]) - n[0])
            ),
            leftPct: Math.round(
              (100 * Math.abs(e[1])) / (Math.abs(o[1]) - n[1])
            ),
            direction: i.dir,
          };
        }
        var n = a.data(P),
          l = n.opt,
          r = {
            trigger: "internal",
            dir: "y",
            scrollEasing: "mcsEaseOut",
            drag: !1,
            dur: l.scrollInertia,
            overwrite: "all",
            callbacks: !0,
            onStart: !0,
            onUpdate: !0,
            onComplete: !0,
          },
          i = z.extend(r, i),
          s = [i.dur, i.drag ? 0 : i.dur],
          c = z("#mCSB_" + n.idx),
          d = z("#mCSB_" + n.idx + "_container"),
          u = d.parent(),
          h = l.callbacks.onTotalScrollOffset
            ? V.call(a, l.callbacks.onTotalScrollOffset)
            : [0, 0],
          f = l.callbacks.onTotalScrollBackOffset
            ? V.call(a, l.callbacks.onTotalScrollBackOffset)
            : [0, 0];
        if (
          ((n.trigger = i.trigger),
          (0 === u.scrollTop() && 0 === u.scrollLeft()) ||
            (z(".mCSB_" + n.idx + "_scrollbar").css("visibility", "visible"),
            u.scrollTop(0).scrollLeft(0)),
          "_resetY" !== e ||
            n.contentReset.y ||
            (t("onOverflowYNone") && l.callbacks.onOverflowYNone.call(a[0]),
            (n.contentReset.y = 1)),
          "_resetX" !== e ||
            n.contentReset.x ||
            (t("onOverflowXNone") && l.callbacks.onOverflowXNone.call(a[0]),
            (n.contentReset.x = 1)),
          "_resetY" !== e && "_resetX" !== e)
        ) {
          if (
            ((!n.contentReset.y && a[0].mcs) ||
              !n.overflowed[0] ||
              (t("onOverflowY") && l.callbacks.onOverflowY.call(a[0]),
              (n.contentReset.x = null)),
            (!n.contentReset.x && a[0].mcs) ||
              !n.overflowed[1] ||
              (t("onOverflowX") && l.callbacks.onOverflowX.call(a[0]),
              (n.contentReset.x = null)),
            l.snapAmount)
          ) {
            var m =
              l.snapAmount instanceof Array
                ? "x" === i.dir
                  ? l.snapAmount[1]
                  : l.snapAmount[0]
                : l.snapAmount;
            e = (function (e, t, o) {
              return Math.round(e / t) * t - o;
            })(e, m, l.snapOffset);
          }
          switch (i.dir) {
            case "x":
              var p = z("#mCSB_" + n.idx + "_dragger_horizontal"),
                g = "left",
                v = d[0].offsetLeft,
                x = [
                  c.width() - d.outerWidth(!1),
                  p.parent().width() - p.width(),
                ],
                w = [e, 0 === e ? 0 : e / n.scrollRatio.x],
                _ = h[1],
                S = f[1],
                b = 0 < _ ? _ / n.scrollRatio.x : 0,
                C = 0 < S ? S / n.scrollRatio.x : 0;
              break;
            case "y":
              var p = z("#mCSB_" + n.idx + "_dragger_vertical"),
                g = "top",
                v = d[0].offsetTop,
                x = [
                  c.height() - d.outerHeight(!1),
                  p.parent().height() - p.height(),
                ],
                w = [e, 0 === e ? 0 : e / n.scrollRatio.y],
                _ = h[0],
                S = f[0],
                b = 0 < _ ? _ / n.scrollRatio.y : 0,
                C = 0 < S ? S / n.scrollRatio.y : 0;
          }
          w[1] < 0 || (0 === w[0] && 0 === w[1])
            ? (w = [0, 0])
            : w[1] >= x[1]
            ? (w = [x[0], x[1]])
            : (w[0] = -w[0]),
            a[0].mcs || (o(), t("onInit") && l.callbacks.onInit.call(a[0])),
            clearTimeout(d[0].onCompleteTimeout),
            K(p[0], g, Math.round(w[1]), s[1], i.scrollEasing),
            (!n.tweenRunning &&
              ((0 === v && 0 <= w[0]) || (v === x[0] && w[0] <= x[0]))) ||
              K(d[0], g, Math.round(w[0]), s[0], i.scrollEasing, i.overwrite, {
                onStart: function () {
                  i.callbacks &&
                    i.onStart &&
                    !n.tweenRunning &&
                    (t("onScrollStart") &&
                      (o(), l.callbacks.onScrollStart.call(a[0])),
                    (n.tweenRunning = !0),
                    y(p),
                    (n.cbOffsets = [
                      l.callbacks.alwaysTriggerOffsets || v >= x[0] + _,
                      l.callbacks.alwaysTriggerOffsets || v <= -S,
                    ]));
                },
                onUpdate: function () {
                  i.callbacks &&
                    i.onUpdate &&
                    t("whileScrolling") &&
                    (o(), l.callbacks.whileScrolling.call(a[0]));
                },
                onComplete: function () {
                  if (i.callbacks && i.onComplete) {
                    "yx" === l.axis && clearTimeout(d[0].onCompleteTimeout);
                    var e = d[0].idleTimer || 0;
                    d[0].onCompleteTimeout = setTimeout(function () {
                      t("onScroll") && (o(), l.callbacks.onScroll.call(a[0])),
                        t("onTotalScroll") &&
                          w[1] >= x[1] - b &&
                          n.cbOffsets[0] &&
                          (o(), l.callbacks.onTotalScroll.call(a[0])),
                        t("onTotalScrollBack") &&
                          w[1] <= C &&
                          n.cbOffsets[1] &&
                          (o(), l.callbacks.onTotalScrollBack.call(a[0])),
                        (n.tweenRunning = !1),
                        (d[0].idleTimer = 0),
                        y(p, "hide");
                    }, e);
                  }
                },
              });
        }
      }),
      (K = function (e, t, o, n, a, i, l) {
        function r() {
          x.stop ||
            (p || u.call(),
            (p = $() - m),
            s(),
            p >= x.time &&
              ((x.time = p > x.time ? p + c - (p - x.time) : p + c - 1),
              x.time < p + 1 && (x.time = p + 1)),
            x.time < n ? (x.id = d(r)) : f.call());
        }
        function s() {
          0 < n
            ? ((x.currVal = (function (e, t, o, n, a) {
                switch (a) {
                  case "linear":
                  case "mcsLinear":
                    return (o * e) / n + t;
                  case "mcsLinearOut":
                    return (e /= n), e--, o * Math.sqrt(1 - e * e) + t;
                  case "easeInOutSmooth":
                    return (e /= n / 2) < 1
                      ? (o / 2) * e * e + t
                      : (-o / 2) * (--e * (e - 2) - 1) + t;
                  case "easeInOutStrong":
                    return (e /= n / 2) < 1
                      ? (o / 2) * Math.pow(2, 10 * (e - 1)) + t
                      : (e--, (o / 2) * (2 - Math.pow(2, -10 * e)) + t);
                  case "easeInOut":
                  case "mcsEaseInOut":
                    return (e /= n / 2) < 1
                      ? (o / 2) * e * e * e + t
                      : (o / 2) * ((e -= 2) * e * e + 2) + t;
                  case "easeOutSmooth":
                    return (e /= n), -o * (--e * e * e * e - 1) + t;
                  case "easeOutStrong":
                    return o * (1 - Math.pow(2, (-10 * e) / n)) + t;
                  case "easeOut":
                  case "mcsEaseOut":
                  default:
                    var i = (e /= n) * e,
                      l = i * e;
                    return (
                      t +
                      o *
                        (0.499999999999997 * l * i +
                          -2.5 * i * i +
                          5.5 * l +
                          -6.5 * i +
                          4 * e)
                    );
                }
              })(x.time, g, w, n, a)),
              (v[t] = Math.round(x.currVal) + "px"))
            : (v[t] = o + "px"),
            h.call();
        }
        e._mTween || (e._mTween = { top: {}, left: {} });
        var c,
          d,
          l = l || {},
          u = l.onStart || function () {},
          h = l.onUpdate || function () {},
          f = l.onComplete || function () {},
          m = $(),
          p = 0,
          g = e.offsetTop,
          v = e.style,
          x = e._mTween[t];
        "left" === t && (g = e.offsetLeft);
        var w = o - g;
        (x.stop = 0),
          "none" === i ||
            (null != x.id &&
              (window.requestAnimationFrame
                ? window.cancelAnimationFrame(x.id)
                : clearTimeout(x.id),
              (x.id = null))),
          (c = 1e3 / 60),
          (x.time = p + c),
          (d = window.requestAnimationFrame
            ? window.requestAnimationFrame
            : function (e) {
                return s(), setTimeout(e, 0.01);
              }),
          (x.id = d(r));
      }),
      ($ = function () {
        return window.performance && window.performance.now
          ? window.performance.now()
          : window.performance && window.performance.webkitNow
          ? window.performance.webkitNow()
          : Date.now
          ? Date.now()
          : new Date().getTime();
      }),
      (ee = function () {
        var e = this;
        e._mTween || (e._mTween = { top: {}, left: {} });
        for (var t = ["top", "left"], o = 0; o < t.length; o++) {
          var n = t[o];
          e._mTween[n].id &&
            (window.requestAnimationFrame
              ? window.cancelAnimationFrame(e._mTween[n].id)
              : clearTimeout(e._mTween[n].id),
            (e._mTween[n].id = null),
            (e._mTween[n].stop = 1));
        }
      }),
      (te = function (t, o) {
        try {
          delete t[o];
        } catch (e) {
          t[o] = null;
        }
      }),
      (oe = function (e) {
        return !(e.which && 1 !== e.which);
      }),
      (ne = function (e) {
        var t = e.originalEvent.pointerType;
        return !(t && "touch" !== t && 2 !== t);
      }),
      (ae = function (e) {
        return !isNaN(parseFloat(e)) && isFinite(e);
      }),
      (ie = function (e) {
        var t = e.parents(".mCSB_container");
        return [
          e.offset().top - t.offset().top,
          e.offset().left - t.offset().left,
        ];
      }),
      (le = function () {
        var e = (function () {
          var e = ["webkit", "moz", "ms", "o"];
          if ("hidden" in document) return "hidden";
          for (var t = 0; t < e.length; t++)
            if (e[t] + "Hidden" in document) return e[t] + "Hidden";
          return null;
        })();
        return !!e && document[e];
      }),
      (z.fn[f] = function (e) {
        return m[e]
          ? m[e].apply(this, Array.prototype.slice.call(arguments, 1))
          : "object" != typeof e && e
          ? void z.error("Method " + e + " does not exist")
          : m.init.apply(this, arguments);
      }),
      (z[f] = function (e) {
        return m[e]
          ? m[e].apply(this, Array.prototype.slice.call(arguments, 1))
          : "object" != typeof e && e
          ? void z.error("Method " + e + " does not exist")
          : m.init.apply(this, arguments);
      }),
      (z[f].defaults = a),
      (window[f] = !0),
      z(window).bind("load", function () {
        z(n)[f](),
          z.extend(z.expr[":"], {
            mcsInView:
              z.expr[":"].mcsInView ||
              function (e) {
                var t,
                  o,
                  n = z(e),
                  a = n.parents(".mCSB_container");
                if (a.length)
                  return (
                    (t = a.parent()),
                    0 <=
                      (o = [a[0].offsetTop, a[0].offsetLeft])[0] + ie(n)[0] &&
                      o[0] + ie(n)[0] < t.height() - n.outerHeight(!1) &&
                      0 <= o[1] + ie(n)[1] &&
                      o[1] + ie(n)[1] < t.width() - n.outerWidth(!1)
                  );
              },
            mcsInSight:
              z.expr[":"].mcsInSight ||
              function (e, t, o) {
                var n,
                  a,
                  i,
                  l,
                  r = z(e),
                  s = r.parents(".mCSB_container"),
                  c =
                    "exact" === o[3]
                      ? [
                          [1, 0],
                          [1, 0],
                        ]
                      : [
                          [0.9, 0.1],
                          [0.6, 0.4],
                        ];
                if (s.length)
                  return (
                    (n = [r.outerHeight(!1), r.outerWidth(!1)]),
                    (i = [
                      s[0].offsetTop + ie(r)[0],
                      s[0].offsetLeft + ie(r)[1],
                    ]),
                    (a = [
                      s.parent()[0].offsetHeight,
                      s.parent()[0].offsetWidth,
                    ]),
                    i[0] -
                      a[0] *
                        (l = [
                          n[0] < a[0] ? c[0] : c[1],
                          n[1] < a[1] ? c[0] : c[1],
                        ])[0][0] <
                      0 &&
                      0 <= i[0] + n[0] - a[0] * l[0][1] &&
                      i[1] - a[1] * l[1][0] < 0 &&
                      0 <= i[1] + n[1] - a[1] * l[1][1]
                  );
              },
            mcsOverflow:
              z.expr[":"].mcsOverflow ||
              function (e) {
                var t = z(e).data(P);
                if (t) return t.overflowed[0] || t.overflowed[1];
              },
          });
      });
  });
!(function (n, i, _, d) {
  function p(e) {
    return e && e.hasOwnProperty && e instanceof _;
  }
  function h(e) {
    return e && "string" === _.type(e);
  }
  function S(e) {
    return h(e) && 0 < e.indexOf("%");
  }
  function T(e, t) {
    var i = parseInt(e, 10) || 0;
    return t && S(e) && (i *= E.getViewport()[t] / 100), Math.ceil(i);
  }
  function L(e, t) {
    return T(e, t) + "px";
  }
  var o = _("html"),
    a = _(n),
    c = _(i),
    E = (_.fancybox = function () {
      E.open.apply(this, arguments);
    }),
    r = navigator.userAgent.match(/msie/i),
    l = null,
    s = i.createTouch !== d;
  _.extend(E, {
    version: "2.1.5",
    defaults: {
      padding: 15,
      margin: 20,
      width: 800,
      height: 600,
      minWidth: 100,
      minHeight: 100,
      maxWidth: 9999,
      maxHeight: 9999,
      pixelRatio: 1,
      autoSize: !0,
      autoHeight: !1,
      autoWidth: !1,
      autoResize: !0,
      autoCenter: !s,
      fitToView: !0,
      aspectRatio: !1,
      topRatio: 0.5,
      leftRatio: 0.5,
      scrolling: "auto",
      wrapCSS: "",
      arrows: !0,
      closeBtn: !0,
      closeClick: !1,
      nextClick: !1,
      mouseWheel: !0,
      autoPlay: !1,
      playSpeed: 3e3,
      preload: 3,
      modal: !1,
      loop: !0,
      ajax: { dataType: "html", headers: { "X-fancyBox": !0 } },
      iframe: { scrolling: "auto", preload: !0 },
      swf: {
        wmode: "transparent",
        allowfullscreen: "true",
        allowscriptaccess: "always",
      },
      keys: {
        next: { 13: "left", 34: "up", 39: "left", 40: "up" },
        prev: { 8: "right", 33: "down", 37: "right", 38: "down" },
        close: [27],
        play: [32],
        toggle: [70],
      },
      direction: { next: "left", prev: "right" },
      scrollOutside: !0,
      index: 0,
      type: null,
      href: null,
      content: null,
      title: null,
      tpl: {
        wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
        image: '<img class="fancybox-image" src="{href}" alt="" />',
        iframe:
          '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
          (r ? ' allowtransparency="true"' : "") +
          "></iframe>",
        error:
          '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
        closeBtn:
          '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
        next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
        prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',
      },
      openEffect: "fade",
      openSpeed: 250,
      openEasing: "swing",
      openOpacity: !0,
      openMethod: "zoomIn",
      closeEffect: "fade",
      closeSpeed: 250,
      closeEasing: "swing",
      closeOpacity: !0,
      closeMethod: "zoomOut",
      nextEffect: "elastic",
      nextSpeed: 250,
      nextEasing: "swing",
      nextMethod: "changeIn",
      prevEffect: "elastic",
      prevSpeed: 250,
      prevEasing: "swing",
      prevMethod: "changeOut",
      helpers: { overlay: !0, title: !0 },
      onCancel: _.noop,
      beforeLoad: _.noop,
      afterLoad: _.noop,
      beforeShow: _.noop,
      afterShow: _.noop,
      beforeChange: _.noop,
      beforeClose: _.noop,
      afterClose: _.noop,
    },
    group: {},
    opts: {},
    previous: null,
    coming: null,
    current: null,
    isActive: !1,
    isOpen: !1,
    isOpened: !1,
    wrap: null,
    skin: null,
    outer: null,
    inner: null,
    player: { timer: null, isActive: !1 },
    ajaxLoad: null,
    imgPreload: null,
    transitions: {},
    helpers: {},
    open: function (s, c) {
      if (s && (_.isPlainObject(c) || (c = {}), !1 !== E.close(!0)))
        return (
          _.isArray(s) || (s = p(s) ? _(s).get() : [s]),
          _.each(s, function (e, t) {
            var i,
              n,
              o,
              a,
              r,
              l = {};
            "object" === _.type(t) &&
              (t.nodeType && (t = _(t)),
              p(t)
                ? ((l = {
                    href: t.data("fancybox-href") || t.attr("href"),
                    title: t.data("fancybox-title") || t.attr("title"),
                    isDom: !0,
                    element: t,
                  }),
                  _.metadata && _.extend(!0, l, t.metadata()))
                : (l = t)),
              (i = c.href || l.href || (h(t) ? t : null)),
              (n = c.title !== d ? c.title : l.title || ""),
              !(a = (o = c.content || l.content) ? "html" : c.type || l.type) &&
                l.isDom &&
                (a =
                  (a = t.data("fancybox-type")) ||
                  ((a = t.prop("class").match(/fancybox\.(\w+)/))
                    ? a[1]
                    : null)),
              h(i) &&
                (a ||
                  (E.isImage(i)
                    ? (a = "image")
                    : E.isSWF(i)
                    ? (a = "swf")
                    : "#" === i.charAt(0)
                    ? (a = "inline")
                    : h(t) && ((a = "html"), (o = t))),
                "ajax" === a &&
                  ((i = (r = i.split(/\s+/, 2)).shift()), (r = r.shift()))),
              o ||
                ("inline" === a
                  ? i
                    ? (o = _(h(i) ? i.replace(/.*(?=#[^\s]+$)/, "") : i))
                    : l.isDom && (o = t)
                  : "html" === a
                  ? (o = i)
                  : a || i || !l.isDom || ((a = "inline"), (o = t))),
              _.extend(l, {
                href: i,
                type: a,
                content: o,
                title: n,
                selector: r,
              }),
              (s[e] = l);
          }),
          (E.opts = _.extend(!0, {}, E.defaults, c)),
          c.keys !== d &&
            (E.opts.keys = !!c.keys && _.extend({}, E.defaults.keys, c.keys)),
          (E.group = s),
          E._start(E.opts.index)
        );
    },
    cancel: function () {
      var e = E.coming;
      e &&
        !1 !== E.trigger("onCancel") &&
        (E.hideLoading(),
        E.ajaxLoad && E.ajaxLoad.abort(),
        (E.ajaxLoad = null),
        E.imgPreload && (E.imgPreload.onload = E.imgPreload.onerror = null),
        e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(),
        (E.coming = null),
        E.current || E._afterZoomOut(e));
    },
    close: function (e) {
      E.cancel(),
        !1 !== E.trigger("beforeClose") &&
          (E.unbindEvents(),
          E.isActive &&
            (E.isOpen && !0 !== e
              ? ((E.isOpen = E.isOpened = !1),
                (E.isClosing = !0),
                _(".fancybox-item, .fancybox-nav").remove(),
                E.wrap.stop(!0, !0).removeClass("fancybox-opened"),
                E.transitions[E.current.closeMethod]())
              : (_(".fancybox-wrap").stop(!0).trigger("onReset").remove(),
                E._afterZoomOut())));
    },
    play: function (e) {
      function t() {
        clearTimeout(E.player.timer);
      }
      function i() {
        t(),
          E.current &&
            E.player.isActive &&
            (E.player.timer = setTimeout(E.next, E.current.playSpeed));
      }
      function n() {
        t(),
          c.unbind(".player"),
          (E.player.isActive = !1),
          E.trigger("onPlayEnd");
      }
      !0 === e || (!E.player.isActive && !1 !== e)
        ? E.current &&
          (E.current.loop || E.current.index < E.group.length - 1) &&
          ((E.player.isActive = !0),
          c.bind({
            "onCancel.player beforeClose.player": n,
            "onUpdate.player": i,
            "beforeLoad.player": t,
          }),
          i(),
          E.trigger("onPlayStart"))
        : n();
    },
    next: function (e) {
      var t = E.current;
      t && (h(e) || (e = t.direction.next), E.jumpto(t.index + 1, e, "next"));
    },
    prev: function (e) {
      var t = E.current;
      t && (h(e) || (e = t.direction.prev), E.jumpto(t.index - 1, e, "prev"));
    },
    jumpto: function (e, t, i) {
      var n = E.current;
      n &&
        ((e = T(e)),
        (E.direction = t || n.direction[e >= n.index ? "next" : "prev"]),
        (E.router = i || "jumpto"),
        n.loop &&
          (e < 0 && (e = n.group.length + (e % n.group.length)),
          (e %= n.group.length)),
        n.group[e] !== d && (E.cancel(), E._start(e)));
    },
    reposition: function (e, t) {
      var i,
        n = E.current,
        o = n ? n.wrap : null;
      o &&
        ((i = E._getPosition(t)),
        e && "scroll" === e.type
          ? (delete i.position, o.stop(!0, !0).animate(i, 200))
          : (o.css(i), (n.pos = _.extend({}, n.dim, i))));
    },
    update: function (t) {
      var i = t && t.type,
        n = !i || "orientationchange" === i;
      n && (clearTimeout(l), (l = null)),
        E.isOpen &&
          !l &&
          (l = setTimeout(
            function () {
              var e = E.current;
              e &&
                !E.isClosing &&
                (E.wrap.removeClass("fancybox-tmp"),
                (n || "load" === i || ("resize" === i && e.autoResize)) &&
                  E._setDimension(),
                ("scroll" === i && e.canShrink) || E.reposition(t),
                E.trigger("onUpdate"),
                (l = null));
            },
            n && !s ? 0 : 300
          ));
    },
    toggle: function (e) {
      E.isOpen &&
        ((E.current.fitToView =
          "boolean" === _.type(e) ? e : !E.current.fitToView),
        s &&
          (E.wrap.removeAttr("style").addClass("fancybox-tmp"),
          E.trigger("onUpdate")),
        E.update());
    },
    hideLoading: function () {
      c.unbind(".loading"), _("#fancybox-loading").remove();
    },
    showLoading: function () {
      var e, t;
      E.hideLoading(),
        (e = _('<div id="fancybox-loading"><div></div></div>')
          .click(E.cancel)
          .appendTo("body")),
        c.bind("keydown.loading", function (e) {
          27 === (e.which || e.keyCode) && (e.preventDefault(), E.cancel());
        }),
        E.defaults.fixed ||
          ((t = E.getViewport()),
          e.css({
            position: "absolute",
            top: 0.5 * t.h + t.y,
            left: 0.5 * t.w + t.x,
          }));
    },
    getViewport: function () {
      var e = (E.current && E.current.locked) || !1,
        t = { x: a.scrollLeft(), y: a.scrollTop() };
      return (
        e
          ? ((t.w = e[0].clientWidth), (t.h = e[0].clientHeight))
          : ((t.w = s && n.innerWidth ? n.innerWidth : a.width()),
            (t.h = s && n.innerHeight ? n.innerHeight : a.height())),
        t
      );
    },
    unbindEvents: function () {
      E.wrap && p(E.wrap) && E.wrap.unbind(".fb"),
        c.unbind(".fb"),
        a.unbind(".fb");
    },
    bindEvents: function () {
      var t,
        r = E.current;
      r &&
        (a.bind(
          "orientationchange.fb" +
            (s ? "" : " resize.fb") +
            (r.autoCenter && !r.locked ? " scroll.fb" : ""),
          E.update
        ),
        (t = r.keys) &&
          c.bind("keydown.fb", function (i) {
            var n = i.which || i.keyCode,
              e = i.target || i.srcElement;
            if (27 === n && E.coming) return !1;
            i.ctrlKey ||
              i.altKey ||
              i.shiftKey ||
              i.metaKey ||
              (e && (e.type || _(e).is("[contenteditable]"))) ||
              _.each(t, function (e, t) {
                return 1 < r.group.length && t[n] !== d
                  ? (E[e](t[n]), i.preventDefault(), !1)
                  : -1 < _.inArray(n, t)
                  ? (E[e](), i.preventDefault(), !1)
                  : void 0;
              });
          }),
        _.fn.mousewheel &&
          r.mouseWheel &&
          E.wrap.bind("mousewheel.fb", function (e, t, i, n) {
            for (
              var o = _(e.target || null), a = !1;
              o.length &&
              !a &&
              !o.is(".fancybox-skin") &&
              !o.is(".fancybox-wrap");

            )
              (a =
                o[0] &&
                !(o[0].style.overflow && "hidden" === o[0].style.overflow) &&
                ((o[0].clientWidth && o[0].scrollWidth > o[0].clientWidth) ||
                  (o[0].clientHeight &&
                    o[0].scrollHeight > o[0].clientHeight))),
                (o = _(o).parent());
            0 !== t &&
              !a &&
              1 < E.group.length &&
              !r.canShrink &&
              (0 < n || 0 < i
                ? E.prev(0 < n ? "down" : "left")
                : (n < 0 || i < 0) && E.next(n < 0 ? "up" : "right"),
              e.preventDefault());
          }));
    },
    trigger: function (i, e) {
      var t,
        n = e || E.coming || E.current;
      if (n) {
        if (
          (_.isFunction(n[i]) &&
            (t = n[i].apply(n, Array.prototype.slice.call(arguments, 1))),
          !1 === t)
        )
          return !1;
        n.helpers &&
          _.each(n.helpers, function (e, t) {
            t &&
              E.helpers[e] &&
              _.isFunction(E.helpers[e][i]) &&
              E.helpers[e][i](_.extend(!0, {}, E.helpers[e].defaults, t), n);
          }),
          c.trigger(i);
      }
    },
    isImage: function (e) {
      return (
        h(e) &&
        e.match(
          /(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i
        )
      );
    },
    isSWF: function (e) {
      return h(e) && e.match(/\.(swf)((\?|#).*)?$/i);
    },
    _start: function (e) {
      var t,
        i,
        n = {};
      if (((e = T(e)), !(t = E.group[e] || null))) return !1;
      if (
        ((t = (n = _.extend(!0, {}, E.opts, t)).margin),
        (i = n.padding),
        "number" === _.type(t) && (n.margin = [t, t, t, t]),
        "number" === _.type(i) && (n.padding = [i, i, i, i]),
        n.modal &&
          _.extend(!0, n, {
            closeBtn: !1,
            closeClick: !1,
            nextClick: !1,
            arrows: !1,
            mouseWheel: !1,
            keys: null,
            helpers: { overlay: { closeClick: !1 } },
          }),
        n.autoSize && (n.autoWidth = n.autoHeight = !0),
        "auto" === n.width && (n.autoWidth = !0),
        "auto" === n.height && (n.autoHeight = !0),
        (n.group = E.group),
        (n.index = e),
        (E.coming = n),
        !1 === E.trigger("beforeLoad"))
      )
        E.coming = null;
      else {
        if (((i = n.type), (t = n.href), !i))
          return (
            (E.coming = null),
            !(!E.current || !E.router || "jumpto" === E.router) &&
              ((E.current.index = e), E[E.router](E.direction))
          );
        if (
          ((E.isActive = !0),
          ("image" !== i && "swf" !== i) ||
            ((n.autoHeight = n.autoWidth = !1), (n.scrolling = "visible")),
          "image" === i && (n.aspectRatio = !0),
          "iframe" === i && s && (n.scrolling = "scroll"),
          (n.wrap = _(n.tpl.wrap)
            .addClass(
              "fancybox-" +
                (s ? "mobile" : "desktop") +
                " fancybox-type-" +
                i +
                " fancybox-tmp " +
                n.wrapCSS
            )
            .appendTo(n.parent || "body")),
          _.extend(n, {
            skin: _(".fancybox-skin", n.wrap),
            outer: _(".fancybox-outer", n.wrap),
            inner: _(".fancybox-inner", n.wrap),
          }),
          _.each(["Top", "Right", "Bottom", "Left"], function (e, t) {
            n.skin.css("padding" + t, L(n.padding[e]));
          }),
          E.trigger("onReady"),
          "inline" === i || "html" === i)
        ) {
          if (!n.content || !n.content.length) return E._error("content");
        } else if (!t) return E._error("href");
        "image" === i
          ? E._loadImage()
          : "ajax" === i
          ? E._loadAjax()
          : "iframe" === i
          ? E._loadIframe()
          : E._afterLoad();
      }
    },
    _error: function (e) {
      _.extend(E.coming, {
        type: "html",
        autoWidth: !0,
        autoHeight: !0,
        minWidth: 0,
        minHeight: 0,
        scrolling: "no",
        hasError: e,
        content: E.coming.tpl.error,
      }),
        E._afterLoad();
    },
    _loadImage: function () {
      var e = (E.imgPreload = new Image());
      (e.onload = function () {
        (this.onload = this.onerror = null),
          (E.coming.width = this.width / E.opts.pixelRatio),
          (E.coming.height = this.height / E.opts.pixelRatio),
          E._afterLoad();
      }),
        (e.onerror = function () {
          (this.onload = this.onerror = null), E._error("image");
        }),
        (e.src = E.coming.href),
        !0 !== e.complete && E.showLoading();
    },
    _loadAjax: function () {
      var i = E.coming;
      E.showLoading(),
        (E.ajaxLoad = _.ajax(
          _.extend({}, i.ajax, {
            url: i.href,
            error: function (e, t) {
              E.coming && "abort" !== t ? E._error("ajax", e) : E.hideLoading();
            },
            success: function (e, t) {
              "success" === t && ((i.content = e), E._afterLoad());
            },
          })
        ));
    },
    _loadIframe: function () {
      var e = E.coming,
        t = _(e.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
          .attr("scrolling", s ? "auto" : e.iframe.scrolling)
          .attr("src", e.href);
      _(e.wrap).bind("onReset", function () {
        try {
          _(this)
            .find("iframe")
            .hide()
            .attr("src", "//about:blank")
            .end()
            .empty();
        } catch (e) {}
      }),
        e.iframe.preload &&
          (E.showLoading(),
          t.one("load", function () {
            _(this).data("ready", 1),
              s || _(this).bind("load.fb", E.update),
              _(this)
                .parents(".fancybox-wrap")
                .width("100%")
                .removeClass("fancybox-tmp")
                .show(),
              E._afterLoad();
          })),
        (e.content = t.appendTo(e.inner)),
        e.iframe.preload || E._afterLoad();
    },
    _preloadImages: function () {
      var e,
        t,
        i = E.group,
        n = E.current,
        o = i.length,
        a = n.preload ? Math.min(n.preload, o - 1) : 0;
      for (t = 1; t <= a; t += 1)
        "image" === (e = i[(n.index + t) % o]).type &&
          e.href &&
          (new Image().src = e.href);
    },
    _afterLoad: function () {
      var i,
        e,
        t,
        n,
        o,
        a = E.coming,
        r = E.current;
      if ((E.hideLoading(), a && !1 !== E.isActive))
        if (!1 === E.trigger("afterLoad", a, r))
          a.wrap.stop(!0).trigger("onReset").remove(), (E.coming = null);
        else {
          switch (
            (r &&
              (E.trigger("beforeChange", r),
              r.wrap
                .stop(!0)
                .removeClass("fancybox-opened")
                .find(".fancybox-item, .fancybox-nav")
                .remove()),
            E.unbindEvents(),
            (i = a.content),
            (e = a.type),
            (t = a.scrolling),
            _.extend(E, {
              wrap: a.wrap,
              skin: a.skin,
              outer: a.outer,
              inner: a.inner,
              current: a,
              previous: r,
            }),
            (n = a.href),
            e)
          ) {
            case "inline":
            case "ajax":
            case "html":
              a.selector
                ? (i = _("<div>").html(i).find(a.selector))
                : p(i) &&
                  (i.data("fancybox-placeholder") ||
                    i.data(
                      "fancybox-placeholder",
                      _('<div class="fancybox-placeholder"></div>')
                        .insertAfter(i)
                        .hide()
                    ),
                  (i = i.show().detach()),
                  a.wrap.bind("onReset", function () {
                    _(this).find(i).length &&
                      i
                        .hide()
                        .replaceAll(i.data("fancybox-placeholder"))
                        .data("fancybox-placeholder", !1);
                  }));
              break;
            case "image":
              i = a.tpl.image.replace("{href}", n);
              break;
            case "swf":
              (i =
                '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' +
                n +
                '"></param>'),
                (o = ""),
                _.each(a.swf, function (e, t) {
                  (i += '<param name="' + e + '" value="' + t + '"></param>'),
                    (o += " " + e + '="' + t + '"');
                }),
                (i +=
                  '<embed src="' +
                  n +
                  '" type="application/x-shockwave-flash" width="100%" height="100%"' +
                  o +
                  "></embed></object>");
          }
          (p(i) && i.parent().is(a.inner)) || a.inner.append(i),
            E.trigger("beforeShow"),
            a.inner.css(
              "overflow",
              "yes" === t ? "scroll" : "no" === t ? "hidden" : t
            ),
            E._setDimension(),
            E.reposition(),
            (E.isOpen = !1),
            (E.coming = null),
            E.bindEvents(),
            E.isOpened
              ? r.prevMethod && E.transitions[r.prevMethod]()
              : _(".fancybox-wrap")
                  .not(a.wrap)
                  .stop(!0)
                  .trigger("onReset")
                  .remove(),
            E.transitions[E.isOpened ? a.nextMethod : a.openMethod](),
            E._preloadImages();
        }
    },
    _setDimension: function () {
      var e,
        t,
        i,
        n,
        o,
        a,
        r,
        l,
        s,
        c = E.getViewport(),
        d = 0,
        p = !1,
        h = !1,
        f = ((p = E.wrap), E.skin),
        u = E.inner,
        g = E.current,
        m = ((h = g.width), g.height),
        y = g.minWidth,
        x = g.minHeight,
        v = g.maxWidth,
        w = g.maxHeight,
        b = g.scrolling,
        k = g.scrollOutside ? g.scrollbarWidth : 0,
        C = g.margin,
        O = T(C[1] + C[3]),
        W = T(C[0] + C[2]);
      if (
        (p
          .add(f)
          .add(u)
          .width("auto")
          .height("auto")
          .removeClass("fancybox-tmp"),
        (t = O + (C = T(f.outerWidth(!0) - f.width()))),
        (i = W + (e = T(f.outerHeight(!0) - f.height()))),
        (n = S(h) ? ((c.w - t) * T(h)) / 100 : h),
        (o = S(m) ? ((c.h - i) * T(m)) / 100 : m),
        "iframe" === g.type)
      ) {
        if (((s = g.content), g.autoHeight && 1 === s.data("ready")))
          try {
            s[0].contentWindow.document.location &&
              (u.width(n).height(9999),
              (a = s.contents().find("body")),
              k && a.css("overflow-x", "hidden"),
              (o = a.outerHeight(!0)));
          } catch (e) {}
      } else
        (g.autoWidth || g.autoHeight) &&
          (u.addClass("fancybox-tmp"),
          g.autoWidth || u.width(n),
          g.autoHeight || u.height(o),
          g.autoWidth && (n = u.width()),
          g.autoHeight && (o = u.height()),
          u.removeClass("fancybox-tmp"));
      if (
        ((h = T(n)),
        (m = T(o)),
        (l = n / o),
        (y = T(S(y) ? T(y, "w") - t : y)),
        (v = T(S(v) ? T(v, "w") - t : v)),
        (x = T(S(x) ? T(x, "h") - i : x)),
        (a = v),
        (r = w = T(S(w) ? T(w, "h") - i : w)),
        g.fitToView && ((v = Math.min(c.w - t, v)), (w = Math.min(c.h - i, w))),
        (t = c.w - O),
        (W = c.h - W),
        g.aspectRatio
          ? (v < h && (m = T((h = v) / l)),
            w < m && (h = T((m = w) * l)),
            h < y && (m = T((h = y) / l)),
            m < x && (h = T((m = x) * l)))
          : ((h = Math.max(y, Math.min(h, v))),
            g.autoHeight &&
              "iframe" !== g.type &&
              (u.width(h), (m = u.height())),
            (m = Math.max(x, Math.min(m, w)))),
        g.fitToView)
      )
        if (
          (u.width(h).height(m),
          p.width(h + C),
          (c = p.width()),
          (O = p.height()),
          g.aspectRatio)
        )
          for (; (t < c || W < O) && y < h && x < m && !(19 < d++); )
            (m = Math.max(x, Math.min(w, m - 10))),
              (h = T(m * l)) < y && (m = T((h = y) / l)),
              v < h && (m = T((h = v) / l)),
              u.width(h).height(m),
              p.width(h + C),
              (c = p.width()),
              (O = p.height());
        else
          (h = Math.max(y, Math.min(h, h - (c - t)))),
            (m = Math.max(x, Math.min(m, m - (O - W))));
      k && "auto" === b && m < o && h + C + k < t && (h += k),
        u.width(h).height(m),
        p.width(h + C),
        (c = p.width()),
        (O = p.height()),
        (p = (t < c || W < O) && y < h && x < m),
        (h = g.aspectRatio
          ? h < a && m < r && h < n && m < o
          : (h < a || m < r) && (h < n || m < o)),
        _.extend(g, {
          dim: { width: L(c), height: L(O) },
          origWidth: n,
          origHeight: o,
          canShrink: p,
          canExpand: h,
          wPadding: C,
          hPadding: e,
          wrapSpace: O - f.outerHeight(!0),
          skinSpace: f.height() - m,
        }),
        !s && g.autoHeight && x < m && m < w && !h && u.height("auto");
    },
    _getPosition: function (e) {
      var t = E.current,
        i = E.getViewport(),
        n = t.margin,
        o = E.wrap.width() + n[1] + n[3],
        a = E.wrap.height() + n[0] + n[2];
      n = { position: "absolute", top: n[0], left: n[3] };
      return (
        t.autoCenter && t.fixed && !e && a <= i.h && o <= i.w
          ? (n.position = "fixed")
          : t.locked || ((n.top += i.y), (n.left += i.x)),
        (n.top = L(Math.max(n.top, n.top + (i.h - a) * t.topRatio))),
        (n.left = L(Math.max(n.left, n.left + (i.w - o) * t.leftRatio))),
        n
      );
    },
    _afterZoomIn: function () {
      var t = E.current;
      t &&
        ((E.isOpen = E.isOpened = !0),
        E.wrap.css("overflow", "visible").addClass("fancybox-opened"),
        E.update(),
        (t.closeClick || (t.nextClick && 1 < E.group.length)) &&
          E.inner.css("cursor", "pointer").bind("click.fb", function (e) {
            _(e.target).is("a") ||
              _(e.target).parent().is("a") ||
              (e.preventDefault(), E[t.closeClick ? "close" : "next"]());
          }),
        t.closeBtn &&
          _(t.tpl.closeBtn)
            .appendTo(E.skin)
            .bind("click.fb", function (e) {
              e.preventDefault(), E.close();
            }),
        t.arrows &&
          1 < E.group.length &&
          ((t.loop || 0 < t.index) &&
            _(t.tpl.prev).appendTo(E.outer).bind("click.fb", E.prev),
          (t.loop || t.index < E.group.length - 1) &&
            _(t.tpl.next).appendTo(E.outer).bind("click.fb", E.next)),
        E.trigger("afterShow"),
        t.loop || t.index !== t.group.length - 1
          ? E.opts.autoPlay &&
            !E.player.isActive &&
            ((E.opts.autoPlay = !1), E.play())
          : E.play(!1));
    },
    _afterZoomOut: function (e) {
      (e = e || E.current),
        _(".fancybox-wrap").trigger("onReset").remove(),
        _.extend(E, {
          group: {},
          opts: {},
          router: !1,
          current: null,
          isActive: !1,
          isOpened: !1,
          isOpen: !1,
          isClosing: !1,
          wrap: null,
          skin: null,
          outer: null,
          inner: null,
        }),
        E.trigger("afterClose", e);
    },
  }),
    (E.transitions = {
      getOrigPosition: function () {
        var e = E.current,
          t = e.element,
          i = e.orig,
          n = {},
          o = 50,
          a = 50,
          r = e.hPadding,
          l = e.wPadding,
          s = E.getViewport();
        return (
          !i &&
            e.isDom &&
            t.is(":visible") &&
            ((i = t.find("img:first")).length || (i = t)),
          p(i)
            ? ((n = i.offset()),
              i.is("img") && ((o = i.outerWidth()), (a = i.outerHeight())))
            : ((n.top = s.y + (s.h - a) * e.topRatio),
              (n.left = s.x + (s.w - o) * e.leftRatio)),
          ("fixed" !== E.wrap.css("position") && !e.locked) ||
            ((n.top -= s.y), (n.left -= s.x)),
          {
            top: L(n.top - r * e.topRatio),
            left: L(n.left - l * e.leftRatio),
            width: L(o + l),
            height: L(a + r),
          }
        );
      },
      step: function (e, t) {
        var i,
          n,
          o = t.prop,
          a = (n = E.current).wrapSpace,
          r = n.skinSpace;
        ("width" !== o && "height" !== o) ||
          ((i = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start)),
          E.isClosing && (i = 1 - i),
          (n = e - (n = "width" === o ? n.wPadding : n.hPadding)),
          E.skin[o](T("width" === o ? n : n - a * i)),
          E.inner[o](T("width" === o ? n : n - a * i - r * i)));
      },
      zoomIn: function () {
        var e = E.current,
          t = e.pos,
          i = e.openEffect,
          n = "elastic" === i,
          o = _.extend({ opacity: 1 }, t);
        delete o.position,
          n
            ? ((t = this.getOrigPosition()), e.openOpacity && (t.opacity = 0.1))
            : "fade" === i && (t.opacity = 0.1),
          E.wrap
            .css(t)
            .animate(o, {
              duration: "none" === i ? 0 : e.openSpeed,
              easing: e.openEasing,
              step: n ? this.step : null,
              complete: E._afterZoomIn,
            });
      },
      zoomOut: function () {
        var e = E.current,
          t = e.closeEffect,
          i = "elastic" === t,
          n = { opacity: 0.1 };
        i &&
          ((n = this.getOrigPosition()), e.closeOpacity && (n.opacity = 0.1)),
          E.wrap.animate(n, {
            duration: "none" === t ? 0 : e.closeSpeed,
            easing: e.closeEasing,
            step: i ? this.step : null,
            complete: E._afterZoomOut,
          });
      },
      changeIn: function () {
        var e,
          t = E.current,
          i = t.nextEffect,
          n = t.pos,
          o = { opacity: 1 },
          a = E.direction;
        (n.opacity = 0.1),
          "elastic" === i &&
            ((e = "down" === a || "up" === a ? "top" : "left"),
            "down" === a || "right" === a
              ? ((n[e] = L(T(n[e]) - 200)), (o[e] = "+=200px"))
              : ((n[e] = L(T(n[e]) + 200)), (o[e] = "-=200px"))),
          "none" === i
            ? E._afterZoomIn()
            : E.wrap
                .css(n)
                .animate(o, {
                  duration: t.nextSpeed,
                  easing: t.nextEasing,
                  complete: E._afterZoomIn,
                });
      },
      changeOut: function () {
        var e = E.previous,
          t = e.prevEffect,
          i = { opacity: 0.1 },
          n = E.direction;
        "elastic" === t &&
          (i["down" === n || "up" === n ? "top" : "left"] =
            ("up" === n || "left" === n ? "-" : "+") + "=200px"),
          e.wrap.animate(i, {
            duration: "none" === t ? 0 : e.prevSpeed,
            easing: e.prevEasing,
            complete: function () {
              _(this).trigger("onReset").remove();
            },
          });
      },
    }),
    (E.helpers.overlay = {
      defaults: {
        closeClick: !0,
        speedOut: 200,
        showEarly: !0,
        css: {},
        locked: !s,
        fixed: !0,
      },
      overlay: null,
      fixed: !1,
      el: _("html"),
      create: function (e) {
        (e = _.extend({}, this.defaults, e)),
          this.overlay && this.close(),
          (this.overlay = _('<div class="fancybox-overlay"></div>').appendTo(
            E.coming ? E.coming.parent : e.parent
          )),
          (this.fixed = !1),
          e.fixed &&
            E.defaults.fixed &&
            (this.overlay.addClass("fancybox-overlay-fixed"),
            (this.fixed = !0));
      },
      open: function (e) {
        var t = this;
        (e = _.extend({}, this.defaults, e)),
          this.overlay
            ? this.overlay.unbind(".overlay").width("auto").height("auto")
            : this.create(e),
          this.fixed ||
            (a.bind("resize.overlay", _.proxy(this.update, this)),
            this.update()),
          e.closeClick &&
            this.overlay.bind("click.overlay", function (e) {
              if (_(e.target).hasClass("fancybox-overlay"))
                return E.isActive ? E.close() : t.close(), !1;
            }),
          this.overlay.css(e.css).show();
      },
      close: function () {
        var e, t;
        a.unbind("resize.overlay"),
          this.el.hasClass("fancybox-lock") &&
            (_(".fancybox-margin").removeClass("fancybox-margin"),
            (e = a.scrollTop()),
            (t = a.scrollLeft()),
            this.el.removeClass("fancybox-lock"),
            a.scrollTop(e).scrollLeft(t)),
          _(".fancybox-overlay").remove().hide(),
          _.extend(this, { overlay: null, fixed: !1 });
      },
      update: function () {
        var e,
          t = "100%";
        this.overlay.width(t).height("100%"),
          r
            ? ((e = Math.max(
                i.documentElement.offsetWidth,
                i.body.offsetWidth
              )),
              c.width() > e && (t = c.width()))
            : c.width() > a.width() && (t = c.width()),
          this.overlay.width(t).height(c.height());
      },
      onReady: function (e, t) {
        var i = this.overlay;
        _(".fancybox-overlay").stop(!0, !0),
          i || this.create(e),
          e.locked &&
            this.fixed &&
            t.fixed &&
            (i ||
              (this.margin =
                c.height() > a.height() &&
                _("html").css("margin-right").replace("px", "")),
            (t.locked = this.overlay.append(t.wrap)),
            (t.fixed = !1)),
          !0 === e.showEarly && this.beforeShow.apply(this, arguments);
      },
      beforeShow: function (e, t) {
        var i, n;
        t.locked &&
          (!1 !== this.margin &&
            (_("*")
              .filter(function () {
                return (
                  "fixed" === _(this).css("position") &&
                  !_(this).hasClass("fancybox-overlay") &&
                  !_(this).hasClass("fancybox-wrap")
                );
              })
              .addClass("fancybox-margin"),
            this.el.addClass("fancybox-margin")),
          (i = a.scrollTop()),
          (n = a.scrollLeft()),
          this.el.addClass("fancybox-lock"),
          a.scrollTop(i).scrollLeft(n)),
          this.open(e);
      },
      onUpdate: function () {
        this.fixed || this.update();
      },
      afterClose: function (e) {
        this.overlay &&
          !E.coming &&
          this.overlay.fadeOut(e.speedOut, _.proxy(this.close, this));
      },
    }),
    (E.helpers.title = {
      defaults: { type: "float", position: "bottom" },
      beforeShow: function (e) {
        var t = E.current,
          i = t.title,
          n = e.type;
        if (
          (_.isFunction(i) && (i = i.call(t.element, t)),
          h(i) && "" !== _.trim(i))
        ) {
          switch (
            ((t = _(
              '<div class="fancybox-title fancybox-title-' +
                n +
                '-wrap">' +
                i +
                "</div>"
            )),
            n)
          ) {
            case "inside":
              n = E.skin;
              break;
            case "outside":
              n = E.wrap;
              break;
            case "over":
              n = E.inner;
              break;
            default:
              (n = E.skin),
                t.appendTo("body"),
                r && t.width(t.width()),
                t.wrapInner('<span class="child"></span>'),
                (E.current.margin[2] += Math.abs(T(t.css("margin-bottom"))));
          }
          t["top" === e.position ? "prependTo" : "appendTo"](n);
        }
      },
    }),
    (_.fn.fancybox = function (a) {
      function e(e) {
        var t,
          i,
          n = _(this).blur(),
          o = r;
        e.ctrlKey ||
          e.altKey ||
          e.shiftKey ||
          e.metaKey ||
          n.is(".fancybox-wrap") ||
          ((t = a.groupAttr || "data-fancybox-group"),
          (i = n.attr(t)) || ((t = "rel"), (i = n.get(0)[t])),
          i &&
            "" !== i &&
            "nofollow" !== i &&
            (o = (n = (n = s.length ? _(s) : l).filter(
              "[" + t + '="' + i + '"]'
            )).index(this)),
          (a.index = o),
          !1 !== E.open(n, a) && e.preventDefault());
      }
      var r,
        l = _(this),
        s = this.selector || "";
      return (
        (r = (a = a || {}).index || 0),
        s && !1 !== a.live
          ? c
              .undelegate(s, "click.fb-start")
              .delegate(
                s + ":not('.fancybox-item, .fancybox-nav')",
                "click.fb-start",
                e
              )
          : l.unbind("click.fb-start").bind("click.fb-start", e),
        this.filter("[data-fancybox-start=1]").trigger("click"),
        this
      );
    }),
    c.ready(function () {
      var e, t;
      if (
        (_.scrollbarWidth === d &&
          (_.scrollbarWidth = function () {
            var e = _(
                '<div style="width:50px;height:50px;overflow:auto"><div/></div>'
              ).appendTo("body"),
              t = (t = e.children()).innerWidth() - t.height(99).innerWidth();
            return e.remove(), t;
          }),
        _.support.fixedPosition === d)
      ) {
        e = _.support;
        var i =
          20 ===
            (t = _('<div style="position:fixed;top:20px;"></div>').appendTo(
              "body"
            ))[0].offsetTop || 15 === t[0].offsetTop;
        t.remove(), (e.fixedPosition = i);
      }
      _.extend(E.defaults, {
        scrollbarWidth: _.scrollbarWidth(),
        fixed: _.support.fixedPosition,
        parent: _("body"),
      }),
        (e = _(n).width()),
        o.addClass("fancybox-lock-test"),
        (t = _(n).width()),
        o.removeClass("fancybox-lock-test"),
        _(
          "<style type='text/css'>.fancybox-margin{margin-right:" +
            (t - e) +
            "px;}</style>"
        ).appendTo("head");
    });
})(window, document, jQuery);
!(function (c) {
  "use strict";
  function p(t, e, a) {
    return (
      (a = a || ""),
      "object" === c.type(a) && (a = c.param(a, !0)),
      c.each(e, function (e, a) {
        t = t.replace("$" + e, a || "");
      }),
      a.length && (t += (0 < t.indexOf("?") ? "&" : "?") + a),
      t
    );
  }
  var e = c.fancybox;
  e.helpers.media = {
    defaults: {
      youtube: {
        matcher:
          /(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,
        params: {
          autoplay: 1,
          autohide: 1,
          fs: 1,
          rel: 0,
          hd: 1,
          wmode: "opaque",
          enablejsapi: 1,
        },
        type: "iframe",
        url: "//www.youtube.com/embed/$3",
      },
      vimeo: {
        matcher: /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,
        params: {
          autoplay: 1,
          hd: 1,
          show_title: 1,
          show_byline: 1,
          show_portrait: 0,
          fullscreen: 1,
        },
        type: "iframe",
        url: "//player.vimeo.com/video/$1",
      },
      metacafe: {
        matcher: /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,
        params: { autoPlay: "yes" },
        type: "swf",
        url: function (e, a, t) {
          return (
            (t.swf.flashVars = "playerVars=" + c.param(a, !0)),
            "//www.metacafe.com/fplayer/" + e[1] + "/.swf"
          );
        },
      },
      dailymotion: {
        matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
        params: { additionalInfos: 0, autoStart: 1 },
        type: "swf",
        url: "//www.dailymotion.com/swf/video/$1",
      },
      twitvid: {
        matcher: /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,
        params: { autoplay: 0 },
        type: "iframe",
        url: "//www.twitvid.com/embed.php?guid=$1",
      },
      twitpic: {
        matcher:
          /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,
        type: "image",
        url: "//twitpic.com/show/full/$1/",
      },
      instagram: {
        matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
        type: "image",
        url: "//$1/p/$2/media/?size=l",
      },
      google_maps: {
        matcher: /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,
        type: "iframe",
        url: function (e) {
          return (
            "//maps.google." +
            e[1] +
            "/" +
            e[3] +
            e[4] +
            "&output=" +
            (0 < e[4].indexOf("layer=c") ? "svembed" : "embed")
          );
        },
      },
    },
    beforeLoad: function (e, a) {
      var t,
        o,
        i,
        r,
        m = a.href || "",
        l = !1;
      for (t in e)
        if (e.hasOwnProperty(t) && ((o = e[t]), (i = m.match(o.matcher)))) {
          (l = o.type),
            (r = c.extend(
              !0,
              {},
              o.params,
              a[t] || (c.isPlainObject(e[t]) ? e[t].params : null)
            )),
            (m =
              "function" === c.type(o.url)
                ? o.url.call(this, i, r, a)
                : p(o.url, i, r));
          break;
        }
      l && ((a.href = m), (a.type = l), (a.autoHeight = !1));
    },
  };
})(jQuery);
