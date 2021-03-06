this.wordle = this.wordle || {}, this.wordle.bundle = function(e) {
  "use strict";

  function a(e) {
      return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
      } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
  }

  function s(e, a) {
      if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
  }

  function t(e, a) {
      for (var s = 0; s < a.length; s++) {
          var t = a[s];
          t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
      }
  }

  function o(e, a, s) {
      return a && t(e.prototype, a), s && t(e, s), e
  }

  function n(e, a, s) {
      return a in e ? Object.defineProperty(e, a, {
          value: s,
          enumerable: !0,
          configurable: !0,
          writable: !0
      }) : e[a] = s, e
  }

  function r(e, a) {
      if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(a && a.prototype, {
          constructor: {
              value: e,
              writable: !0,
              configurable: !0
          }
      }), a && l(e, a)
  }

  function i(e) {
      return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
  }

  function l(e, a) {
      return (l = Object.setPrototypeOf || function(e, a) {
          return e.__proto__ = a, e
      })(e, a)
  }

  function d() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
      } catch (e) {
          return !1
      }
  }

  function u(e, a, s) {
      return (u = d() ? Reflect.construct : function(e, a, s) {
          var t = [null];
          t.push.apply(t, a);
          var o = new(Function.bind.apply(e, t));
          return s && l(o, s.prototype), o
      }).apply(null, arguments)
  }

  function c(e) {
      var a = "function" == typeof Map ? new Map : void 0;
      return (c = function(e) {
          if (null === e || (s = e, -1 === Function.toString.call(s).indexOf("[native code]"))) return e;
          var s;
          if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
          if (void 0 !== a) {
              if (a.has(e)) return a.get(e);
              a.set(e, t)
          }

          function t() {
              return u(e, arguments, i(this).constructor)
          }
          return t.prototype = Object.create(e.prototype, {
              constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
              }
          }), l(t, e)
      })(e)
  }

  function p(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
  }

  function m(e, a) {
      return !a || "object" != typeof a && "function" != typeof a ? p(e) : a
  }

  function h(e) {
      var a = d();
      return function() {
          var s, t = i(e);
          if (a) {
              var o = i(this).constructor;
              s = Reflect.construct(t, arguments, o)
          } else s = t.apply(this, arguments);
          return m(this, s)
      }
  }

  function y(e, a) {
      return function(e) {
          if (Array.isArray(e)) return e
      }(e) || function(e, a) {
          var s = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null == s) return;
          var t, o, n = [],
              r = !0,
              i = !1;
          try {
              for (s = s.call(e); !(r = (t = s.next()).done) && (n.push(t.value), !a || n.length !== a); r = !0);
          } catch (e) {
              i = !0, o = e
          } finally {
              try {
                  r || null == s.return || s.return()
              } finally {
                  if (i) throw o
              }
          }
          return n
      }(e, a) || b(e, a) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
  }

  function g(e) {
      return function(e) {
          if (Array.isArray(e)) return f(e)
      }(e) || function(e) {
          if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
      }(e) || b(e) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
  }

  function b(e, a) {
      if (e) {
          if ("string" == typeof e) return f(e, a);
          var s = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === s && e.constructor && (s = e.constructor.name), "Map" === s || "Set" === s ? Array.from(e) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? f(e, a) : void 0
      }
  }

  function f(e, a) {
      (null == a || a > e.length) && (a = e.length);
      for (var s = 0, t = new Array(a); s < a; s++) t[s] = e[s];
      return t
  }
  var k = document.createElement("template");
  k.innerHTML = "\n<style>\n  :host {\n    display: inline-block;\n  }\n  .tile {\n    width: 100%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    line-height: 2rem;\n    font-weight: bold;\n    vertical-align: middle;\n    box-sizing: border-box;\n    color: var(--tile-text-color);\n    text-transform: uppercase;\n    user-select: none;\n  }\n  .tile::before {\n    content: '';\n    display: inline-block;\n    padding-bottom: 100%;\n  }\n\n  /* Allow tiles to be smaller on small screens */\n  @media (max-height: 600px) {\n    .tile {\n      font-size: 1em;\n      line-height: 1em;\n    }\n  }\n\n  .tile[data-state='empty'] {\n    border: 2px solid var(--color-tone-4);\n  }\n  .tile[data-state='tbd'] {\n    background-color: var(--color-tone-7);\n    border: 2px solid var(--color-tone-3);\n    color: var(--color-tone-1);\n  }\n  .tile[data-state='correct'] {\n    background-color: var(--color-correct);\n  }\n  .tile[data-state='present'] {\n    background-color: var(--color-present);\n  }\n  .tile[data-state='absent'] {\n    background-color: var(--color-absent);\n  }\n\n  .tile[data-animation='pop'] {\n    animation-name: PopIn;\n    animation-duration: 100ms;\n  }\n\n  @keyframes PopIn {\n    from {\n      transform: scale(0.8);\n      opacity: 0;\n    }\n\n    40% {\n      transform: scale(1.1);\n      opacity: 1;\n    }\n  }\n  .tile[data-animation='flip-in'] {\n    animation-name: FlipIn;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipIn {\n    0% {\n      transform: rotateX(0);\n    }\n    100% {\n      transform: rotateX(-90deg);\n    }\n  }\n  .tile[data-animation='flip-out'] {\n    animation-name: FlipOut;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipOut {\n    0% {\n      transform: rotateX(-90deg);\n    }\n    100% {\n      transform: rotateX(0);\n    }\n  }\n</style>\n<div class=\"tile\" data-state=\"empty\" data-animation=\"idle\"></div>\n";
  var v = function(e) {
      r(t, e);
      var a = h(t);

      function t() {
          var e;
          return s(this, t), n(p(e = a.call(this)), "_letter", ""), n(p(e), "_state", "empty"), n(p(e), "_animation", "idle"), n(p(e), "_last", !1), n(p(e), "_reveal", !1), e.attachShadow({
              mode: "open"
          }), e
      }
      return o(t, [{
          key: "last",
          set: function(e) {
              this._last = e
          }
      }, {
          key: "connectedCallback",
          value: function() {
              var e = this;
              this.shadowRoot.appendChild(k.content.cloneNode(!0)), this.$tile = this.shadowRoot.querySelector(".tile"), this.$tile.addEventListener("animationend", (function(a) {
                  "PopIn" === a.animationName && (e._animation = "idle"), "FlipIn" === a.animationName && (e.$tile.dataset.state = e._state, e._animation = "flip-out"), "FlipOut" === a.animationName && (e._animation = "idle", e._last && e.dispatchEvent(new CustomEvent("game-last-tile-revealed-in-row", {
                      bubbles: !0,
                      composed: !0
                  }))), e._render()
              })), this._render()
          }
      }, {
          key: "attributeChangedCallback",
          value: function(e, a, s) {
              switch (e) {
                  case "letter":
                      if (s === a) break;
                      var t = "null" === s ? "" : s;
                      this._letter = t, this._state = t ? "tbd" : "empty", this._animation = t ? "pop" : "idle";
                      break;
                  case "evaluation":
                      if (!s) break;
                      this._state = s;
                      break;
                  case "reveal":
                      this._animation = "flip-in", this._reveal = !0
              }
              this._render()
          }
      }, {
          key: "_render",
          value: function() {
              this.$tile && (this.$tile.textContent = this._letter, ["empty", "tbd"].includes(this._state) && (this.$tile.dataset.state = this._state), (["empty", "tbd"].includes(this._state) || this._reveal) && this.$tile.dataset.animation != this._animation && (this.$tile.dataset.animation = this._animation))
          }
      }], [{
          key: "observedAttributes",
          get: function() {
              return ["letter", "evaluation", "reveal"]
          }
      }]), t
  }(c(HTMLElement));
  customElements.define("game-tile", v);
  var w = document.createElement("template");
  w.innerHTML = '\n  <style>\n    :host {\n      display: block;\n    }\n    :host([invalid]){\n      animation-name: Shake;\n      animation-duration: 600ms;\n    }\n    .row {\n      display: grid;\n      grid-template-columns: repeat(5, 1fr);\n      grid-gap: 5px;\n    }\n    .win {\n      animation-name: Bounce;\n      animation-duration: 1000ms;\n    }\n\n    @keyframes Bounce {\n      0%, 20% {\n        transform: translateY(0);\n      }\n      40% {\n        transform: translateY(-30px);\n      }\n      50% {\n        transform: translateY(5px);\n      }\n      60% {\n        transform: translateY(-15px);\n      }\n      80% {\n        transform: translateY(2px);\n      }\n      100% {\n        transform: translateY(0);\n      }\n    }\n\n    @keyframes Shake {\n      10%,\n      90% {\n        transform: translateX(-1px);\n      }\n\n      20%,\n      80% {\n        transform: translateX(2px);\n      }\n\n      30%,\n      50%,\n      70% {\n        transform: translateX(-4px);\n      }\n\n      40%,\n      60% {\n        transform: translateX(4px);\n      }\n    }\n  </style>\n  <div class="row"></div>\n';
  var x = function(e) {
      r(t, e);
      var a = h(t);

      function t() {
          var e;
          return s(this, t), (e = a.call(this)).attachShadow({
              mode: "open"
          }), e._letters = "", e._evaluation = [], e._length, e
      }
      return o(t, [{
          key: "evaluation",
          get: function() {
              return this._evaluation
          },
          set: function(e) {
              var a = this;
              this._evaluation = e, this.$tiles && this.$tiles.forEach((function(e, s) {
                  e.setAttribute("evaluation", a._evaluation[s]), setTimeout((function() {
                      e.setAttribute("reveal", "")
                  }), 300 * s)
              }))
          }
      }, {
          key: "connectedCallback",
          value: function() {
              var e = this;
              this.shadowRoot.appendChild(w.content.cloneNode(!0)), this.$row = this.shadowRoot.querySelector(".row");
              for (var a = function(a) {
                      var s = document.createElement("game-tile"),
                          t = e._letters[a];
                      (t && s.setAttribute("letter", t), e._evaluation[a]) && (s.setAttribute("evaluation", e._evaluation[a]), setTimeout((function() {
                          s.setAttribute("reveal", "")
                      }), 100 * a));
                      a === e._length - 1 && (s.last = !0), e.$row.appendChild(s)
                  }, s = 0; s < this._length; s++) a(s);
              this.$tiles = this.shadowRoot.querySelectorAll("game-tile"), this.addEventListener("animationend", (function(a) {
                  "Shake" === a.animationName && e.removeAttribute("invalid")
              }))
          }
      }, {
          key: "attributeChangedCallback",
          value: function(e, a, s) {
              switch (e) {
                  case "letters":
                      this._letters = s || "";
                      break;
                  case "length":
                      this._length = parseInt(s, 10);
                      break;
                  case "win":
                      if (null === s) {
                          this.$tiles.forEach((function(e) {
                              e.classList.remove("win")
                          }));
                          break
                      }
                      this.$tiles.forEach((function(e, a) {
                          e.classList.add("win"), e.style.animationDelay = "".concat(100 * a, "ms")
                      }))
              }
              this._render()
          }
      }, {
          key: "_render",
          value: function() {
              var e = this;
              this.$row && this.$tiles.forEach((function(a, s) {
                  var t = e._letters[s];
                  t ? a.setAttribute("letter", t) : a.removeAttribute("letter")
              }))
          }
      }], [{
          key: "observedAttributes",
          get: function() {
              return ["letters", "length", "invalid", "win"]
          }
      }]), t
  }(c(HTMLElement));
  customElements.define("game-row", x);
  var z = document.createElement("template");
  z.innerHTML = "\n  <slot></slot>\n";
  var j = "darkTheme",
      S = "colorBlindTheme",
      _ = function(e) {
          r(t, e);
          var a = h(t);

          function t() {
              var e;
              s(this, t), n(p(e = a.call(this)), "isDarkTheme", !1), n(p(e), "isColorBlindTheme", !1), e.attachShadow({
                  mode: "open"
              });
              var o = JSON.parse(window.localStorage.getItem(j)),
                  r = window.matchMedia("(prefers-color-scheme: dark)").matches,
                  i = JSON.parse(window.localStorage.getItem(S));
              return !0 === o || !1 === o ? e.setDarkTheme(o) : r && e.setDarkTheme(!0), !0 !== i && !1 !== i || e.setColorBlindTheme(i), e
          }
          return o(t, [{
              key: "setDarkTheme",
              value: function(e) {
                  var a = document.querySelector("body");
                  e && !a.classList.contains("nightmode") ? a.classList.add("nightmode") : a.classList.remove("nightmode"), this.isDarkTheme = e, window.localStorage.setItem(j, JSON.stringify(e))
              }
          }, {
              key: "setColorBlindTheme",
              value: function(e) {
                  var a = document.querySelector("body");
                  e && !a.classList.contains("colorblind") ? a.classList.add("colorblind") : a.classList.remove("colorblind"), this.isColorBlindTheme = e, window.localStorage.setItem(S, JSON.stringify(e))
              }
          }, {
              key: "connectedCallback",
              value: function() {
                  var e = this;
                  this.shadowRoot.appendChild(z.content.cloneNode(!0)), this.shadowRoot.addEventListener("game-setting-change", (function(a) {
                      var s = a.detail,
                          t = s.name,
                          o = s.checked;
                      switch (t) {
                          case "dark-theme":
                              return void e.setDarkTheme(o);
                          case "color-blind-theme":
                              return void e.setColorBlindTheme(o)
                      }
                  }))
              }
          }]), t
      }(c(HTMLElement));

  function q(e, a) {
      return e === a || e != e && a != a
  }

  function E(e, a) {
      for (var s = e.length; s--;)
          if (q(e[s][0], a)) return s;
      return -1
  }
  customElements.define("game-theme-manager", _);
  var A = Array.prototype.splice;

  function C(e) {
      var a = -1,
          s = null == e ? 0 : e.length;
      for (this.clear(); ++a < s;) {
          var t = e[a];
          this.set(t[0], t[1])
      }
  }
  C.prototype.clear = function() {
      this.__data__ = [], this.size = 0
  }, C.prototype.delete = function(e) {
      var a = this.__data__,
          s = E(a, e);
      return !(s < 0) && (s == a.length - 1 ? a.pop() : A.call(a, s, 1), --this.size, !0)
  }, C.prototype.get = function(e) {
      var a = this.__data__,
          s = E(a, e);
      return s < 0 ? void 0 : a[s][1]
  }, C.prototype.has = function(e) {
      return E(this.__data__, e) > -1
  }, C.prototype.set = function(e, a) {
      var s = this.__data__,
          t = E(s, e);
      return t < 0 ? (++this.size, s.push([e, a])) : s[t][1] = a, this
  };
  var L = "object" == ("undefined" == typeof global ? "undefined" : a(global)) && global && global.Object === Object && global,
      T = "object" == ("undefined" == typeof self ? "undefined" : a(self)) && self && self.Object === Object && self,
      I = L || T || Function("return this")(),
      M = I.Symbol,
      O = Object.prototype,
      R = O.hasOwnProperty,
      $ = O.toString,
      P = M ? M.toStringTag : void 0;
  var H = Object.prototype.toString;
  var N = M ? M.toStringTag : void 0;

  function D(e) {
      return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : N && N in Object(e) ? function(e) {
          var a = R.call(e, P),
              s = e[P];
          try {
              e[P] = void 0;
              var t = !0
          } catch (e) {}
          var o = $.call(e);
          return t && (a ? e[P] = s : delete e[P]), o
      }(e) : function(e) {
          return H.call(e)
      }(e)
  }

  function G(e) {
      var s = a(e);
      return null != e && ("object" == s || "function" == s)
  }

  function B(e) {
      if (!G(e)) return !1;
      var a = D(e);
      return "[object Function]" == a || "[object GeneratorFunction]" == a || "[object AsyncFunction]" == a || "[object Proxy]" == a
  }
  var F, W = I["__core-js_shared__"],
      Y = (F = /[^.]+$/.exec(W && W.keys && W.keys.IE_PROTO || "")) ? "Symbol(src)_1." + F : "";
  var J = Function.prototype.toString;
  var U = /^\[object .+?Constructor\]$/,
      X = Function.prototype,
      V = Object.prototype,
      K = X.toString,
      Q = V.hasOwnProperty,
      Z = RegExp("^" + K.call(Q).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

  function ee(e) {
      return !(!G(e) || (a = e, Y && Y in a)) && (B(e) ? Z : U).test(function(e) {
          if (null != e) {
              try {
                  return J.call(e)
              } catch (e) {}
              try {
                  return e + ""
              } catch (e) {}
          }
          return ""
      }(e));
      var a
  }

  function ae(e, a) {
      var s = function(e, a) {
          return null == e ? void 0 : e[a]
      }(e, a);
      return ee(s) ? s : void 0
  }
  var se = ae(I, "Map"),
      te = ae(Object, "create");
  var oe = Object.prototype.hasOwnProperty;
  var ne = Object.prototype.hasOwnProperty;

  function re(e) {
      var a = -1,
          s = null == e ? 0 : e.length;
      for (this.clear(); ++a < s;) {
          var t = e[a];
          this.set(t[0], t[1])
      }
  }

  function ie(e, s) {
      var t, o, n = e.__data__;
      return ("string" == (o = a(t = s)) || "number" == o || "symbol" == o || "boolean" == o ? "__proto__" !== t : null === t) ? n["string" == typeof s ? "string" : "hash"] : n.map
  }

  function le(e) {
      var a = -1,
          s = null == e ? 0 : e.length;
      for (this.clear(); ++a < s;) {
          var t = e[a];
          this.set(t[0], t[1])
      }
  }
  re.prototype.clear = function() {
      this.__data__ = te ? te(null) : {}, this.size = 0
  }, re.prototype.delete = function(e) {
      var a = this.has(e) && delete this.__data__[e];
      return this.size -= a ? 1 : 0, a
  }, re.prototype.get = function(e) {
      var a = this.__data__;
      if (te) {
          var s = a[e];
          return "__lodash_hash_undefined__" === s ? void 0 : s
      }
      return oe.call(a, e) ? a[e] : void 0
  }, re.prototype.has = function(e) {
      var a = this.__data__;
      return te ? void 0 !== a[e] : ne.call(a, e)
  }, re.prototype.set = function(e, a) {
      var s = this.__data__;
      return this.size += this.has(e) ? 0 : 1, s[e] = te && void 0 === a ? "__lodash_hash_undefined__" : a, this
  }, le.prototype.clear = function() {
      this.size = 0, this.__data__ = {
          hash: new re,
          map: new(se || C),
          string: new re
      }
  }, le.prototype.delete = function(e) {
      var a = ie(this, e).delete(e);
      return this.size -= a ? 1 : 0, a
  }, le.prototype.get = function(e) {
      return ie(this, e).get(e)
  }, le.prototype.has = function(e) {
      return ie(this, e).has(e)
  }, le.prototype.set = function(e, a) {
      var s = ie(this, e),
          t = s.size;
      return s.set(e, a), this.size += s.size == t ? 0 : 1, this
  };

  function de(e) {
      var a = this.__data__ = new C(e);
      this.size = a.size
  }
  de.prototype.clear = function() {
      this.__data__ = new C, this.size = 0
  }, de.prototype.delete = function(e) {
      var a = this.__data__,
          s = a.delete(e);
      return this.size = a.size, s
  }, de.prototype.get = function(e) {
      return this.__data__.get(e)
  }, de.prototype.has = function(e) {
      return this.__data__.has(e)
  }, de.prototype.set = function(e, a) {
      var s = this.__data__;
      if (s instanceof C) {
          var t = s.__data__;
          if (!se || t.length < 199) return t.push([e, a]), this.size = ++s.size, this;
          s = this.__data__ = new le(t)
      }
      return s.set(e, a), this.size = s.size, this
  };
  var ue = function() {
      try {
          var e = ae(Object, "defineProperty");
          return e({}, "", {}), e
      } catch (e) {}
  }();

  function ce(e, a, s) {
      "__proto__" == a && ue ? ue(e, a, {
          configurable: !0,
          enumerable: !0,
          value: s,
          writable: !0
      }) : e[a] = s
  }

  function pe(e, a, s) {
      (void 0 !== s && !q(e[a], s) || void 0 === s && !(a in e)) && ce(e, a, s)
  }
  var me, he = function(e, a, s) {
          for (var t = -1, o = Object(e), n = s(e), r = n.length; r--;) {
              var i = n[me ? r : ++t];
              if (!1 === a(o[i], i, o)) break
          }
          return e
      },
      ye = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
      ge = ye && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
      be = ge && ge.exports === ye ? I.Buffer : void 0,
      fe = be ? be.allocUnsafe : void 0;
  var ke = I.Uint8Array;

  function ve(e, a) {
      var s, t, o = a ? (s = e.buffer, t = new s.constructor(s.byteLength), new ke(t).set(new ke(s)), t) : e.buffer;
      return new e.constructor(o, e.byteOffset, e.length)
  }
  var we = Object.create,
      xe = function() {
          function e() {}
          return function(a) {
              if (!G(a)) return {};
              if (we) return we(a);
              e.prototype = a;
              var s = new e;
              return e.prototype = void 0, s
          }
      }();
  var ze, je, Se = (ze = Object.getPrototypeOf, je = Object, function(e) {
          return ze(je(e))
      }),
      _e = Object.prototype;

  function qe(e) {
      var a = e && e.constructor;
      return e === ("function" == typeof a && a.prototype || _e)
  }

  function Ee(e) {
      return null != e && "object" == a(e)
  }

  function Ae(e) {
      return Ee(e) && "[object Arguments]" == D(e)
  }
  var Ce = Object.prototype,
      Le = Ce.hasOwnProperty,
      Te = Ce.propertyIsEnumerable,
      Ie = Ae(function() {
          return arguments
      }()) ? Ae : function(e) {
          return Ee(e) && Le.call(e, "callee") && !Te.call(e, "callee")
      },
      Me = Array.isArray;

  function Oe(e) {
      return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
  }

  function Re(e) {
      return null != e && Oe(e.length) && !B(e)
  }
  var $e = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
      Pe = $e && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
      He = Pe && Pe.exports === $e ? I.Buffer : void 0,
      Ne = (He ? He.isBuffer : void 0) || function() {
          return !1
      },
      De = Function.prototype,
      Ge = Object.prototype,
      Be = De.toString,
      Fe = Ge.hasOwnProperty,
      We = Be.call(Object);
  var Ye = {};
  Ye["[object Float32Array]"] = Ye["[object Float64Array]"] = Ye["[object Int8Array]"] = Ye["[object Int16Array]"] = Ye["[object Int32Array]"] = Ye["[object Uint8Array]"] = Ye["[object Uint8ClampedArray]"] = Ye["[object Uint16Array]"] = Ye["[object Uint32Array]"] = !0, Ye["[object Arguments]"] = Ye["[object Array]"] = Ye["[object ArrayBuffer]"] = Ye["[object Boolean]"] = Ye["[object DataView]"] = Ye["[object Date]"] = Ye["[object Error]"] = Ye["[object Function]"] = Ye["[object Map]"] = Ye["[object Number]"] = Ye["[object Object]"] = Ye["[object RegExp]"] = Ye["[object Set]"] = Ye["[object String]"] = Ye["[object WeakMap]"] = !1;
  var Je = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
      Ue = Je && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
      Xe = Ue && Ue.exports === Je && L.process,
      Ve = function() {
          try {
              var e = Ue && Ue.require && Ue.require("util").types;
              return e || Xe && Xe.binding && Xe.binding("util")
          } catch (e) {}
      }(),
      Ke = Ve && Ve.isTypedArray,
      Qe = Ke ? function(e) {
          return function(a) {
              return e(a)
          }
      }(Ke) : function(e) {
          return Ee(e) && Oe(e.length) && !!Ye[D(e)]
      };

  function Ze(e, a) {
      if (("constructor" !== a || "function" != typeof e[a]) && "__proto__" != a) return e[a]
  }
  var ea = Object.prototype.hasOwnProperty;

  function aa(e, a, s) {
      var t = e[a];
      ea.call(e, a) && q(t, s) && (void 0 !== s || a in e) || ce(e, a, s)
  }
  var sa = /^(?:0|[1-9]\d*)$/;

  function ta(e, s) {
      var t = a(e);
      return !!(s = null == s ? 9007199254740991 : s) && ("number" == t || "symbol" != t && sa.test(e)) && e > -1 && e % 1 == 0 && e < s
  }
  var oa = Object.prototype.hasOwnProperty;

  function na(e, a) {
      var s = Me(e),
          t = !s && Ie(e),
          o = !s && !t && Ne(e),
          n = !s && !t && !o && Qe(e),
          r = s || t || o || n,
          i = r ? function(e, a) {
              for (var s = -1, t = Array(e); ++s < e;) t[s] = a(s);
              return t
          }(e.length, String) : [],
          l = i.length;
      for (var d in e) !a && !oa.call(e, d) || r && ("length" == d || o && ("offset" == d || "parent" == d) || n && ("buffer" == d || "byteLength" == d || "byteOffset" == d) || ta(d, l)) || i.push(d);
      return i
  }
  var ra = Object.prototype.hasOwnProperty;

  function ia(e) {
      if (!G(e)) return function(e) {
          var a = [];
          if (null != e)
              for (var s in Object(e)) a.push(s);
          return a
      }(e);
      var a = qe(e),
          s = [];
      for (var t in e)("constructor" != t || !a && ra.call(e, t)) && s.push(t);
      return s
  }

  function la(e) {
      return Re(e) ? na(e, !0) : ia(e)
  }

  function da(e) {
      return function(e, a, s, t) {
          var o = !s;
          s || (s = {});
          for (var n = -1, r = a.length; ++n < r;) {
              var i = a[n],
                  l = t ? t(s[i], e[i], i, s, e) : void 0;
              void 0 === l && (l = e[i]), o ? ce(s, i, l) : aa(s, i, l)
          }
          return s
      }(e, la(e))
  }

  function ua(e, a, s, t, o, n, r) {
      var i = Ze(e, s),
          l = Ze(a, s),
          d = r.get(l);
      if (d) pe(e, s, d);
      else {
          var u, c = n ? n(i, l, s + "", e, a, r) : void 0,
              p = void 0 === c;
          if (p) {
              var m = Me(l),
                  h = !m && Ne(l),
                  y = !m && !h && Qe(l);
              c = l, m || h || y ? Me(i) ? c = i : Ee(u = i) && Re(u) ? c = function(e, a) {
                  var s = -1,
                      t = e.length;
                  for (a || (a = Array(t)); ++s < t;) a[s] = e[s];
                  return a
              }(i) : h ? (p = !1, c = function(e, a) {
                  if (a) return e.slice();
                  var s = e.length,
                      t = fe ? fe(s) : new e.constructor(s);
                  return e.copy(t), t
              }(l, !0)) : y ? (p = !1, c = ve(l, !0)) : c = [] : function(e) {
                  if (!Ee(e) || "[object Object]" != D(e)) return !1;
                  var a = Se(e);
                  if (null === a) return !0;
                  var s = Fe.call(a, "constructor") && a.constructor;
                  return "function" == typeof s && s instanceof s && Be.call(s) == We
              }(l) || Ie(l) ? (c = i, Ie(i) ? c = da(i) : G(i) && !B(i) || (c = function(e) {
                  return "function" != typeof e.constructor || qe(e) ? {} : xe(Se(e))
              }(l))) : p = !1
          }
          p && (r.set(l, c), o(c, l, t, n, r), r.delete(l)), pe(e, s, c)
      }
  }

  function ca(e, a, s, t, o) {
      e !== a && he(a, (function(n, r) {
          if (o || (o = new de), G(n)) ua(e, a, r, s, ca, t, o);
          else {
              var i = t ? t(Ze(e, r), n, r + "", e, a, o) : void 0;
              void 0 === i && (i = n), pe(e, r, i)
          }
      }), la)
  }

  function pa(e) {
      return e
  }

  function ma(e, a, s) {
      switch (s.length) {
          case 0:
              return e.call(a);
          case 1:
              return e.call(a, s[0]);
          case 2:
              return e.call(a, s[0], s[1]);
          case 3:
              return e.call(a, s[0], s[1], s[2])
      }
      return e.apply(a, s)
  }
  var ha = Math.max;
  var ya = ue ? function(e, a) {
          return ue(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: (s = a, function() {
                  return s
              }),
              writable: !0
          });
          var s
      } : pa,
      ga = Date.now;
  var ba = function(e) {
      var a = 0,
          s = 0;
      return function() {
          var t = ga(),
              o = 16 - (t - s);
          if (s = t, o > 0) {
              if (++a >= 800) return arguments[0]
          } else a = 0;
          return e.apply(void 0, arguments)
      }
  }(ya);

  function fa(e, a) {
      return ba(function(e, a, s) {
          return a = ha(void 0 === a ? e.length - 1 : a, 0),
              function() {
                  for (var t = arguments, o = -1, n = ha(t.length - a, 0), r = Array(n); ++o < n;) r[o] = t[a + o];
                  o = -1;
                  for (var i = Array(a + 1); ++o < a;) i[o] = t[o];
                  return i[a] = s(r), ma(e, this, i)
              }
      }(e, a, pa), e + "")
  }
  var ka, va = (ka = function(e, a, s) {
          ca(e, a, s)
      }, fa((function(e, s) {
          var t = -1,
              o = s.length,
              n = o > 1 ? s[o - 1] : void 0,
              r = o > 2 ? s[2] : void 0;
          for (n = ka.length > 3 && "function" == typeof n ? (o--, n) : void 0, r && function(e, s, t) {
                  if (!G(t)) return !1;
                  var o = a(s);
                  return !!("number" == o ? Re(t) && ta(s, t.length) : "string" == o && s in t) && q(t[s], e)
              }(s[0], s[1], r) && (n = o < 3 ? void 0 : n, o = 1), e = Object(e); ++t < o;) {
              var i = s[t];
              i && ka(e, i, t, n)
          }
          return e
      }))),
      wa = "gameState",
      xa = {
          boardState: null,
          evaluations: null,
          rowIndex: null,
          solution: null,
          gameStatus: null,
          lastPlayedTs: null,
          lastCompletedTs: null,
          restoringFromLocalStorage: null,
          hardMode: !1
      };

  function za() {
      var e = window.localStorage.getItem(wa) || JSON.stringify(xa);
      return JSON.parse(e)
  }

  function ja(e) {
      var a = za();
      ! function(e) {
          window.localStorage.setItem(wa, JSON.stringify(e))
      }(va(a, e))
  }
  var Sa = document.createElement("template");
  Sa.innerHTML = '\n  <style>\n  .setting {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid var(--color-tone-4);\n    padding: 16px 0;\n  }\n\n  a, a:visited {\n    color: var(--color-tone-2);\n  }\n\n  .title {\n    font-size: 18px;\n  }\n  .text {\n    padding-right: 8px;\n  }\n  .description {\n    font-size: 12px;\n    color: var(--color-tone-2);\n  }\n\n  #footnote {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 16px;\n    color: var(--color-tone-2);\n    font-size: 12px;\n    text-align: right;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n  }\n\n  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n    .setting {\n      padding: 16px;\n    }\n  }\n\n  </style>\n  <div class="sections">\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Zor Mod</div>\n          <div class="description">Ortaya ????kan herhangi bir ipucu sonraki tahminlerde kullan??lmal??d??r.</div>\n        </div>\n        <div class="control">\n          <game-switch id="hard-mode" name="hard-mode"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Koyu Tema</div>\n        </div>\n        <div class="control">\n          <game-switch id="dark-theme" name="dark-theme"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Renk K??r?? Modu</div>\n          <div class="description">Y??ksek kontrast modu</div>\n        </div>\n        <div class="control">\n          <game-switch id="color-blind-theme" name="color-blind-theme"></game-switch>\n        </div>\n      </div>\n    </section>\n\n    </div>\n  <div id="footnote">\n    <div id="copyright">Orijinal Oyun https://powerlanguage.co.uk/wordle/ adresindedir.</div>\n    <div>\n      <div id="puzzle-number"></div>\n      <div id="hash"></div>\n    </div>\n  </div>\n';
  var _a = function(e) {
      r(t, e);
      var a = h(t);

      function t() {
          var e;
          return s(this, t), n(p(e = a.call(this)), "gameApp", void 0), e.attachShadow({
              mode: "open"
          }), e
      }
      return o(t, [{
          key: "connectedCallback",
          value: function() {
              var e, a = this;
              this.shadowRoot.appendChild(Sa.content.cloneNode(!0)), this.shadowRoot.querySelector("#hash").textContent = null === (e = window.wordle) || void 0 === e ? void 0 : e.hash, this.shadowRoot.querySelector("#puzzle-number").textContent = "#".concat(this.gameApp.dayOffset), this.shadowRoot.addEventListener("game-switch-change", (function(e) {
                  e.stopPropagation();
                  var s = e.detail,
                      t = s.name,
                      o = s.checked,
                      n = s.disabled;
                  a.dispatchEvent(new CustomEvent("game-setting-change", {
                      bubbles: !0,
                      composed: !0,
                      detail: {
                          name: t,
                          checked: o,
                          disabled: n
                      }
                  })), a.render()
              })), this.render()
          }
      }, {
          key: "render",
          value: function() {
              var e = document.querySelector("body");
              e.classList.contains("nightmode") && this.shadowRoot.querySelector("#dark-theme").setAttribute("checked", ""), e.classList.contains("colorblind") && this.shadowRoot.querySelector("#color-blind-theme").setAttribute("checked", "");
              var a = za();
              a.hardMode && this.shadowRoot.querySelector("#hard-mode").setAttribute("checked", ""), a.hardMode || "IN_PROGRESS" !== a.gameStatus || 0 === a.rowIndex || (this.shadowRoot.querySelector("#hard-mode").removeAttribute("checked"), this.shadowRoot.querySelector("#hard-mode").setAttribute("disabled", ""))
          }
      }]), t
  }(c(HTMLElement));
  customElements.define("game-settings", _a);
  var qa = document.createElement("template");
  qa.innerHTML = '\n  <style>\n    .toast {\n      position: relative;\n      margin: 16px;\n      background-color: var(--color-tone-1);\n      color: var(--color-tone-7);\n      padding: 16px;\n      border: none;\n      border-radius: 4px;\n      opacity: 1;\n      transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n      font-weight: 700;\n    }\n    .win {\n      background-color: var(--color-correct);\n      color: var(--tile-text-color);\n    }\n    .fade {\n      opacity: 0;\n    }\n  </style>\n  <div class="toast"></div>\n';
  var Ea, Aa = function(e) {
      r(t, e);
      var a = h(t);

      function t() {
          var e;
          return s(this, t), n(p(e = a.call(this)), "_duration", void 0), e.attachShadow({
              mode: "open"
          }), e
      }
      return o(t, [{
          key: "connectedCallback",
          value: function() {
              var e = this;
              this.shadowRoot.appendChild(qa.content.cloneNode(!0));
              var a = this.shadowRoot.querySelector(".toast");
              a.textContent = this.getAttribute("text"), this._duration = this.getAttribute("duration") || 1e3, "Infinity" !== this._duration && setTimeout((function() {
                  a.classList.add("fade")
              }), this._duration), a.addEventListener("transitionend", (function(a) {
                  e.parentNode.removeChild(e)
              }))
          }
      }]), t
  }(c(HTMLElement));

  function Ca() {
      dataLayer.push(arguments)
  }
  customElements.define("game-toast", Aa), window.dataLayer = window.dataLayer || [], Ca("js", new Date);
  Ca("config", "", {
      app_version: null === (Ea = window.wordle) || void 0 === Ea ? void 0 : Ea.hash,
      debug_mode: !1
  });
  var La = ["k??rpe", "acele", "g??ne??", "argon", "kovan", "birey", "kazma", "cebir", "s??cak", "dorse", "d??k??m", "memnu", "tavla", "sebil", "yanak", "ikbal", "diyet", "????t??r", "yasl??", "paket", "kal??n", "silah", "kulak", "keten", "kapak", "neden", "may??s", "cesur", "fecir", "ajans", "a??a????", "korna", "kep??e", "solcu", "emare", "ispir", "kenet", "koyma", "hatta", "??elim", "didim", "rehin", "sinop", "do??um", "d????me", "nimet", "p??ht??", "k??fte", "fl??rt", "sufle", "yazg??", "ar??iv", "hemze", "??ad??r", "t??bbi", "k??tl??", "nezih", "ilahi", "g??yap", "??orba", "kaban", "konak", "ikili", "nemli", "y??lk??", "k??r??k", "gasil", "cenin", "armut", "??a??aa", "kebir", "denek", "yasak", "l??fer", "??rk????", "otizm", "a??l??k", "erin??", "d??k????", "papak", "kodes", "s????????", "k??dem", "san??k", "imbat", "bucak", "boyut", "??slah", "b??zg??", "matem", "antik", "????mez", "anime", "kabak", "hacet", "bu??on", "hesap", "vefat", "????k????", "s??n????", "y??k??m", "??elme", "i??ten", "k????ek", "hoppa", "teyze", "s??r??k", "b????ak", "kazan", "piyaz", "kazak", "motor", "kolaj", "k??l??e", "banka", "kapi??", "i??sel", "kumar", "yar??k", "topuz", "basit", "tablo", "satma", "??ehre", "k??pek", "maden", "melek", "bacak", "ko??ul", "bagaj", "m??min", "libre", "magma", "kavk??", "katre", "efekt", "o??lan", "t??ka??", "??i??ik", "sayfa", "kelep", "genel", "torba", "anlam", "mafya", "direk", "m??zik", "sucuk", "etmen", "yerel", "emtia", "umumi", "herif", "ceviz", "bran??", "cisim", "dizgi", "??alg??", "nefis", "riyal", "g??ll??", "kiril", "turbo", "deizm", "yalak", "??i??ek", "k??lli", "vahiy", "aktif", "rimel", "t??m??r", "patik", "ucube", "??r??l??", "yoku??", "marul", "s??f??r", "d??bel", "taocu", "salat", "yekta", "devir", "pilav", "melun", "kavak", "resul", "alg??n", "amber", "gazel", "semiz", "??e??it", "mekan", "tan??k", "??ehit", "kaz??k", "doyum", "y??zme", "f??tri", "e??raf", "??ebek", "kal??a", "keven", "m??rit", "anda??", "takip", "siyer", "la??in", "soluk", "zevce", "dinme", "vokal", "bat??l", "n??fuz", "seans", "ambar", "salg??", "itlik", "kumru", "dizek", "d??viz", "hasar", "yarar", "ihsan", "ulufe", "dobra", "??ekik", "??akma", "metro", "pigme", "basur", "tayfa", "ekmek", "t??pk??", "vak??f", "berat", "safra", "evrak", "k??f??r", "ferah", "hindu", "horoz", "????????r", "biber", "funda", "mebus", "hatip", "dahil", "varil", "kak??l", "kalan", "b??t??e", "tirit", "entel", "sap??k", "sayg??", "me??in", "??zg??r", "a??l??k", "bamya", "ranza", "bak??m", "legal", "erkan", "elips", "radyo", "t??vbe", "matbu", "ishal", "hudut", "metan", "??izgi", "vekil", "memba", "gafil", "dada??", "mevzi", "??abuk", "hukuk", "yetki", "telef", "cihan", "duru??", "bak??r", "diyez", "sanal", "karar", "arife", "b??cek", "dumur", "enkaz", "b??l??m", "pas??r", "incir", "tekme", "ayyuk", "bu??ra", "utan??", "emzik", "bas??n", "kefal", "??avu??", "ard????", "kabin", "si??il", "kaput", "d??be??", "yalpa", "sahte", "hokka", "??elik", "pinti", "zemin", "sar??k", "t??ts??", "havan", "eviye", "koko??", "s??tl??", "d????ek", "tuzla", "di??er", "uyruk", "??ello", "g??d??m", "serap", "inan??", "d??zen", "ba??ak", "sauna", "avare", "davar", "kalay", "pelit", "tuzcu", "ceren", "yavan", "muzip", "akort", "istif", "evrim", "??lm????", "kopya", "sahaf", "cadde", "tokuz", "alaca", "kahve", "zehir", "s??hhi", "ba??????", "bah??e", "??nder", "sonda", "vapur", "yemin", "??ubat", "imsak", "b??lu??", "stat??", "iplik", "selim", "desen", "kesme", "topuk", "i??lev", "g??d??k", "kargo", "barem", "topa??", "h??rbo", "arac??", "hap??u", "ancak", "kat??r", "zalim", "ispat", "tu??ra", "m??sra", "sinsi", "ard??l", "somon", "e??arp", "haram", "etsiz", "ummak", "zorla", "beter", "domuz", "m??h??r", "ihram", "sizce", "iyice", "giri??", "torna", "diri??", "delta", "bar????", "duhul", "d??????m", "golc??", "aidat", "mutlu", "s??z??k", "hazc??", "k??s????", "fitin", "??uara", "kollu", "??erpa", "??ilin", "honaz", "biraz", "bindi", "viral", "la????n", "robot", "savak", "bek??i", "sidik", "kisve", "pusma", "sorum", "tariz", "sekil", "dipli", "hizan", "g??d??k", "saten", "??ayl??", "etkin", "kesat", "maket", "uzama", "tavl??", "madde", "serik", "medar", "kolan", "peyda", "mabut", "tulup", "ka??if", "g??ruh", "??rkme", "uygun", "oyal??", "????l??k", "pulcu", "k??fl??", "cimri", "??l??ca", "yuvar", "hakl??", "??imal", "??nc??l", "yufka", "kas??m", "yavuz", "kurye", "kapan", "sedir", "araba", "hakan", "isko??", "sekiz", "tuzlu", "buhar", "petek", "ilahi", "kukla", "mobil", "torak", "h??cre", "melce", "??amur", "sa??????", "gayur", "t??rbe", "kuma??", "basen", "abiye", "mehaz", "aktar", "ras??t", "tutku", "korse", "s??zce", "davul", "teker", "talip", "tabur", "k??rma", "beste", "balat", "r??gar", "endam", "evlat", "et??il", "payda", "kafir", "i??eri", "??stel", "c??r??m", "yorum", "fitre", "debbe", "volta", "r??z??k", "nisan", "fas??k", "sarg??", "irice", "ya??c??", "yat??r", "mas??z", "i??di??", "h??s??m", "ak??c??", "ileri", "refah", "necip", "valiz", "i??lek", "ac??l??", "kadir", "k????la", "fiske", "siyah", "dolar", "sakal", "so??an", "lisan", "y??nl??", "mizan", "tesir", "??cret", "garaj", "ilkel", "punto", "zeval", "hamam", "tebaa", "ulama", "totem", "????kar", "k??lot", "zorlu", "naml??", "buzul", "peder", "geniz", "isevi", "m??jde", "gurup", "ba??????", "anemi", "mazot", "casus", "onluk", "karg??", "ahenk", "me??er", "ku????u", "husus", "vakfe", "i??kin", "ninni", "meyan", "ekili", "haspa", "balon", "fiili", "????yle", "kul??p", "????k??r", "??al??m", "liste", "vakar", "kesin", "di??li", "serum", "tutam", "tiran", "tesis", "ka????k", "pembe", "h??zla", "papel", "????k??n", "derbi", "sesli", "anane", "n??sha", "??zg??n", "hatun", "gerek", "dolay", "huzur", "s??rg??", "s????ma", "hicri", "dicle", "kar????", "semen", "bazal", "y????ma", "bursa", "tonla", "enzim", "kanca", "de??il", "k??r??m", "d??????k", "kimya", "basma", "bazen", "uygur", "kah??r", "az??l??", "k??t??r", "rekat", "yar??m", "p??r??z", "fig??r", "cizye", "komik", "keser", "keban", "kinci", "sipsi", "??izim", "frigo", "d??n??t", "zab??t", "ha??in", "yak??t", "hayal", "helva", "matah", "art????", "bebek", "adeta", "d??nel", "erba??", "eflak", "vecih", "kitle", "s??k??m", "??ayet", "gazap", "polat", "camia", "ariza", "testi", "bahir", "giyi??", "komut", "takat", "tuval", "??eker", "??er??i", "bayma", "sadet", "korku", "hazar", "d??n??m", "ladik", "na??me", "sal??k", "cinli", "be??iz", "ko??am", "zerre", "pikap", "tezat", "nah??r", "??edde", "ahmak", "??rmak", "irfan", "kumsu", "sevir", "bando", "baget", "lipit", "medya", "s??rc??", "toycu", "kibir", "romen", "kapl??", "somya", "iffet", "kanal", "rak??m", "pabu??", "maraz", "??l??er", "kurma", "yam????", "sabuh", "nicel", "galo??", "dizel", "glase", "s??rre", "koyak", "pesek", "spazm", "lik??r", "halim", "cevaz", "h??zme", "kibar", "infaz", "ha??iv", "sunak", "s??rl??", "oylum", "doygu", "takti", "yenme", "ifrat", "molas", "????pka", "kramp", "godo??", "??ukur", "hindi", "yass??", "yetme", "serme", "melas", "dizim", "titan", "t??zel", "dall??", "sap????", "ser??e", "dat??a", "??ekel", "abone", "dals??", "rosto", "bidon", "yat??k", "ahval", "s??bye", "himen", "tetir", "bayan", "nutuk", "i??siz", "t??mey", "rumba", "f??r??a", "yobaz", "k??t??r", "k??s??t", "halen", "s??ven", "be??er", "falan", "pagan", "s??yga", "ezani", "hacir", "fet??s", "fara??", "kiri??", "tuhaf", "pasl??", "kadeh", "deme??", "kupon", "seher", "tahra", "gayr??", "veri??", "te??ri", "??elgi", "??sl??k", "??alak", "evde??", "k??ray", "semer", "havva", "emaye", "ocuma", "tamir", "resim", "fayda", "banma", "??aput", "malik", "tapon", "tugay", "s??ska", "manej", "h??z??r", "nefes", "cezve", "cihet", "bulut", "??ifon", "dosya", "ikame", "var????", "ge??ek", "s????ma", "sevim", "atlet", "yutak", "unsur", "mart??", "idare", "re??it", "ovmak", "??avun", "salvo", "ebcet", "lirik", "tadil", "y??r??k", "ar??za", "??lker", "tohum", "ihlal", "elmas", "nitel", "c??c??k", "hamur", "de??me", "kendi", "lamba", "kobay", "k??tek", "batar", "??epit", "??ubuk", "kasl??", "kolon", "savc??", "say????", "vacip", "k??rat", "matuh", "temel", "zaten", "t??vit", "yanay", "ponza", "le??en", "d??vel", "noter", "saban", "kabus", "elbet", "??tmek", "vulva", "telsi", "gulet", "jikle", "yat??m", "yenik", "mira??", "ortak", "at??l??", "kumla", "harir", "??rtme", "hamil", "kelik", "yolcu", "suru??", "cinsi", "fanta", "karni", "orgcu", "??alar", "rakun", "i??fal", "??arka", "galip", "fond??", "polip", "itham", "seman", "pampa", "kal??m", "madem", "??al????", "dal????", "tayin", "kopal", "ivesi", "sin??s", "kutnu", "tekke", "y??lma", "buruk", "giray", "??mera", "sa??ma", "sosis", "pafta", "zanka", "afife", "s??k??m", "forum", "tarif", "erdek", "????rek", "zinde", "yemek", "soket", "helak", "milat", "akt??r", "????p????", "oosit", "yanc??", "sukut", "olas??", "namaz", "yak??n", "ajite", "salc??", "kozak", "yengi", "gedik", "evrik", "skala", "namlu", "z??l??f", "kolit", "r??k????", "mayna", "????rt??", "fisto", "kay??t", "yosma", "lava??", "fini??", "vakit", "sakaf", "sikme", "t??nel", "frenk", "gayri", "meles", "sanr??", "ka??ar", "??uval", "b??l??t", "sinik", "resmi", "stres", "s??vme", "??ayak", "??erir", "turna", "rulet", "koyut", "silki", "al??ak", "a??ama", "vahit", "iflah", "torum", "konu??", "eskiz", "girdi", "hamse", "lahza", "bezen", "reva??", "atmak", "miyav", "katk??", "yerme", "co??um", "sadak", "kup??r", "ye??il", "milli", "terek", "????phe", "g??????m", "z??b??n", "yemi??", "k??rek", "plato", "i??y??z", "yivli", "lasta", "a??ari", "okume", "vurgu", "gadir", "dasit", "gamze", "filet", "??apel", "va??ak", "??trah", "burun", "susu??", "nehiy", "uygar", "tasni", "telek", "avans", "baron", "sefil", "alaka", "vatka", "kabuk", "aspur", "makat", "memur", "mukus", "g??nl??", "sal??a", "raket", "ileti", "siren", "z??mre", "co??u??", "takla", "kuyum", "asl??k", "yay??n", "tutya", "mumcu", "d??rt??", "heyet", "??ak??n", "gelin", "seyek", "ferda", "mujik", "ta??l??", "kay??a", "ta??ma", "emlak", "sak??t", "arp????", "evaze", "helen", "itmam", "lazut", "kaya??", "k??tle", "cirit", "??lmek", "derme", "eylem", "anl??k", "idrak", "??inli", "a????l??", "i??dir", "sefir", "balya", "neyse", "lokal", "sezgi", "dolak", "??into", "hay??t", "??ss??z", "varis", "canik", "??efik", "meful", "kop??a", "yan??k", "g??me??", "n??s??f", "pelin", "apiko", "etlik", "neler", "erbap", "??rdek", "z??hre", "g??m????", "yazma", "kurya", "tenge", "malca", "h??m????", "maruz", "itici", "konsa", "demci", "edebi", "sad??k", "havl??", "bug??n", "z??rva", "sahra", "ralli", "freze", "m??g??r", "bilme", "potin", "ikici", "nekes", "u??ar??", "latin", "uzluk", "g??de??", "izlek", "uzman", "fonda", "hazan", "g??nah", "yutma", "draje", "kahil", "kesel", "naho??", "skink", "fevri", "nono??", "selam", "tekli", "karye", "fujer", "ang????", "g??rsu", "kiliz", "estet", "lamel", "d??ng??", "dergi", "ergin", "zarif", "fanya", "gazoz", "dikiz", "bakla", "zevat", "evren", "ibdai", "sonu??", "d??n??r", "otluk", "f??sun", "niyet", "umac??", "nalan", "d??lak", "idman", "akide", "ka??ta", "stre??", "muhit", "polim", "??anta", "canan", "yitme", "pi??im", "tuta??", "debil", "??ahap", "semih", "sence", "g??n??l", "kumul", "turno", "??zl??k", "kalbi", "tekst", "ikmal", "??t??l??", "bali??", "y??lan", "bilgi", "t??rk??", "tarih", "istek", "yamuk", "k??ble", "dozaj", "bilge", "sulak", "fizik", "d??v????", "kapuz", "??vmek", "epeyi", "kotan", "sat??r", "kepir", "??alma", "i??kil", "tan??t", "ekler", "plaza", "kagir", "galop", "t??rl??", "torun", "sunum", "u??kun", "racon", "cahil", "ke??en", "gabro", "tomak", "lavuk", "kucak", "lanse", "geyik", "??aker", "toyca", "perma", "ka??l??", "sazak", "yumak", "????rek", "revan", "fikir", "ya????r", "??evre", "??dlek", "k??zma", "oktan", "palto", "misis", "ko??ma", "japon", "rasat", "r??sum", "ba??ta", "viz??r", "vakum", "kepme", "d??vme", "hokey", "batik", "tutu??", "patoz", "aleyh", "kasti", "s??ven", "makus", "salta", "vi??ne", "vonoz", "giyme", "kafes", "sibop", "ilbay", "kar????", "mesih", "halat", "t??ra??", "elden", "????mul", "s??zma", "muylu", "vukuf", "beniz", "aport", "????z??m", "havu??", "??stat", "ka????k", "irade", "afyon", "ekose", "efriz", "bitik", "ya??s??", "bi??em", "u??rak", "k????ne", "celil", "irsen", "nefiy", "doyu??", "esmek", "temek", "evkaf", "tu??lu", "sitem", "falc??", "yanaz", "manga", "ya????t", "merci", "pufla", "ozuga", "k??sem", "g??l??k", "cevap", "tuluk", "alevi", "arabi", "peruk", "??ivit", "sekme", "miza??", "????p??r", "haybe", "ayra??", "s??k??a", "denet", "hen??z", "??ince", "imroz", "komot", "ni??in", "keyfi", "teati", "fit??i", "y??kma", "klima", "demek", "??t??r??", "kesek", "g??mme", "kavuz", "essah", "ithal", "e??mek", "tiraj", "vizon", "erkli", "sayha", "yi??it", "zombi", "yank??", "turfa", "??inik", "tek??i", "misal", "??ikar", "bende", "sar????", "rekiz", "y??????n", "t??rak", "naz??r", "arena", "kadro", "d??zey", "konuk", "geriz", "??ap????", "tahta", "savma", "nanik", "herek", "hasat", "recep", "t??rel", "yakma", "e??lek", "nal??a", "kombi", "u??kun", "gider", "niyaz", "bulu??", "e??lek", "ta??l??", "cep??i", "??eyiz", "??zbek", "kurgu", "devri", "kasem", "??ak??m", "gizil", "orman", "fagot", "ata??e", "frank", "mo??ol", "????zme", "s??rek", "haz??r", "do??al", "sazc??", "peng??", "onsuz", "sokur", "gelen", "puset", "ge??im", "garoz", "ferma", "konik", "burgu", "k??ks??", "erci??", "dizem", "tay??n", "artma", "cezbe", "yakin", "kolye", "daday", "tekel", "nikel", "merak", "bal??k", "rahim", "divan", "damga", "b??zme", "tente", "ha????l", "mavra", "nikah", "haf??z", "baret", "hidiv", "samba", "orlon", "nesim", "vaz??h", "s??rat", "talim", "mucuk", "gavur", "sehiv", "ya??am", "katma", "k??lte", "yanma", "tonlu", "savca", "hapaz", "afili", "moren", "yayan", "yelin", "ikram", "s??z????", "kesif", "??teki", "rahip", "bozuk", "hara??", "mesul", "kobra", "radde", "lifli", "harem", "garip", "liger", "kom??u", "??zalp", "??ah??s", "humor", "tayip", "k??vam", "ibrik", "amade", "h??yar", "atama", "tekir", "muska", "??ehir", "laf??z", "k??smi", "ko??in", "itlaf", "masnu", "belki", "??nl??k", "salur", "halef", "folyo", "cibin", "uluma", "dara??", "??rg??n", "durak", "sigar", "s??lom", "horst", "za??ar", "muhat", "haydi", "yap????", "tatil", "??ks??z", "sivil", "m??rra", "a??mak", "g??lme", "hakas", "g??zer", "yetim", "amele", "revir", "sak??z", "??ayan", "tamah", "??zg??n", "banyo", "lavaj", "utmak", "kozan", "s??but", "evgin", "melik", "limbo", "insan", "ta????t", "harbe", "mutaf", "k??zak", "pikaj", "porte", "celse", "imale", "havza", "motif", "ermi??", "zifir", "moloz", "mecmu", "hitan", "??iran", "el??im", "palaz", "klapa", "sebat", "k??????r", "g??ven", "m??rai", "d??den", "mesmu", "????ler", "sihir", "erdem", "havra", "degaj", "??zeme", "??otra", "sevme", "t??p????", "yak????", "c??v??k", "tonoz", "bili??", "ojeli", "kerki", "merih", "nakip", "kafur", "ge????e", "delgi", "recim", "kerti", "t??m??r", "kadem", "idame", "haluk", "tak??k", "giren", "de??ik", "ferli", "fesih", "karun", "pudra", "tas??m", "salya", "??aryo", "emval", "t??men", "??isen", "herik", "tetik", "u??kur", "re??me", "k??z??l", "??aban", "k??sn??", "parti", "kutur", "kanto", "tu??la", "sutlu", "g??zl??", "albay", "diyar", "amigo", "pruva", "sofra", "hassa", "zay??f", "??e??me", "g??den", "yanl??", "killi", "talil", "kalma", "trake", "tasdi", "ruhen", "turta", "elcik", "????len", "??i??ek", "yiyi??", "resen", "saman", "dokuz", "enayi", "????kel", "harap", "do??u??", "aksan", "erzin", "??ilem", "salep", "kasma", "duvak", "hisli", "??of??r", "yok??u", "ta??s??", "g??bek", "ilmek", "tak??m", "tevsi", "filan", "moher", "gula??", "falez", "havsa", "g??b??t", "piket", "cenap", "sa??l??", "k??rar", "kelem", "yeygi", "segah", "izole", "gerze", "koyar", "ci??er", "ihbar", "may??n", "midye", "narin", "gidon", "asabi", "tromp", "safer", "san????", "??i??ik", "y??z????", "bariz", "durma", "soyu??", "stent", "korte", "eyvah", "cebin", "susak", "lipom", "aksam", "alarm", "gizli", "yediz", "h??????r", "??d??n??", "tekin", "??r??c??", "kuzey", "h??y??k", "total", "dilsi", "kal????", "bomba", "gayet", "i??lik", "pense", "mader", "hiciv", "g??vel", "etraf", "ke??ap", "yal??n", "cemil", "kab??z", "ibate", "taban", "s??n??k", "and????", "????len", "hulul", "ay??rt", "daimi", "ham??z", "germe", "ceset", "kutup", "??anc??", "rekor", "??ilek", "tevki", "tomar", "ihra??", "r??tbe", "grado", "moral", "ihsas", "i??eme", "??ayan", "tezli", "ampul", "k??yye", "hekim", "h??lle", "fenik", "kesit", "hutbe", "yaver", "??iten", "ni??an", "sunu??", "konut", "karne", "latif", "fuaye", "eglog", "menus", "bafra", "malc??", "badem", "??izme", "izabe", "??reme", "saf??a", "ruble", "ulema", "hali??", "k??n??k", "tanr??", "fosil", "kitap", "al??c??", "tozlu", "kofra", "arg??t", "zigon", "pusat", "??nde??", "??okal", "litre", "toplu", "ka??????", "s??kma", "eroin", "nispi", "lando", "nesne", "dekan", "gezi??", "s??kel", "ta????m", "??nite", "??izik", "halet", "k??m??r", "at??c??", "gayda", "esame", "e??rim", "man??u", "azade", "g??r????", "ke??if", "salak", "se??i??", "sorti", "??reke", "yetke", "hilat", "kebze", "fari??", "nak????", "g??nye", "felah", "ip??ik", "cemal", "kekre", "teyel", "efkar", "????yan", "yiyim", "??aful", "??aire", "k??kre", "hilaf", "ahize", "ilen??", "porto", "ingin", "cedre", "f??k??h", "bayat", "??apla", "yergi", "soru??", "yayl??", "cehri", "bu??uk", "kopma", "villa", "tabut", "lerze", "tehir", "??anl??", "yal??z", "taksi", "pilli", "e??kal", "nazik", "nogay", "masat", "kanka", "ads??z", "ko??uk", "damla", "derik", "e??kin", "yutum", "k??sas", "iksir", "tilki", "yayg??", "efsun", "pelte", "matla", "natuk", "modem", "ritim", "kay??n", "m??s??r", "????r??m", "??akar", "vir??s", "s??rma", "??apul", "ku????a", "ister", "sperm", "koton", "??itme", "tekil", "dinen", "titiz", "hempa", "ot??ul", "b??y??k", "??znel", "g??????k", "ofans", "kesim", "safir", "??ocuk", "yang??", "dual??", "z??p??r", "d??zme", "sprey", "gere??", "habbe", "tacik", "la????m", "pazar", "imle??", "beyan", "nafiz", "nab??z", "k??p??k", "raspa", "bat??k", "hozat", "kifaf", "gus??l", "ismen", "pompa", "dolam", "turan", "fanus", "cezai", "avdet", "y??zey", "metin", "mimik", "talas", "kini??", "kas??r", "mele??", "??unca", "kuver", "yelme", "yay????", "emcek", "rotor", "k??bik", "diken", "kat??k", "teali", "irite", "tu??cu", "yafta", "moruk", "yans??", "pumba", "??a??la", "toka??", "kuduz", "??slak", "fulya", "??alak", "gebe??", "sicil", "polis", "ilge??", "sivri", "iblis", "eskil", "kayak", "avun??", "tepik", "k??????k", "??omak", "veciz", "medih", "ortoz", "fas??l", "masal", "k??lah", "sinme", "fatih", "cicim", "yumuk", "mehil", "k??tin", "ko??um", "??uva??", "mehdi", "f??t??k", "saray", "tadat", "gelir", "tonga", "??elek", "cirim", "lojik", "dozer", "say??n", "mahfi", "y??rek", "s??zg??", "diyot", "forma", "kan??k", "kurul", "olmu??", "uknum", "c??n??p", "d????es", "??erif", "fetva", "temiz", "kopuk", "sason", "kokot", "genom", "visal", "tosun", "s??nav", "g??zc??", "b??tan", "s????an", "kay????", "oral??", "hakem", "te??et", "defne", "sirto", "s??bek", "kupes", "itmek", "ter??r", "??e??en", "b??d??k", "keman", "??i??il", "p??t??r", "??uhut", "kani??", "pel????", "bozum", "imkan", "k??yl??", "hap????", "kak????", "canl??", "yedek", "egzoz", "gocuk", "yay??m", "??edik", "sahih", "k??y??k", "kurak", "ilmik", "kasn??", "lahit", "kuman", "tif??s", "vuru??", "fodul", "havlu", "mesai", "durum", "etsel", "g??zg??", "posta", "mahal", "yelve", "uyar??", "engel", "erbaa", "balc??", "??mmet", "video", "s??nma", "r??k??n", "kad??k", "trans", "??ebi??", "bitki", "lokma", "azize", "u??ucu", "e??ref", "peron", "yap??t", "eslaf", "muhil", "hazin", "d??????t", "otlak", "ilham", "kesre", "tutma", "toput", "likit", "vatoz", "somak", "facia", "u??man", "menfi", "mekik", "koket", "etnik", "metal", "g??vem", "milis", "s??mek", "nesil", "ditme", "tecil", "sathi", "kotra", "hami??", "makta", "balta", "s??l??k", "lazer", "zirve", "fidye", "isyan", "kinik", "mitos", "gedme", "ifade", "takoz", "??ay??r", "hazne", "k??yas", "g????er", "hamut", "zabit", "fahte", "kaset", "kavaf", "yonga", "salip", "esbap", "??opra", "??apl??", "tepki", "setir", "yama??", "y??zde", "i??tah", "hanc??", "sinle", "ofris", "maruf", "te??ne", "nahif", "evcik", "b??????k", "varma", "inkar", "ke??ki", "mumlu", "resif", "eosen", "denim", "??epez", "??ek??e", "art??k", "h??y??k", "nazil", "beher", "dolap", "hilal", "orcik", "lo????a", "lakap", "ye??in", "kanun", "kefil", "antet", "tekit", "fitne", "matuf", "ba??l??", "tran??", "sa????k", "hasta", "mabet", "kesik", "tara??", "??ok??a", "k??z????", "semah", "klips", "??ak??r", "nevir", "me??ru", "m??ft??", "lemis", "boyna", "zirai", "kolej", "d??n??k", "koala", "??imen", "eklem", "pel??r", "oluru", "simya", "azg??n", "nadir", "reyon", "sarma", "mant??", "s??r????", "varta", "haile", "fak??l", "nakdi", "buzlu", "bulgu", "sinek", "yalaz", "la????v", "dut??u", "sanat", "pullu", "g??lc??", "zenne", "ketal", "??apak", "??mran", "r??tar", "harta", "zuhur", "s??zde", "inmek", "randa", "??lmez", "angut", "mikro", "saloz", "l??net", "y??nl??", "islim", "z??pka", "tapir", "??upra", "helal", "y??z??k", "m??n??i", "kuran", "??i??in", "ermek", "??alap", "nem??e", "??e??ni", "kli??e", "pipet", "bozca", "terbi", "ye??en", "tapan", "led??n", "praya", "eseme", "ezgi??", "sabah", "d????an", "kader", "k??lma", "??ayc??", "bobin", "rahat", "anten", "bunak", "te??ci", "vasat", "torik", "kal??p", "apac??", "doyma", "perva", "ilahe", "??star", "masum", "kemah", "??pmek", "??eker", "afgan", "sokra", "delil", "edal??", "barut", "takim", "kim??s", "oleik", "bambu", "birim", "geva??", "yezit", "dike??", "ar????n", "kokak", "kalas", "hayat", "vezir", "ta????l", "pasif", "??urup", "g??z??n", "kutsi", "kamil", "tozma", "makam", "gaile", "p??nez", "erke??", "stant", "esham", "verev", "kire??", "gerim", "p??rp??", "ervah", "t??mar", "tango", "??ark??", "otama", "drama", "zifin", "hayli", "ya??l??", "ibzal", "bitap", "??rt??k", "hitam", "tuzsu", "oberj", "tufan", "ak????n", "tarla", "kahir", "k??????m", "d??kme", "s??re??", "kalfa", "kesir", "mas??r", "ziyan", "tosya", "salsa", "rakip", "pes??s", "celal", "yaz??t", "akson", "hedef", "sunma", "salon", "manda", "????nk??", "efdal", "k??m??z", "hay??r", "banal", "seyit", "iznik", "ge??i??", "??rkek", "i??rek", "erlik", "gaml??", "kravl", "hamle", "kil??s", "tavan", "??oklu", "i??siz", "mu??la", "l??koz", "k??yg??", "kas??t", "g??d??l", "firak", "tamam", "????t??r", "mavna", "d??ner", "kavun", "didar", "ongen", "k??k????", "tuyu??", "kanl??", "dakik", "madun", "kefne", "turba", "manto", "sapan", "incil", "meyus", "lodos", "ifra??", "sapl??", "yuvak", "heder", "meram", "ameli", "hafta", "k??mes", "pasak", "tur??u", "yar??n", "mutat", "??olak", "g??c??n", "ka??ma", "badik", "yarma", "l??gol", "oyac??", "esasi", "??ekel", "yonma", "g??rla", "??akak", "??elen", "harbi", "hurda", "mecal", "??z??c??", "dolum", "sekel", "kerem", "tecim", "tavus", "sabur", "benek", "kiraz", "gauss", "vebal", "yayla", "kolcu", "y??zer", "senit", "onlar", "goll??", "s??vme", "don??r", "kakao", "??erez", "yaz??r", "hamal", "makro", "??ecik", "korza", "kumuk", "????kat", "??rnek", "masaj", "kayan", "dinek", "in??at", "a??k??n", "viraj", "??igan", "talik", "kubbe", "sara??", "setik", "s??r??m", "simav", "topik", "yapak", "ihraz", "sebze", "musap", "??aibe", "emici", "yatay", "forte", "iftar", "d??ze??", "ivmek", "kirve", "hecin", "suluk", "baton", "enlem", "rab??t", "bakir", "g??lle", "habip", "mebde", "domur", "yortu", "kenar", "afi??e", "??rt????", "ga??iy", "mezat", "sava??", "g??yme", "fokus", "k??ra??", "surat", "??ns??z", "gusto", "erime", "y????????", "kay??r", "a??maz", "k??hne", "siyak", "hat??r", "kazaz", "elyaf", "isnat", "t??r??m", "l??tuf", "ikona", "teizm", "avlak", "eksik", "????nav", "lotus", "akba??", "s??rfe", "ko??ut", "l??k??r", "madik", "dekor", "emraz", "??eran", "oyna??", "??alk??", "kuron", "bizon", "yonca", "sak??n", "do??ru", "potas", "filiz", "t??yl??", "unluk", "trafo", "kan??t", "seren", "ha??ir", "kumu??", "muz??r", "telif", "ifsat", "gey??a", "viski", "s??????r", "askl??", "cihat", "bilye", "perde", "f??kra", "esans", "y??l??k", "tiner", "yasin", "b??l????", "h??rle", "??ekem", "voyvo", "yuvgu", "anons", "olmaz", "alize", "g??p??r", "ferih", "c??lus", "dalan", "??zen??", "arter", "??avma", "temas", "d????k??", "hodan", "mafi??", "????miz", "beyit", "h??lya", "dikey", "a??g??z", "talak", "nafia", "h??ner", "s??sme", "art????", "tezek", "tazip", "yayma", "oniks", "de??in", "gabya", "e??hel", "d??????n", "bravo", "serim", "pol??m", "macun", "????d??r", "b??y??k", "k??spe", "nefir", "hisar", "g??b??r", "????kra", "haber", "ke??i??", "mesaj", "sikke", "silgi", "ka??n??", "nakil", "????ng??", "butlu", "geoit", "ibraz", "par??a", "y??kl??", "b??lme", "misak", "palas", "k??l????", "largo", "n??bet", "karay", "fesat", "??deme", "c??sse", "d??r??m", "gizem", "organ", "haz??m", "korno", "misil", "pilot", "devce", "??illi", "s??m??k", "samut", "dini??", "tepme", "??engi", "joker", "??b??r??", "kuram", "b??nye", "ladin", "????pl??", "guatr", "tarak", "yara??", "hayfa", "k??lek", "ge??me", "kahpe", "varit", "acemi", "??a??r??", "kelle", "hacim", "??lg??n", "mezra", "nebat", "forsa", "tar??m", "yunus", "ezine", "r??tu??", "serak", "ba??ka", "sab??k", "murat", "zarar", "yollu", "fifre", "pe??tu", "levye", "yosun", "s??????t", "bodur", "??atk??", "b??l??k", "ven??s", "efrat", "koyun", "iskan", "sanc??", "eneze", "hatif", "boh??a", "g??rc??", "s??kme", "ussal", "k??z??k", "gnays", "lakin", "k??ken", "telis", "mesen", "tav??r", "hozan", "soyum", "basar", "icmal", "arama", "sorun", "iddia", "motel", "budun", "nodul", "n??ans", "sakl??", "lezar", "karha", "helke", "??evri", "emsal", "??orum", "tonaj", "aslan", "rahne", "??ryan", "fi??ek", "k??l????", "sonlu", "kavuk", "f??nye", "malul", "??z??n??", "evham", "uyluk", "deyi??", "y??k????", "u??mak", "k??pma", "sezon", "r??sva", "fitil", "mikap", "arazi", "????kme", "kavim", "zamir", "selek", "silik", "do??a??", "kirpi", "??izge", "duac??", "??ahit", "g??vde", "abide", "tonya", "getto", "kavmi", "t??pl??", "dikme", "k??pti", "kuzin", "raunt", "model", "y??k????", "l????l??", "b??t??n", "talih", "elmek", "????r??k", "sonra", "g??rme", "duyma", "kemal", "hippi", "??lgaz", "ye??ni", "????k??n", "h??s??n", "denli", "a??lak", "hande", "??afii", "tatma", "peyke", "tezce", "astat", "dalga", "herze", "hay??f", "hafit", "sakil", "hadim", "enfes", "siyek", "milim", "sakit", "h??zma", "????ban", "ne??ir", "lider", "za??l??", "kuru??", "??apka", "batk??", "mutki", "kesen", "m??zi??", "hadde", "rejim", "rubai", "fiber", "yorga", "ge??er", "leziz", "kak??m", "tr??st", "hayda", "geren", "rapor", "memul", "fek??l", "solak", "katil", "suoku", "yenli", "hanut", "na??ir", "halik", "ipeka", "ilave", "selvi", "revi??", "levha", "??zerk", "hat??l", "has??m", "nisai", "kamga", "r??fle", "rotil", "dayak", "urgan", "esmer", "metbu", "t??fek", "??ak??l", "avane", "kaka??", "susta", "d??ve??", "unvan", "ferdi", "aplik", "sorgu", "hurra", "marke", "d??men", "conta", "duluk", "g??cen", "perki", "??lgar", "yaz??k", "??evik", "vuruk", "larva", "matiz", "mariz", "oras??", "plati", "senet", "kom??n", "siyme", "????nar", "sar??m", "dolma", "????kek", "rayi??", "dekar", "de??im", "n??kul", "dural", "pi??ik", "kuytu", "puslu", "??rg??p", "??rgat", "islav", "teles", "pi??ti", "silme", "dizin", "sezme", "??i??me", "cizre", "rende", "sab??r", "sokak", "kablo", "melal", "??stl??", "z??mba", "i??kal", "h??rya", "??iroz", "taret", "nod??l", "siper", "insaf", "laski", "cemre", "s??nai", "manti", "k??pl??", "tura??", "boruk", "polen", "simit", "sivas", "pasta", "kavga", "y??r??k", "katip", "fason", "ebedi", "tabip", "penye", "humar", "yumma", "sat????", "ikrar", "eleme", "??t??c??", "l??gat", "kolpo", "d????em", "kam????", "nas??l", "telli", "as??l??", "fikri", "frape", "g??c??k", "melez", "koku??", "livar", "s??l??n", "g??m??t", "aside", "??ncel", "vezin", "civan", "cukka", "kroki", "yirmi", "ac??ma", "oksit", "d??ver", "????kan", "d??nek", "a????c??", "yudum", "????ven", "t??k??z", "hanek", "g??lge", "tasma", "sarak", "i??lik", "itila", "kepek", "han??m", "ko??ma", "sepet", "fonem", "taraf", "s??cut", "s??kut", "ta??ra", "kural", "i??lik", "onmak", "g??????m", "yegan", "ipsiz", "b??k??m", "ye??im", "esrar", "aroma", "t??nek", "n??fus", "yasal", "furya", "mebni", "h??kmi", "simge", "parke", "duvar", "gudde", "uysal", "kabir", "??ahne", "eyyam", "yorma", "leydi", "ka??ak", "hepsi", "incik", "k??y??m", "menfa", "hala??", "akkor", "do??an", "falya", "yan????", "??zden", "k??ll??", "roket", "penis", "lehim", "fasl??", "ka??l??", "kovuk", "varg??", "jilet", "tuman", "ka??an", "kemer", "gebre", "pop??u", "dilim", "sabun", "??a??ma", "??rmek", "samur", "d??k??k", "denyo", "izmir", "okluk", "sadik", "ayg??r", "dinar", "a????l??", "ketum", "ah??ap", "co??ku", "sedye", "s??zl??", "s??kse", "se??im", "sevi??", "da??ar", "s??n??m", "grena", "kulis", "s??rme", "hayc??", "??emen", "??tlak", "k??s????", "sulta", "tela??", "??l??????", "d????k??", "??ama??", "g??vek", "rezil", "pasaj", "nadan", "hizip", "galon", "kalak", "??orca", "tim??s", "ek??ri", "palan", "vedia", "permi", "katar", "??alt??", "tatar", "zorba", "h??k??m", "rugan", "faz??l", "ricat", "azl??k", "evcek", "????mme", "kadar", "olein", "nemse", "????k????", "d??ne??", "tevek", "kahta", "tad??m", "kubat", "kay??k", "habis", "pi??ek", "binek", "k??sma", "ozmoz", "firma", "lizol", "borda", "hari??", "ibare", "bilet", "nokta", "nakit", "g??fte", "??oban", "velut", "sakat", "bron??", "??zmek", "kopu??", "kilim", "f??tur", "erika", "yumru", "susku", "haham", "devim", "s??zme", "salim", "??arap", "namus", "piyan", "sever", "s??t????", "yapay", "saks??", "zeyil", "cac??k", "m??hl??", "k??sur", "gonca", "kilis", "vagon", "sapak", "??olpa", "bat????", "kabza", "erkin", "kredi", "oflaz", "p??nar", "m??bah", "boyun", "sa??ak", "ilkah", "velet", "tabir", "sall??", "suret", "potuk", "f??r??n", "bakan", "ha??at", "??atma", "solu??", "pe??in", "cezir", "borat", "gotik", "varak", "verem", "sarpa", "afaki", "kesi??", "nakli", "topaz", "??ek??l", "d??lek", "ibret", "d??zem", "s??nni", "v??c??k", "nat??r", "s??????n", "giyim", "refik", "palet", "habe??", "??epel", "????g??l", "dival", "ke??ke", "hangi", "??at????", "tepsi", "dolgu", "s??tma", "tabak", "k??me??", "nezif", "meyil", "i??lem", "s??k????", "irsal", "dizme", "k??rc??", "tatl??", "fehva", "yele??", "itina", "jokey", "deney", "cephe", "cevir", "ast??m", "yal??m", "ne??et", "bas????", "kemik", "edin??", "dikel", "??zg??n", "savan", "k??r??k", "ferik", "maada", "ezber", "nesih", "atari", "manav", "??erge", "y??lg??", "ayran", "g??ney", "p??ren", "tenor", "toklu", "tavuk", "zebra", "ikdam", "dizey", "liret", "aksak", "har??m", "fahri", "kam????", "??arp??", "avize", "??i??li", "marki", "sevda", "otac??", "nak??i", "vah??i", "salma", "motto", "za??c??", "sepya", "kavat", "nadas", "??akul", "ismet", "vahim", "flori", "m??gri", "g??nce", "k??yc??", "duyar", "hasbi", "semai", "fauna", "keriz", "ispir", "te??yi", "t??nma", "kehle", "gitme", "ars??z", "subay", "takva", "nacak", "saika", "b??b??r", "dikim", "fehim", "ekser", "acaba", "kahin", "geyve", "m??ble", "yahni", "dal??z", "rahle", "girme", "samsa", "??ahin", "inzal", "kas??k", "t??rp??", "galiz", "sedef", "otist", "????rp??", "kud??m", "??eper", "hafik", "??ekva", "yetik", "s??n??f", "kokoz", "silis", "??zde??", "nehir", "mapus", "telin", "esnaf", "tart??", "flora", "evvel", "??st??n", "talep", "terim", "t??rel", "ihvan", "almak", "radar", "ipucu", "seyis", "nat??r", "dubar", "g????????", "s??fli", "yatak", "fl??re", "hanak", "ite??i", "s??ng??", "halay", "devre", "hayta", "ampir", "i??mar", "meret", "n??zul", "lepra", "tesri", "kak????", "kayme", "tenis", "mevki", "cesim", "??apar", "ho??af", "??zeni", "g????l??", "??zrar", "krank", "foroz", "k??m??l", "havai", "kerte", "??arpi", "hakir", "sille", "??amar", "kadit", "kad??n", "gamba", "kudas", "slayt", "kolik", "deniz", "takke", "ba??c??", "??ekil", "??zere", "s??n??k", "hulus", "softa", "tabya", "haset", "has??r", "uskur", "pomak", "k??kl??", "sakak", "nazir", "okapi", "kra??a", "sapma", "??v??n??", "kamus", "g??zey", "kinli", "izmit", "??em??e", "maral", "c??ruf", "medet", "tanin", "ikrah", "topal", "kurna", "kebap", "hurma", "epsem", "ecdat", "giyit", "??akal", "huru??", "buket", "all??k", "serin", "munis", "??zg??l", "mozak", "vas??f", "jakar", "fuhu??", "yalp??", "??emsi", "bombe", "hadis", "g??tme", "galat", "tanen", "bavul", "eyvan", "??l????m", "ilhak", "e??siz", "s??per", "hitit", "kelli", "masif", "sekte", "kabil", "s??zc??", "hicap", "??anl??", "t??r??s", "c??b??l", "kurum", "odac??", "tekne", "vites", "rical", "k??y??n", "??izi??", "pulsu", "??rama", "demli", "lopur", "kovma", "izzet", "karma", "yats??", "sakin", "yomra", "di????i", "mecus", "secde", "mamut", "evrat", "nizip", "??eki??", "k??s??m", "kula??", "d??zg??", "k??sk??", "ko??an", "ejder", "makas", "tuzak", "kitre", "nanay", "bo??az", "erken", "sanma", "koyu??", "faset", "ahkam", "kolsu", "farad", "??ahsi", "nifak", "e??m??r", "makak", "sakar", "ragbi", "????k??k", "okuma", "heybe", "k??l??k", "pas????", "??amil", "demin", "azami", "val??r", "g??d??m", "z??ppe", "cebri", "vusul", "ellik", "??ifre", "orfoz", "yolak", "seyir", "fince", "de??er", "telve", "kusma", "sahil", "hamsi", "derin", "kubur", "longa", "tavaf", "patal", "k??s??r", "eleji", "vehim", "t??rki", "geni??", "cu??i??", "mamur", "g??zel", "radon", "tah??l", "hemen", "melon", "fatsa", "asmak", "delme", "tiriz", "??eref", "kalem", "konum", "art??m", "tenya", "??oson", "kamer", "etene", "nal??n", "y??lg??", "ivedi", "liyan", "yitik", "engin", "pedal", "tafta", "idadi", "k??ll??", "ihzar", "ku??ku", "sini??", "teber", "s??n??r", "kuv??z", "??ayia", "g??rg??", "min??r", "muhal", "m??lki", "detay", "parya", "imame", "bloke", "baldo", "topla", "pulu??", "odsuz", "u??suz", "donlu", "d????????", "d??????n", "hay??z", "boran", "has??l", "suyuk", "????rak", "fakih", "yazar", "halel", "akran", "payan", "bilir", "d??per", "in??n??", "ball??", "barok", "antre", "saya??", "fidan", "malum", "kefir", "ironi", "erzak", "viran", "idrar", "hanya", "vas??l", "t??ren", "gamet", "j??pon", "kahya", "muhip", "kakma", "nazar", "yaz??n", "g??pta", "zanl??", "??r??me", "meri??", "tepi??", "s??v??k", "firar", "d??l??t", "tempo", "ongun", "pek??e", "tala??", "rumca", "pahal", "cinai", "hilye", "betik", "kutlu", "n??kte", "karl??", "bak????", "rolc??", "??ekek", "maddi", "kerde", "????z??k", "k??l??k", "u????ak", "s??yg??", "??neri", "got??a", "helme", "g??dek", "mod??l", "k????at", "makul", "t??mel", "topur", "??at??r", "halka", "mirat", "se??me", "y??zl??", "defin", "yaran", "subra", "har??n", "frisa", "asist", "d??nem", "????zg??", "ezgin", "??sk??f", "gaita", "s??z????", "kondu", "diril", "yat????", "mevzu", "teori", "fi??li", "sahne", "peren", "en??te", "hitap", "cinci", "g??c??r", "tacir", "kadim", "??nlem", "kap????", "deist", "teyit", "celep", "imal??", "tabii", "ar??zi", "yontu", "mazak", "h??z??n", "d??nit", "hisse", "kapik", "yunan", "dingo", "yiti??", "oynak", "ney??e", "lanet", "??zl??k", "zihni", "minik", "b??yle", "havut", "evsaf", "yolma", "??v??c??", "muare", "u??ra??", "k??yam", "leyli", "d??nk??", "donma", "piton", "d??ger", "butik", "k??sk??", "k??zan", "sifon", "med??z", "ramak", "kayg??", "de??i??", "limon", "mi??el", "so??uk", "tikel", "g??r??n", "kal??t", "elifi", "husul", "sala??", "volan", "m??him", "maske", "sehim", "d??d??k", "buton", "hamel", "mezar", "s??rat", "r??esa", "bat??n", "mucip", "oraya", "tazim", "soyut", "ideal", "dirim", "??opur", "pisik", "i??mek", "mahir", "panel", "taziz", "??imdi", "damak", "ovma??", "iklim", "fetha", "emcik", "piyon", "diren", "deste", "lapon", "canip", "seki??", "krema", "halas", "ma??uk", "prens", "yaman", "potur", "mu??tu", "yahey", "duble", "duruk", "h??rka", "yavru", "ehven", "zurna", "s????me", "??rk????", "mumya", "olmak", "atlas", "espas", "kerim", "sokma", "nesir", "kay??p", "ke??ik", "posof", "telem", "av??ar", "??izer", "mesel", "bordo", "iradi", "savat", "toner", "sicim", "cinas", "muris", "tahin", "istem", "feti??", "idari", "vurma", "dili??", "durgu", "ak??am", "lokum", "pizza", "????kt??", "s??tre", "alkol", "aynen", "takas", "ithaf", "dudak", "se??al", "ilhan", "k??lg??", "salto", "koral", "kelam", "g??ve??", "??l????n", "p??sma", "malen", "ger??i", "votka", "s??r??m", "puvar", "cidar", "??orap", "zul??m", "cilve", "beril", "somut", "metil", "na??ar", "viyol", "marka", "s??zel", "??ar??k", "beg??m", "doruk", "etmek", "liman", "astar", "anket", "rodaj", "patak", "cihaz", "y??r??k", "azeri", "m??d??r", "boyoz", "paten", "pamuk", "ayya??", "??l??ek", "mevla", "beton", "e??lik", "ender", "elvan", "halis", "yaren", "??l??me", "humma", "marya", "izafi", "elzem", "ashap", "sorma", "esvap", "safha", "laden", "ta??ak", "ezeli", "beyin", "????m??e", "zigot", "fahi??", "cunta", "redif", "kirli", "izlem", "lonca", "miyaz", "??orak", "??oset", "memat", "gabin", "??akra", "demet", "keski", "dince", "had??m", "k??y????", "odal??", "b??????r", "kaime", "rijit", "sevgi", "s??l??s", "t??z??k", "g??c??k", "prova", "kasis", "plaka", "hatmi", "g??rev", "parsa", "pazen", "melul", "s??yek", "yamak", "beyaz", "naz??m", "irmik", "gazl??", "dizge", "kriko", "terli", "??iri??", "e??me??", "ahlak", "bemol", "de??me", "kolay", "maval", "demir", "nihan", "nazal", "uzlet", "poker", "figan", "karst", "alkan", "reaya", "zaman", "azman", "farba", "sazl??", "s??mer", "cehil", "dikta", "mimli", "m??lga", "g????me", "ipham", "keder", "mecra", "verme", "necat", "tedai", "ho????a", "hatim", "??tmek", "su??lu", "ensar", "??rcin", "na??iz", "say??m", "tutak", "ciddi", "k??rit", "somun", "yahut", "keke??", "irkme", "ya??l??", "tortu", "yah??i", "??????me", "lorta", "kopil", "dolu??", "tan??m", "s??men", "ekran", "l??p????", "kanma", "panda", "konur", "keyif", "baraj", "s??k??k", "mirza", "bilim", "belge", "denge", "uymak", "rafl??", "??omar", "nihai", "men??e", "goril", "maj??r", "paraf", "tipik", "kuzen", "tokat", "kovcu", "pinel", "yuka??", "k??yak", "t??naz", "mabat", "ezmek", "sahur", "mesut", "ta??????", "tamim", "kayma", "dikse", "u??run", "kamet", "sisli", "ergen", "selis", "tasar", "leh??e", "mu??ta", "budak", "yap??k", "mezzo", "rebap", "pili??", "??srar", "akait", "kokma", "hedik", "??i??ko", "sanki", "ihmal", "l??men", "molla", "damar", "zahir", "??ilep", "kevel", "halfa", "pa??oz", "??ilte", "israf", "??epni", "harl??", "kele??", "a????r??", "??????ma", "daire", "susma", "kaz??l", "h??zl??", "k??yma", "cunda", "bronz", "fanti", "v??cut", "sefer", "??rg??t", "??o??un", "ma??ka", "polar", "encam", "nahiv", "??l????t", "mimar", "siroz", "mango", "faril", "yulaf", "sarat", "??zlem", "??l??ca", "ir??at", "kumcu", "umman", "turne", "imlek", "trata", "kusur", "etfal", "emme??", "ko??u??", "miyom", "terme", "havuz", "s??vg??", "hamak", "alt??n", "cenup", "demre", "monat", "s??luk", "re??el", "mahur", "??ifte", "omlet", "mucit", "??o??ul", "firez", "terfi", "ka????t", "i??gal", "h??nsa", "piyes", "metot", "tirsi", "girim", "mitoz", "d??nya", "b????k??", "yarka", "s??sl??", "kavis", "iptal", "rasyo", "damat", "t??r??l", "ortez", "k??sme", "nazl??", "eneme", "vuzuh", "mus??r", "ayg??t", "egale", "temin", "??avl??", "co??ma", "adres", "alk????", "??edit", "etken", "malya", "devam", "katl??", "nedim", "m??sy??", "salah", "parka", "c??l??z", "??opar", "erbin", "????k??k", "metre", "ku??ak", "????gen", "??sera", "vezne", "horon", "kavil", "yap??m", "izlev", "ibla??", "deyim", "onama", "d????e??", "lazca", "ark??t", "g??let", "salpa", "olgun", "verim", "aleni", "k??l??f", "duman", "tulum", "liz??z", "s??kun", "k??vet", "balet", "m??hre", "sayr??", "bi??im", "teres", "alman", "k??nde", "topak", "bini??", "??deba", "betim", "haciz", "feyiz", "tavc??", "sebep", "????kma", "sinir", "yekun", "b??rek", "ebeli", "hodri", "r??sup", "boyar", "cedit", "cumba", "ma??er", "nasip", "mucur", "cibre", "k??ran", "biblo", "sabit", "ko??a??", "rozet", "yak??m", "limit", "mez??r", "selen", "k??s??k", "suta??", "me??bu", "??oven", "yapma", "istim", "muson", "dibek", "??era??", "fakir", "giysi", "banko", "alk??m", "pi??me", "espri", "miyop", "geri??", "ha??l??", "ortay", "k??rca", "m??rur", "ni??de", "ihtar", "disko", "nohut", "grogi", "sanl??", "terzi", "yakut", "parpa", "talan", "d??rzi", "kekik", "opera", "t??f??l", "kelek", "c??ret", "ruhlu", "gezme", "grizu", "c??bbe", "mevut", "gidi??", "????k??r", "bakma", "ermin", "mucir", "gafur", "kal??k", "batma", "milas", "felek", "ringa", "abaza", "mufla", "ahlat", "iflas", "tutuk", "buyma", "y??k??n", "tozan", "dima??", "varo??", "islam", "sergi", "izhar", "bast??", "bas??k", "yemci", "s??nd??", "asker", "kilit", "bask??", "duygu", "nipel", "rakor", "m??c??r", "??asar", "mukni", "i??lem", "k??tal", "indis", "tolga", "yaz??m", "lobut", "d??n????", "gayya", "dik??e", "t??k??r", "tonik", "hikem", "konma", "eksen", "yat????", "soylu", "d??rme", "daima", "??al??k", "mahfe", "??lser", "aslen", "s??ts??", "yunma", "istop", "talaz", "l??p??r", "zafer", "hakim", "bas??m", "beyzi", "kaz??m", "sahre", "tedip", "n??ron", "kerih", "yegah", "rufai", "bilek", "rafya", "lay??k", "fener", "b??lge", "triko", "delik", "t??t??n", "be??ik", "g??bel", "a??ure", "g??zde", "ref??j", "yarg??", "kimse", "ahbap", "nas??r", "??ekme", "??ekim", "i??te??", "fenni", "o??lak", "??afak", "hafif", "havas", "a??evi", "ikraz", "baran", "nezle", "sahip", "evcil", "belli", "bo??um", "ceket", "bahar", "h??d??k", "mizah", "dilme", "vakur", "dogma", "nafta", "hidra", "emlik", "isale", "servi", "roman", "bay??r", "ya????z", "gediz", "kofti", "ifrit", "beden", "ha??i??", "cebel", "optik", "alb??m", "fasih", "??aman", "bence", "kefen", "sonar", "mukim", "erkek", "l??zum", "kasko", "taviz", "??zeri", "kulun", "yan??t", "oval??", "k??t??k", "e??mek", "yanal", "t??rev", "ba??l??", "??etim", "derya", "papaz", "sunta", "depar", "huylu", "kaval", "fiyat", "sa????r", "madam", "gevi??", "sumak", "illet", "??inko", "itaat", "s??fat", "ge??en", "jeton", "g??le??", "k??nye", "kanat", "tan????", "bedel", "evsiz", "ukala", "fedai", "celbe", "tafra", "batak", "mermi", "karga", "g??re??", "plase", "sazan", "??atal", "kasap", "konya", "ortam", "obruk", "orada", "gurur", "c??mle", "lag??n", "manat", "s??zek", "basak", "d????ey", "yo??un", "rodeo", "kenya", "uyuma", "darbe", "??nlem", "yay??k", "tunik", "ya??????", "??ar????", "h??????m", "t??mce", "sevap", "rumuz", "civar", "esnek", "susam", "??ak????", "g??l????", "yoksa", "tenha", "ihale", "yerli", "oktav", "miras", "rutin", "oymak", "ifraz", "proje", "soyma", "yava??", "se??ki", "bekar", "kiler", "g??bre", "vatan", "aptal", "pen??e", "helik", "imece", "kro??e", "ge??it", "flama", "k??rs??", "sat??h", "ya??ma", "seksi", "top??u", "s??tun", "salam", "lafzi", "??at??k", "akrep", "t??tme", "k??ssa", "teras", "bengi", "hicaz", "yenge", "rampa", "gitar", "??t??c??", "camc??", "d??rz??", "ihlas", "fazla", "besin", "rakam", "bukle", "final", "ak????l", "??erit", "laz??m", "tabla", "diki??", "dikit", "??irin", "koruk", "katot", "tutar", "eyl??l", "orta??", "kabul", "dikte", "????k??t", "dalak", "ayd??n", "yelek", "yitim", "heves", "mahya", "panik", "cenah", "gurme", "meyve", "havya", "takma", "ko??ak", "tarik", "f??rka", "y??k??k", "teist", "g??k??e", "po??et", "mason", "vanl??", "zekat", "ebleh", "arpej", "vergi", "imdat", "sehpa", "dalma", "??etin", "nefer", "??eki??", "rus??a", "humus", "a??ina", "monte", "mavi??", "ka??ar", "gergi", "fakat", "kar??n", "k????ek", "lades", "ahali", "imren", "mecaz", "tutum", "sirke", "s??r??a", "h??zar", "vak??a", "varan", "g??????s", "mazur", "duyum", "kuple", "yeter", "yalan", "??lfet", "????tak", "tirat", "sudan", "guguk", "yaban", "dilek", "h??cum", "k??pr??", "davet", "nizam", "y??k??m", "borsa", "otsul", "??anak", "macar", "kopuz", "yar????", "revak", "??lger", "kaide", "yular", "t??zel", "mezun", "donuk", "??slup", "fetih", "fular", "falso", "hissi", "bohem"],
      Ta = ["abac??", "abadi", "abal??", "abana", "abani", "aba??o", "abaza", "abbas", "abdal", "abece", "abhaz", "abide", "abiye", "ablak", "abone", "abosa", "abra??", "abuli", "acaba", "acara", "acele", "acemi", "aceze", "ac??ca", "ac??l??", "ac??ma", "acibe", "acube", "acuze", "a??g??z", "a??l??k", "a??mak", "a??maz", "adale", "adal??", "adama", "adana", "adedi", "adese", "adeta", "ad??na", "adres", "adsal", "ads??z", "afaki", "afazi", "afgan", "afife", "afili", "afi??e", "afoni", "afsun", "af??ar", "af??in", "aftos", "afyon", "agami", "agora", "agraf", "a??c??k", "a????l??", "a??lak", "a??mak", "a??nam", "a??raz", "a??yar", "ahali", "ahbap", "ahcar", "ahenk", "ahfat", "ahfe??", "ahize", "ahkam", "ahlaf", "ahlak", "ahlat", "ahmak", "ahraz", "ah??ap", "ahval", "aidat", "ajans", "ajite", "akabe", "akait", "akaju", "akala", "akba??", "ak????l", "akdut", "akemi", "ak??c??", "akide", "akkor", "akk??y", "akku??", "aklan", "aklen", "akl??k", "akmak", "akman", "akmaz", "akont", "akort", "akpas", "akran", "akrep", "aksak", "aksam", "aksan", "akson", "ak??am", "ak????n", "aktar", "akta??", "aktif", "akt??r", "akvam", "alaca", "alaka", "alarm", "alaza", "albay", "alb??m", "al??ak", "aleni", "alevi", "aleyh", "alg??n", "al??c??", "alize", "alkan", "alk??m", "alk????", "alkil", "alkol", "allah", "allem", "all??k", "alma??", "almak", "alman", "alma??", "almus", "alna??", "altes", "alt??k", "alt??n", "alt??z", "altl??", "alyan", "alyon", "amade", "ambar", "amber", "amele", "ameli", "amigo", "amorf", "amper", "ampir", "ampul", "amudi", "anaca", "anal??", "anane", "ancak", "anda??", "and????", "and??k", "and??z", "anele", "anemi", "ang????", "ang??n", "angut", "anide", "anime", "anjin", "anket", "anlak", "anlam", "anl??k", "anmak", "anons", "ans??z", "anten", "antet", "antik", "antl??", "antre", "an??ri", "anyon", "anzak", "apac??", "apiko", "aplik", "aport", "apo??i", "apotr", "april", "apsis", "aptal", "araba", "arabi", "arac??", "araka", "aral??", "arama", "arami", "arazi", "ardak", "ard????", "ard??l", "arena", "arga??", "arg??n", "arg??t", "argon", "ar??c??", "ar??za", "ar??zi", "arife", "ariya", "ariza", "arka??", "ark??t", "arkoz", "armut", "armuz", "aroma", "arp????", "arpej", "ars??z", "arsin", "ar????n", "ar??iv", "art????", "arter", "art??k", "art??m", "art??n", "art????", "artma", "asabi", "ashap", "as??l??", "aside", "asist", "askat", "asker", "askl??", "aslan", "aslen", "asl??k", "asmak", "aspur", "astar", "astat", "ast??m", "astik", "asude", "asy??n", "a??a????", "a??ama", "a??ari", "a??evi", "a????c??", "a????l??", "a????r??", "a??ina", "a??k??n", "a??l??k", "a??mak", "a??ure", "atama", "atari", "ata??e", "atfen", "at??c??", "at??l??", "atlas", "atlet", "atmak", "atm??k", "avane", "avans", "avara", "avare", "avaze", "avdet", "avize", "avlak", "avrat", "avret", "av??ar", "avun??", "avurt", "ayd??n", "ayevi", "ayg??r", "ayg??t", "ay??c??", "ay??rt", "aylak", "ayl??k", "aymak", "aymaz", "aynaz", "aynen", "ayra??", "ayran", "ayr????", "ayr??k", "ayr??m", "ayr??t", "aysar", "ays??z", "ayvan", "ayvaz", "ayyar", "ayya??", "ayyuk", "azade", "azami", "azeri", "azg??n", "az??l??", "azize", "azl??k", "azmak", "azman", "aznif", "azoik", "azvay", "baba??", "babai", "bacak", "ba??????", "badal", "badas", "badat", "badem", "bad????", "badik", "badya", "bafra", "bagaj", "baget", "ba??an", "ba??c??", "ba??da", "ba????l", "ba????m", "ba????n", "ba????r", "ba??????", "ba????t", "ba??l??", "bahai", "bahar", "bah??e", "bahir", "bahis", "bahri", "baka??", "bakam", "bakan", "bak??m", "bak??r", "bak????", "bakir", "bakla", "bakma", "balar", "balat", "balc??", "baldo", "balet", "bal??k", "bali??", "balk??", "ball??", "balon", "baloz", "balta", "balya", "bambu", "bamya", "banak", "banal", "banaz", "bando", "banjo", "banka", "banko", "banma", "banyo", "baraj", "barak", "baran", "barba", "barc??", "bar??a", "barda", "bardo", "barem", "baret", "bar????", "barit", "bariz", "barka", "barok", "baron", "barut", "basak", "basar", "basen", "bas??k", "bas??m", "bas??n", "bas????", "basil", "basit", "bask??", "basma", "basso", "bast??", "basur", "basya", "ba??ak", "ba??at", "ba??????", "ba??ka", "ba??l??", "ba??ta", "batak", "batar", "bat??k", "bat??l", "bat??n", "bat????", "batik", "batk??", "batma", "baton", "batur", "bavc??", "bavl??", "bavul", "bayan", "bayat", "bay??r", "bayma", "bayr??", "bazal", "bazen", "bazik", "bazit", "bebek", "becet", "bedel", "beden", "bedii", "bedik", "bedir", "bed??k", "beg??m", "beher", "behey", "behre", "bekar", "bekas", "bek??i", "bekri", "belce", "belde", "belek", "belen", "bele??", "belge", "belgi", "beli??", "belik", "belit", "belki", "belli", "bemol", "bence", "benci", "bende", "benek", "bengi", "beniz", "benli", "berat", "beril", "berri", "besin", "besni", "beste", "be??er", "be??ik", "be??iz", "be??li", "be??me", "be??on", "be??u??", "beter", "betik", "betim", "beton", "beyan", "beyaz", "beyin", "beyit", "beyzi", "bezci", "bezek", "bezen", "bezgi", "bezik", "bezir", "bezi??", "bezme", "bezsi", "b??c??l", "b????ak", "b??????k", "b????k??", "b??d??k", "b??k????", "b??kma", "b??y??k", "b??z??r", "biber", "biblo", "bicik", "bi??em", "bi??im", "bi??i??", "bi??ki", "bi??me", "bidar", "bidat", "bidon", "bihu??", "bikes", "bikir", "bilar", "bilek", "bilet", "bilge", "bilgi", "bilim", "bilir", "bili??", "bilme", "bilye", "bindi", "binek", "biner", "bingi", "bini??", "binit", "binme", "biraz", "birci", "birer", "birey", "birim", "birli", "birun", "bi??ek", "bitap", "bitek", "bitey", "bitik", "bitim", "biti??", "bitki", "bitli", "bitme", "bit??m", "biyel", "bizar", "bizce", "bizon", "bloke", "bobin", "bocce", "bocuk", "bodu??", "bodur", "bo??ak", "bo??az", "bo??ma", "bo??uk", "bo??um", "boh??a", "bohem", "boklu", "bolca", "bomba", "bombe", "borak", "boran", "borat", "borda", "bordo", "borik", "borsa", "boruk", "boyar", "boyca", "boylu", "boyna", "boyoz", "boyun", "boyut", "bozca", "bozma", "bozuk", "bozum", "bozu??", "b??b??r", "b??cek", "b??????r", "b??len", "b??lge", "b??lme", "b??l??k", "b??l??m", "b??l????", "b??l??t", "b??nce", "b??rek", "b??yle", "bran??", "bravo", "bron??", "bronz", "br??ve", "bucak", "bu??uk", "budak", "budun", "bug??n", "bu??ra", "bu??ur", "bu??uz", "buhar", "buhur", "buket", "bukle", "bulak", "bulgu", "bulma", "bulu??", "bulut", "bunak", "bunca", "bunlu", "bunma", "burak", "burcu", "burgu", "burma", "bursa", "buruk", "burun", "bu??on", "butik", "butlu", "buton", "buyma", "buyot", "buzcu", "buzla", "buzlu", "buzul", "b??c??r", "b????et", "b????l??", "b??ken", "b??kme", "b??k????", "b??k??k", "b??k??m", "b??k??n", "b??k????", "b??lu??", "b??nye", "b??rg??", "b??r??k", "b??r??n", "b??tan", "b??t??e", "b??ten", "b??tey", "b??t??n", "b??vet", "b??y??k", "b??zg??", "b??zme", "b??z??k", "cac??k", "cadde", "cahil", "caize", "calip", "camc??", "cam??z", "camia", "camit", "caml??", "cams??", "canan", "canik", "canip", "canl??", "carl??", "carta", "casus", "cay????", "cayma", "cazc??", "cazip", "cazl??", "cebel", "cebin", "cebir", "cebri", "cedel", "cedit", "cedre", "cehil", "cehre", "cehri", "ceket", "celal", "celbe", "celep", "celil", "celse", "cemal", "ceman", "cemil", "cemre", "cenah", "cenap", "cenin", "cenup", "cep??i", "cephe", "ceren", "ceset", "cesim", "cesur", "cevap", "cevaz", "cevir", "ceviz", "cevvi", "cevza", "cezai", "cezbe", "cezir", "cezri", "cezve", "c??b??l", "c??c??k", "c??l??z", "c??v??k", "c??vma", "c??z??k", "cibin", "cibre", "cicik", "cicim", "cicoz", "cidal", "cidar", "ciddi", "ci??er", "cihan", "cihar", "cihat", "cihaz", "cihet", "cilve", "cimri", "cinai", "cinas", "cinci", "cinli", "cinsi", "cirim", "cirit", "cisim", "civan", "civar", "cizre", "cizye", "conta", "corum", "co??ku", "co??ma", "co??um", "co??u??", "cudam", "cukka", "cumba", "cunda", "cunta", "cu??i??", "c??bbe", "c??c??k", "c??lus", "c??mle", "c??nha", "c??nun", "c??n??p", "c??ret", "c??ruf", "c??r??m", "c??sse", "??abuk", "??ad??r", "??a??la", "??a??ma", "??a??r??", "??akal", "??akar", "??aker", "??ak??l", "??ak??m", "??ak??n", "??ak??r", "??ak????", "??akma", "??akra", "??alak", "??alap", "??alar", "??alg??", "??al??k", "??al??m", "??al????", "??alk??", "??alma", "??alt??", "??ama??", "??amat", "??am??a", "??amur", "??anak", "??anc??", "??and??", "??anl??", "??anta", "??apak", "??apar", "??apla", "??apl??", "??apma", "??apul", "??aput", "??ar??k", "??arka", "??arp??", "??ar????", "??asar", "??a????t", "??atak", "??atal", "??at??k", "??at????", "??atk??", "??atma", "??avl??", "??avma", "??avun", "??avu??", "??ayan", "??ayc??", "??ay??r", "??ayl??", "??ebi??", "??ecik", "??e??en", "??edik", "??ehre", "??ek??e", "??ekek", "??ekel", "??ekem", "??eker", "??eki??", "??ekik", "??ekim", "??eki??", "??ekme", "??ek??l", "??elek", "??elen", "??elgi", "??elik", "??elim", "??ello", "??elme", "??em??e", "??emen", "??emi??", "??emi??", "??enek", "??enet", "??engi", "??epel", "??eper", "??epez", "??epin", "??epni", "??era??", "??er??i", "??erez", "??erge", "??e??it", "??e??me", "??e??ni", "??etin", "??evik", "??evre", "??evri", "??eyiz", "????ban", "????dam", "????f??t", "????????r", "????kak", "????kan", "????kar", "????k??k", "????k??n", "????k????", "????k??t", "????kma", "????kra", "????kt??", "????nar", "????ng??", "????p??r", "????ra??", "????rak", "????rp??", "????tak", "????t??r", "????vma", "????yan", "??i??ek", "??ifte", "??igan", "??i??de", "??i??il", "??i??in", "??i??it", "??i??li", "??ilek", "??illi", "??imek", "??imen", "??imme", "??ince", "??inko", "??inli", "??ipil", "??iri??", "??iroz", "??isen", "??i??ik", "??iten", "??itme", "??ivit", "??izer", "??izge", "??izgi", "??izik", "??izim", "??izi??", "??izme", "??oban", "??ocuk", "??o??ul", "??o??un", "??okal", "??ok??a", "??ok??u", "??oklu", "??olak", "??olpa", "??omak", "??omar", "??opra", "??opur", "??orak", "??orap", "??orba", "??orlu", "??orum", "??otra", "??otuk", "??????me", "????????r", "????kek", "????kel", "????kme", "????k??k", "????k??m", "????k????", "????m??e", "????mez", "????mme", "????p????", "????pl??", "????rek", "????rk??", "????rt??", "????ven", "????zg??", "????zme", "????z??k", "????z??m", "????z????", "??ubuk", "??ukur", "??ulcu", "??ulha", "??umra", "??upra", "??u??ka", "??uval", "??uva??", "????k??r", "????nk??", "????r??k", "dada??", "daday", "da??ar", "da??c??", "da??l??", "dahil", "daima", "daimi", "daire", "dakik", "dalak", "dalan", "dala??", "dalga", "dalg??", "dal????", "dal??z", "dall??", "dalma", "dals??", "dalya", "damak", "damal", "damar", "damat", "damga", "damla", "daml??", "danca", "dan????", "dara??", "dara??", "darbe", "darca", "dasit", "dat??a", "datif", "davar", "davet", "davul", "davya", "dayak", "debbe", "debil", "defin", "defne", "degaj", "de??e??", "de??er", "de??il", "de??im", "de??in", "de??i??", "de??me", "deist", "deizm", "dekan", "dekar", "dekor", "delgi", "delik", "delil", "delme", "delta", "demci", "deme??", "demek", "demet", "demin", "demir", "demli", "demre", "denek", "denet", "deney", "denge", "denim", "deniz", "denli", "denme", "denyo", "depar", "derbi", "dergi", "derik", "derin", "derme", "derun", "derya", "desen", "deste", "de??ik", "de??me", "detay", "devam", "devce", "devim", "devir", "devre", "devri", "deyim", "deyi??", "d????an", "d??lak", "d??????k", "d????k??", "dibek", "dicle", "didar", "didim", "didon", "digor", "di??er", "dik??e", "dike??", "dikel", "diken", "dikey", "dikim", "diki??", "dikit", "dikiz", "dikme", "dikse", "dikta", "dikte", "dilce", "dilci", "dilek", "dilim", "dili??", "dilli", "dilme", "dilsi", "dima??", "dinar", "dince", "dinci", "dinek", "dinen", "dingi", "dingo", "dini??", "dinli", "dinme", "dipli", "direk", "diren", "direy", "diri??", "diril", "dirim", "disko", "di????i", "di??il", "di??li", "ditme", "dival", "divan", "divik", "divit", "diyar", "diyet", "diyez", "diyot", "dizek", "dizel", "dizem", "dizey", "dizge", "dizgi", "dizim", "dizin", "dizi??", "dizme", "dobra", "dogma", "do??a??", "do??al", "do??an", "do??ma", "do??ru", "do??um", "do??u??", "dokuz", "dolak", "dolam", "dolap", "dolar", "dolay", "dolgu", "dolma", "dolum", "dolu??", "domur", "domuz", "donam", "donlu", "donma", "don??r", "donra", "donuk", "dorse", "doruk", "dorum", "dosya", "doygu", "doyma", "doyum", "doyu??", "dozaj", "dozer", "d??ger", "d??kme", "d??k??k", "d??k??m", "d??k????", "d??lek", "d??l??t", "d??ne??", "d??nek", "d??nel", "d??nem", "d??ner", "d??ng??", "d??nme", "d??n??k", "d??n??m", "d??n????", "d??n??t", "d??per", "d????ek", "d????em", "d????l??", "d??ve??", "d??viz", "d??vme", "d??v????", "draje", "drama", "duac??", "dual??", "dubar", "duble", "dudak", "duhul", "dulda", "duluk", "duman", "dumur", "dura??", "durak", "dural", "durgu", "durma", "duruk", "durum", "duru??", "du??ak", "du??lu", "dut??u", "duvak", "duvar", "duyar", "duygu", "duyma", "duyum", "duyu??", "d??bel", "d??be??", "d????ar", "d??den", "d??d??k", "d??gah", "d????me", "d??????m", "d??????n", "d??men", "d??nit", "d??nk??", "d??n??r", "d??nya", "d??rme", "d??rt??", "d??r??m", "d??rzi", "d??rz??", "d????????", "d????es", "d????e??", "d????ey", "d????k??", "d????me", "d??????k", "d??????n", "d????????", "d??????t", "d??vel", "d??ven", "d??ver", "d??yek", "d??yun", "d??zce", "d??ze??", "d??zem", "d??zen", "d??zey", "d??zg??", "d??zme", "ebcet", "ebedi", "ebeli", "ebleh", "ecdat", "e??hel", "edal??", "edebi", "edin??", "edvar", "efdal", "efece", "efekt", "efkar", "eflak", "efrat", "efriz", "efsun", "efsus", "egale", "eglog", "egzoz", "e??lek", "e??me??", "e??mek", "e??m??r", "e??rez", "e??rim", "ehram", "ehven", "ejder", "ekici", "ekili", "eklem", "ekler", "ekmek", "ekose", "ekran", "eksen", "ekser", "eksik", "eksin", "eksiz", "ek??ri", "elbet", "elcik", "el??ek", "el??im", "elden", "eleji", "eleme", "elgin", "elhak", "elifi", "elips", "ellik", "elmas", "elmek", "elvan", "elyaf", "elzem", "emare", "emaye", "emcek", "emcik", "emici", "emlak", "emlik", "emme??", "emmek", "emraz", "emsal", "emtia", "emval", "emzik", "enayi", "encam", "endam", "ender", "eneme", "eneze", "enfes", "engel", "engin", "enkaz", "enlem", "en??te", "ensar", "ensiz", "entel", "enzim", "eosen", "epeyi", "epope", "epsem", "erbaa", "erbap", "erba??", "erbin", "ercik", "erci??", "erdek", "erdem", "erden", "ergen", "ergin", "erika", "erime", "erin??", "erkan", "erke??", "erkek", "erken", "erkin", "erkli", "erlik", "ermek", "ermin", "ermi??", "eroin", "ersiz", "ervah", "erzak", "erzel", "erzin", "esame", "esans", "esasi", "esbak", "esbap", "eseme", "esham", "esire", "eskil", "eskiz", "eslaf", "eslek", "esmek", "esmer", "esnaf", "esnek", "espas", "espri", "esrar", "esrik", "essah", "ester", "estet", "esvap", "e??arp", "e??has", "e??kal", "e??kin", "e??lek", "e??lem", "e??lik", "e??mek", "e??raf", "e??ref", "e??siz", "et??ik", "et??il", "etene", "etfal", "etken", "etkin", "etlik", "etmek", "etmen", "etnik", "etraf", "etsel", "etsiz", "evaze", "evcek", "evcik", "evcil", "evde??", "evgin", "evham", "eviye", "evkaf", "evlat", "evlek", "evlik", "evrak", "evrat", "evren", "evrik", "evrim", "evsaf", "evsin", "evsiz", "evvel", "eylem", "eyl??l", "eytam", "eyvah", "eyvan", "eyyam", "ezani", "ezber", "ezeli", "ezgi??", "ezgin", "ezici", "ezin??", "ezine", "ezmek", "facia", "fagot", "fahi??", "fahri", "fahte", "fahur", "fakat", "fakih", "fakir", "fak??l", "falan", "falc??", "falez", "falso", "falya", "fanta", "fanti", "fanus", "fanya", "farad", "fara??", "farba", "fari??", "faril", "faset", "fas??k", "fas??l", "fasih", "fasit", "faska", "fasl??", "fason", "fatih", "fatsa", "fauna", "fayda", "faz??l", "fazla", "fecir", "fedai", "fehim", "fehva", "fek??l", "felah", "felek", "fenci", "fener", "fenik", "fenni", "fenol", "fera??", "ferah", "ferda", "ferdi", "ferih", "ferik", "ferli", "ferma", "fesat", "fesih", "fetha", "fetih", "feti??", "fet??s", "fetva", "fevri", "feyiz", "f??k??h", "f??kra", "f??r??a", "f??r??n", "f??rka", "f????k??", "f??t??k", "f??tri", "fiber", "fidan", "fidye", "fifre", "figan", "fig??r", "fiili", "fikir", "fikri", "filan", "filar", "filet", "filiz", "filoz", "filsi", "filum", "final", "fince", "fini??", "firak", "firar", "firez", "firik", "firma", "fiske", "fisto", "fi??ek", "fi??ka", "fi??li", "fit??i", "fitil", "fitin", "fitne", "fitre", "fiyat", "fizik", "flama", "fleol", "flora", "flori", "fl??re", "fl??rt", "fodla", "fodra", "fodul", "fokus", "folyo", "fonda", "fond??", "fonem", "forma", "foroz", "forsa", "forte", "forum", "fosil", "frank", "frape", "frenk", "fresk", "freze", "frigo", "frisa", "fuaye", "fuhu??", "fujer", "fular", "fulya", "funda", "furya", "f??l??s", "f??nye", "f??sun", "f??tur", "f??zen", "gabin", "gabro", "gabya", "gadir", "gafil", "gafur", "gaile", "gaita", "galat", "galip", "galiz", "galon", "galop", "galo??", "gamba", "gamet", "gaml??", "gamze", "garaj", "garaz", "garbi", "garip", "garoz", "gasil", "ga??iy", "gauss", "gavot", "gavur", "gayda", "gayet", "gayr??", "gayri", "gayur", "gayya", "gazal", "gazap", "gazel", "gazl??", "gazoz", "gazve", "gebe??", "gebre", "gebze", "ge????e", "ge??ek", "ge??en", "ge??er", "ge??im", "ge??i??", "ge??it", "ge??me", "gedik", "gediz", "gedme", "gelen", "gelin", "gelir", "geli??", "gelme", "gemre", "genel", "geni??", "geniz", "genom", "geoit", "ger??i", "gere??", "gerek", "geren", "gergi", "gerim", "geri??", "geriz", "germe", "gerze", "getto", "geva??", "geven", "gevi??", "gevme", "geyik", "gey??a", "geyve", "gezi??", "gezme", "g??c??k", "g??c??r", "g??d??k", "g??d??m", "g??pta", "g??rla", "g??yap", "gider", "gidi??", "gidon", "giray", "girdi", "giren", "girim", "giri??", "girme", "gitar", "gitme", "giyim", "giyi??", "giyit", "giyme", "giysi", "gizem", "gizil", "gizli", "glase", "gnays", "gocuk", "godo??", "golc??", "goll??", "gonca", "goril", "got??a", "gotik", "g??bek", "g??bel", "g??b??t", "g??cen", "g????er", "g????me", "g??????k", "g??????m", "g????????", "g??den", "g??de??", "g????em", "g??????s", "g??k??e", "g??lek", "g??let", "g??lge", "g??l??k", "g??me??", "g??mme", "g??m??k", "g??m????", "g??m??t", "g??nc??", "g??nen", "g??n??l", "g??nye", "g??rev", "g??rg??", "g??rme", "g??r??m", "g??r????", "g??vde", "g??vek", "g??vel", "g??vem", "g??yme", "g??y??k", "g??zc??", "g??zde", "g??zer", "g??zg??", "g??zl??", "grado", "grena", "grizu", "grogi", "grosa", "guano", "guatr", "gudde", "guguk", "gula??", "gulet", "gurme", "gurup", "gurur", "gusto", "gus??l", "g??bre", "g??b??r", "g??c??k", "g??c??n", "g????l??", "g??dek", "g??d??k", "g??d??l", "g??d??m", "g??fte", "g??????m", "g??lc??", "g??le??", "g??lle", "g??ll??", "g??lme", "g??l??k", "g??l????", "g??l??t", "g??me??", "g??m??l", "g??m????", "g??nah", "g??nce", "g??nde", "g??ne??", "g??ne??", "g??ney", "g??nl??", "g??p??r", "g??rc??", "g??re??", "g??rsu", "g??ruh", "g??r??n", "g??tme", "g??ve??", "g??ven", "g??vez", "g??zel", "g??zey", "g??z??n", "habbe", "haber", "habe??", "habip", "habis", "hacet", "hacim", "hacir", "haciz", "ha??l??", "hadde", "had??m", "hadim", "hadis", "haf??z", "hafif", "hafik", "hafit", "hafta", "haham", "hahha", "haile", "hakan", "hakas", "hak??a", "hakem", "hakim", "hakir", "hakl??", "hala??", "halas", "halat", "halay", "halef", "halel", "halen", "halet", "halfa", "hali??", "halik", "halim", "halis", "halka", "haluk", "hamak", "hamal", "hamam", "hamel", "ham??z", "hamil", "hami??", "hamla", "hamle", "hamse", "hamsi", "hamur", "hamut", "hanak", "hanay", "hanc??", "hande", "hanek", "hangi", "han??m", "hanut", "hanya", "hapaz", "hap????", "hapis", "hap??u", "hara??", "haram", "harap", "harar", "harbe", "harbi", "harem", "har??m", "har??n", "hari??", "harim", "harir", "haris", "harl??", "harta", "hasar", "hasat", "hasbi", "hasep", "haset", "has??l", "has??m", "has??r", "hasis", "haspa", "hassa", "hasse", "hasta", "hasut", "ha??at", "ha????l", "ha??in", "ha??ir", "ha??i??", "ha??iv", "hatay", "hat??l", "hat??r", "hatif", "hatim", "hatip", "hatmi", "hatta", "hatun", "havai", "havan", "havas", "havl??", "havlu", "havra", "havsa", "havu??", "havut", "havuz", "havva", "havya", "havza", "hayal", "hayat", "haybe", "hayc??", "hayda", "haydi", "hayfa", "hay??f", "hay??r", "hay??t", "hay??z", "hayli", "hayta", "hazan", "hazar", "hazc??", "haz??k", "haz??m", "haz??r", "hazin", "hazne", "hazro", "hecin", "hedef", "heder", "hedik", "hekim", "helak", "helal", "helen", "helik", "helis", "helke", "helme", "helva", "hemen", "hempa", "hemze", "hen??z", "hepsi", "herek", "herif", "herik", "herke", "hertz", "herze", "hesap", "heves", "heybe", "heyet", "hezel", "hezen", "h??f??z", "h??m????", "h??n??s", "h??rbo", "h??rka", "h??rl??", "h??s??m", "h??????m", "h??????r", "h??yar", "h??zar", "h??z??r", "h??zla", "h??zl??", "h??zma", "hicap", "hicaz", "hiciv", "hicri", "hi????i", "hidiv", "hidra", "hikem", "hilaf", "hilal", "hilat", "hilye", "himen", "hindi", "hindu", "hippi", "hisar", "hisli", "hisse", "hissi", "hitam", "hitan", "hitap", "hitit", "hizan", "hizip", "hodan", "hodri", "hokey", "hokka", "honaz", "hoppa", "horon", "horoz", "horst", "ho??af", "ho????a", "ho??ur", "hotoz", "hozan", "hozat", "h??d??k", "h??y??k", "hudut", "hukuk", "hulul", "hulus", "humar", "humma", "humor", "humus", "hurda", "hurma", "hurra", "huru??", "husuf", "husul", "husus", "husye", "hutbe", "hutut", "huylu", "huzur", "h??cre", "h??cum", "h??kmi", "h??k??m", "h??lle", "h??lya", "h??ner", "h??nsa", "h??rle", "h??rya", "h??s??n", "h??y??k", "h??zme", "h??z??n", "????d??r", "????r??p", "??hmak", "??lgar", "??lgaz", "??lg??m", "??lg??n", "??lg??n", "??l??ca", "??l??ca", "??l??ma", "??ltar", "??rama", "??rgat", "??rk????", "??rmak", "??skat", "??slah", "??slak", "??sl??k", "??srar", "??ss??z", "??star", "??????ma", "????k??n", "????t??r", "??tlak", "??trah", "??zg??n", "??zrar", "ibare", "ibate", "ibdai", "ibla??", "iblis", "ibraz", "ibret", "ibrik", "ibzal", "icbar", "icmal", "i??eri", "i??ici", "i??kin", "i??lem", "i??lik", "i??mek", "i??rek", "i??sel", "i??siz", "i??ten", "i??y??z", "idadi", "idame", "idare", "idari", "iddia", "ideal", "idman", "idrak", "idrar", "ifade", "iffet", "ifham", "iflah", "iflas", "ifra??", "ifrat", "ifraz", "ifrit", "ifsat", "iftar", "i??dir", "i??di??", "i??fal", "i??lik", "ihale", "ihata", "ihbar", "ihdas", "ihlal", "ihlas", "ihmal", "ihra??", "ihram", "ihraz", "ihsan", "ihsas", "ihtar", "ihvan", "ihzar", "ikame", "ikbal", "ikdam", "ikici", "ikili", "iklim", "ikmal", "ikona", "ikrah", "ikram", "ikrar", "ikraz", "iksir", "ilahe", "ilahi", "ilahi", "ilave", "ilbay", "ilen??", "ileri", "ileti", "ilge??", "ilhak", "ilham", "ilhan", "ilkah", "ilkel", "ilkin", "illet", "ilmek", "ilmik", "ilzam", "imale", "imal??", "imame", "imbat", "imbik", "imdat", "imece", "imkan", "imle??", "imlek", "imlik", "imren", "imroz", "imsak", "inan??", "incik", "incil", "incir", "indis", "infak", "infaz", "ingin", "inkar", "inmek", "in??n??", "insaf", "insan", "in??at", "inta??", "intak", "intan", "inzal", "ip??ik", "ipeka", "ipham", "iplik", "ipsiz", "iptal", "ipucu", "irade", "iradi", "irfan", "irice", "irite", "irkme", "irmik", "ironi", "irsal", "irsen", "ir??at", "isale", "isevi", "ishal", "iskan", "isko??", "islam", "islav", "islim", "ismen", "ismet", "isnat", "ispat", "ispir", "ispir", "ispit", "israf", "istek", "istem", "ister", "istif", "istim", "istop", "isyan", "i??eme", "i??gal", "i??kal", "i??kil", "i??lek", "i??lem", "i??lev", "i??lik", "i??mar", "i??ret", "i??siz", "i??tah", "i??te??", "i??yar", "itaat", "ite??i", "ithaf", "ithal", "itham", "itici", "itila", "itina", "itlaf", "itlik", "itmam", "itmek", "ivedi", "ivesi", "ivmek", "iyice", "izabe", "izafe", "izafi", "izale", "izhar", "izlek", "izlem", "izlev", "izmir", "izmit", "iznik", "izole", "izzet", "jakar", "japon", "jarse", "jeloz", "jeton", "jikle", "jilet", "joker", "jokey", "j??pon", "kabak", "kaban", "kab??z", "kabil", "kabin", "kabir", "kablo", "kabuk", "kabul", "kabus", "kabza", "ka??ak", "ka??ar", "ka????k", "ka??????", "ka??l??", "ka??ma", "ka??ta", "kadar", "kadeh", "kadem", "kader", "kad??n", "kadim", "kadir", "kadit", "kadro", "kad??k", "kafes", "kafir", "kafur", "kagir", "ka??an", "ka????t", "ka??n??", "kah??r", "kahil", "kahin", "kahir", "kahpe", "kahta", "kahve", "kahya", "kaide", "kaime", "kaka??", "kakao", "kak????", "kak??m", "kak????", "kakma", "kak??l", "kalak", "kalan", "kalas", "kalay", "kalbi", "kalc??", "kal??a", "kalem", "kalfa", "kal????", "kal??k", "kal??m", "kal??n", "kal??p", "kal????", "kal??t", "kalma", "kalya", "kaman", "kam????", "kamer", "kamet", "kamga", "kam????", "kamil", "kamus", "kanal", "kanat", "kanca", "kan??k", "kan????", "kan??t", "kani??", "kanka", "kanl??", "kanma", "kanon", "kanto", "kanun", "kapak", "kapan", "kap????", "kapik", "kapi??", "kapl??", "kapma", "kaput", "kapuz", "karar", "karay", "karga", "karg??", "kargo", "karha", "kar??k", "kar??n", "kar????", "karl??", "karma", "karne", "karni", "karst", "kar????", "karun", "karye", "kasap", "kasem", "kaset", "kas??k", "kas??m", "kas??r", "kas??t", "kasis", "kasko", "kasl??", "kasma", "kasn??", "kasti", "ka??an", "ka??ar", "ka????k", "ka??if", "ka??l??", "katar", "kat????", "kat??k", "kat??m", "kat??r", "katil", "katip", "katk??", "katl??", "katma", "katot", "katre", "kavaf", "kavak", "kaval", "kavas", "kavat", "kavga", "kavil", "kavim", "kavis", "kavk??", "kavmi", "kavuk", "kavun", "kavut", "kavuz", "kaya??", "kayak", "kayan", "kayar", "kayg??", "kay??k", "kay??n", "kay??p", "kay??r", "kay????", "kay??t", "kayma", "kayme", "kayra", "kay??a", "kazak", "kazan", "kazaz", "kaz??k", "kaz??l", "kaz??m", "kazma", "keban", "kebap", "kebir", "kebze", "keder", "kefal", "kefen", "kefil", "kefir", "kefne", "kehle", "keke??", "kekik", "kekre", "kelam", "kelek", "kelem", "kelep", "keler", "keles", "kele??", "kelik", "kelle", "kelli", "kemah", "kemal", "keman", "kemer", "kemha", "kemik", "kemre", "kenar", "kendi", "kenef", "kenet", "kenya", "kep??e", "kepek", "kepez", "kepir", "kepme", "kerde", "kerem", "keres", "kerih", "kerim", "keriz", "kerki", "kerte", "kerti", "kesat", "kesbi", "kesek", "kesel", "kesen", "keser", "kesif", "kesik", "kesim", "kesin", "kesir", "kesi??", "kesit", "keski", "kesme", "kesre", "ke??an", "ke??ap", "ke??en", "ke??if", "ke??ik", "ke??i??", "ke??ke", "ke??ki", "ketal", "keten", "keton", "ketum", "kevel", "keven", "keyfi", "keyif", "k??ble", "k??dem", "k??lg??", "k??l????", "k??l??f", "k??l??k", "k??l??r", "k??l????", "k??ll??", "k??lma", "k??m??l", "k??m??z", "k??n??k", "k??nl??", "k??p??k", "k??pma", "k??pti", "k??ra??", "k??ran", "k??rat", "k??ray", "k??rba", "k??rca", "k??rc??", "k??r??k", "k??r??m", "k??rk??", "k??rma", "k??sas", "k??s??k", "k??s??m", "k??s??r", "k??s????", "k??s??t", "k??ska", "k??sk??", "k??sma", "k??smi", "k??ssa", "k??????n", "k??????r", "k????la", "k??tal", "k??t??k", "k??t??r", "k??vam", "k??yak", "k??yam", "k??yas", "k??yg??", "k??y??k", "k??y??m", "k??y??n", "k??y????", "k??yma", "k??yye", "k??zak", "k??zan", "k??z??k", "k??z??l", "k??z????", "k??zma", "kibar", "kibir", "kifaf", "kikla", "kiler", "kilim", "kilis", "kilit", "kiliz", "killi", "kilsi", "kil??s", "kimse", "kim??s", "kimya", "kinci", "kinik", "kinin", "kini??", "kinli", "kiraz", "kirde", "kire??", "kiril", "kiri??", "kirli", "kirpi", "kirve", "kisve", "kitap", "kitin", "kitle", "kitre", "kizir", "klapa", "klima", "klips", "kli??e", "koala", "kobay", "kobra", "ko??ak", "ko??an", "ko??ma", "kodes", "kofra", "kofti", "koful", "ko??u??", "kokak", "koket", "kokma", "koko??", "kokot", "kokoz", "koku??", "kolaj", "kolan", "kolay", "kolcu", "kolej", "kolik", "kolit", "kollu", "kolon", "kolpo", "kolsu", "kolye", "kolza", "komar", "kombi", "komik", "komot", "kom??u", "komut", "kom??n", "konak", "kondu", "konik", "konma", "konsa", "konuk", "konum", "konur", "konu??", "konut", "konya", "kopal", "kop??a", "kopil", "kopma", "kopoy", "kopuk", "kopu??", "kopuz", "kopya", "koral", "korku", "korna", "korno", "korse", "korte", "koruk", "korun", "korza", "ko??a??", "ko??am", "ko??in", "ko??ma", "ko??uk", "ko??ul", "ko??um", "ko??un", "ko??ut", "kotan", "koton", "kotra", "kovan", "kovcu", "kovma", "kovuk", "kovu??", "koyak", "koyar", "koyma", "koyun", "koyu??", "koyut", "kozak", "kozan", "k????ek", "k??fte", "k??hne", "k??k????", "k??ken", "k??kl??", "k??ks??", "k??l??k", "k??mbe", "k??me??", "k??m??r", "k??m????", "k??pek", "k??pr??", "k??p??k", "k??rpe", "k??r??k", "k??s????", "k??sem", "k??sn??", "k????ek", "k??tek", "k??yc??", "k??yl??", "kra??a", "kramp", "krank", "kravl", "kredi", "krema", "kriko", "kroki", "krome", "kro??e", "kubat", "kubbe", "kubur", "kucak", "kudas", "kuduz", "kud??m", "kukla", "kula??", "kulak", "kulis", "kulle", "kulun", "kul??p", "kuman", "kumar", "kuma??", "kumcu", "kumla", "kumlu", "kumru", "kumsu", "kumu??", "kumuk", "kumul", "kunda", "kupes", "kuple", "kupon", "kup??r", "kuran", "kurak", "kural", "kuram", "kurca", "kurgu", "kurma", "kurna", "kuron", "kurul", "kurum", "kuru??", "kurut", "kurya", "kurye", "kusma", "kusur", "ku??ak", "ku????a", "ku????u", "ku??et", "ku??ku", "kutan", "kutlu", "kutnu", "kutsi", "kutup", "kutur", "kuver", "kuv??z", "kuvve", "kuytu", "kuyum", "kuzen", "kuzey", "kuzin", "k??bik", "k??????k", "k??fl??", "k??f??r", "k??kre", "k??lah", "k??l??e", "k??lek", "k??lli", "k??ll??", "k??lot", "k??lte", "k??mes", "k??nc??", "k??nde", "k??nye", "k??pl??", "k??rar", "k??rdi", "k??rek", "k??rit", "k??rs??", "k??sk??", "k??sme", "k??spe", "k??suf", "k??sur", "k????at", "k????ne", "k??????m", "k??tin", "k??tle", "k??tl??", "k??t??r", "k??t??k", "k??vet", "la????n", "la??in", "la??ka", "laden", "lades", "ladik", "ladin", "laf????", "laf??z", "lafzi", "lagar", "lagos", "lag??n", "la????m", "la????v", "lahit", "lahos", "lahut", "lahza", "lakap", "lak????", "lakin", "lakoz", "lamba", "lamel", "lando", "lanet", "lanse", "lapon", "largo", "larva", "laski", "lasta", "latif", "latin", "lavaj", "lava??", "lavta", "lavuk", "lay??k", "lazca", "lazer", "laz??m", "lazut", "le??ek", "led??n", "legal", "le??en", "leh??e", "lehim", "lemis", "lenfa", "lento", "lepra", "lerze", "let??e", "levha", "levye", "leydi", "leyli", "lezar", "leziz", "l????l??", "l??k??r", "libas", "libo??", "libre", "lider", "lifli", "liger", "liken", "likit", "lik??r", "liman", "limbo", "limit", "limon", "linet", "linin", "lipit", "lipom", "liret", "lirik", "lisan", "liste", "litre", "livar", "liyan", "lizol", "liz??z", "lobut", "lodos", "logos", "lojik", "lokal", "lokma", "lokum", "lonca", "longa", "lopur", "lorta", "lo????a", "lotus", "l??koz", "l??p??r", "l??fer", "l??gat", "l??gol", "l??men", "l??net", "l??p????", "l??tuf", "l??zum", "maada", "mabat", "mabet", "mabut", "macar", "macun", "ma??ka", "madam", "madde", "maddi", "madem", "maden", "mader", "madik", "madun", "mafi??", "mafya", "magma", "magri", "mahal", "mahfe", "mahfi", "mah??v", "mahir", "mahra", "mahur", "mahut", "mahya", "maile", "maj??r", "makak", "makam", "makas", "makat", "maket", "makro", "maksi", "makta", "maktu", "makul", "makus", "malak", "malaz", "malca", "malc??", "malen", "malik", "malul", "malum", "malya", "mamak", "mambo", "mamul", "mamur", "mamut", "manas", "manat", "manav", "manca", "man??u", "manda", "manej", "manen", "manga", "mango", "mania", "mant??", "manti", "manto", "maocu", "mapus", "maral", "maraz", "marda", "mariz", "marka", "marke", "marki", "maron", "mart??", "maruf", "marul", "maruz", "marya", "masaj", "masal", "masat", "masif", "maske", "masnu", "mason", "mas??r", "mas??z", "mast??", "masum", "masun", "ma??er", "ma??uk", "matah", "matbu", "matem", "matiz", "matla", "matuf", "matuh", "maval", "mavi??", "mavna", "mavra", "may??n", "may??s", "mayna", "mazak", "mazot", "mazur", "mebde", "mebiz", "mebni", "mebus", "mecal", "mecaz", "mecmu", "mecra", "mecus", "medar", "medet", "medih", "med??z", "medya", "meful", "me??er", "mehaz", "mehdi", "mehil", "mehle", "mekan", "mekik", "melal", "melas", "melce", "melek", "meles", "mele??", "melez", "melik", "melon", "melul", "melun", "memat", "memba", "memnu", "memul", "memur", "menfa", "menfi", "men??e", "menus", "merak", "meram", "merci", "merek", "meres", "meret", "meri??", "merih", "mermi", "mesai", "mesaj", "mesel", "mesen", "mesih", "mesmu", "mesul", "mesut", "me??bu", "me??in", "me??ru", "me??um", "metal", "metan", "metbu", "metil", "metin", "metis", "metot", "metre", "metro", "mevdu", "mevki", "mevla", "mevta", "mevut", "mevzi", "mevzu", "meyan", "meyil", "meyus", "meyve", "mezar", "mezat", "mezon", "mezra", "mezru", "mezun", "mez??r", "mezzo", "m??c??r", "m??g??r", "m??gri", "m??hl??", "m??rra", "m??s??r", "m??sra", "mi??el", "midye", "mikap", "mikoz", "mikro", "milas", "milat", "milel", "milim", "milis", "milli", "mimar", "mimik", "mimli", "minik", "min??r", "mira??", "miras", "mirat", "mirza", "misak", "misal", "misel", "misil", "misis", "mitil", "mitos", "mitoz", "miyar", "miyav", "miyaz", "miyom", "miyop", "miza??", "mizah", "mizan", "mobil", "model", "modem", "mod??l", "mo??ol", "moher", "molas", "molla", "moloz", "monat", "monte", "mopet", "moral", "moren", "morto", "moruk", "motel", "motif", "motor", "motto", "mozak", "m??ble", "m??sy??", "muare", "mucip", "mucir", "mucit", "mucuk", "mucur", "mufla", "mu??la", "muhal", "muhat", "muhik", "muhil", "muhip", "muhit", "mujik", "mukim", "mukni", "mukus", "mulaj", "mumcu", "mumlu", "mumya", "munis", "murat", "muris", "musap", "mus??r", "muska", "muson", "mu??lu", "mu??ta", "mu??tu", "mutaf", "mutat", "mut??u", "mutki", "mutlu", "muylu", "muz??r", "muzip", "muzsu", "m??bah", "m??d??r", "m??fit", "m??ft??", "m??him", "m??hre", "m??h??r", "m??jde", "m??lga", "m??lki", "m??mas", "m??min", "m??n??i", "m??rai", "m??rit", "m??rur", "m????ir", "m??zi??", "m??zik", "nab??z", "nacak", "na??ar", "na??iz", "nadan", "nadas", "nadim", "nadir", "nafia", "nafiz", "nafta", "na??me", "nahak", "nah??r", "nahif", "nahiv", "naho??", "nakdi", "nak??s", "nak????", "nak??z", "nakil", "nakip", "nakit", "nakli", "nak??i", "nalan", "nal??a", "nal??n", "namaz", "naml??", "namlu", "namus", "nanay", "nanik", "narin", "nas??l", "nas??p", "nas??r", "nasip", "nasir", "na??ir", "nat??r", "natuk", "nat??r", "nazal", "nazar", "naz??m", "naz??r", "nazik", "nazil", "nazir", "nazl??", "nebat", "necat", "necip", "nedbe", "neden", "nedim", "nefer", "nefes", "nefha", "nefir", "nefis", "nefiy", "nefti", "neler", "nehir", "nehiy", "nekes", "nekre", "nem??e", "nemli", "nemse", "nesep", "nesi??", "nesih", "nesil", "nesim", "nesir", "nesne", "ne??et", "ne??ir", "nevir", "ney??e", "neyse", "nezif", "nezih", "nezir", "nezle", "n??s??f", "nicel", "ni??in", "nifak", "ni??de", "nihai", "nihan", "nikah", "nikap", "nikel", "nimet", "ninni", "nipel", "nisai", "nisan", "nisap", "nispi", "ni??an", "nitel", "niyaz", "niyet", "nizam", "nizip", "nodul", "nod??l", "nogay", "nohut", "nokra", "nokta", "nono??", "notam", "noter", "n??bet", "n??ron", "nukut", "numen", "nurlu", "nutuk", "n??ans", "n??fus", "n??fuz", "n??kte", "n??kul", "n??sha", "n??zul", "oberj", "obruk", "ocuma", "odac??", "odal??", "odeon", "odsuz", "ofans", "oflaz", "ofris", "ofset", "o??lak", "o??lan", "ojeli", "okapi", "okluk", "oksit", "oktan", "oktav", "okuma", "okume", "olas??", "ol??um", "oleik", "olein", "olgun", "olmak", "olmaz", "olmu??", "oluru", "ombra", "omlet", "onama", "ongen", "ongun", "oniks", "onlar", "onluk", "onmak", "onsuz", "oosit", "opera", "optik", "orada", "oral??", "oras??", "oraya", "orcik", "orfoz", "organ", "orgcu", "orion", "orkit", "orlon", "orman", "orta??", "ortak", "ortam", "ortay", "ortez", "ortoz", "otac??", "otama", "ot??ul", "otist", "otizm", "otlak", "otluk", "otsul", "otsuz", "oval??", "ovma??", "ovmak", "oyac??", "oyal??", "oyda??", "oylum", "oymak", "oynak", "oyna??", "ozmoz", "ozuga", "??b??r??", "??deme", "??dlek", "??d??n??", "????len", "????rek", "??ks??z", "??l??ek", "??l??er", "??l??me", "??l????m", "??l????n", "??l??????", "??l????t", "??lg??n", "??lmek", "??lmez", "??lm????", "??ncel", "??nc??l", "??nder", "??neri", "??neze", "??nlem", "??nl??k", "??nsel", "??pmek", "??rcin", "??rdek", "??reke", "??rgen", "??rg??n", "??rg??t", "??rmek", "??rnek", "??rtme", "??rt??k", "??rt????", "??r??c??", "??r??l??", "??teki", "??tmek", "??t??c??", "??t??r??", "??vmek", "??v??c??", "??v??n??", "??zalp", "??zbek", "??zdek", "??zden", "??zde??", "??zeme", "??zen??", "??zeni", "??zerk", "??zg??l", "??zg??n", "??zg??r", "??zlem", "??zl??k", "??znel", "??zsel", "pabu??", "pa??al", "pa??oz", "padok", "pafta", "pagan", "pahal", "paket", "palan", "palas", "palaz", "palet", "palto", "pampa", "pamuk", "panda", "panel", "panik", "papak", "papaz", "papel", "paraf", "par??a", "parka", "parke", "parpa", "parsa", "parti", "parya", "pasaj", "pasak", "pas????", "pasif", "pasl??", "pas??r", "pasta", "patak", "patal", "paten", "patik", "patoz", "paunt", "payan", "payda", "payen", "payet", "payl??", "pazar", "pazen", "pe??i??", "pedal", "peder", "pek??e", "pelin", "pelit", "pelte", "pel??r", "pel????", "pembe", "pen??e", "penes", "peng??", "penis", "pense", "penye", "perde", "peren", "perki", "perma", "permi", "peron", "peruk", "perva", "pesek", "pes??s", "pe??in", "pe??li", "pe??tu", "petek", "peyda", "peyke", "p??ht??", "p??nar", "p??rp??", "p??rt??", "p??sma", "pigme", "pikaj", "pikap", "piket", "pilav", "pili??", "pilli", "pilot", "pinel", "pines", "pinti", "pipet", "pirit", "pisik", "pisin", "pi??ek", "pi??ik", "pi??im", "pi??me", "pi??ti", "piton", "piyan", "piyaz", "piyes", "piyon", "pizza", "plaka", "plase", "plati", "plato", "plaza", "poker", "polar", "polat", "polen", "polim", "polip", "polis", "polka", "pol??m", "pomak", "pomat", "pompa", "ponje", "ponza", "pop??u", "porno", "porte", "porto", "posof", "posta", "po??et", "potas", "potin", "potuk", "potur", "poyra", "p??????k", "prafa", "praya", "prens", "prese", "proje", "prova", "pruva", "pudra", "pufla", "pulcu", "pullu", "pulsu", "pulu??", "pumba", "punto", "pusat", "puset", "puslu", "pusma", "puvar", "p??nez", "p??ren", "p??r??z", "p??s??r", "p??t??r", "rab??t", "racon", "radar", "radde", "radon", "radyo", "rafit", "rafl??", "rafya", "ragbi", "rahat", "rahim", "rahip", "rahle", "rahne", "rakam", "raket", "rak??m", "rakik", "rakip", "rakit", "rakor", "rakun", "ralli", "ramak", "rampa", "randa", "ranza", "rapor", "rasat", "ras??t", "raspa", "rasyo", "rat??p", "raunt", "rayba", "rayi??", "reaya", "rebap", "recep", "recim", "re??el", "redif", "refah", "refik", "ref??j", "rehin", "rejim", "rekat", "rekiz", "rekor", "remel", "remil", "remiz", "rende", "resen", "resif", "resim", "resmi", "resul", "re??it", "re??me", "reva??", "revak", "revan", "revir", "revi??", "reyon", "rezil", "r??z??k", "rical", "ricat", "rijit", "rimel", "ringa", "ritim", "riyal", "robot", "rodaj", "rodeo", "roket", "rolc??", "roman", "romen", "rosto", "rotil", "rotor", "rozet", "r??fle", "r??gar", "r??tar", "r??tu??", "rubai", "ruble", "rufai", "rugan", "ruh??a", "ruhen", "ruhlu", "rujlu", "rulet", "rumba", "rumca", "rumuz", "runik", "rus??a", "rutin", "r??esa", "r??k??n", "r??k????", "r??sum", "r??sup", "r??sva", "r??tbe", "r??yet", "sabah", "saban", "sab??k", "sab??r", "sabit", "sabuh", "sabun", "sabur", "sa??ak", "sa????k", "sa??????", "sa??l??", "sa??ma", "sadak", "sadet", "sad??k", "sad??r", "sadik", "sadme", "saf??a", "safer", "safha", "safir", "safra", "sa??c??", "sa????m", "sa????n", "sa????r", "sa??ma", "sa??r??", "sahaf", "sahan", "sahih", "sahil", "sahip", "sahne", "sahra", "sahre", "sahte", "sahur", "saika", "sakaf", "sakak", "sakal", "sakar", "sakat", "sak??n", "sak??t", "sak??z", "sakil", "sakim", "sakin", "sakit", "sakl??", "saks??", "salah", "salak", "salam", "sala??", "salat", "salc??", "sal??a", "salep", "salg??", "sal??k", "salik", "salim", "salip", "sall??", "salma", "salon", "saloz", "salpa", "salsa", "salta", "salto", "salur", "salvo", "salya", "saman", "samba", "samsa", "samur", "samut", "sanal", "sanat", "sanc??", "sanem", "sang??", "san??k", "san????", "sanki", "sanl??", "sanma", "sanr??", "sapak", "sapan", "sap??k", "sap????", "sapk??", "sapl??", "sapma", "sara??", "sarak", "sarat", "saray", "sarg??", "sar??k", "sar??m", "sar????", "sar??z", "sarig", "sarih", "sarma", "sarpa", "sason", "saten", "sathi", "sat??h", "sat??m", "sat??r", "sat????", "satir", "satma", "sauna", "savak", "savan", "sava??", "savat", "savca", "savc??", "savla", "savlo", "savma", "savur", "saya??", "sayfa", "sayg??", "sayha", "say??m", "say??n", "say????", "sayma", "sayr??", "sazak", "sazan", "sazc??", "sazl??", "seans", "sebat", "seben", "sebep", "sebil", "sebze", "secde", "se??al", "se??im", "se??i??", "se??ki", "se??me", "sedef", "sedir", "sedye", "sefer", "sefih", "sefil", "sefir", "segah", "seher", "sehim", "sehiv", "sehpa", "sekel", "sekil", "seki??", "sekiz", "sekme", "seksi", "sekte", "selam", "selef", "selek", "selen", "selim", "selis", "selva", "selvi", "semah", "semai", "seman", "semen", "semer", "semih", "semiz", "sence", "senek", "senet", "senir", "senit", "sepek", "sepet", "sepya", "serak", "serap", "ser??e", "seren", "sergi", "serik", "serim", "serin", "seri??", "serme", "serum", "servi", "ses??i", "sesli", "seter", "setik", "setir", "setre", "sevap", "sevda", "sever", "sevgi", "sevim", "sevir", "sevi??", "sevme", "seyek", "seyir", "seyis", "seyit", "sezgi", "sezi??", "sezme", "sezon", "s??cak", "s????an", "s????ma", "s??fat", "s??f??r", "s??????n", "s??????r", "s????la", "s????ma", "s??hhi", "s??hri", "s??k??a", "s??k??m", "s??k??t", "s??kma", "s??mak", "s??nai", "s??nav", "s??nd??", "s??n??f", "s??n??k", "s??n??r", "s??nma", "s??rat", "s??rc??", "s??r??a", "s??r??k", "s??r??m", "s??rl??", "s??rma", "s??ska", "s??tma", "s??v??k", "s??yga", "s??yg??", "s??zak", "s??z????", "s??zma", "sibop", "sicil", "sicim", "sidik", "sifin", "sifon", "sigar", "si??il", "sihir", "siirt", "sikke", "sikme", "silah", "silaj", "silgi", "silik", "silis", "sili??", "silki", "sille", "silme", "simav", "simge", "simit", "simya", "sinek", "sinik", "sinir", "sini??", "sinle", "sinme", "sinop", "sinsi", "sin??s", "siper", "sipsi", "siren", "sirke", "sirmo", "siroz", "sirto", "sisli", "sitem", "sitil", "sivas", "sivil", "sivri", "siyah", "siyak", "siyek", "siyer", "siyme", "sizce", "skala", "skink", "slayt", "sofra", "softa", "so??an", "so??uk", "sokak", "soket", "sokma", "sokra", "sokum", "sokur", "soku??", "solak", "solcu", "solma", "soluk", "solu??", "somak", "somon", "somun", "somut", "somya", "sonar", "sonat", "sonda", "sonlu", "sonra", "sonu??", "sorgu", "sorit", "sorma", "sorti", "sorum", "sorun", "soru??", "sosis", "soyka", "soylu", "soyma", "soyum", "soyu??", "soyut", "s????????", "s??????t", "s??kel", "s??kme", "s??k??k", "s??k??m", "s??k??n", "s??k????", "s??lom", "s??nme", "s??n??k", "s??n??m", "s??n????", "s??ven", "s??vg??", "s??vme", "s??v????", "s??zce", "s??zc??", "s??zde", "s??zel", "s??zl??", "spazm", "sperm", "sprey", "stant", "stat??", "steno", "stent", "stilo", "stre??", "stres", "suare", "subay", "subra", "subye", "sucuk", "sucul", "su??lu", "sudak", "sudan", "sufle", "sukut", "sulak", "sulta", "suluk", "sumak", "sunak", "sungu", "sunma", "sunta", "sunum", "sunu??", "suoku", "supap", "surat", "suret", "suru??", "susak", "susam", "susku", "susma", "susta", "susu??", "susuz", "suta??", "sutlu", "suvat", "suyuk", "s??bek", "s??but", "s??bye", "s??cut", "s??fli", "s????me", "s??kse", "s??kun", "s??kut", "s??luk", "s??l??k", "s??l??n", "s??l??s", "s??mek", "s??men", "s??mer", "s??m??k", "s??ng??", "s??nme", "s??nni", "s??per", "s??rat", "s??re??", "s??rek", "s??rfe", "s??rg??", "s??rme", "s??rre", "s??rur", "s??r??m", "s??r????", "s??sen", "s??sl??", "s??sme", "s??t????", "s??tl??", "s??tre", "s??ts??", "s??tun", "s??ven", "s??vme", "s??yek", "s??y??m", "s??zek", "s??zg??", "s??zme", "s??z??k", "s??z????", "??aban", "??afak", "??afii", "??aful", "??ahap", "??ah??s", "??ahin", "??ahit", "??ahne", "??ahsi", "??aibe", "??aire", "??akak", "??akul", "??alak", "??aman", "??amar", "??amil", "??anl??", "??ap????", "??apel", "??apka", "??apl??", "??arap", "??ark??", "??arki", "??arpi", "??aryo", "??a??aa", "??a??ma", "??at??r", "??avul", "??ayak", "??ayan", "??ayet", "??ayia", "??ayka", "??ebek", "??edde", "??edit", "??efik", "??ehir", "??ehit", "??ehla", "??ekel", "??eker", "??ekil", "??ekli", "??ekva", "??elek", "??emse", "??emsi", "??epit", "??eran", "??eref", "??erha", "??erif", "??erik", "??erir", "??erit", "??erpa", "??etim", "????nav", "????pka", "????rak", "??ifon", "??ifre", "??ikar", "??ilem", "??ilep", "??ilin", "??ilte", "??imal", "??imdi", "??inik", "??into", "??iran", "??irin", "??i??ek", "??i??ik", "??i??ko", "??i??li", "??i??me", "??of??r", "??opar", "??orca", "??oset", "??oson", "??oven", "????len", "????miz", "????yle", "??uara", "??ubat", "??uhut", "??unca", "??urup", "????k??r", "????mul", "????phe", "tabak", "taban", "tabii", "tabip", "tabir", "tabla", "tablo", "tabur", "tabut", "tabya", "tacik", "tacil", "tacir", "taciz", "ta??l??", "tadat", "tad??m", "tadil", "tafra", "tafta", "tah??l", "tahin", "tahra", "tahta", "takas", "takat", "tak??k", "tak??m", "takim", "takip", "takke", "takla", "takma", "takoz", "taksa", "taksi", "takti", "takva", "talak", "talan", "talas", "tala??", "talaz", "talep", "talih", "talik", "talil", "talim", "talip", "tamah", "tamam", "tamik", "tamim", "tamir", "tanen", "tango", "tan??k", "tan??m", "tan????", "tan??t", "tanin", "tanr??", "taocu", "tapan", "tap????", "tapir", "tapma", "tapon", "taraf", "tarak", "tara??", "taraz", "taret", "tar??m", "tarif", "tarih", "tarik", "tariz", "tarla", "tart??", "tasar", "tasdi", "tas??m", "tasma", "tasni", "ta??ak", "ta??????", "ta????l", "ta????m", "ta????t", "ta??l??", "ta??ma", "ta??ra", "ta??s??", "tatar", "tatil", "tatl??", "tatma", "tavaf", "tavan", "tavas", "tavc??", "tav??r", "tavik", "taviz", "tavla", "tavl??", "tavuk", "tavus", "tayfa", "tayga", "tay??n", "tayin", "tayip", "tazim", "tazip", "taziz", "teali", "teati", "tebaa", "teber", "tecil", "tecim", "tedai", "tedip", "te??et", "tehir", "teist", "teizm", "tek??i", "tekel", "teker", "tekil", "tekin", "tekir", "tekit", "tekke", "tekli", "tekme", "tekne", "tekst", "tela??", "telef", "telek", "telem", "teles", "telif", "telin", "telis", "telli", "telsi", "telve", "temas", "temek", "temel", "temin", "temiz", "tempo", "tenge", "tenha", "tenis", "tenor", "tente", "tenya", "teori", "tepik", "tepir", "tepi??", "tepke", "tepki", "tepme", "tepsi", "teras", "terbi", "terek", "teres", "terfi", "terim", "terki", "terli", "terme", "ter??r", "terzi", "tesir", "tesis", "tesit", "tesri", "testi", "te??ci", "te??ne", "te??ri", "te??yi", "tetik", "tetir", "tevdi", "tevek", "tevil", "tevki", "tevsi", "tevzi", "teyel", "teyit", "teyze", "tezat", "tezce", "tezek", "tezli", "t??bbi", "t??f??l", "t??ka??", "t??k??m", "t??k??r", "t??k??z", "t??kma", "t??mar", "t??naz", "t??nma", "t??pk??", "t??rak", "t??ra??", "t??r??k", "t??r??l", "t??r??s", "tif??s", "tikel", "tilki", "tim??s", "tiner", "tipik", "tiraj", "tiran", "tirat", "tirit", "tiriz", "tirle", "tirsi", "tir??e", "titan", "titiz", "tohum", "toka??", "tokat", "toklu", "tokuz", "tokyo", "tolga", "tomak", "tomar", "tonaj", "toner", "tonga", "tonik", "tonla", "tonlu", "tonoz", "tonya", "topa??", "topak", "topal", "topaz", "top??u", "topik", "topla", "toplu", "topuk", "topur", "toput", "topuz", "torak", "torba", "torik", "torna", "tortu", "torul", "torum", "torun", "tosun", "tosya", "total", "totem", "toyca", "toycu", "toyga", "tozan", "tozlu", "tozma", "t??rel", "t??ren", "t??rp??", "t??vbe", "t??zel", "trafo", "trake", "trans", "tran??", "trata", "triko", "tromp", "tr??st", "tufan", "tugay", "tu??cu", "tu??la", "tu??lu", "tu??ra", "tuhaf", "tuluk", "tulum", "tulup", "tuman", "tumba", "tunik", "tura??", "turan", "turba", "turbo", "turfa", "turna", "turne", "turno", "tur??u", "turta", "tuta??", "tutak", "tutam", "tutar", "tutku", "tutma", "tutuk", "tutum", "tutu??", "tutya", "tuval", "tuyu??", "tuzak", "tuzcu", "tuzla", "tuzlu", "tuzsu", "t??fek", "t??mce", "t??mel", "t??men", "t??mey", "t??m??r", "t??m??r", "t??nek", "t??nel", "t??nme", "t??p????", "t??pl??", "t??rap", "t??rbe", "t??rel", "t??rev", "t??rki", "t??rk??", "t??rl??", "t??r??m", "t??tme", "t??ts??", "t??t??n", "t??vit", "t??yl??", "t??yme", "t??zel", "t??z??k", "tvist", "ucube", "u??ar??", "u??kun", "u??kur", "u??mak", "u??man", "u??suz", "u??ucu", "u??rak", "u??ra??", "u??run", "ukala", "uknum", "ulama", "ulema", "ulufe", "uluma", "umac??", "ummak", "umman", "umumi", "unluk", "unsur", "unvan", "urban", "urgan", "usan??", "usare", "uskur", "ussal", "u??kun", "u????ak", "utan??", "utmak", "uyar??", "uygar", "uygun", "uygur", "uyluk", "uymak", "uymaz", "uyruk", "uysal", "uyuma", "uzama", "uzlet", "uzluk", "uzman", "??cret", "????gen", "????g??l", "????kat", "????ler", "????l??k", "????ta??", "??deba", "??fle??", "????r??m", "??lfet", "??lger", "??lker", "??lser", "??mera", "??mmet", "??mran", "??nde??", "??nite", "??nlem", "??ns??z", "??reme", "??remi", "??rg??p", "??rkek", "??rkme", "??rk????", "??r??me", "??ryan", "??sera", "??sk??f", "??slup", "??stat", "??stel", "??stl??", "??st??n", "????en??", "????mek", "??????me", "??tmek", "??t??c??", "??t??l??", "??zere", "??zeri", "??zg??n", "??zl??k", "??zmek", "??z??c??", "??z??n??", "vacip", "vagon", "vahim", "vahit", "vahiy", "vah??i", "vakar", "vakfe", "vak??a", "vak??f", "vakit", "vakum", "vakur", "valiz", "val??r", "vanl??", "vapur", "varak", "varan", "varda", "varg??", "var????", "varil", "varis", "varit", "varma", "varo??", "varta", "varto", "vasat", "vas??f", "vas??l", "va??ak", "vatan", "vatka", "vatoz", "vaz??h", "vebal", "vecih", "veciz", "ve??he", "vedia", "vefat", "vehim", "vekil", "velet", "velur", "velut", "ven??s", "verdi", "verem", "verev", "vergi", "verim", "veri??", "verit", "verme", "vezin", "vezir", "vezne", "v??c??k", "video", "vigla", "villa", "viraj", "viral", "viran", "vir??s", "visal", "viski", "vi??ne", "vites", "vitir", "viyak", "viyol", "vizon", "viz??r", "vokal", "volan", "volta", "vonoz", "votka", "voyvo", "vukuf", "vulva", "vura??", "vurgu", "vurma", "vuruk", "vuru??", "vusul", "vuzuh", "v??cut", "v??rut", "v??sat", "yaban", "yabgu", "yafta", "ya??ar", "ya??c??", "ya????r", "ya??????", "ya????z", "ya??l??", "ya??ma", "ya??s??", "yahey", "yahni", "yah??i", "yahut", "yak??m", "yak??n", "yak????", "yak??t", "yakin", "yakma", "yakut", "yalak", "yalan", "yalaz", "yal??m", "yal??n", "yal??z", "yalpa", "yalp??", "yama??", "yamak", "yaman", "yam????", "yamuk", "yanak", "yanal", "yanay", "yanaz", "yanc??", "yang??", "yan??k", "yan????", "yan??t", "yank??", "yanl??", "yanma", "yans??", "yapak", "yapay", "yap??k", "yap??m", "yap????", "yap??t", "yapma", "yarak", "yaran", "yarar", "yara??", "yarda", "yaren", "yarg??", "yar??k", "yar??m", "yar??n", "yar????", "yarka", "yarma", "yasak", "yasal", "yasin", "yasl??", "yasma", "yass??", "ya??am", "ya????a", "ya????t", "ya??l??", "yatak", "yatay", "yat????", "yat??k", "yat??m", "yat??r", "yat????", "yatma", "yats??", "yavan", "yava??", "yaver", "yavru", "yavs??", "yavuz", "yayan", "yayg??", "yay??k", "yay??m", "yay??n", "yay????", "yayla", "yayl??", "yayma", "yazar", "yazg??", "yaz??k", "yaz??m", "yaz??n", "yaz??r", "yaz????", "yaz??t", "yazma", "yedek", "yediz", "yedme", "yegah", "yegan", "ye??en", "ye??in", "ye??ni", "yekta", "yekun", "yele??", "yelek", "yelin", "yelli", "yelme", "yelve", "yemci", "yemek", "yemin", "yemi??", "yenge", "yengi", "yenik", "yenli", "yenme", "yerel", "yerey", "yergi", "yerli", "yerme", "ye??il", "ye??im", "yeter", "yetik", "yetim", "yetke", "yetki", "yetme", "yevmi", "yeygi", "yezit", "y??????n", "y????????", "y????ma", "y??k??k", "y??k??m", "y??k????", "y??kma", "y??lan", "y??lg??", "y??l??k", "y??lk??", "y??lma", "y??r??k", "yi??it", "yirik", "yirmi", "yitik", "yitim", "yiti??", "yitme", "yivli", "yiyim", "yiyi??", "yobaz", "yo??un", "yok??u", "yoksa", "yoku??", "yolak", "yolcu", "yollu", "yolma", "yoluk", "yomra", "yonca", "yonga", "yonma", "yontu", "yorga", "yorma", "yortu", "yorum", "yosma", "yosun", "y??nl??", "y??r??k", "yudum", "yufka", "yuka??", "yulaf", "yular", "yumak", "yumma", "yumru", "yumuk", "yunak", "yunan", "yunma", "yunus", "yurdu", "yutak", "yutma", "yutum", "yutu??", "yuvak", "yuvar", "yuvgu", "y??k????", "y??kl??", "y??k??m", "y??k??n", "y??lg??", "y??l??k", "y??nl??", "y??rek", "y??r??k", "y??sr??", "y??zde", "y??zer", "y??zey", "y??zl??", "y??zme", "y??z??k", "y??z????", "zab??t", "zabit", "zafer", "za??ar", "za??c??", "za??l??", "zahir", "zahit", "zalim", "zaman", "zamir", "zaml??", "zamme", "zanka", "zanl??", "zarar", "zarc??", "zarif", "zars??", "zarta", "zaten", "zay??f", "zeban", "zebra", "zebun", "zebur", "zecir", "zecri", "zefir", "zehap", "zehir", "zekat", "zeker", "zelil", "zelve", "zemin", "zenci", "zenne", "zerde", "zerre", "zeval", "zevat", "zevce", "zeyil", "z??b??n", "z??hl??", "z??mba", "z??mni", "z??p??r", "z??pka", "z??rva", "zifaf", "zifin", "zifir", "zifos", "zigon", "zigot", "zihaf", "zihin", "zihni", "zikir", "zilli", "zimmi", "zinde", "zirai", "zirve", "ziyan", "zloti", "zombi", "zorba", "zorca", "zorgu", "zorla", "zorlu", "zorun", "zuhur", "zul??m", "zurna", "z??bde", "z??hal", "z??hre", "z??hul", "z??kam", "z??lal", "z??l??f", "z??mre", "z??ppe", "z??rra", "z??yuf"],
      Ia = "present",
      Ma = "correct",
      Oa = "absent";
  var Ra = {
      unknown: 0,
      absent: 1,
      present: 2,
      correct: 3
  };

  function $a(e, a) {
      var s = {};
      return e.forEach((function(e, t) {
          if (a[t])
              for (var o = 0; o < e.length; o++) {
                  var n = e[o],
                      r = a[t][o],
                      i = s[n] || "unknown";
                  Ra[r] > Ra[i] && (s[n] = r)
              }
      })), s
  }

  function Pa(e) {
      var a = ["th", "st", "nd", "rd"],
          s = e % 100;
      return e + (a[(s - 20) % 10] || a[s] || a[0])
  }
  var Ha = new Date(2021, 5, 19, 0, 0, 0, 0);

  function Na(e, a) {
      var s = new Date(e),
          t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
      return Math.round(t / 864e5)
  }

  function Da(e) {
      var a, s = Ga(e);
      return a = s % La.length, La[a]
  }

  function Ga(e) {
      return Na(Ha, e)
  }
  var Ba = "abcdefghijklmnoprstuvyz????????????",
      Fa = [].concat(g(Ba.split("").slice(13)), g(Ba.split("").slice(0, 13)));

  function Wa(e) {
      for (var a = "", s = 0; s < e.length; s++) {
          var t = Ba.indexOf(e[s]);
          a += t >= 0 ? Fa[t] : "_"
      }
      return a
  }
  var Ya = "statistics",
      Ja = "fail",
      Ua = {
          currentStreak: 0,
          maxStreak: 0,
          guesses: n({
              1: 0,
              2: 0,
              3: 0,
              4: 0,
              5: 0,
              6: 0
          }, Ja, 0),
          winPercentage: 0,
          gamesPlayed: 0,
          gamesWon: 0,
          averageGuesses: 0
      };

  function Xa() {
      var e = window.localStorage.getItem(Ya) || JSON.stringify(Ua);
      return JSON.parse(e)
  }

  function Va(e) {
      var a = e.isWin,
          s = e.isStreak,
          t = e.numGuesses,
          o = Xa();
      a ? (o.guesses[t] += 1, s ? o.currentStreak += 1 : o.currentStreak = 1) : (o.currentStreak = 0, o.guesses.fail += 1), o.maxStreak = Math.max(o.currentStreak, o.maxStreak), o.gamesPlayed += 1, o.gamesWon += a ? 1 : 0, o.winPercentage = Math.round(o.gamesWon / o.gamesPlayed * 100), o.averageGuesses = Math.round(Object.entries(o.guesses).reduce((function(e, a) {
              var s = y(a, 2),
                  t = s[0],
                  o = s[1];
              return t !== Ja ? e += t * o : e
          }), 0) / o.gamesWon),
          function(e) {
              window.localStorage.setItem(Ya, JSON.stringify(e))
          }(o)
  }
  var Ka = document.createElement("template");
  Ka.innerHTML = "\n  <style>\n  .toaster {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    pointer-events: none;\n    width: fit-content;\n  }\n  #game-toaster {\n    z-index: ".concat(1e3, ";\n  }\n  #system-toaster {\n    z-index: ").concat(4e3, ';\n  }\n\n  #game {\n    width: 100%;\n    max-width: var(--game-max-width);\n    margin: 0 auto;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: var(--header-height);\n    color: var(--color-tone-1);\n    border-bottom: 1px solid var(--color-tone-4);\n  }\n  header .title {\n    font-weight: 700;\n    font-size: 36px;\n    letter-spacing: 0.2rem;\n    text-transform: uppercase;\n    text-align: center;\n    position: absolute;\n    left: 0;\n    right: 0;\n    pointer-events: none;\n  }\n\n  @media (max-width: 360px) {\n    header .title {\n      font-size: 22px;\n      letter-spacing: 0.1rem;\n    }\n  }\n\n  #board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    overflow: hidden;\n  }\n  #board {\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-gap: 5px;\n    padding:10px;\n    box-sizing: border-box;\n  }\n  button.icon {\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 0 4px;\n  }\n\n  #debug-tools {\n    position: absolute;\n    bottom: 0;\n  }\n\n  </style>\n  <game-theme-manager>\n    <div id="game">\n      <header>\n        <div class="menu">\n          <button id="help-button" class="icon" aria-label="help">\n            <game-icon icon="help"></game-icon>\n          </button>\n        </div>\n        <div class="title">\n         WORDLE TR\n        </div>\n        <div class="menu">\n          <button id="statistics-button" class="icon" aria-label="statistics">\n            <game-icon icon="statistics"></game-icon>\n          </button>\n          <button id="settings-button" class="icon" aria-label="settings">\n            <game-icon icon="settings"></game-icon>\n          </button>\n        </div>\n      </header>\n        <div id="board-container">\n          <div id="board"></div>\n        </div>\n        <game-keyboard></game-keyboard>\n        <game-modal></game-modal>\n        <game-page></game-page>\n        <div class="toaster" id="game-toaster"></div>\n        <div class="toaster" id="system-toaster"></div>\n    </div>\n  </game-theme-manager>\n  <div id="debug-tools"></div>\n');
  var Qa = document.createElement("template");
  Qa.innerHTML = '\n<button id="reveal">reveal</button>\n<button id="shake">shake</button>\n<button id="bounce">bounce</button>\n<button id="toast">toast</button>\n<button id="modal">modal</button>\n';
  var Za = "IN_PROGRESS",
      es = "WIN",
      as = "FAIL",
      ss = ["Dahisin!", "Harika!", "Etkileyici!", "Parlak zeka!", "??ok iyi!", "Ehh..."],
      ts = function(e) {
          r(t, e);
          var a = h(t);

          function t() {
              var e;
              s(this, t), n(p(e = a.call(this)), "tileIndex", 0), n(p(e), "rowIndex", 0), n(p(e), "solution", void 0), n(p(e), "boardState", void 0), n(p(e), "evaluations", void 0), n(p(e), "canInput", !0), n(p(e), "gameStatus", Za), n(p(e), "letterEvaluations", {}), n(p(e), "$board", void 0), n(p(e), "$keyboard", void 0), n(p(e), "$game", void 0), n(p(e), "today", void 0), n(p(e), "lastPlayedTs", void 0), n(p(e), "lastCompletedTs", void 0), n(p(e), "hardMode", void 0), n(p(e), "dayOffset", void 0), e.attachShadow({
                  mode: "open"
              }), e.today = new Date;
              var o = za();
              return e.lastPlayedTs = o.lastPlayedTs, !e.lastPlayedTs || Na(new Date(e.lastPlayedTs), e.today) >= 1 ? (e.boardState = new Array(6).fill(""), e.evaluations = new Array(6).fill(null), e.solution = Da(e.today), e.dayOffset = Ga(e.today), e.lastCompletedTs = o.lastCompletedTs, e.hardMode = o.hardMode, e.restoringFromLocalStorage = !1, ja({
                  rowIndex: e.rowIndex,
                  boardState: e.boardState,
                  evaluations: e.evaluations,
                  solution: e.solution,
                  gameStatus: e.gameStatus
              }), Ca("event", "level_start", {
                  level_name: Wa(e.solution)
              })) : (e.boardState = o.boardState, e.evaluations = o.evaluations, e.rowIndex = o.rowIndex, e.solution = o.solution, e.dayOffset = Ga(e.today), e.letterEvaluations = $a(e.boardState, e.evaluations), e.gameStatus = o.gameStatus, e.lastCompletedTs = o.lastCompletedTs, e.hardMode = o.hardMode, e.gameStatus !== Za && (e.canInput = !1), e.restoringFromLocalStorage = !0), e
          }
          return o(t, [{
              key: "evaluateRow",
              value: function() {
                  if (5 === this.tileIndex && !(this.rowIndex >= 6)) {
                      var e, a = this.$board.querySelectorAll("game-row")[this.rowIndex],
                          s = this.boardState[this.rowIndex];
                      if (e = s, !Ta.includes(e) && !La.includes(e)) return a.setAttribute("invalid", ""), void this.addToast("Kelime listesinde yok");
                      if (this.hardMode) {
                          var t = function(e, a, s) {
                                  if (!e || !a || !s) return {
                                      validGuess: !0
                                  };
                                  for (var t = 0; t < s.length; t++)
                                      if (s[t] === Ma && e[t] !== a[t]) return {
                                          validGuess: !1,
                                          errorMessage: "".concat(Pa(t + 1), " harfi ??u olmal??: ").concat(a[t].toUpperCase())
                                      };
                                  for (var o = {}, n = 0; n < s.length; n++)[Ma, Ia].includes(s[n]) && (o[a[n]] ? o[a[n]] += 1 : o[a[n]] = 1);
                                  var r = e.split("").reduce((function(e, a) {
                                      return e[a] ? e[a] += 1 : e[a] = 1, e
                                  }), {});
                                  for (var i in o)
                                      if ((r[i] || 0) < o[i]) return {
                                          validGuess: !1,
                                          errorMessage: "Tahmin ??unu i??ermeli: ".concat(i.toUpperCase())
                                      };
                                  return {
                                      validGuess: !0
                                  }
                              }(s, this.boardState[this.rowIndex - 1], this.evaluations[this.rowIndex - 1]),
                              o = t.validGuess,
                              n = t.errorMessage;
                          if (!o) return a.setAttribute("invalid", ""), void this.addToast(n || "Zorlu modda ge??ersiz")
                      }
                      var r = function(e, a) {
                          for (var s = Array(a.length).fill(Oa), t = Array(a.length).fill(!0), o = Array(a.length).fill(!0), n = 0; n < e.length; n++) e[n] === a[n] && o[n] && (s[n] = Ma, t[n] = !1, o[n] = !1);
                          for (var r = 0; r < e.length; r++) {
                              var i = e[r];
                              if (t[r])
                                  for (var l = 0; l < a.length; l++) {
                                      var d = a[l];
                                      if (o[l] && i === d) {
                                          s[r] = Ia, o[l] = !1;
                                          break
                                      }
                                  }
                          }
                          return s
                      }(s, this.solution);
                      this.evaluations[this.rowIndex] = r, this.letterEvaluations = $a(this.boardState, this.evaluations), a.evaluation = this.evaluations[this.rowIndex], this.rowIndex += 1;
                      var i = this.rowIndex >= 6,
                          l = r.every((function(e) {
                              return "correct" === e
                          }));
                      if (i || l) Va({
                          isWin: l,
                          isStreak: !!this.lastCompletedTs && 1 === Na(new Date(this.lastCompletedTs), new Date),
                          numGuesses: this.rowIndex
                      }), ja({
                          lastCompletedTs: Date.now()
                      }), this.gameStatus = l ? es : as, Ca("event", "level_end", {
                          level_name: Wa(this.solution),
                          num_guesses: this.rowIndex,
                          success: l
                      });
                      this.tileIndex = 0, this.canInput = !1, ja({
                          rowIndex: this.rowIndex,
                          boardState: this.boardState,
                          evaluations: this.evaluations,
                          solution: this.solution,
                          gameStatus: this.gameStatus,
                          lastPlayedTs: Date.now()
                      })
                  }
              }
          }, {
              key: "addLetter",
              value: function(e) {
                  this.gameStatus === Za && (this.canInput && (this.tileIndex >= 5 || (this.boardState[this.rowIndex] += e, this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("letters", this.boardState[this.rowIndex]), this.tileIndex += 1)))
              }
          }, {
              key: "removeLetter",
              value: function() {
                  if (this.gameStatus === Za && this.canInput && !(this.tileIndex <= 0)) {
                      this.boardState[this.rowIndex] = this.boardState[this.rowIndex].slice(0, this.boardState[this.rowIndex].length - 1);
                      var e = this.$board.querySelectorAll("game-row")[this.rowIndex];
                      this.boardState[this.rowIndex] ? e.setAttribute("letters", this.boardState[this.rowIndex]) : e.removeAttribute("letters"), e.removeAttribute("invalid"), this.tileIndex -= 1
                  }
              }
          }, {
              key: "submitGuess",
              value: function() {
                  if (this.gameStatus === Za && this.canInput) {
                      if (5 !== this.tileIndex) return this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("invalid", ""), void this.addToast("Yetersiz harf");
                      this.evaluateRow()
                  }
              }
          }, {
              key: "addToast",
              value: function(e, a) {
                  var s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                      t = document.createElement("game-toast");
                  t.setAttribute("text", e), a && t.setAttribute("duration", a), s ? this.shadowRoot.querySelector("#system-toaster").prepend(t) : this.shadowRoot.querySelector("#game-toaster").prepend(t)
              }
          }, {
              key: "sizeBoard",
              value: function() {
                  var e = this.shadowRoot.querySelector("#board-container"),
                      a = Math.min(Math.floor(e.clientHeight * (5 / 6)), 350),
                      s = 6 * Math.floor(a / 5);
                  this.$board.style.width = "".concat(a, "px"), this.$board.style.height = "".concat(s, "px")
              }
          }, {
              key: "showStatsModal",
              value: function() {
                  var e = this.$game.querySelector("game-modal"),
                      a = document.createElement("game-stats");
                  this.gameStatus === es && this.rowIndex <= 6 && a.setAttribute("highlight-guess", this.rowIndex), a.gameApp = this, e.appendChild(a), e.setAttribute("open", "")
              }
          }, {
              key: "showHelpModal",
              value: function() {
                  var e = this.$game.querySelector("game-modal");
                  e.appendChild(document.createElement("game-help")), e.setAttribute("open", "")
              }
          }, {
              key: "connectedCallback",
              value: function() {
                  var e = this;
                  this.shadowRoot.appendChild(Ka.content.cloneNode(!0)), this.$game = this.shadowRoot.querySelector("#game"), this.$board = this.shadowRoot.querySelector("#board"), this.$keyboard = this.shadowRoot.querySelector("game-keyboard"), this.sizeBoard(), this.lastPlayedTs || setTimeout((function() {
                      return e.showHelpModal()
                  }), 100);
                  for (var a = 0; a < 6; a++) {
                      var s = document.createElement("game-row");
                      s.setAttribute("letters", this.boardState[a]), s.setAttribute("length", 5), this.evaluations[a] && (s.evaluation = this.evaluations[a]), this.$board.appendChild(s)
                  }
                  this.$game.addEventListener("game-key-press", (function(a) {
                      var s = a.detail.key;
                      "???" === s || "Backspace" === s ? e.removeLetter() : "???" === s || "Enter" === s ? e.submitGuess() : Ba.includes(s.toLowerCase()) && e.addLetter(s.toLocaleLowerCase())
                  })), this.$game.addEventListener("game-last-tile-revealed-in-row", (function(a) {
                      e.$keyboard.letterEvaluations = e.letterEvaluations, e.rowIndex < 6 && (e.canInput = !0);
                      var s = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                      (a.path || a.composedPath && a.composedPath()).includes(s) && ([es, as].includes(e.gameStatus) && (e.restoringFromLocalStorage ? e.showStatsModal() : (e.gameStatus === es && (s.setAttribute("win", ""), e.addToast(ss[e.rowIndex - 1], 2e3)), e.gameStatus === as && e.addToast(e.solution.toUpperCase(), 1 / 0), setTimeout((function() {
                          e.showStatsModal()
                      }), 2500))), e.restoringFromLocalStorage = !1)
                  })), this.shadowRoot.addEventListener("game-setting-change", (function(a) {
                      var s = a.detail,
                          t = s.name,
                          o = s.checked,
                          n = s.disabled;
                      switch (t) {
                          case "hard-mode":
                              return void(n ? e.addToast("Zorlu mod yeni bir oyun ba??lang??c??nda a????labilir", 1500, !0) : (e.hardMode = o, ja({
                                  hardMode: o
                              })))
                      }
                  })), this.shadowRoot.getElementById("settings-button").addEventListener("click", (function(a) {
                      var s = e.$game.querySelector("game-page"),
                          t = document.createTextNode("Ayarlar");
                      s.appendChild(t);
                      var o = document.createElement("game-settings");
                      o.setAttribute("slot", "content"), o.gameApp = e, s.appendChild(o), s.setAttribute("open", "")
                  })), this.shadowRoot.getElementById("help-button").addEventListener("click", (function(a) {
                      var s = e.$game.querySelector("game-page"),
                          t = document.createTextNode("Nas??l Oynan??r");
                      s.appendChild(t);
                      var o = document.createElement("game-help");
                      o.setAttribute("page", ""), o.setAttribute("slot", "content"), s.appendChild(o), s.setAttribute("open", "")
                  })), this.shadowRoot.getElementById("statistics-button").addEventListener("click", (function(a) {
                      e.showStatsModal()
                  })), window.addEventListener("resize", this.sizeBoard.bind(this))
              }
          }, {
              key: "disconnectedCallback",
              value: function() {}
          }, {
              key: "debugTools",
              value: function() {
                  var e = this;
                  this.shadowRoot.getElementById("debug-tools").appendChild(Qa.content.cloneNode(!0)), this.shadowRoot.getElementById("toast").addEventListener("click", (function(a) {
                      e.addToast("hello world")
                  })), this.shadowRoot.getElementById("modal").addEventListener("click", (function(a) {
                      var s = e.$game.querySelector("game-modal");
                      s.textContent = "hello plz", s.setAttribute("open", "")
                  })), this.shadowRoot.getElementById("reveal").addEventListener("click", (function() {
                      e.evaluateRow()
                  })), this.shadowRoot.getElementById("shake").addEventListener("click", (function() {
                      e.$board.querySelectorAll("game-row")[e.rowIndex].setAttribute("invalid", "")
                  })), this.shadowRoot.getElementById("bounce").addEventListener("click", (function() {
                      var a = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                      "" === a.getAttribute("win") ? a.removeAttribute("win") : a.setAttribute("win", "")
                  }))
              }
          }]), t
      }(c(HTMLElement));
  customElements.define("game-app", ts);
  var os = document.createElement("template");
  os.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      align-items: center;\n      background-color: var(--opacity-50);\n      z-index: ".concat(3e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      border-radius: 8px;\n      border: 1px solid var(--color-tone-6);\n      background-color: var(--modal-content-bg);\n      color: var(--color-tone-1);\n      box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.2);\n      width: 90%;\n      max-height: 90%;\n      overflow-y: auto;\n      animation: SlideIn 200ms;\n      max-width: var(--game-max-width);\n      padding: 16px;\n      box-sizing: border-box;\n    }\n\n    .content.closing {\n      animation: SlideOut 200ms;\n    }\n\n    .close-icon {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 16px;\n      right: 16px;\n    }\n\n    game-icon {\n      position: fixed;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <slot></slot>\n      <div class="close-icon">\n        <game-icon icon="close"></game-icon>\n      </div>\n    </div>\n  </div>\n');
  var ns = function(e) {
      r(t, e);
      var a = h(t);

      function t() {
          var e;
          return s(this, t), (e = a.call(this)).attachShadow({
              mode: "open"
          }), e
      }
      return o(t, [{
          key: "connectedCallback",
          value: function() {
              var e = this;
              this.shadowRoot.appendChild(os.content.cloneNode(!0)), this.addEventListener("click", (function(a) {
                  e.shadowRoot.querySelector(".content").classList.add("closing")
              })), this.shadowRoot.addEventListener("animationend", (function(a) {
                  "SlideOut" === a.animationName && (e.shadowRoot.querySelector(".content").classList.remove("closing"), e.removeChild(e.firstChild), e.removeAttribute("open"))
              }))
          }
      }]), t
  }(c(HTMLElement));
  customElements.define("game-modal", ns);
  var rs = document.createElement("template");
  rs.innerHTML = "\n  <style>\n  :host {\n    height: var(--keyboard-height);\n  }\n  #keyboard {\n    margin: 0 8px;\n    user-select: none;\n  }\n  \n  .row {\n    display: flex;\n    width: 100%;\n    margin: 0 auto 8px;\n    /* https://stackoverflow.com/questions/46167604/ios-html-disable-double-tap-to-zoom */\n    touch-action: manipulation;\n  }\n  \n  button {\n  text-transform: uppercase;\n    font-family: inherit;\n    font-weight: bold;\n    border: 0;\n    padding: 0;\n    margin: 0 6px 0 0;\n    height: 58px;\n    border-radius: 4px;\n    cursor: pointer;\n    user-select: none;\n    background-color: var(--key-bg);\n    color: var(--key-text-color);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n  }\n\n  button:focus {\n    outline: none;\n  }\n\n  button.fade {\n    transition: background-color 0.1s ease, color 0.1s ease;\n  }\n  \n  button:last-of-type {\n    margin: 0;\n  }\n  \n  .half {\n    flex: 0.5;\n  }\n  \n  .one {\n    flex: 1;\n  }\n\n  .one-and-a-half {\n    flex: 1.5;\n    font-size: 12px;\n  }\n  \n  .two {\n    flex: 2;\n  }\n\n  button[data-state='correct'] {\n    background-color: var(--key-bg-correct);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='present'] {\n    background-color: var(--key-bg-present);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='absent'] {\n    background-color: var(--key-bg-absent);\n    color: var(--key-evaluated-text-color);\n  }\n\n  </style>\n  <div id=\"keyboard\"></div>\n";
  var is = document.createElement("template");
  is.innerHTML = "\n  <button>key</button>\n";
  var ls = document.createElement("template");
  ls.innerHTML = '\n  <div class="spacer"></div>\n';
  var ds = [
          ["e", "r", "t", "y", "u", "??", "o", "p", "??", "??"],
          ["-", "a", "s", "d", "f", "g", "h", "j", "k", "l", "??", "i", "-"],
          ["???", "z", "c", "v", "b", "n", "m", "??", "??", "???"]
      ],
      us = function(e) {
          r(t, e);
          var a = h(t);

          function t() {
              var e;
              return s(this, t), n(p(e = a.call(this)), "_letterEvaluations", {}), e.attachShadow({
                  mode: "open"
              }), e
          }
          return o(t, [{
              key: "letterEvaluations",
              set: function(e) {
                  this._letterEvaluations = e, this._render()
              }
          }, {
              key: "dispatchKeyPressEvent",
              value: function(e) {
                  this.dispatchEvent(new CustomEvent("game-key-press", {
                      bubbles: !0,
                      composed: !0,
                      detail: {
                          key: e
                      }
                  }))
              }
          }, {
              key: "connectedCallback",
              value: function() {
                  var e = this;
                  this.shadowRoot.appendChild(rs.content.cloneNode(!0)), this.$keyboard = this.shadowRoot.getElementById("keyboard"), this.$keyboard.addEventListener("click", (function(a) {
                      var s = a.target.closest("button");
                      s && e.$keyboard.contains(s) && e.dispatchKeyPressEvent(s.dataset.key)
                  })), window.addEventListener("keydown", (function(a) {
                      if (!0 !== a.repeat) {
                          var s = a.key,
                              t = a.metaKey,
                              o = a.ctrlKey;
                          t || o || (Ba.includes(s.toLowerCase()) || "Backspace" === s || "Enter" === s) && e.dispatchKeyPressEvent(s)
                      }
                  })), this.$keyboard.addEventListener("transitionend", (function(a) {
                      var s = a.target.closest("button");
                      s && e.$keyboard.contains(s) && s.classList.remove("fade")
                  })), ds.forEach((function(a) {
                      var s = document.createElement("div");
                      s.classList.add("row"), a.forEach((function(e) {
                          var a;
                          if (e >= "a" && e <= "z" || "???" === e || "???" === e || ["??", "??", "??", "??", "??", "??"].includes(e)) {
                              if ((a = is.content.cloneNode(!0).firstElementChild).dataset.key = e, a.textContent = e, "???" === e) {
                                  var t = document.createElement("game-icon");
                                  t.setAttribute("icon", "backspace"), a.textContent = "", a.appendChild(t), a.classList.add("one-and-a-half")
                              }
                              "???" == e && (a.textContent = "enter", a.classList.add("one-and-a-half"))
                          } else(a = ls.content.cloneNode(!0).firstElementChild).classList.add(1 === e.length ? "half" : "one");
                          s.appendChild(a)
                      })), e.$keyboard.appendChild(s)
                  })), this._render()
              }
          }, {
              key: "_render",
              value: function() {
                  for (var e in this._letterEvaluations) {
                      var a = this.$keyboard.querySelector('[data-key="'.concat(e, '"]'));
                      a.dataset.state = this._letterEvaluations[e], a.classList.add("fade")
                  }
              }
          }]), t
      }(c(HTMLElement));
  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
  function cs(e, a, s, t) {
      return new(s || (s = Promise))((function(o, n) {
          function r(e) {
              try {
                  l(t.next(e))
              } catch (e) {
                  n(e)
              }
          }

          function i(e) {
              try {
                  l(t.throw(e))
              } catch (e) {
                  n(e)
              }
          }

          function l(e) {
              var a;
              e.done ? o(e.value) : (a = e.value, a instanceof s ? a : new s((function(e) {
                  e(a)
              }))).then(r, i)
          }
          l((t = t.apply(e, a || [])).next())
      }))
  }

  function ps(e, a) {
      var s, t, o, n, r = {
          label: 0,
          sent: function() {
              if (1 & o[0]) throw o[1];
              return o[1]
          },
          trys: [],
          ops: []
      };
      return n = {
          next: i(0),
          throw: i(1),
          return: i(2)
      }, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
          return this
      }), n;

      function i(n) {
          return function(i) {
              return function(n) {
                  if (s) throw new TypeError("Generator is already executing.");
                  for (; r;) try {
                      if (s = 1, t && (o = 2 & n[0] ? t.return : n[0] ? t.throw || ((o = t.return) && o.call(t), 0) : t.next) && !(o = o.call(t, n[1])).done) return o;
                      switch (t = 0, o && (n = [2 & n[0], o.value]), n[0]) {
                          case 0:
                          case 1:
                              o = n;
                              break;
                          case 4:
                              return r.label++, {
                                  value: n[1],
                                  done: !1
                              };
                          case 5:
                              r.label++, t = n[1], n = [0];
                              continue;
                          case 7:
                              n = r.ops.pop(), r.trys.pop();
                              continue;
                          default:
                              if (!((o = (o = r.trys).length > 0 && o[o.length - 1]) || 6 !== n[0] && 2 !== n[0])) {
                                  r = 0;
                                  continue
                              }
                              if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                                  r.label = n[1];
                                  break
                              }
                              if (6 === n[0] && r.label < o[1]) {
                                  r.label = o[1], o = n;
                                  break
                              }
                              if (o && r.label < o[2]) {
                                  r.label = o[2], r.ops.push(n);
                                  break
                              }
                              o[2] && r.ops.pop(), r.trys.pop();
                              continue
                      }
                      n = a.call(e, r)
                  } catch (e) {
                      n = [6, e], t = 0
                  } finally {
                      s = o = 0
                  }
                  if (5 & n[0]) throw n[1];
                  return {
                      value: n[0] ? n[1] : void 0,
                      done: !0
                  }
              }([n, i])
          }
      }
  }
  customElements.define("game-keyboard", us),
      function() {
          (console.warn || console.log).apply(console, arguments)
      }.bind("[clipboard-polyfill]");
  var ms, hs, ys, gs, bs = "undefined" == typeof navigator ? void 0 : navigator,
      fs = null == bs ? void 0 : bs.clipboard;
  null === (ms = null == fs ? void 0 : fs.read) || void 0 === ms || ms.bind(fs), null === (hs = null == fs ? void 0 : fs.readText) || void 0 === hs || hs.bind(fs);
  var ks = (null === (ys = null == fs ? void 0 : fs.write) || void 0 === ys || ys.bind(fs), null === (gs = null == fs ? void 0 : fs.writeText) || void 0 === gs ? void 0 : gs.bind(fs)),
      vs = "undefined" == typeof window ? void 0 : window,
      ws = (null == vs || vs.ClipboardItem, vs);
  var xs = function() {
      this.success = !1
  };

  function zs(e, a, s) {
      for (var t in e.success = !0, a) {
          var o = a[t],
              n = s.clipboardData;
          n.setData(t, o), "text/plain" === t && n.getData(t) !== o && (e.success = !1)
      }
      s.preventDefault()
  }

  function js(e) {
      var a = new xs,
          s = zs.bind(this, a, e);
      document.addEventListener("copy", s);
      try {
          document.execCommand("copy")
      } finally {
          document.removeEventListener("copy", s)
      }
      return a.success
  }

  function Ss(e, a) {
      _s(e);
      var s = js(a);
      return qs(), s
  }

  function _s(e) {
      var a = document.getSelection();
      if (a) {
          var s = document.createRange();
          s.selectNodeContents(e), a.removeAllRanges(), a.addRange(s)
      }
  }

  function qs() {
      var e = document.getSelection();
      e && e.removeAllRanges()
  }

  function Es(e) {
      return cs(this, void 0, void 0, (function() {
          var a;
          return ps(this, (function(s) {
              if (a = "text/plain" in e, "undefined" == typeof ClipboardEvent && void 0 !== ws.clipboardData && void 0 !== ws.clipboardData.setData) {
                  if (!a) throw new Error("No `text/plain` value was specified.");
                  if (t = e["text/plain"], ws.clipboardData.setData("Text", t)) return [2, !0];
                  throw new Error("Copying failed, possibly because the user rejected it.")
              }
              var t;
              return js(e) || navigator.userAgent.indexOf("Edge") > -1 || Ss(document.body, e) || function(e) {
                  var a = document.createElement("div");
                  a.setAttribute("style", "-webkit-user-select: text !important"), a.textContent = "temporary element", document.body.appendChild(a);
                  var s = Ss(a, e);
                  return document.body.removeChild(a), s
              }(e) || function(e) {
                  var a = document.createElement("div");
                  a.setAttribute("style", "-webkit-user-select: text !important");
                  var s = a;
                  a.attachShadow && (s = a.attachShadow({
                      mode: "open"
                  }));
                  var t = document.createElement("span");
                  t.innerText = e, s.appendChild(t), document.body.appendChild(a), _s(t);
                  var o = document.execCommand("copy");
                  return qs(), document.body.removeChild(a), o
              }(e["text/plain"]) ? [2, !0] : [2, !1]
          }))
      }))
  }

  function As(e, a, s) {
      try {
          t = navigator.userAgent || navigator.vendor || window.opera, !/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4)) || navigator.userAgent.toLowerCase().indexOf("firefox") > -1 || void 0 === navigator.share || !navigator.canShare || !navigator.canShare(e) ? function(e) {
              return cs(this, void 0, void 0, (function() {
                  return ps(this, (function(a) {
                      if (ks) return [2, ks(e)];
                      if (!Es(function(e) {
                              var a = {};
                              return a["text/plain"] = e, a
                          }(e))) throw new Error("writeText() failed");
                      return [2]
                  }))
              }))
          }(e.text).then(a, s) : navigator.share(e)
      } catch (e) {
          s()
      }
      var t
  }
  var Cs = document.createElement("template");
  Cs.innerHTML = '\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 16px 0; \n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n  \n    #statistics {\n      display: flex;\n      margin-bottom: \n    }\n\n    .statistic-container {\n      flex: 1;\n    }\n\n    .statistic-container .statistic {\n      font-size: 36px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .statistic.timer {\n      font-variant-numeric: initial;\n    }\n\n    .statistic-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    #guess-distribution {\n      width: 80%;\n    }\n\n    .graph-container {\n      width: 100%;\n      height: 20px;\n      display: flex;\n      align-items: center;\n      padding-bottom: 4px;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .graph-container .graph {\n      width: 100%;\n      height: 100%;\n      padding-left: 4px;\n    }\n\n    .graph-container .graph .graph-bar {\n      height: 100%;\n      /* Assume no wins */\n      width: 0%;\n      position: relative;\n      background-color: var(--color-absent);\n      display: flex;\n      justify-content: center;\n    }\n\n    .graph-container .graph .graph-bar.highlight {\n      background-color: var(--color-correct);\n    }\n\n    .graph-container .graph .graph-bar.align-right {\n      justify-content: flex-end;\n      padding-right: 8px;\n    }\n\n    .graph-container .graph .num-guesses {\n      font-weight: bold;\n      color: var(--tile-text-color);\n    }\n\n    #statistics,\n    #guess-distribution {\n      padding-bottom: 10px;\n    }\n\n    .footer {\n      display: flex;\n      width: 100%;\n    }\n\n    .countdown {\n      border-right: 1px solid var(--color-tone-1);\n      padding-right: 12px;\n      width: 50%;\n    }\n\n    .share {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding-left: 12px;\n      width: 50%;\n    }\n\n    .no-data {\n      text-align: center;\n    }\n\n    button#share-button {\n      background-color: var(--key-bg-correct);\n      color: var(--key-evaluated-text-color);\n      font-family: inherit;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      border: none;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-transform: uppercase;\n      -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n      width: 80%;\n      font-size: 20px;\n      height: 52px;\n      -webkit-filter: brightness(100%);\n    }\n    button#share-button:hover {\n      opacity: 0.9;\n    }\n    button#share-button game-icon {\n      width: 24px;\n      height: 24px;\n      padding-left: 8px;\n    }\n  </style>\n\n  <div class="container">\n    <h1>??STAT??ST??KLER</h1>\n    <div id="statistics"></div>\n    <h1>TAHM??N DA??ILIMI</h1>\n    <div id="guess-distribution"></div>\n    <div class="footer"></div>\n  </div>\n';
  var Ls = document.createElement("template");
  Ls.innerHTML = '\n  <div class="statistic-container">\n    <div class="statistic"></div>\n    <div class="label"></div>\n  </div>\n';
  var Ts = document.createElement("template");
  Ts.innerHTML = '\n    <div class="graph-container">\n      <div class="guess"></div>\n      <div class="graph">\n        <div class="graph-bar">\n          <div class="num-guesses">\n        </div>\n      </div>\n      </div>\n    </div>\n';
  var Is = document.createElement("template");
  Is.innerHTML = '\n  <div class="countdown">\n    <h1>SONRAK?? WORDLE</h1>\n    <div id="timer">\n      <div class="statistic-container">\n        <div class="statistic timer">\n          <countdown-timer></countdown-timer>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="share">\n    <button id="share-button">\n      Payla?? <game-icon icon="share"></game-icon>\n    </button>\n  </div>\n';
  var Ms = {
          currentStreak: "??u anki S??reklilik",
          maxStreak: "En Uzun S??reklilik",
          winPercentage: "Kazan?? %",
          gamesPlayed: "Oynanan",
          gamesWon: "Kazan??lan",
          averageGuesses: "Ort. Tahminler"
      },
      Os = function(e) {
          r(t, e);
          var a = h(t);

          function t() {
              var e;
              return s(this, t), n(p(e = a.call(this)), "stats", {}), n(p(e), "gameApp", void 0), e.attachShadow({
                  mode: "open"
              }), e.stats = Xa(), e
          }
          return o(t, [{
              key: "connectedCallback",
              value: function() {
                  var e = this;
                  this.shadowRoot.appendChild(Cs.content.cloneNode(!0));
                  var a = this.shadowRoot.getElementById("statistics"),
                      s = this.shadowRoot.getElementById("guess-distribution"),
                      t = Math.max.apply(Math, g(Object.values(this.stats.guesses)));
                  if (Object.values(this.stats.guesses).every((function(e) {
                          return 0 === e
                      }))) {
                      var o = document.createElement("div");
                      o.classList.add("no-data"), o.innerText = "Veri Yok", s.appendChild(o)
                  } else
                      for (var n = 1; n < Object.keys(this.stats.guesses).length; n++) {
                          var r = n,
                              i = this.stats.guesses[n],
                              l = Ts.content.cloneNode(!0),
                              d = Math.max(7, Math.round(i / t * 100));
                          l.querySelector(".guess").textContent = r;
                          var u = l.querySelector(".graph-bar");
                          if (u.style.width = "".concat(d, "%"), "number" == typeof i) {
                              l.querySelector(".num-guesses").textContent = i, i > 0 && u.classList.add("align-right");
                              var c = parseInt(this.getAttribute("highlight-guess"), 10);
                              c && n === c && u.classList.add("highlight")
                          }
                          s.appendChild(l)
                      }
                  if (["gamesPlayed", "winPercentage", "currentStreak", "maxStreak"].forEach((function(s) {
                          var t = Ms[s],
                              o = e.stats[s],
                              n = Ls.content.cloneNode(!0);
                          n.querySelector(".label").textContent = t, n.querySelector(".statistic").textContent = o, a.appendChild(n)
                      })), this.gameApp.gameStatus !== Za) {
                      var p = this.shadowRoot.querySelector(".footer"),
                          m = Is.content.cloneNode(!0);
                      p.appendChild(m), this.shadowRoot.querySelector("button#share-button").addEventListener("click", (function(a) {
                          a.preventDefault(), a.stopPropagation();
                          As(function(e) {
                              var a = e.evaluations,
                                  s = e.dayOffset,
                                  t = e.rowIndex,
                                  o = e.isHardMode,
                                  n = e.isWin,
                                  r = JSON.parse(window.localStorage.getItem(j)),
                                  i = JSON.parse(window.localStorage.getItem(S)),
                                  l = "Wordle T??rk??e ".concat(s);
                              l += " ".concat(n ? t : "X", "/").concat(6), o && (l += "*");
                              var d = "";
                              return a.forEach((function(e) {
                                  e && (e.forEach((function(e) {
                                      if (e) {
                                          var a = "";
                                          switch (e) {
                                              case Ma:
                                                  a = function(e) {
                                                      return e ? "????" : "????"
                                                  }(i);
                                                  break;
                                              case Ia:
                                                  a = function(e) {
                                                      return e ? "????" : "????"
                                                  }(i);
                                                  break;
                                              case Oa:
                                                  a = function(e) {
                                                      return e ? "???" : "???"
                                                  }(r)
                                          }
                                          d += a
                                      }
                                  })), d += "\n")
                              })), {
                                  text: "".concat(l, "\n\n").concat(d.trimEnd())
                              }
                          }({
                              evaluations: e.gameApp.evaluations,
                              dayOffset: e.gameApp.dayOffset,
                              rowIndex: e.gameApp.rowIndex,
                              isHardMode: e.gameApp.hardMode,
                              isWin: e.gameApp.gameStatus === es
                          }), (function() {
                              e.gameApp.addToast("Sonu??lar kopyaland??", 2e3, !0)
                          }), (function() {
                              e.gameApp.addToast("Payla????lamad??", 2e3, !0)
                          }))
                      }))
                  }
              }
          }]), t
      }(c(HTMLElement));
  customElements.define("game-stats", Os);
  var Rs = document.createElement("template");
  Rs.innerHTML = '\n  <style>\n    :host {\n    }\n    .container {\n      display: flex;\n      justify-content: space-between;\n    }\n    .switch {\n      height: 20px;\n      width: 32px;\n      vertical-align: middle;\n      /* not quite right */\n      background: var(--color-tone-3);\n      border-radius: 999px;\n      display: block;\n      position: relative;\n    }\n    .knob {\n      display: block;\n      position: absolute;\n      left: 2px;\n      top: 2px;\n      height: calc(100% - 4px);\n      width: 50%;\n      border-radius: 8px;\n      background: var(--white);\n      transform: translateX(0);\n      transition: transform 0.3s;\n    }\n    :host([checked]) .switch {\n      background: var(--color-correct);\n    }\n    :host([checked]) .knob {\n      transform: translateX(calc(100% - 4px));\n    }\n    :host([disabled]) .switch {\n      opacity: 0.5;\n    }\n  </style>\n  <div class="container">\n    <label><slot></slot></label>\n    <div class="switch">\n      <span class="knob"></div>\n    </div>\n  </div>\n';
  var $s = function(e) {
      r(t, e);
      var a = h(t);

      function t() {
          var e;
          return s(this, t), (e = a.call(this)).attachShadow({
              mode: "open"
          }), e
      }
      return o(t, [{
          key: "connectedCallback",
          value: function() {
              var e = this;
              this.shadowRoot.appendChild(Rs.content.cloneNode(!0)), this.shadowRoot.querySelector(".container").addEventListener("click", (function(a) {
                  a.stopPropagation(), e.hasAttribute("checked") ? e.removeAttribute("checked") : e.setAttribute("checked", ""), e.dispatchEvent(new CustomEvent("game-switch-change", {
                      bubbles: !0,
                      composed: !0,
                      detail: {
                          name: e.getAttribute("name"),
                          checked: e.hasAttribute("checked"),
                          disabled: e.hasAttribute("disabled")
                      }
                  }))
              }))
          }
      }], [{
          key: "observedAttributes",
          get: function() {
              return ["checked"]
          }
      }]), t
  }(c(HTMLElement));
  customElements.define("game-switch", $s);
  var Ps = document.createElement("template");
  Ps.innerHTML = '\n  <style>\n  .instructions {\n    font-size: 14px;\n    color: var(--color-tone-1)\n  }\n\n  .examples {\n    border-bottom: 1px solid var(--color-tone-4);\n    border-top: 1px solid var(--color-tone-4);\n  }\n\n  .example {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n\n  game-tile {\n    width: 40px;\n    height: 40px;\n  }\n\n  :host([page]) section {\n    padding: 16px;\n    padding-top: 0px;\n  }\n\n  </style>\n  <section>\n    <div class="instructions">\n      <p><strong>WORDLE</strong>\'i 6 denemede bulun.</p>\n      <p>Her tahmin 5 harfli do??ru bir kelime olmal??d??r. G??ndermek i??in enter\'a bas??n.</p>\n      <p>Her tahminden sonra kutucuklar??n renkleri tahmininizin yak??nl??????na g??re de??i??ecektir.</p>\n      <div class="examples">\n        <p><strong>??rnekler</strong></p>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="a" evaluation="correct" reveal></game-tile>\n            <game-tile letter="b"></game-tile>\n            <game-tile letter="o"></game-tile>\n            <game-tile letter="n"></game-tile>\n            <game-tile letter="e"></game-tile>\n          </div>\n          <p> <strong>A</strong> harfi kelimede var ve do??ru yerde.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="g"></game-tile>\n            <game-tile letter="??" evaluation="present" reveal></game-tile>\n            <game-tile letter="z"></game-tile>\n            <game-tile letter="e"></game-tile>\n            <game-tile letter="m"></game-tile>\n          </div>\n          <p><strong>??</strong> harfi kelimede var fakat yanl???? yerde.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="f"></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="l"></game-tile>\n            <game-tile letter="e"></game-tile>\n            <game-tile letter="z" evaluation="absent" reveal></game-tile>\n          </div>\n          <p><strong>Z</strong> harfi kelimede yok.</p>\n        </div>\n      </div>\n      <p><strong>Her g??n yeni bir WORDLE gelir!<strong></p>\n    </div>\n  </section>\n';
  var Hs = function(e) {
      r(t, e);
      var a = h(t);

      function t() {
          var e;
          return s(this, t), (e = a.call(this)).attachShadow({
              mode: "open"
          }), e
      }
      return o(t, [{
          key: "connectedCallback",
          value: function() {
              this.shadowRoot.appendChild(Ps.content.cloneNode(!0))
          }
      }]), t
  }(c(HTMLElement));
  customElements.define("game-help", Hs);
  var Ns = document.createElement("template");
  Ns.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      background-color: var(--color-background);\n      animation: SlideIn 100ms linear;\n      z-index: ".concat(2e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      color: var(--color-tone-1);\n      padding: 0 32px;\n      max-width: var(--game-max-width);\n      width: 100%;\n      overflow-y: auto;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n    }\n\n    .content-container {\n      height: 100%;\n    }\n\n    .overlay.closing {\n      animation: SlideOut 150ms linear;\n    }\n\n    header {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n    }\n\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n\n    game-icon {\n      position: absolute;\n      right: 0;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n      .content {\n        max-width: 100%;\n        padding: 0;\n      }\n      game-icon {\n        padding: 0 16px;\n      }\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <header>\n        <h1><slot></slot></h1>\n        <game-icon icon="close"></game-icon>\n      </header>\n      <div class="content-container">\n        <slot name="content"></slot>\n      </div>\n    </div>\n  </div>\n');
  var Ds = function(e) {
      r(t, e);
      var a = h(t);

      function t() {
          var e;
          return s(this, t), (e = a.call(this)).attachShadow({
              mode: "open"
          }), e
      }
      return o(t, [{
          key: "connectedCallback",
          value: function() {
              var e = this;
              this.shadowRoot.appendChild(Ns.content.cloneNode(!0)), this.shadowRoot.querySelector("game-icon").addEventListener("click", (function(a) {
                  e.shadowRoot.querySelector(".overlay").classList.add("closing")
              })), this.shadowRoot.addEventListener("animationend", (function(a) {
                  "SlideOut" === a.animationName && (e.shadowRoot.querySelector(".overlay").classList.remove("closing"), Array.from(e.childNodes).forEach((function(a) {
                      e.removeChild(a)
                  })), e.removeAttribute("open"))
              }))
          }
      }]), t
  }(c(HTMLElement));
  customElements.define("game-page", Ds);
  var Gs = document.createElement("template");
  Gs.innerHTML = '\n  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">\n    <path fill=var(--color-tone-3) />\n  </svg>\n';
  var Bs = {
          help: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",
          settings: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z",
          backspace: "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z",
          close: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
          share: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
          statistics: "M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"
      },
      Fs = function(e) {
          r(t, e);
          var a = h(t);

          function t() {
              var e;
              return s(this, t), (e = a.call(this)).attachShadow({
                  mode: "open"
              }), e
          }
          return o(t, [{
              key: "connectedCallback",
              value: function() {
                  this.shadowRoot.appendChild(Gs.content.cloneNode(!0));
                  var e = this.getAttribute("icon");
                  this.shadowRoot.querySelector("path").setAttribute("d", Bs[e]), "backspace" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--color-tone-1)"), "share" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--white)")
              }
          }]), t
      }(c(HTMLElement));
  customElements.define("game-icon", Fs);
  var Ws = document.createElement("template");
  Ws.innerHTML = '\n  <div id="timer"></div>\n';
  var Ys = 6e4,
      Js = 36e5,
      Us = function(e) {
          r(t, e);
          var a = h(t);

          function t() {
              var e;
              s(this, t), n(p(e = a.call(this)), "targetEpochMS", void 0), n(p(e), "intervalId", void 0), n(p(e), "$timer", void 0), e.attachShadow({
                  mode: "open"
              });
              var o = new Date;
              return o.setDate(o.getDate() + 1), o.setHours(0, 0, 0, 0), e.targetEpochMS = o.getTime(), e
          }
          return o(t, [{
              key: "padDigit",
              value: function(e) {
                  return e.toString().padStart(2, "0")
              }
          }, {
              key: "updateTimer",
              value: function() {
                  var e, a = (new Date).getTime(),
                      s = Math.floor(this.targetEpochMS - a);
                  if (s <= 0) e = "00:00:00";
                  else {
                      var t = Math.floor(s % 864e5 / Js),
                          o = Math.floor(s % Js / Ys),
                          n = Math.floor(s % Ys / 1e3);
                      e = "".concat(this.padDigit(t), ":").concat(this.padDigit(o), ":").concat(this.padDigit(n))
                  }
                  this.$timer.textContent = e
              }
          }, {
              key: "connectedCallback",
              value: function() {
                  var e = this;
                  this.shadowRoot.appendChild(Ws.content.cloneNode(!0)), this.$timer = this.shadowRoot.querySelector("#timer"), this.intervalId = setInterval((function() {
                      e.updateTimer()
                  }), 200)
              }
          }, {
              key: "disconnectedCallback",
              value: function() {
                  clearInterval(this.intervalId)
              }
          }]), t
      }(c(HTMLElement));
  return customElements.define("countdown-timer", Us), e.CountdownTimer = Us, e.GameApp = ts, e.GameHelp = Hs, e.GameIcon = Fs, e.GameKeyboard = us, e.GameModal = ns, e.GamePage = Ds, e.GameRow = x, e.GameSettings = _a, e.GameStats = Os, e.GameSwitch = $s, e.GameThemeManager = _, e.GameTile = v, e.GameToast = Aa, Object.defineProperty(e, "__esModule", {
      value: !0
  }), e
}({});