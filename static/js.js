// Copyright 2012 Google Inc. All rights reserved.
(function() {

  var data = {
      "resource": {
          "version": "1",

          "macros": [{
              "function": "__e"
          }, {
              "function": "__aev",
              "vtp_varType": "URL",
              "vtp_component": "IS_OUTBOUND",
              "vtp_affiliatedDomains": ["list"]
          }, {
              "function": "__v",
              "vtp_name": "gtm.triggers",
              "vtp_dataLayerVersion": 2,
              "vtp_setDefaultValue": true,
              "vtp_defaultValue": ""
          }, {
              "function": "__v",
              "vtp_name": "gtm.elementId",
              "vtp_dataLayerVersion": 1
          }, {
              "function": "__v",
              "vtp_name": "gtm.elementClasses",
              "vtp_dataLayerVersion": 1
          }, {
              "function": "__aev",
              "vtp_varType": "URL",
              "vtp_component": "URL_NO_FRAGMENT"
          }, {
              "function": "__aev",
              "vtp_varType": "URL",
              "vtp_component": "HOST",
              "vtp_stripWww": true
          }, {
              "function": "__u",
              "vtp_component": "QUERY",
              "vtp_queryKey": "q,s,search,query,keyword",
              "vtp_multiQueryKeys": true,
              "vtp_ignoreEmptyQueryParam": true,
              "vtp_enableMultiQueryKeys": false,
              "vtp_enableIgnoreEmptyQueryParam": false
          }, {
              "function": "__v",
              "vtp_name": "gtm.historyChangeSource",
              "vtp_dataLayerVersion": 1
          }, {
              "function": "__v",
              "vtp_name": "gtm.oldUrl",
              "vtp_dataLayerVersion": 1
          }, {
              "function": "__v",
              "vtp_name": "gtm.newUrl",
              "vtp_dataLayerVersion": 1
          }, {
              "function": "__c",
              "vtp_value": "google.com.tr"
          }, {
              "function": "__c",
              "vtp_value": 0
          }, {
              "vtp_signal": 0,
              "function": "__c",
              "vtp_value": 0
          }],
          "tags": [{
              "function": "__gct",
              "vtp_trackingId": "G-2SSGMHY3NP",
              "vtp_sessionDuration": 0,
              "tag_id": 1
          }, {
              "function": "__get",
              "vtp_eventName": "click",
              "vtp_settings": ["map", "streamId", "G-2SSGMHY3NP", "eventParameters", ["map", "link_id", ["macro", 3], "link_classes", ["macro", 4], "link_url", ["macro", 5], "link_domain", ["macro", 6], "outbound", true]],
              "vtp_deferrable": false,
              "tag_id": 11
          }, {
              "function": "__get",
              "vtp_eventName": "view_search_results",
              "vtp_settings": ["map", "streamId", "G-2SSGMHY3NP", "eventParameters", ["map", "search_term", ["macro", 7]]],
              "vtp_deferrable": true,
              "tag_id": 16
          }, {
              "function": "__get",
              "vtp_eventName": "page_view",
              "vtp_settings": ["map", "streamId", "G-2SSGMHY3NP", "eventParameters", ["map", "page_referrer", ["macro", 9]]],
              "vtp_deferrable": false,
              "tag_id": 19
          }, {
              "function": "__dlm",
              "vtp_userInput": ["list", ["map", "key", "gtm.gtagReferrer.G-2SSGMHY3NP", "value", ["macro", 9]]],
              "tag_id": 20
          }, {
              "function": "__set_product_settings",
              "original_activity_id": 3001,
              "vtp_foreignTldMacroResult": ["macro", 11],
              "vtp_isChinaVipRegionMacroResult": ["macro", 12],
              "tag_id": 23
          }, {
              "function": "__ogt_event_settings",
              "original_activity_id": 3002,
              "vtp_eventSettings": ["list", ["map", "name", "purchase", "conversion", true]],
              "tag_id": 24
          }, {
              "function": "__ogt_google_signals",
              "original_activity_id": 3003,
              "vtp_googleSignals": "DISABLED",
              "vtp_serverMacroResult": ["macro", 13],
              "tag_id": 25
          }, {
              "function": "__lcl",
              "vtp_waitForTags": false,
              "vtp_checkValidation": true,
              "vtp_uniqueTriggerId": "1_9",
              "tag_id": 26
          }, {
              "function": "__ehl",
              "vtp_groupEvents": true,
              "vtp_groupEventsInterval": 1000,
              "vtp_uniqueTriggerId": "1_17",
              "tag_id": 27
          }],
          "predicates": [{
              "function": "_eq",
              "arg0": ["macro", 0],
              "arg1": "gtm.js"
          }, {
              "function": "_eq",
              "arg0": ["macro", 1],
              "arg1": true
          }, {
              "function": "_eq",
              "arg0": ["macro", 0],
              "arg1": "gtm.linkClick"
          }, {
              "function": "_re",
              "arg0": ["macro", 2],
              "arg1": "(^$|((^|,)1_9($|,)))"
          }, {
              "function": "_eq",
              "arg0": ["macro", 7],
              "arg1": "undefined"
          }, {
              "function": "_eq",
              "arg0": ["macro", 8],
              "arg1": ["list", "pushState", "popstate", "replaceState"],
              "any_of": true
          }, {
              "function": "_eq",
              "arg0": ["macro", 9],
              "arg1": ["macro", 10]
          }, {
              "function": "_eq",
              "arg0": ["macro", 0],
              "arg1": "gtm.historyChange-v2"
          }, {
              "function": "_re",
              "arg0": ["macro", 2],
              "arg1": "(^$|((^|,)1_17($|,)))"
          }, {
              "function": "_eq",
              "arg0": ["macro", 0],
              "arg1": "gtm.init"
          }],
          "rules": [
              [
                  ["if", 0],
                  ["add", 0, 8, 9]
              ],
              [
                  ["if", 1, 2, 3],
                  ["add", 1]
              ],
              [
                  ["if", 0],
                  ["unless", 4],
                  ["add", 2]
              ],
              [
                  ["if", 5, 7, 8],
                  ["unless", 6],
                  ["add", 3, 4]
              ],
              [
                  ["if", 9],
                  ["add", 5, 6, 7]
              ]
          ]
      },
      "runtime": [
          [50, "__set_product_settings", [46, "a"],
              [52, "b", ["require", "internal.setProductSettingsParameter"]],
              [52, "c", ["require", "getContainerVersion"]],
              [52, "d", [17, ["c"], "containerId"]],
              ["b", [15, "d"], "google_tld", [17, [15, "a"], "foreignTldMacroResult"]],
              ["b", [15, "d"], "ga_restrict_domain", [20, [17, [15, "a"], "isChinaVipRegionMacroResult"], 1]],
              [2, [15, "a"], "gtmOnSuccess", [7]]
          ],
          [50, "__ogt_google_signals", [46, "a"],
              [52, "b", ["require", "internal.setProductSettingsParameter"]],
              [52, "c", ["require", "getContainerVersion"]],
              [52, "d", [13, [41, "$0"],
                  [3, "$0", ["require", "internal.getFlags"]],
                  ["$0"]
              ]],
              [52, "e", [17, ["c"], "containerId"]],
              ["b", [15, "e"], "google_signals", [20, [17, [15, "a"], "serverMacroResult"], 1]],
              [22, [17, [15, "d"], "enableGa4OnoRemarketing"],
                  [46, ["b", [15, "e"], "google_ono", [20, [17, [15, "a"], "serverMacroResult"], 2]]]
              ],
              [2, [15, "a"], "gtmOnSuccess", [7]]
          ],
          [50, "__ogt_event_settings", [46, "a"],
              [52, "b", ["require", "internal.setProductSettingsParameter"]],
              [52, "c", ["require", "getContainerVersion"]],
              [52, "d", [8]],
              [53, [41, "f"],
                  [3, "f", 0],
                  [63, [7, "f"],
                      [23, [15, "f"],
                          [17, [17, [15, "a"], "eventSettings"], "length"]
                      ],
                      [33, [15, "f"],
                          [3, "f", [0, [15, "f"], 1]]
                      ],
                      [46, [53, [52, "g", [16, [16, [17, [15, "a"], "eventSettings"],
                              [15, "f"]
                          ], "name"]],
                          [43, [15, "d"],
                              [15, "g"],
                              [8, "blacklisted", [16, [16, [17, [15, "a"], "eventSettings"],
                                  [15, "f"]
                              ], "blacklisted"], "conversion", [16, [16, [17, [15, "a"], "eventSettings"],
                                  [15, "f"]
                              ], "conversion"]]
                          ]
                      ]]
                  ]
              ],
              [52, "e", [17, ["c"], "containerId"]],
              ["b", [15, "e"], "event_settings", [15, "d"]],
              [2, [15, "a"], "gtmOnSuccess", [7]]
          ]
      ],
      "permissions": {
          "__set_product_settings": {
              "read_container_data": {}
          },
          "__ogt_google_signals": {
              "read_container_data": {}
          },
          "__ogt_event_settings": {
              "read_container_data": {}
          }
      }

      ,
      "security_groups": {
          "google": ["__set_product_settings", "__ogt_google_signals", "__ogt_event_settings"]
      }

  };


  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var l, ba = function(a) {
          var b = 0;
          return function() {
              return b < a.length ? {
                  done: !1,
                  value: a[b++]
              } : {
                  done: !0
              }
          }
      },
      ca = function(a) {
          return a.raw = a
      },
      ea = function(a) {
          var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
          return b ? b.call(a) : {
              next: ba(a)
          }
      },
      fa = "function" == typeof Object.create ? Object.create : function(a) {
          var b = function() {};
          b.prototype = a;
          return new b
      },
      ha;
  if ("function" == typeof Object.setPrototypeOf) ha = Object.setPrototypeOf;
  else {
      var ia;
      a: {
          var ja = {
                  a: !0
              },
              ka = {};
          try {
              ka.__proto__ = ja;
              ia = ka.a;
              break a
          } catch (a) {}
          ia = !1
      }
      ha = ia ? function(a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a
      } : null
  }
  var la = ha,
      ma = function(a, b) {
          a.prototype = fa(b.prototype);
          a.prototype.constructor = a;
          if (la) la(a, b);
          else
              for (var c in b)
                  if ("prototype" != c)
                      if (Object.defineProperties) {
                          var d = Object.getOwnPropertyDescriptor(b, c);
                          d && Object.defineProperty(a, c, d)
                      } else a[c] = b[c];
          a.Ek = b.prototype
      },
      na = this || self,
      oa = function(a) {
          return a
      };
  var pa = function(a, b) {
      this.g = a;
      this.o = b
  };
  var qa = function(a) {
          return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10)
      },
      sa = function() {
          this.C = {};
          this.s = !1;
          this.F = {}
      },
      ta = function(a, b) {
          var c = [],
              d;
          for (d in a.C)
              if (a.C.hasOwnProperty(d)) switch (d = d.substr(5), b) {
                  case 1:
                      c.push(d);
                      break;
                  case 2:
                      c.push(a.get(d));
                      break;
                  case 3:
                      c.push([d, a.get(d)])
              }
          return c
      };
  sa.prototype.get = function(a) {
      return this.C["dust." + a]
  };
  sa.prototype.set = function(a, b) {
      this.s || (a = "dust." + a, this.F.hasOwnProperty(a) || (this.C[a] = b))
  };
  sa.prototype.has = function(a) {
      return this.C.hasOwnProperty("dust." + a)
  };
  var ua = function(a, b) {
      b = "dust." + b;
      a.s || a.F.hasOwnProperty(b) || delete a.C[b]
  };
  sa.prototype.Gb = function() {
      this.s = !0
  };
  var va = function(a) {
      this.o = new sa;
      this.g = [];
      this.s = !1;
      a = a || [];
      for (var b in a) a.hasOwnProperty(b) && (qa(b) ? this.g[Number(b)] = a[Number(b)] : this.o.set(b, a[b]))
  };
  l = va.prototype;
  l.toString = function(a) {
      if (a && 0 <= a.indexOf(this)) return "";
      for (var b = [], c = 0; c < this.g.length; c++) {
          var d = this.g[c];
          null === d || void 0 === d ? b.push("") : d instanceof va ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(d.toString())
      }
      return b.join(",")
  };
  l.set = function(a, b) {
      if (!this.s)
          if ("length" === a) {
              if (!qa(b)) throw Error("RangeError: Length property must be a valid integer.");
              this.g.length = Number(b)
          } else qa(a) ? this.g[Number(a)] = b : this.o.set(a, b)
  };
  l.get = function(a) {
      return "length" === a ? this.length() : qa(a) ? this.g[Number(a)] : this.o.get(a)
  };
  l.length = function() {
      return this.g.length
  };
  l.Fb = function() {
      for (var a = ta(this.o, 1), b = 0; b < this.g.length; b++) a.push(b + "");
      return new va(a)
  };
  var wa = function(a, b) {
      qa(b) ? delete a.g[Number(b)] : ua(a.o, b)
  };
  l = va.prototype;
  l.pop = function() {
      return this.g.pop()
  };
  l.push = function(a) {
      return this.g.push.apply(this.g, Array.prototype.slice.call(arguments))
  };
  l.shift = function() {
      return this.g.shift()
  };
  l.splice = function(a, b, c) {
      return new va(this.g.splice.apply(this.g, arguments))
  };
  l.unshift = function(a) {
      return this.g.unshift.apply(this.g, Array.prototype.slice.call(arguments))
  };
  l.has = function(a) {
      return qa(a) && this.g.hasOwnProperty(a) || this.o.has(a)
  };
  l.Gb = function() {
      this.s = !0;
      Object.freeze(this.g);
      this.o.Gb()
  };
  var ya = function() {
      function a(f, g) {
          if (b[f]) {
              if (b[f].Sd + g > b[f].max) throw Error("Quota exceeded");
              b[f].Sd += g
          }
      }
      var b = {},
          c = void 0,
          d = void 0,
          e = {
              Jj: function(f) {
                  c = f
              },
              Ug: function() {
                  c && a(c, 1)
              },
              Lj: function(f) {
                  d = f
              },
              Hb: function(f) {
                  d && a(d, f)
              },
              ek: function(f, g) {
                  b[f] = b[f] || {
                      Sd: 0
                  };
                  b[f].max = g
              },
              mj: function(f) {
                  return b[f] && b[f].Sd || 0
              },
              reset: function() {
                  b = {}
              },
              Yi: a
          };
      e.onFnConsume = e.Jj;
      e.consumeFn = e.Ug;
      e.onStorageConsume = e.Lj;
      e.consumeStorage = e.Hb;
      e.setMax = e.ek;
      e.getConsumed = e.mj;
      e.reset = e.reset;
      e.consume = e.Yi;
      return e
  };
  var za = function(a, b) {
      this.s = a;
      this.O = function(c, d, e) {
          return c.apply(d, e)
      };
      this.C = b;
      this.o = new sa;
      this.g = this.F = void 0
  };
  za.prototype.add = function(a, b) {
      Aa(this, a, b, !1)
  };
  var Aa = function(a, b, c, d) {
      if (!a.o.s)
          if (a.s.Hb(("string" === typeof b ? b.length : 1) + ("string" === typeof c ? c.length : 1)), d) {
              var e = a.o;
              e.set(b, c);
              e.F["dust." + b] = !0
          } else a.o.set(b, c)
  };
  za.prototype.set = function(a, b) {
      this.o.s || (!this.o.has(a) && this.C && this.C.has(a) ? this.C.set(a, b) : (this.s.Hb(("string" === typeof a ? a.length : 1) + ("string" === typeof b ? b.length : 1)), this.o.set(a, b)))
  };
  za.prototype.get = function(a) {
      return this.o.has(a) ? this.o.get(a) : this.C ? this.C.get(a) : void 0
  };
  za.prototype.has = function(a) {
      return !!this.o.has(a) || !(!this.C || !this.C.has(a))
  };
  var Ba = function(a) {
      var b = new za(a.s, a);
      a.F && (b.F = a.F);
      b.O = a.O;
      b.g = a.g;
      return b
  };
  var Ea = function() {},
      Fa = function(a) {
          return "function" == typeof a
      },
      Ia = function(a) {
          return "string" == typeof a
      },
      Ja = function(a) {
          return "number" == typeof a && !isNaN(a)
      },
      Ka = Array.isArray,
      Ma = function(a, b) {
          if (a && Ka(a))
              for (var c = 0; c < a.length; c++)
                  if (a[c] && b(a[c])) return a[c]
      },
      Na = function(a, b) {
          if (!Ja(a) || !Ja(b) || a > b) a = 0, b = 2147483647;
          return Math.floor(Math.random() * (b - a + 1) + a)
      },
      Ra = function(a, b) {
          for (var c = new Qa, d = 0; d < a.length; d++) c.set(a[d], !0);
          for (var e = 0; e < b.length; e++)
              if (c.get(b[e])) return !0;
          return !1
      },
      Sa = function(a,
          b) {
          for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
      },
      Ta = function(a) {
          return !!a && ("[object Arguments]" == Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
      },
      Ua = function(a) {
          return Math.round(Number(a)) || 0
      },
      Xa = function(a) {
          return "false" == String(a).toLowerCase() ? !1 : !!a
      },
      Ya = function(a) {
          var b = [];
          if (Ka(a))
              for (var c = 0; c < a.length; c++) b.push(String(a[c]));
          return b
      },
      ab = function(a) {
          return a ? a.replace(/^\s+|\s+$/g, "") : ""
      },
      cb = function() {
          return new Date(Date.now())
      },
      db = function() {
          return cb().getTime()
      },
      Qa = function() {
          this.prefix = "gtm.";
          this.values = {}
      };
  Qa.prototype.set = function(a, b) {
      this.values[this.prefix + a] = b
  };
  Qa.prototype.get = function(a) {
      return this.values[this.prefix + a]
  };
  var eb = function(a, b, c) {
          return a && a.hasOwnProperty(b) ? a[b] : c
      },
      fb = function(a) {
          var b = a;
          return function() {
              if (b) {
                  var c = b;
                  b = void 0;
                  try {
                      c()
                  } catch (d) {}
              }
          }
      },
      gb = function(a, b) {
          for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
      },
      hb = function(a) {
          for (var b in a)
              if (a.hasOwnProperty(b)) return !0;
          return !1
      },
      ib = function(a, b) {
          for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
          return c
      },
      jb = function(a, b) {
          var c = m;
          b = b || [];
          for (var d = c, e = 0; e < a.length - 1; e++) {
              if (!d.hasOwnProperty(a[e])) return;
              d = d[a[e]];
              if (0 <=
                  b.indexOf(d)) return
          }
          return d
      },
      kb = function(a, b) {
          for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
          d[e[e.length - 1]] = b;
          return c
      },
      lb = /^\w{1,9}$/,
      mb = function(a, b) {
          a = a || {};
          b = b || ",";
          var c = [];
          Sa(a, function(d, e) {
              lb.test(d) && e && c.push(d)
          });
          return c.join(b)
      },
      pb = function(a, b) {
          function c() {
              ++d === b && (e(), e = null, c.done = !0)
          }
          var d = 0,
              e = a;
          c.done = !1;
          return c
      };
  var qb = function(a, b) {
      sa.call(this);
      this.O = a;
      this.Qa = b
  };
  ma(qb, sa);
  qb.prototype.toString = function() {
      return this.O
  };
  qb.prototype.Fb = function() {
      return new va(ta(this, 1))
  };
  qb.prototype.g = function(a, b) {
      a.s.Ug();
      return this.Qa.apply(new rb(this, a), Array.prototype.slice.call(arguments, 1))
  };
  qb.prototype.o = function(a, b) {
      try {
          return this.g.apply(this, Array.prototype.slice.call(arguments, 0))
      } catch (c) {}
  };
  var tb = function(a, b) {
          for (var c, d = 0; d < b.length && !(c = sb(a, b[d]), c instanceof pa); d++);
          return c
      },
      sb = function(a, b) {
          try {
              var c = a.get(String(b[0]));
              if (!(c && c instanceof qb)) throw Error("Attempting to execute non-function " + b[0] + ".");
              return c.g.apply(c, [a].concat(b.slice(1)))
          } catch (e) {
              var d = a.F;
              d && d(e, b.context ? {
                  id: b[0],
                  line: b.context.line
              } : null);
              throw e;
          }
      },
      rb = function(a, b) {
          this.o = a;
          this.g = b
      },
      B = function(a, b) {
          return Ka(b) ? sb(a.g, b) : b
      },
      G = function(a) {
          return a.o.O
      };
  var ub = function() {
      sa.call(this)
  };
  ma(ub, sa);
  ub.prototype.Fb = function() {
      return new va(ta(this, 1))
  };
  var vb = {
      control: function(a, b) {
          return new pa(a, B(this, b))
      },
      fn: function(a, b, c) {
          var d = this.g,
              e = B(this, b);
          if (!(e instanceof va)) throw Error("Error: non-List value given for Fn argument names.");
          var f = Array.prototype.slice.call(arguments, 2);
          this.g.s.Hb(a.length + f.length);
          return new qb(a, function() {
              return function(g) {
                  var h = Ba(d);
                  void 0 === h.g && (h.g = this.g.g);
                  for (var k = Array.prototype.slice.call(arguments, 0), n = 0; n < k.length; n++)
                      if (k[n] = B(this, k[n]), k[n] instanceof pa) return k[n];
                  for (var p = e.get("length"), r =
                          0; r < p; r++) r < k.length ? h.add(e.get(r), k[r]) : h.add(e.get(r), void 0);
                  h.add("arguments", new va(k));
                  var u = tb(h, f);
                  if (u instanceof pa) return "return" === u.g ? u.o : u
              }
          }())
      },
      list: function(a) {
          var b = this.g.s;
          b.Hb(arguments.length);
          for (var c = new va, d = 0; d < arguments.length; d++) {
              var e = B(this, arguments[d]);
              "string" === typeof e && b.Hb(e.length ? e.length - 1 : 0);
              c.push(e)
          }
          return c
      },
      map: function(a) {
          for (var b = this.g.s, c = new ub, d = 0; d < arguments.length - 1; d += 2) {
              var e = B(this, arguments[d]) + "",
                  f = B(this, arguments[d + 1]),
                  g = e.length;
              g += "string" ===
                  typeof f ? f.length : 1;
              b.Hb(g);
              c.set(e, f)
          }
          return c
      },
      undefined: function() {}
  };
  var wb = function() {
          this.s = ya();
          this.g = new za(this.s)
      },
      xb = function(a, b, c) {
          var d = new qb(b, c);
          d.Gb();
          a.g.set(b, d)
      },
      yb = function(a, b, c) {
          vb.hasOwnProperty(b) && xb(a, c || b, vb[b])
      };
  wb.prototype.execute = function(a, b) {
      var c = Array.prototype.slice.call(arguments, 0);
      return this.o(c)
  };
  wb.prototype.o = function(a) {
      for (var b, c = 0; c < arguments.length; c++) b = sb(this.g, arguments[c]);
      return b
  };
  wb.prototype.C = function(a, b) {
      var c = Ba(this.g);
      c.g = a;
      for (var d, e = 1; e < arguments.length; e++) d = d = sb(c, arguments[e]);
      return d
  };
  var zb, Ab = function() {
      if (void 0 === zb) {
          var a = null,
              b = na.trustedTypes;
          if (b && b.createPolicy) {
              try {
                  a = b.createPolicy("goog#html", {
                      createHTML: oa,
                      createScript: oa,
                      createScriptURL: oa
                  })
              } catch (c) {
                  na.console && na.console.error(c.message)
              }
              zb = a
          } else zb = a
      }
      return zb
  };
  var Cb = function(a, b) {
      this.s = b === Bb ? a : ""
  };
  Cb.prototype.o = !0;
  Cb.prototype.g = function() {
      return this.s.toString()
  };
  Cb.prototype.toString = function() {
      return this.s + ""
  };
  var Fb = function(a) {
          return a instanceof Cb && a.constructor === Cb ? a.s : "type_error:TrustedResourceUrl"
      },
      Bb = {},
      Gb = function(a) {
          var b = Ab(),
              c = b ? b.createScriptURL(a) : a;
          return new Cb(c, Bb)
      };
  var Ib = function(a, b) {
      this.s = b === Hb ? a : ""
  };
  Ib.prototype.o = !0;
  Ib.prototype.g = function() {
      return this.s.toString()
  };
  Ib.prototype.toString = function() {
      return this.s.toString()
  };
  var Jb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
      Hb = {};

  function Kb() {
      var a = na.navigator;
      if (a) {
          var b = a.userAgent;
          if (b) return b
      }
      return ""
  }

  function Lb(a) {
      return -1 != Kb().indexOf(a)
  };
  var Mb = {},
      Nb = function(a, b, c) {
          this.s = c === Mb ? a : "";
          this.o = !0
      };
  Nb.prototype.g = function() {
      return this.s.toString()
  };
  Nb.prototype.toString = function() {
      return this.s.toString()
  };
  var Ob = function(a) {
          return a instanceof Nb && a.constructor === Nb ? a.s : "type_error:SafeHtml"
      },
      Qb = function(a) {
          var b = Ab(),
              c = b ? b.createHTML(a) : a;
          return new Nb(c, null, Mb)
      },
      Rb = new Nb(na.trustedTypes && na.trustedTypes.emptyHTML || "", 0, Mb);
  /*

   SPDX-License-Identifier: Apache-2.0
  */
  var Sb = {};
  var Tb = function() {},
      Wb = function(a) {
          this.g = a
      };
  ma(Wb, Tb);
  Wb.prototype.toString = function() {
      return this.g
  };

  function Xb(a, b) {
      var c = [new Wb(Yb[0].toLowerCase(), Sb)];
      if (0 === c.length) throw Error("No prefixes are provided");
      var d = c.map(function(f) {
              var g;
              if (f instanceof Wb) g = f.g;
              else throw Error("");
              return g
          }),
          e = b.toLowerCase();
      if (d.every(function(f) {
              return 0 !== e.indexOf(f)
          })) throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
      a.setAttribute(b, "true")
  };
  var Zb = function(a, b) {
          var c = function() {};
          c.prototype = a.prototype;
          var d = new c;
          a.apply(d, Array.prototype.slice.call(arguments, 1));
          return d
      },
      $b = function(a) {
          var b = a;
          return function() {
              if (b) {
                  var c = b;
                  b = null;
                  c()
              }
          }
      };
  var ac = function(a) {
      var b = !1,
          c;
      return function() {
          b || (c = a(), b = !0);
          return c
      }
  }(function() {
      var a = document.createElement("div"),
          b = document.createElement("div");
      b.appendChild(document.createElement("div"));
      a.appendChild(b);
      var c = a.firstChild.firstChild;
      a.innerHTML = Ob(Rb);
      return !c.parentElement
  });
  var m = window,
      H = document,
      bc = navigator,
      cc = H.currentScript && H.currentScript.src,
      dc = function(a, b) {
          var c = m[a];
          m[a] = void 0 === c ? b : c;
          return m[a]
      },
      ec = function(a, b) {
          b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
              a.readyState in {
                  loaded: 1,
                  complete: 1
              } && (a.onreadystatechange = null, b())
          })
      },
      fc = {
          async: 1,
          nonce: 1,
          onerror: 1,
          onload: 1,
          src: 1,
          type: 1
      },
      gc = {
          onload: 1,
          src: 1,
          width: 1,
          height: 1,
          style: 1
      };

  function hc(a, b, c) {
      b && Sa(b, function(d, e) {
          d = d.toLowerCase();
          c.hasOwnProperty(d) || a.setAttribute(d, e)
      })
  }
  var ic = function(a, b, c, d) {
          var e = H.createElement("script");
          hc(e, d, fc);
          e.type = "text/javascript";
          e.async = !0;
          var f = Gb(a);
          e.src = Fb(f);
          var g, h, k = (e.ownerDocument && e.ownerDocument.defaultView || window).document,
              n = null === (h = k.querySelector) || void 0 === h ? void 0 : h.call(k, "script[nonce]");
          (g = n ? n.nonce || n.getAttribute("nonce") || "" : "") && e.setAttribute("nonce", g);
          ec(e, b);
          c && (e.onerror = c);
          var p = H.getElementsByTagName("script")[0] || H.body || H.head;
          p.parentNode.insertBefore(e, p);
          return e
      },
      jc = function() {
          if (cc) {
              var a = cc.toLowerCase();
              if (0 === a.indexOf("https://")) return 2;
              if (0 === a.indexOf("http://")) return 3
          }
          return 1
      },
      kc = function(a, b, c, d, e) {
          var f = e,
              g = !1;
          f || (f = H.createElement("iframe"), g = !0);
          hc(f, c, gc);
          d && Sa(d, function(k, n) {
              f.dataset[k] = n
          });
          f.height = "0";
          f.width = "0";
          f.style.display = "none";
          f.style.visibility = "hidden";
          if (g) {
              var h = H.body && H.body.lastChild || H.body || H.head;
              h.parentNode.insertBefore(f, h)
          }
          ec(f, b);
          void 0 !== a && (f.src = a);
          return f
      },
      lc = function(a, b, c) {
          var d = new Image(1, 1);
          d.onload = function() {
              d.onload = null;
              b && b()
          };
          d.onerror =
              function() {
                  d.onerror = null;
                  c && c()
              };
          d.src = a;
          return d
      },
      pc = function(a, b, c, d) {
          a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
      },
      qc = function(a, b, c) {
          a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
      },
      I = function(a) {
          m.setTimeout(a, 0)
      },
      rc = function(a, b) {
          return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
      },
      sc = function(a) {
          var b = a.innerText || a.textContent || "";
          b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
          b &&
              (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
          return b
      },
      tc = function(a) {
          var b = H.createElement("div"),
              c = Qb("A<div>" + a + "</div>"),
              d = b;
          if (ac())
              for (; d.lastChild;) d.removeChild(d.lastChild);
          d.innerHTML = Ob(c);
          b = b.lastChild;
          for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
          return e
      },
      uc = function(a, b, c) {
          c = c || 100;
          for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
          for (var f = a, g = 0; f && g <= c; g++) {
              if (d[String(f.tagName).toLowerCase()]) return f;
              f = f.parentElement
          }
          return null
      },
      vc = function(a) {
          var b;
          try {
              b = bc.sendBeacon &&
                  bc.sendBeacon(a)
          } catch (c) {}
          b || lc(a)
      },
      wc = function(a, b) {
          var c = a[b];
          c && "string" === typeof c.animVal && (c = c.animVal);
          return c
      },
      xc = function(a) {
          var b = H.featurePolicy;
          return b && Fa(b.allowsFeature) ? b.allowsFeature(a) : !1
      };
  var yc = function(a, b) {
          return B(this, a) && B(this, b)
      },
      zc = function(a, b) {
          return B(this, a) === B(this, b)
      },
      Ac = function(a, b) {
          return B(this, a) || B(this, b)
      },
      Bc = function(a, b) {
          a = B(this, a);
          b = B(this, b);
          return -1 < String(a).indexOf(String(b))
      },
      Cc = function(a, b) {
          a = String(B(this, a));
          b = String(B(this, b));
          return a.substring(0, b.length) === b
      },
      Dc = function(a, b) {
          a = B(this, a);
          b = B(this, b);
          switch (a) {
              case "pageLocation":
                  var c = m.location.href;
                  b instanceof ub && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
                  return c
          }
      };
  var Fc = function() {
      this.g = new wb;
      Ec(this)
  };
  Fc.prototype.execute = function(a) {
      return this.g.o(a)
  };
  var Ec = function(a) {
      yb(a.g, "map");
      var b = function(c, d) {
          xb(a.g, c, d)
      };
      b("and", yc);
      b("contains", Bc);
      b("equals", zc);
      b("or", Ac);
      b("startsWith", Cc);
      b("variable", Dc)
  };
  var Jc = function(a) {
      if (a instanceof Jc) return a;
      this.Wa = a
  };
  Jc.prototype.toString = function() {
      return String(this.Wa)
  };
  var Lc = function(a) {
      sa.call(this);
      this.g = a;
      this.set("then", Kc(this));
      this.set("catch", Kc(this, !0));
      this.set("finally", Kc(this, !1, !0))
  };
  ma(Lc, ub);
  var Kc = function(a, b, c) {
      b = void 0 === b ? !1 : b;
      c = void 0 === c ? !1 : c;
      return new qb("", function(d, e) {
          b && (e = d, d = void 0);
          c && (e = d);
          d instanceof qb || (d = void 0);
          e instanceof qb || (e = void 0);
          var f = Ba(this.g),
              g = function(k) {
                  return function(n) {
                      return c ? (k.g(f), a.g) : k.g(f, n)
                  }
              },
              h = a.g.then(d && g(d), e && g(e));
          return new Lc(h)
      })
  };
  /*
   jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var Mc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
      Nc = function(a) {
          if (null == a) return String(a);
          var b = Mc.exec(Object.prototype.toString.call(Object(a)));
          return b ? b[1].toLowerCase() : "object"
      },
      Oc = function(a, b) {
          return Object.prototype.hasOwnProperty.call(Object(a), b)
      },
      Pc = function(a) {
          if (!a || "object" != Nc(a) || a.nodeType || a == a.window) return !1;
          try {
              if (a.constructor && !Oc(a, "constructor") && !Oc(a.constructor.prototype, "isPrototypeOf")) return !1
          } catch (c) {
              return !1
          }
          for (var b in a);
          return void 0 ===
              b || Oc(a, b)
      },
      Qc = function(a, b) {
          var c = b || ("array" == Nc(a) ? [] : {}),
              d;
          for (d in a)
              if (Oc(a, d)) {
                  var e = a[d];
                  "array" == Nc(e) ? ("array" != Nc(c[d]) && (c[d] = []), c[d] = Qc(e, c[d])) : Pc(e) ? (Pc(c[d]) || (c[d] = {}), c[d] = Qc(e, c[d])) : c[d] = e
              } return c
      };
  var Sc = function(a, b, c) {
          var d = [],
              e = [],
              f = function(h, k) {
                  for (var n = ta(h, 1), p = 0; p < n.length; p++) k[n[p]] = g(h.get(n[p]))
              },
              g = function(h) {
                  var k = d.indexOf(h);
                  if (-1 < k) return e[k];
                  if (h instanceof va) {
                      var n = [];
                      d.push(h);
                      e.push(n);
                      for (var p = h.Fb(), r = 0; r < p.length(); r++) n[p.get(r)] = g(h.get(p.get(r)));
                      return n
                  }
                  if (h instanceof Lc) return h.g;
                  if (h instanceof ub) {
                      var u = {};
                      d.push(h);
                      e.push(u);
                      f(h, u);
                      return u
                  }
                  if (h instanceof qb) {
                      var t = function() {
                          for (var q = Array.prototype.slice.call(arguments, 0), v = 0; v < q.length; v++) q[v] = Rc(q[v],
                              b, !!c);
                          var w = b ? b.s : ya(),
                              y = new za(w);
                          b && (y.g = b.g);
                          return g(h.g.apply(h, [y].concat(q)))
                      };
                      d.push(h);
                      e.push(t);
                      f(h, t);
                      return t
                  }
                  switch (typeof h) {
                      case "boolean":
                      case "number":
                      case "string":
                      case "undefined":
                          return h;
                      case "object":
                          if (null === h) return null
                  }
              };
          return g(a)
      },
      Rc = function(a, b, c) {
          var d = [],
              e = [],
              f = function(h, k) {
                  for (var n in h) h.hasOwnProperty(n) && k.set(n,
                      g(h[n]))
              },
              g = function(h) {
                  var k = d.indexOf(h);
                  if (-1 < k) return e[k];
                  if (Ka(h) || Ta(h)) {
                      var n = new va([]);
                      d.push(h);
                      e.push(n);
                      for (var p in h) h.hasOwnProperty(p) && n.set(p, g(h[p]));
                      return n
                  }
                  if (Pc(h)) {
                      var r = new ub;
                      d.push(h);
                      e.push(r);
                      f(h, r);
                      return r
                  }
                  if ("function" === typeof h) {
                      var u = new qb("", function(y) {
                          for (var x = Array.prototype.slice.call(arguments, 0), z = 0; z < x.length; z++) x[z] = Sc(B(this, x[z]), b, !!c);
                          return g((0, this.g.O)(h, h, x))
                      });
                      d.push(h);
                      e.push(u);
                      f(h, u);
                      return u
                  }
                  var w = typeof h;
                  if (null === h || "string" === w || "number" === w || "boolean" === w) return h;
              };
          return g(a)
      };
  var Tc = function(a) {
          for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
          return b
      },
      Uc = function(a) {
          if (void 0 === a || Ka(a) || Pc(a)) return !0;
          switch (typeof a) {
              case "boolean":
              case "number":
              case "string":
              case "function":
                  return !0
          }
          return !1
      };
  var Vc = {
      supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
      concat: function(a, b) {
          for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
          for (var e = 1; e < arguments.length; e++)
              if (arguments[e] instanceof va)
                  for (var f = arguments[e], g = 0; g < f.length(); g++) c.push(f.get(g));
              else c.push(arguments[e]);
          return new va(c)
      },
      every: function(a, b) {
          for (var c = this.length(), d = 0; d < this.length() &&
              d < c; d++)
              if (this.has(d) && !b.g(a, this.get(d), d, this)) return !1;
          return !0
      },
      filter: function(a, b) {
          for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.g(a, this.get(e), e, this) && d.push(this.get(e));
          return new va(d)
      },
      forEach: function(a, b) {
          for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.g(a, this.get(d), d, this)
      },
      hasOwnProperty: function(a, b) {
          return this.has(b)
      },
      indexOf: function(a, b, c) {
          var d = this.length(),
              e = void 0 === c ? 0 : Number(c);
          0 > e && (e = Math.max(d + e, 0));
          for (var f = e; f < d; f++)
              if (this.has(f) &&
                  this.get(f) === b) return f;
          return -1
      },
      join: function(a, b) {
          for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
          return c.join(b)
      },
      lastIndexOf: function(a, b, c) {
          var d = this.length(),
              e = d - 1;
          void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
          for (var f = e; 0 <= f; f--)
              if (this.has(f) && this.get(f) === b) return f;
          return -1
      },
      map: function(a, b) {
          for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.g(a, this.get(e), e, this));
          return new va(d)
      },
      pop: function() {
          return this.pop()
      },
      push: function(a, b) {
          return this.push.apply(this,
              Array.prototype.slice.call(arguments, 1))
      },
      reduce: function(a, b, c) {
          var d = this.length(),
              e, f = 0;
          if (void 0 !== c) e = c;
          else {
              if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
              for (var g = 0; g < d; g++)
                  if (this.has(g)) {
                      e = this.get(g);
                      f = g + 1;
                      break
                  } if (g === d) throw Error("TypeError: Reduce on List with no elements.");
          }
          for (var h = f; h < d; h++) this.has(h) && (e = b.g(a, e, this.get(h), h, this));
          return e
      },
      reduceRight: function(a, b, c) {
          var d = this.length(),
              e, f = d - 1;
          if (void 0 !== c) e = c;
          else {
              if (0 === d) throw Error("TypeError: ReduceRight on List with no elements.");
              for (var g = 1; g <= d; g++)
                  if (this.has(d - g)) {
                      e = this.get(d - g);
                      f = d - (g + 1);
                      break
                  } if (g > d) throw Error("TypeError: ReduceRight on List with no elements.");
          }
          for (var h = f; 0 <= h; h--) this.has(h) && (e = b.g(a, e, this.get(h), h, this));
          return e
      },
      reverse: function() {
          for (var a = Tc(this), b = a.length - 1, c = 0; 0 <= b; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : wa(this, c);
          return this
      },
      shift: function() {
          return this.shift()
      },
      slice: function(a, b, c) {
          var d = this.length();
          void 0 === b && (b = 0);
          b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
          c = void 0 === c ? d : 0 > c ?
              Math.max(d + c, 0) : Math.min(c, d);
          c = Math.max(b, c);
          for (var e = [], f = b; f < c; f++) e.push(this.get(f));
          return new va(e)
      },
      some: function(a, b) {
          for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
              if (this.has(d) && b.g(a, this.get(d), d, this)) return !0;
          return !1
      },
      sort: function(a, b) {
          var c = Tc(this);
          void 0 === b ? c.sort() : c.sort(function(e, f) {
              return Number(b.g(a, e, f))
          });
          for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : wa(this, d);
          return this
      },
      splice: function(a, b, c, d) {
          return this.splice.apply(this, Array.prototype.splice.call(arguments,
              1, arguments.length - 1))
      },
      toString: function() {
          return this.toString()
      },
      unshift: function(a, b) {
          return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
      }
  };
  var Wc = "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),
      Xc = new pa("break"),
      Yc = new pa("continue"),
      Zc = function(a, b) {
          return B(this, a) + B(this, b)
      },
      $c = function(a, b) {
          return B(this, a) && B(this, b)
      },
      ad = function(a, b, c) {
          a = B(this, a);
          b = B(this, b);
          c = B(this, c);
          if (!(c instanceof va)) throw Error("Error: Non-List argument given to Apply instruction.");
          if (null === a || void 0 === a) throw Error("TypeError: Can't read property " +
              b + " of " + a + ".");
          var d = "number" === typeof a;
          if ("boolean" === typeof a || d) {
              if ("toString" === b) {
                  if (d && c.length()) {
                      var e = Sc(c.get(0));
                      try {
                          return a.toString(e)
                      } catch (r) {}
                  }
                  return a.toString()
              }
              throw Error("TypeError: " + a + "." + b + " is not a function.");
          }
          if ("string" === typeof a) {
              if (0 <= Wc.indexOf(b)) {
                  var f = Sc(c);
                  return Rc(a[b].apply(a, f), this.g)
              }
              throw Error("TypeError: " + b + " is not a function");
          }
          if (a instanceof va) {
              if (a.has(b)) {
                  var g = a.get(b);
                  if (g instanceof qb) {
                      var h = Tc(c);
                      h.unshift(this.g);
                      return g.g.apply(g, h)
                  }
                  throw Error("TypeError: " +
                      b + " is not a function");
              }
              if (0 <= Vc.supportedMethods.indexOf(b)) {
                  var k = Tc(c);
                  k.unshift(this.g);
                  return Vc[b].apply(a, k)
              }
          }
          if (a instanceof qb || a instanceof ub) {
              if (a.has(b)) {
                  var n = a.get(b);
                  if (n instanceof qb) {
                      var p = Tc(c);
                      p.unshift(this.g);
                      return n.g.apply(n, p)
                  }
                  throw Error("TypeError: " + b + " is not a function");
              }
              if ("toString" === b) return a instanceof qb ? a.O : a.toString();
              if ("hasOwnProperty" === b) return a.has.apply(a, Tc(c))
          }
          if (a instanceof Jc && "toString" === b) return a.toString();
          throw Error("TypeError: Object has no '" +
              b + "' property.");
      },
      ed = function(a, b) {
          a = B(this, a);
          if ("string" !== typeof a) throw Error("Invalid key name given for assignment.");
          var c = this.g;
          if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
          var d = B(this, b);
          c.set(a, d);
          return d
      },
      fd = function(a) {
          var b = Ba(this.g),
              c = tb(b, Array.prototype.slice.apply(arguments));
          if (c instanceof pa) return c
      },
      gd = function() {
          return Xc
      },
      hd = function(a) {
          for (var b = B(this, a), c = 0; c < b.length; c++) {
              var d = B(this, b[c]);
              if (d instanceof pa) return d
          }
      },
      id = function(a) {
          for (var b =
                  this.g, c = 0; c < arguments.length - 1; c += 2) {
              var d = arguments[c];
              if ("string" === typeof d) {
                  var e = B(this, arguments[c + 1]);
                  Aa(b, d, e, !0)
              }
          }
      },
      jd = function() {
          return Yc
      },
      kd = function(a, b, c) {
          var d = new va;
          b = B(this, b);
          for (var e = 0; e < b.length; e++) d.push(b[e]);
          var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
          this.g.add(a, B(this, f))
      },
      ld = function(a, b) {
          return B(this, a) / B(this, b)
      },
      md = function(a, b) {
          a = B(this, a);
          b = B(this, b);
          var c = a instanceof Jc,
              d = b instanceof Jc;
          return c || d ? c && d ? a.Wa == b.Wa : !1 : a ==
              b
      },
      nd = function(a) {
          for (var b, c = 0; c < arguments.length; c++) b = B(this, arguments[c]);
          return b
      };

  function od(a, b, c, d) {
      for (var e = 0; e < b(); e++) {
          var f = a(c(e)),
              g = tb(f, d);
          if (g instanceof pa) {
              if ("break" === g.g) break;
              if ("return" === g.g) return g
          }
      }
  }

  function pd(a, b, c) {
      if ("string" === typeof b) return od(a, function() {
          return b.length
      }, function(f) {
          return f
      }, c);
      if (b instanceof ub || b instanceof va || b instanceof qb) {
          var d = b.Fb(),
              e = d.length();
          return od(a, function() {
              return e
          }, function(f) {
              return d.get(f)
          }, c)
      }
  }
  var qd = function(a, b, c) {
          a = B(this, a);
          b = B(this, b);
          c = B(this, c);
          var d = this.g;
          return pd(function(e) {
              d.set(a, e);
              return d
          }, b, c)
      },
      rd = function(a, b, c) {
          a = B(this, a);
          b = B(this, b);
          c = B(this, c);
          var d = this.g;
          return pd(function(e) {
              var f = Ba(d);
              Aa(f, a, e, !0);
              return f
          }, b, c)
      },
      sd = function(a, b, c) {
          a = B(this, a);
          b = B(this, b);
          c = B(this, c);
          var d = this.g;
          return pd(function(e) {
              var f = Ba(d);
              f.add(a, e);
              return f
          }, b, c)
      },
      ud = function(a, b, c) {
          a = B(this, a);
          b = B(this, b);
          c = B(this, c);
          var d = this.g;
          return td(function(e) {
              d.set(a, e);
              return d
          }, b, c)
      },
      vd =
      function(a, b, c) {
          a = B(this, a);
          b = B(this, b);
          c = B(this, c);
          var d = this.g;
          return td(function(e) {
              var f = Ba(d);
              Aa(f, a, e, !0);
              return f
          }, b, c)
      },
      Cd = function(a, b, c) {
          a = B(this, a);
          b = B(this, b);
          c = B(this, c);
          var d = this.g;
          return td(function(e) {
              var f = Ba(d);
              f.add(a, e);
              return f
          }, b, c)
      };

  function td(a, b, c) {
      if ("string" === typeof b) return od(a, function() {
          return b.length
      }, function(d) {
          return b[d]
      }, c);
      if (b instanceof va) return od(a, function() {
          return b.length()
      }, function(d) {
          return b.get(d)
      }, c);
      throw new TypeError("The value is not iterable.");
  }
  var Dd = function(a, b, c, d) {
          function e(p, r) {
              for (var u = 0; u < f.length(); u++) {
                  var t = f.get(u);
                  r.add(t, p.get(t))
              }
          }
          var f = B(this, a);
          if (!(f instanceof va)) throw Error("TypeError: Non-List argument given to ForLet instruction.");
          var g = this.g;
          d = B(this, d);
          var h = Ba(g);
          for (e(g, h); sb(h, b);) {
              var k = tb(h, d);
              if (k instanceof pa) {
                  if ("break" === k.g) break;
                  if ("return" === k.g) return k
              }
              var n = Ba(g);
              e(h, n);
              sb(n, c);
              h = n
          }
      },
      Ed = function(a) {
          a = B(this, a);
          var b = this.g,
              c = !1;
          if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
          return b.get(a)
      },
      Fd = function(a, b) {
          var c;
          a = B(this, a);
          b = B(this, b);
          if (void 0 === a || null === a) throw Error("TypeError: cannot access property of " + a + ".");
          if (a instanceof ub || a instanceof va || a instanceof qb) c = a.get(b);
          else if ("string" === typeof a) "length" === b ? c = a.length : qa(b) && (c = a[b]);
          else if (a instanceof Jc) return;
          return c
      },
      Gd = function(a, b) {
          return B(this, a) > B(this,
              b)
      },
      Hd = function(a, b) {
          return B(this, a) >= B(this, b)
      },
      Id = function(a, b) {
          a = B(this, a);
          b = B(this, b);
          a instanceof Jc && (a = a.Wa);
          b instanceof Jc && (b = b.Wa);
          return a === b
      },
      Jd = function(a, b) {
          return !Id.call(this, a, b)
      },
      Kd = function(a, b, c) {
          var d = [];
          B(this, a) ? d = B(this, b) : c && (d = B(this, c));
          var e = tb(this.g, d);
          if (e instanceof pa) return e
      },
      Ld = function(a, b) {
          return B(this, a) < B(this, b)
      },
      Md = function(a, b) {
          return B(this, a) <= B(this, b)
      },
      Nd = function(a, b) {
          return B(this, a) % B(this, b)
      },
      Od = function(a, b) {
          return B(this, a) * B(this, b)
      },
      Pd = function(a) {
          return -B(this,
              a)
      },
      Qd = function(a) {
          return !B(this, a)
      },
      Rd = function(a, b) {
          return !md.call(this, a, b)
      },
      Sd = function() {
          return null
      },
      Td = function(a, b) {
          return B(this, a) || B(this, b)
      },
      Ud = function(a, b) {
          var c = B(this, a);
          B(this, b);
          return c
      },
      Vd = function(a) {
          return B(this, a)
      },
      Wd = function(a) {
          return Array.prototype.slice.apply(arguments)
      },
      Xd = function(a) {
          return new pa("return", B(this, a))
      },
      de = function(a, b, c) {
          a = B(this, a);
          b = B(this, b);
          c = B(this, c);
          if (null === a || void 0 === a) throw Error("TypeError: Can't set property " + b + " of " + a + ".");
          (a instanceof qb || a instanceof va || a instanceof ub) && a.set(b, c);
          return c
      },
      ee = function(a, b) {
          return B(this, a) - B(this, b)
      },
      fe = function(a, b, c) {
          a = B(this, a);
          var d = B(this, b),
              e = B(this, c);
          if (!Ka(d) || !Ka(e)) throw Error("Error: Malformed switch instruction.");
          for (var f, g = !1, h = 0; h < d.length; h++)
              if (g || a === B(this, d[h]))
                  if (f = B(this, e[h]), f instanceof pa) {
                      var k = f.g;
                      if ("break" === k) return;
                      if ("return" === k || "continue" === k) return f
                  } else g = !0;
          if (e.length === d.length + 1 && (f = B(this, e[e.length - 1]), f instanceof pa && ("return" === f.g || "continue" ===
                  f.g))) return f
      },
      ge = function(a, b, c) {
          return B(this, a) ? B(this, b) : B(this, c)
      },
      he = function(a) {
          a = B(this, a);
          return a instanceof qb ? "function" : typeof a
      },
      ie = function(a) {
          for (var b = this.g, c = 0; c < arguments.length; c++) {
              var d = arguments[c];
              "string" !== typeof d || b.add(d, void 0)
          }
      },
      je = function(a, b, c, d) {
          var e = B(this, d);
          if (B(this, c)) {
              var f = tb(this.g, e);
              if (f instanceof pa) {
                  if ("break" === f.g) return;
                  if ("return" === f.g) return f
              }
          }
          for (; B(this, a);) {
              var g = tb(this.g, e);
              if (g instanceof pa) {
                  if ("break" === g.g) break;
                  if ("return" === g.g) return g
              }
              B(this,
                  b)
          }
      },
      ke = function(a) {
          return ~Number(B(this, a))
      },
      le = function(a, b) {
          return Number(B(this, a)) << Number(B(this, b))
      },
      me = function(a, b) {
          return Number(B(this, a)) >> Number(B(this, b))
      },
      ne = function(a, b) {
          return Number(B(this, a)) >>> Number(B(this, b))
      },
      oe = function(a, b) {
          return Number(B(this, a)) & Number(B(this, b))
      },
      pe = function(a, b) {
          return Number(B(this, a)) ^ Number(B(this, b))
      },
      qe = function(a, b) {
          return Number(B(this, a)) | Number(B(this, b))
      };
  var se = function() {
      this.g = new wb;
      re(this)
  };
  se.prototype.execute = function(a) {
      return te(this.g.o(a))
  };
  var ue = function(a, b, c) {
          return te(a.g.C(b, c))
      },
      re = function(a) {
          var b = function(d, e) {
              yb(a.g, d, String(e))
          };
          b("control", 49);
          b("fn", 51);
          b("list", 7);
          b("map", 8);
          b("undefined", 44);
          var c = function(d, e) {
              xb(a.g, String(d), e)
          };
          c(0, Zc);
          c(1, $c);
          c(2, ad);
          c(3, ed);
          c(53, fd);
          c(4, gd);
          c(5, hd);
          c(52, id);
          c(6, jd);
          c(9, hd);
          c(50, kd);
          c(10, ld);
          c(12, md);
          c(13, nd);
          c(47, qd);
          c(54, rd);
          c(55, sd);
          c(63, Dd);
          c(64, ud);
          c(65, vd);
          c(66, Cd);
          c(15, Ed);
          c(16, Fd);
          c(17, Fd);
          c(18, Gd);
          c(19, Hd);
          c(20, Id);
          c(21, Jd);
          c(22, Kd);
          c(23, Ld);
          c(24, Md);
          c(25, Nd);
          c(26, Od);
          c(27,
              Pd);
          c(28, Qd);
          c(29, Rd);
          c(45, Sd);
          c(30, Td);
          c(32, Ud);
          c(33, Ud);
          c(34, Vd);
          c(35, Vd);
          c(46, Wd);
          c(36, Xd);
          c(43, de);
          c(37, ee);
          c(38, fe);
          c(39, ge);
          c(40, he);
          c(41, ie);
          c(42, je);
          c(58, ke);
          c(57, le);
          c(60, me);
          c(61, ne);
          c(56, oe);
          c(62, pe);
          c(59, qe)
      };

  function te(a) {
      if (a instanceof pa || a instanceof qb || a instanceof va || a instanceof ub || a instanceof Jc || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a) return a
  };
  var ve = function() {
      var a = function(b) {
          return {
              toString: function() {
                  return b
              }
          }
      };
      return {
          Oh: a("consent"),
          ne: a("consent_always_fire"),
          Rf: a("convert_case_to"),
          Sf: a("convert_false_to"),
          Tf: a("convert_null_to"),
          Uf: a("convert_true_to"),
          Vf: a("convert_undefined_to"),
          pk: a("debug_mode_metadata"),
          rk: a("event_data_overrides"),
          Eb: a("function"),
          yi: a("instance_name"),
          Ci: a("live_only"),
          Di: a("malware_disabled"),
          Ei: a("metadata"),
          uk: a("original_activity_id"),
          vk: a("original_vendor_template_id"),
          Ii: a("once_per_event"),
          zg: a("once_per_load"),
          xk: a("priority_override"),
          yk: a("respected_consent_types"),
          Eg: a("setup_tags"),
          Gg: a("tag_id"),
          Hg: a("teardown_tags")
      }
  }();
  var Ye;
  var Ze = [],
      $e = [],
      af = [],
      bf = [],
      cf = [],
      df = {},
      ef, ff, gf, hf = function(a, b) {
          var c = {};
          c["function"] = "__" + a;
          for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
          return c
      },
      jf = function(a, b) {
          var c = a["function"],
              d = b && b.event;
          if (!c) throw Error("Error: No function name given for function call.");
          var e = df[c],
              f = {},
              g;
          for (g in a)
              if (a.hasOwnProperty(g))
                  if (0 === g.indexOf("vtp_")) e && d && d.Tg && d.Tg(a[g]), f[void 0 !== e ? g : g.substr(4)] = a[g];
                  else if (g === ve.ne.toString() && a[g]) {}
          e && d && d.Sg && (f.vtp_gtmCachedValues = d.Sg);
          return void 0 !== e ? e(f) : Ye(c, f, b)
      },
      lf = function(a, b, c) {
          c = c || [];
          var d = {},
              e;
          for (e in a) a.hasOwnProperty(e) && (d[e] = kf(a[e], b, c));
          return d
      },
      kf = function(a, b, c) {
          if (Ka(a)) {
              var d;
              switch (a[0]) {
                  case "function_id":
                      return a[1];
                  case "list":
                      d = [];
                      for (var e = 1; e < a.length; e++) d.push(kf(a[e], b, c));
                      return d;
                  case "macro":
                      var f = a[1];
                      if (c[f]) return;
                      var g = Ze[f];
                      if (!g || b.uf(g)) return;
                      c[f] = !0;
                      try {
                          var h = lf(g, b, c);
                          h.vtp_gtmEventId = b.id;
                          d = jf(h, {
                              event: b,
                              index: f,
                              type: 2
                          });
                          gf && (d = gf.Zi(d, h))
                      } catch (y) {
                          b.nh && b.nh(y, Number(f)), d = !1
                      }
                      c[f] = !1;
                      return d;
                  case "map":
                      d = {};
                      for (var k = 1; k < a.length; k += 2) d[kf(a[k], b, c)] = kf(a[k + 1], b, c);
                      return d;
                  case "template":
                      d = [];
                      for (var n = !1, p = 1; p < a.length; p++) {
                          var r = kf(a[p], b, c);
                          ff && (n = n || r === ff.Hd);
                          d.push(r)
                      }
                      return ff && n ? ff.cj(d) : d.join("");
                  case "escape":
                      d = kf(a[1], b, c);
                      if (ff && Ka(a[1]) && "macro" ===
                          a[1][0] && ff.wj(a)) return ff.Oj(d);
                      d = String(d);
                      for (var u = 2; u < a.length; u++) we[a[u]] && (d = we[a[u]](d));
                      return d;
                  case "tag":
                      var t = a[1];
                      if (!bf[t]) throw Error("Unable to resolve tag reference " + t + ".");
                      return d = {
                          Zg: a[2],
                          index: t
                      };
                  case "zb":
                      var q = {
                          arg0: a[2],
                          arg1: a[3],
                          ignore_case: a[5]
                      };
                      q["function"] = a[1];
                      var v = mf(q, b, c),
                          w = !!a[4];
                      return w || 2 !== v ? w !== (1 === v) : null;
                  default:
                      throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
              }
          }
          return a
      },
      mf = function(a, b, c) {
          try {
              return ef(lf(a, b, c))
          } catch (d) {
              JSON.stringify(a)
          }
          return 2
      };
  var nf = function(a, b, c) {
      var d;
      d = Error.call(this);
      this.message = d.message;
      "stack" in d && (this.stack = d.stack);
      this.o = a;
      this.g = c
  };
  ma(nf, Error);

  function of (a, b) {
      if (Ka(a)) {
          Object.defineProperty(a, "context", {
              value: {
                  line: b[0]
              }
          });
          for (var c = 1; c < a.length; c++) of (a[c], b[c])
      }
  };
  var pf = function(a, b) {
      var c;
      c = Error.call(this);
      this.message = c.message;
      "stack" in c && (this.stack = c.stack);
      this.s = a;
      this.o = b;
      this.g = []
  };
  ma(pf, Error);
  var rf = function() {
      return function(a, b) {
          a instanceof pf || (a = new pf(a, qf));
          b && a.g.push(b);
          throw a;
      }
  };

  function qf(a) {
      if (!a.length) return a;
      a.push({
          id: "main",
          line: 0
      });
      for (var b = a.length - 1; 0 < b; b--) Ja(a[b].id) && a.splice(b++, 1);
      for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
      a.splice(0, 1);
      return a
  };
  var uf = function(a) {
          function b(u) {
              for (var t = 0; t < u.length; t++) d[u[t]] = !0
          }
          for (var c = [], d = [], e = sf(a), f = 0; f < $e.length; f++) {
              var g = $e[f],
                  h = tf(g, e);
              if (h) {
                  for (var k = g.add || [], n = 0; n < k.length; n++) c[k[n]] = !0;
                  b(g.block || [])
              } else null === h && b(g.block || []);
          }
          for (var p = [], r = 0; r < bf.length; r++) c[r] && !d[r] && (p[r] = !0);
          return p
      },
      tf = function(a, b) {
          for (var c = a["if"] || [], d = 0; d < c.length; d++) {
              var e = b(c[d]);
              if (0 === e) return !1;
              if (2 === e) return null
          }
          for (var f =
                  a.unless || [], g = 0; g < f.length; g++) {
              var h = b(f[g]);
              if (2 === h) return null;
              if (1 === h) return !1
          }
          return !0
      },
      sf = function(a) {
          var b = [];
          return function(c) {
              void 0 === b[c] && (b[c] = mf(af[c], a));
              return b[c]
          }
      };
  var vf = {
      Zi: function(a, b) {
          b[ve.Rf] && "string" === typeof a && (a = 1 == b[ve.Rf] ? a.toLowerCase() : a.toUpperCase());
          b.hasOwnProperty(ve.Tf) && null === a && (a = b[ve.Tf]);
          b.hasOwnProperty(ve.Vf) && void 0 === a && (a = b[ve.Vf]);
          b.hasOwnProperty(ve.Uf) && !0 === a && (a = b[ve.Uf]);
          b.hasOwnProperty(ve.Sf) && !1 === a && (a = b[ve.Sf]);
          return a
      }
  };
  var wf = function() {
      this.g = {}
  };

  function xf(a, b, c, d) {
      if (a)
          for (var e = 0; e < a.length; e++) {
              var f = void 0,
                  g = "A policy function denied the permission request";
              try {
                  f = a[e].call(void 0, b, c, d), g += "."
              } catch (h) {
                  g = "string" === typeof h ? g + (": " + h) : h instanceof Error ? g + (": " + h.message) : g + "."
              }
              if (!f) throw new nf(c, d, g);
          }
  }

  function yf(a, b, c) {
      return function() {
          var d = arguments[0];
          if (d) {
              var e = a.g[d],
                  f = a.g.all;
              if (e || f) {
                  var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                  xf(e, b, d, g);
                  xf(f, b, d, g)
              }
          }
      }
  };
  var Bf = function() {
          var a = data.permissions || {},
              b = L.I,
              c = this;
          this.o = new wf;
          this.g = {};
          var d = {},
              e = yf(this.o, b, function() {
                  var f = arguments[0];
                  return f && d[f] ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
              });
          Sa(a, function(f, g) {
              var h = {};
              Sa(g, function(k, n) {
                  var p = zf(k, n);
                  h[k] = p.assert;
                  d[k] || (d[k] = p.R)
              });
              c.g[f] = function(k, n) {
                  var p = h[k];
                  if (!p) throw Af(k, {}, "The requested permission " + k + " is not configured.");
                  var r = Array.prototype.slice.call(arguments, 0);
                  p.apply(void 0, r);
                  e.apply(void 0, r)
              }
          })
      },
      Df =
      function(a) {
          return Cf.g[a] || function() {}
      };

  function zf(a, b) {
      var c = hf(a, b);
      c.vtp_permissionName = a;
      c.vtp_createPermissionError = Af;
      try {
          return jf(c)
      } catch (d) {
          return {
              assert: function(e) {
                  throw new nf(e, {}, "Permission " + e + " is unknown.");
              },
              R: function() {
                  for (var e = {}, f = 0; f < arguments.length; ++f) e["arg" + (f + 1)] = arguments[f];
                  return e
              }
          }
      }
  }

  function Af(a, b, c) {
      return new nf(a, b, c)
  };
  var Ef = !1;
  var Ff = {};
  Ff.mk = Xa('');
  Ff.gj = Xa('');
  var Gf = Ef,
      Hf = Ff.gj,
      If = Ff.mk;
  var Jf = function(a, b) {
      var c = String(a);
      return c
  };
  var Of = function(a) {
          var b = {},
              c = 0;
          Sa(a, function(e, f) {
              if (void 0 !== f)
                  if (f = Jf(f, 100), Kf.hasOwnProperty(e)) b[Kf[e]] = Lf(f);
                  else if (Mf.hasOwnProperty(e)) {
                  var g = Mf[e],
                      h = Lf(f);
                  b.hasOwnProperty(g) || (b[g] = h)
              } else if ("category" === e)
                  for (var k = Lf(f).split("/", 5), n = 0; n < k.length; n++) {
                      var p = Nf[n],
                          r = k[n];
                      b.hasOwnProperty(p) || (b[p] = r)
                  } else 10 > c && (b["k" + c] = Lf(Jf(e, 40)), b["v" + c] = Lf(f), c++)
          });
          var d = [];
          Sa(b, function(e, f) {
              d.push("" + e + f)
          });
          return d.join("~")
      },
      Lf = function(a) {
          return ("" + a).replace(/~/g, function() {
              return "~~"
          })
      },
      Kf = {
          item_id: "id",
          item_name: "nm",
          item_brand: "br",
          item_category: "ca",
          item_category2: "c2",
          item_category3: "c3",
          item_category4: "c4",
          item_category5: "c5",
          item_variant: "va",
          price: "pr",
          quantity: "qt",
          coupon: "cp",
          item_list_name: "ln",
          index: "lp",
          item_list_id: "li",
          discount: "ds",
          affiliation: "af",
          promotion_id: "pi",
          promotion_name: "pn",
          creative_name: "cn",
          creative_slot: "cs",
          location_id: "lo"
      },
      Mf = {
          id: "id",
          name: "nm",
          brand: "br",
          variant: "va",
          list_name: "ln",
          list_position: "lp",
          list: "ln",
          position: "lp",
          creative: "cn"
      },
      Nf = ["ca",
          "c2", "c3", "c4", "c5"
      ];
  var Pf = function(a) {
          var b = [];
          Sa(a, function(c, d) {
              null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d)))
          });
          return b.join("&")
      },
      Qf = function(a, b, c, d) {
          this.Fa = a.Fa;
          this.Ob = a.Ob;
          this.M = a.M;
          this.o = b;
          this.C = c;
          this.s = Pf(a.Fa);
          this.g = Pf(a.M);
          this.F = d ? this.g.length : 0;
          if (16384 < this.F) throw Error("EVENT_TOO_LARGE");
      };
  var Rf = function() {
      this.events = [];
      this.g = this.Fa = "";
      this.s = 0;
      this.o = !1
  };
  Rf.prototype.add = function(a) {
      return this.C(a) ? (this.events.push(a), this.Fa = a.s, this.g = a.o, this.s += a.F, this.o = a.C, !0) : !1
  };
  Rf.prototype.C = function(a) {
      var b = 20 > this.events.length && 16384 > a.F + this.s,
          c = this.Fa === a.s && this.g === a.o && this.o === a.C;
      return 0 == this.events.length || b && c
  };
  var Sf = function(a, b) {
          Sa(a, function(c, d) {
              null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d))
          })
      },
      Tf = function(a, b) {
          var c = [];
          a.s && c.push(a.s);
          b && c.push("_s=" + b);
          Sf(a.Ob, c);
          var d = !1;
          a.g && (c.push(a.g), d = !0);
          var e = c.join("&"),
              f = "",
              g = e.length + a.o.length + 1;
          d && 2048 < g && (f = c.pop(), e = c.join("&"));
          return {
              Ef: e,
              body: f
          }
      },
      Uf = function(a, b) {
          var c = a.events;
          if (1 == c.length) return Tf(c[0], b);
          var d = [];
          a.Fa && d.push(a.Fa);
          for (var e = {}, f = 0; f < c.length; f++) Sa(c[f].Ob, function(t, q) {
              null != q && (e[t] = e[t] || {}, e[t][String(q)] =
                  e[t][String(q)] + 1 || 1)
          });
          var g = {};
          Sa(e, function(t, q) {
              var v, w = -1,
                  y = 0;
              Sa(q, function(x, z) {
                  y += z;
                  var A = (x.length + t.length + 2) * (z - 1);
                  A > w && (v = x, w = A)
              });
              y == c.length && (g[t] = v)
          });
          Sf(g, d);
          b && d.push("_s=" + b);
          for (var h = d.join("&"), k = [], n = {}, p = 0; p < c.length; n = {
                  od: n.od
              }, p++) {
              var r = [];
              n.od = {};
              Sa(c[p].Ob, function(t) {
                  return function(q, v) {
                      g[q] != "" + v && (t.od[q] = v)
                  }
              }(n));
              c[p].g && r.push(c[p].g);
              Sf(n.od, r);
              k.push(r.join("&"))
          }
          var u = k.join("\r\n");
          return {
              Ef: h,
              body: u
          }
      };
  var hg = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,
      ig = {
          Fn: "function",
          DustMap: "Object",
          List: "Array"
      },
      O = function(a, b, c) {
          for (var d = 0; d < b.length; d++) {
              var e = hg.exec(b[d]);
              if (!e) throw Error("Internal Error in " + a);
              var f = e[1],
                  g = "!" === e[2],
                  h = e[3],
                  k = c[d],
                  n = typeof k;
              if (null === k || "undefined" === n) {
                  if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
              } else if ("*" !== h) {
                  var p = typeof k;
                  k instanceof qb ? p = "Fn" : k instanceof va ? p = "List" : k instanceof ub ? p = "DustMap" :
                      k instanceof Jc && (p = "OpaqueValue");
                  if (p != h) throw Error("Error in " + a + ". Argument " + f + " has type " + p + ", which does not match required type " + (ig[h] || h) + ".");
              }
          }
      };

  function jg(a) {
      return "" + a
  }

  function kg(a, b) {
      var c = [];
      return c
  };
  var lg = function(a, b) {
          var c = new qb(a, function() {
              for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = B(this, d[e]);
              return b.apply(this, d)
          });
          c.Gb();
          return c
      },
      mg = function(a, b) {
          var c = new ub,
              d;
          for (d in b)
              if (b.hasOwnProperty(d)) {
                  var e = b[d];
                  Fa(e) ? c.set(d, lg(a + "_" + d, e)) : (Ja(e) || Ia(e) || "boolean" == typeof e) && c.set(d, e)
              } c.Gb();
          return c
      };
  var ng = function(a, b) {
      O(G(this), ["apiName:!string", "message:?string"], arguments);
      var c = {},
          d = new ub;
      return d = mg("AssertApiSubject", c)
  };
  var og = function(a, b) {
      O(G(this), ["actual:?*", "message:?string"], arguments);
      var c = {},
          d = new ub;
      return d = mg("AssertThatSubject", c)
  };

  function pg(a) {
      return function() {
          for (var b = [], c = this.g, d = 0; d < arguments.length; ++d) b.push(Sc(arguments[d], c));
          return Rc(a.apply(null, b))
      }
  }
  var rg = function() {
      for (var a = Math, b = qg, c = {}, d = 0; d < b.length; d++) {
          var e = b[d];
          a.hasOwnProperty(e) && (c[e] = pg(a[e].bind(a)))
      }
      return c
  };
  var sg = function(a) {
      var b;
      return b
  };
  var tg = function(a) {
      var b;
      return b
  };
  var ug = function(a) {
      return encodeURI(a)
  };
  var vg = function(a) {
      return encodeURIComponent(a)
  };
  var wg = function(a) {
      O(G(this), ["message:?string"], arguments);
  };
  var xg = function(a, b) {
      O(G(this), ["min:!number", "max:!number"], arguments);
      return Na(a, b)
  };
  var P = function(a, b, c) {
      var d = a.g.g;
      if (!d) throw Error("Missing program state.");
      d.Ti.apply(null, Array.prototype.slice.call(arguments, 1))
  };
  var yg = function() {
      P(this, "read_container_data");
      var a = new ub;
      a.set("containerId", 'G-2SSGMHY3NP');
      a.set("version", '1');
      a.set("environmentName", '');
      a.set("debugMode", Gf);
      a.set("previewMode", If);
      a.set("environmentMode", Hf);
      a.Gb();
      return a
  };
  var zg = {};
  zg.sstECEnableData = !0;
  zg.enableAdsEc = !0;
  zg.sstFFConversionEnabled = !0;
  zg.sstEnableAuid = !0;
  zg.enableGbraidUpdate = !0;
  zg.enable1pScripts = !0;
  zg.requireGtagUserDataTos = !0;
  zg.enableGlobalEventDeveloperIds = !1;
  zg.enableLandingPageBeaconRollback = !1;
  zg.enableGa4OnoRemarketing = !1;
  zg.omitAuidIfWbraidPresent = !1;

  function Ag() {
      return Rc(zg)
  };
  var Bg = function() {
      return (new Date).getTime()
  };
  var Cg = function(a) {
      if (null === a) return "null";
      if (a instanceof va) return "array";
      if (a instanceof qb) return "function";
      if (a instanceof Jc) {
          a = a.Wa;
          if (void 0 === a.constructor || void 0 === a.constructor.name) {
              var b = String(a);
              return b.substring(8, b.length - 1)
          }
          return String(a.constructor.name)
      }
      return typeof a
  };
  var Dg = function(a) {
      function b(c) {
          return function(d) {
              try {
                  return c(d)
              } catch (e) {
                  (Gf || If) && a.call(this, e.message)
              }
          }
      }
      return {
          parse: b(function(c) {
              return Rc(JSON.parse(c))
          }),
          stringify: b(function(c) {
              return JSON.stringify(Sc(c))
          })
      }
  };
  var Eg = function(a) {
      return Ua(Sc(a, this.g))
  };
  var Fg = function(a) {
      return Number(Sc(a, this.g))
  };
  var Gg = function(a) {
      return null === a ? "null" : void 0 === a ? "undefined" : a.toString()
  };
  var Hg = function(a, b, c) {
      var d = null,
          e = !1;
      return e ? d : null
  };
  var qg = "floor ceil round max min abs pow sqrt".split(" ");
  var Ig = function() {
          var a = {};
          return {
              nj: function(b) {
                  return a.hasOwnProperty(b) ? a[b] : void 0
              },
              fk: function(b, c) {
                  a[b] = c
              },
              reset: function() {
                  a = {}
              }
          }
      },
      Jg = function(a, b) {
          O(G(this), ["apiName:!string", "mock:?*"], arguments);
      };
  var Kg = {};
  Kg.keys = function(a) {
      return new va
  };
  Kg.values = function(a) {
      return new va
  };
  Kg.entries = function(a) {
      return new va
  };
  Kg.freeze = function(a) {
      return a
  };
  Kg.delete = function(a, b) {
      return !1
  };
  var Mg = function() {
      this.g = {};
      this.o = {};
  };
  Mg.prototype.get = function(a, b) {
      var c = this.g.hasOwnProperty(a) ? this.g[a] : void 0;
      return c
  };
  Mg.prototype.add = function(a, b, c) {
      if (this.g.hasOwnProperty(a)) throw "Attempting to add a function which already exists: " + a + ".";
      if (this.o.hasOwnProperty(a)) throw "Attempting to add an API with an existing private API name: " + a + ".";
      this.g[a] = c ? void 0 : Fa(b) ? lg(a, b) : mg(a, b)
  };
  var Og = function(a, b, c) {
      if (a.o.hasOwnProperty(b)) throw "Attempting to add a private function which already exists: " + b + ".";
      if (a.g.hasOwnProperty(b)) throw "Attempting to add a private function with an existing API name: " + b + ".";
      a.o[b] = Fa(c) ? lg(b, c) : mg(b, c)
  };

  function Ng(a, b) {
      var c = void 0;
      return c
  };

  function Pg() {
      var a = {};
      return a
  };
  var R = {
      cc: "_ee",
      Nd: "_syn_or_mod",
      Ak: "_uei",
      Qe: "_eu",
      wk: "_pci",
      $b: "event_callback",
      wd: "event_timeout",
      Ba: "gtag.config",
      Ra: "gtag.get",
      za: "purchase",
      Wb: "refund",
      xb: "begin_checkout",
      Ub: "add_to_cart",
      Vb: "remove_from_cart",
      Xh: "view_cart",
      Xf: "add_to_wishlist",
      Aa: "view_item",
      yb: "view_promotion",
      sd: "select_promotion",
      se: "select_item",
      eb: "view_item_list",
      Wf: "add_payment_info",
      Wh: "add_shipping_info",
      Ta: "value_key",
      hb: "value_callback",
      U: "allow_ad_personalization_signals",
      Ec: "restricted_data_processing",
      zc: "allow_google_signals",
      va: "cookie_expires",
      Yb: "cookie_update",
      Fc: "session_duration",
      Bd: "session_engaged_time",
      Va: "user_properties",
      wa: "transport_url",
      X: "ads_data_redaction",
      Da: "user_data",
      Cc: "first_party_collection",
      D: "ad_storage",
      J: "analytics_storage",
      oe: "region",
      Qf: "wait_for_update",
      sa: "conversion_linker",
      Ia: "conversion_cookie_prefix",
      ka: "value",
      ja: "currency",
      vg: "trip_type",
      da: "items",
      mg: "passengers",
      ve: "allow_custom_scripts",
      Gc: "session_id",
      rg: "quantity",
      jb: "transaction_id",
      Bb: "language",
      ud: "country",
      td: "allow_enhanced_conversions",
      Ae: "aw_merchant_id",
      ye: "aw_feed_country",
      ze: "aw_feed_language",
      xe: "discount",
      aa: "developer_id",
      Cd: "delivery_postal_code",
      Ge: "estimated_delivery_date",
      Ee: "shipping",
      Me: "new_customer",
      Be: "customer_lifetime_value",
      Fe: "enhanced_conversions",
      yc: "page_view",
      na: "linker",
      P: "domains",
      bc: "decorate_forms",
      hg: "enhanced_conversions_automatic_settings",
      di: "auto_detection_enabled",
      ig: "ga_temp_client_id",
      te: "user_engagement",
      Rh: "app_remove",
      Sh: "app_store_refund",
      Th: "app_store_subscription_cancel",
      Uh: "app_store_subscription_convert",
      Vh: "app_store_subscription_renew",
      Yh: "first_open",
      Zh: "first_visit",
      $h: "in_app_purchase",
      ai: "session_start",
      bi: "allow_display_features",
      Ac: "campaign",
      Yf: "campaign_content",
      Zf: "campaign_id",
      $f: "campaign_medium",
      ag: "campaign_name",
      bg: "campaign_source",
      cg: "campaign_term",
      zb: "client_id",
      ma: "cookie_domain",
      Xb: "cookie_name",
      fb: "cookie_path",
      Ja: "cookie_flags",
      Bc: "custom_map",
      Je: "groups",
      lg: "non_interaction",
      Cb: "page_location",
      Ne: "page_path",
      Ua: "page_referrer",
      zd: "page_title",
      oa: "send_page_view",
      Db: "send_to",
      Oe: "session_engaged",
      jg: "_logged_in_state",
      Pe: "session_number",
      ui: "tracking_id",
      kb: "url_passthrough",
      ac: "accept_incoming",
      Dc: "url_position",
      pg: "phone_conversion_number",
      ng: "phone_conversion_callback",
      og: "phone_conversion_css_class",
      qg: "phone_conversion_options",
      oi: "phone_conversion_ids",
      ni: "phone_conversion_country_code",
      Sa: "aw_remarketing",
      we: "aw_remarketing_only",
      ue: "gclid",
      ci: "auid",
      ii: "affiliation",
      gg: "tax",
      De: "list_name",
      fg: "checkout_step",
      eg: "checkout_option",
      ji: "coupon",
      ki: "promotions",
      lb: "user_id",
      ri: "retoken",
      Ca: "cookie_prefix",
      dg: "disable_merchant_reported_purchases",
      hi: "dc_natural_search",
      gi: "dc_custom_params",
      kg: "method",
      si: "search_term",
      fi: "content_type",
      mi: "optimize_id",
      li: "experiments",
      ib: "google_signals"
  };
  R.yd = "google_tld";
  R.Dd = "update";
  R.He = "firebase_id";
  R.Ie = "ga_restrict_domain";
  R.vd = "event_settings";
  R.Ce = "dynamic_event_settings";
  R.Hc = "user_data_settings";
  R.sg = "screen_name";
  R.Ab = "_x_19";
  R.Zb = "_ecid";
  R.xd = "_x_20";
  R.Le = "internal_traffic_results";
  R.ug = "traffic_type";
  R.Ad = "referral_exclusion_definition";
  R.Ke = "ignore_referrer";
  R.ei = "content_group";
  R.ia = "allow_interest_groups";
  var Qg = {};
  R.vi = Object.freeze((Qg[R.U] = 1, Qg[R.td] = 1, Qg[R.zc] = 1, Qg[R.da] = 1, Qg[R.ma] = 1, Qg[R.va] = 1, Qg[R.Ja] = 1, Qg[R.Xb] = 1, Qg[R.fb] = 1, Qg[R.Ca] = 1, Qg[R.Yb] = 1, Qg[R.Bc] = 1, Qg[R.aa] = 1, Qg[R.Ce] = 1, Qg[R.$b] = 1, Qg[R.vd] = 1, Qg[R.wd] = 1, Qg[R.Cc] = 1, Qg[R.Ie] = 1, Qg[R.ib] = 1, Qg[R.yd] = 1, Qg[R.Je] = 1, Qg[R.Le] = 1, Qg[R.na] = 1, Qg[R.Ad] = 1, Qg[R.Ec] = 1, Qg[R.oa] = 1, Qg[R.Db] = 1, Qg[R.Fc] = 1, Qg[R.Bd] = 1, Qg[R.Cd] = 1, Qg[R.wa] = 1, Qg[R.Dd] = 1, Qg[R.Hc] = 1, Qg[R.Va] = 1, Qg[R.Qe] = 1, Qg));
  R.wg = Object.freeze([R.Cb, R.Ua, R.zd, R.Bb, R.sg, R.lb, R.He, R.ei]);
  var Rg = {};
  R.xi = Object.freeze((Rg[R.Rh] = 1, Rg[R.Sh] = 1, Rg[R.Th] = 1, Rg[R.Uh] = 1, Rg[R.Vh] = 1, Rg[R.Yh] = 1, Rg[R.Zh] = 1, Rg[R.$h] = 1, Rg[R.ai] = 1, Rg[R.te] = 1, Rg));
  var Sg = {};
  R.xg = Object.freeze((Sg[R.Wf] = 1, Sg[R.Wh] = 1, Sg[R.Ub] = 1, Sg[R.Vb] = 1, Sg[R.Xh] = 1, Sg[R.xb] = 1, Sg[R.se] = 1, Sg[R.eb] = 1, Sg[R.sd] = 1, Sg[R.yb] = 1, Sg[R.za] = 1, Sg[R.Wb] = 1, Sg[R.Aa] = 1, Sg[R.Xf] = 1, Sg));
  R.Se = Object.freeze([R.U, R.zc, R.Yb]);
  R.Gi = Object.freeze([].concat(R.Se));
  R.Te = Object.freeze([R.va, R.wd, R.Fc, R.Bd]);
  R.Hi = Object.freeze([].concat(R.Te));
  var Ug = {},
      Vg = function(a, b) {
          Ug[a] = Ug[a] || [];
          Ug[a][b] = !0
      },
      Wg = function(a) {
          for (var b = [], c = Ug[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
          for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
          return b.join("")
      };
  var Xg = function(a) {
      Vg("GTM", a)
  };
  var L = {},
      Yg = null,
      Zg = Math.random();
  L.I = "G-2SSGMHY3NP";
  L.Ld = "1a0";
  L.Z = "dataLayer";
  L.Qh = "ChAIgJX6jgYQ9NWbicm02cI3EiUAzmpJAkRqOFlm9zz2vr42JSkM4AfsVqDHZsGHN+wZWpRh4bGEGgJQrw\x3d\x3d";
  var $g = {
          __cl: !0,
          __ecl: !0,
          __ehl: !0,
          __evl: !0,
          __fal: !0,
          __fil: !0,
          __fsl: !0,
          __hl: !0,
          __jel: !0,
          __lcl: !0,
          __sdl: !0,
          __tl: !0,
          __ytl: !0
      },
      ah = {
          __paused: !0,
          __tg: !0
      },
      bh;
  for (bh in $g) $g.hasOwnProperty(bh) && (ah[bh] = !0);
  L.pe = "www.googletagmanager.com";
  var ch = L.pe + "/gtm.js";
  ch = L.pe + "/gtag/js";
  var dh = ch,
      eh = Xa(""),
      fh = null,
      gh = null,
      hh = "https://www.googletagmanager.com/a?id=" + L.I + "&cv=1",
      ih = {},
      jh = {},
      kh = function() {
          var a = Yg.sequence || 1;
          Yg.sequence = a + 1;
          return a
      };
  L.Ph = "";
  var lh = "";
  L.Md = lh;
  var mh = {},
      nh = new Qa,
      oh = {},
      ph = {},
      sh = {
          name: L.Z,
          set: function(a, b) {
              Qc(kb(a, b), oh);
              qh()
          },
          get: function(a) {
              return rh(a, 2)
          },
          reset: function() {
              nh = new Qa;
              oh = {};
              qh()
          }
      },
      rh = function(a, b) {
          return 2 != b ? nh.get(a) : th(a)
      },
      th = function(a, b) {
          var c = a.split(".");
          b = b || [];
          for (var d = oh, e = 0; e < c.length; e++) {
              if (null === d) return !1;
              if (void 0 === d) break;
              d = d[c[e]];
              if (-1 !== b.indexOf(d)) return
          }
          return d
      },
      uh = function(a, b) {
          ph.hasOwnProperty(a) || (nh.set(a, b), Qc(kb(a, b), oh), qh())
      },
      vh = function() {
          for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist",
                  "gtm.blacklist", "tagTypeBlacklist"
              ], b = 0; b < a.length; b++) {
              var c = a[b],
                  d = rh(c, 1);
              if (Ka(d) || Pc(d)) d = Qc(d);
              ph[c] = d
          }
      },
      qh = function(a) {
          Sa(ph, function(b, c) {
              nh.set(b, c);
              Qc(kb(b, void 0), oh);
              Qc(kb(b, c), oh);
              a && delete ph[b]
          })
      },
      xh = function(a, b, c) {
          mh[a] = mh[a] || {};
          mh[a][b] = wh(b, c)
      },
      wh = function(a, b) {
          var c, d = 1 !== (void 0 === b ? 2 : b) ? th(a) : nh.get(a);
          "array" === Nc(d) || "object" === Nc(d) ? c = Qc(d) : c = d;
          return c
      },
      yh = function(a, b) {
          if (mh[a]) return mh[a][b]
      },
      zh = function(a, b) {
          mh[a] && delete mh[a][b]
      };
  var Ah = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
      Bh = {
          cl: ["ecl"],
          customPixels: ["nonGooglePixels"],
          ecl: ["cl"],
          ehl: ["hl"],
          hl: ["ehl"],
          html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
          customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
          nonGooglePixels: [],
          nonGoogleScripts: ["nonGooglePixels"],
          nonGoogleIframes: ["nonGooglePixels"]
      },
      Ch = {
          cl: ["ecl"],
          customPixels: ["customScripts", "html"],
          ecl: ["cl"],
          ehl: ["hl"],
          hl: ["ehl"],
          html: ["customScripts"],
          customScripts: ["html"],
          nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
          nonGoogleScripts: ["customScripts", "html"],
          nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
      },
      Dh = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
  var Eh = function() {
          var a = !1;
          a = !0;
          return a
      },
      Gh = function(a) {
          var b = rh("gtm.allowlist") || rh("gtm.whitelist");
          b && Xg(9);
          Eh() && (b = "google gtagfl lcl zone oid op".split(" "));
          var c = b && ib(Ya(b), Bh),
              d = rh("gtm.blocklist") ||
              rh("gtm.blacklist");
          d || (d = rh("tagTypeBlacklist")) && Xg(3);
          d ? Xg(8) : d = [];
          Fh() && (d = Ya(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
          0 <= Ya(d).indexOf("google") && Xg(2);
          var e = d && ib(Ya(d), Ch),
              f = {};
          return function(g) {
              var h = g && g[ve.Eb];
              if (!h || "string" != typeof h) return !0;
              h = h.replace(/^_*/, "");
              if (void 0 !== f[h]) return f[h];
              var k = jh[h] || [],
                  n = a(h, k);
              if (b) {
                  var p;
                  if (p = n) a: {
                      if (0 > c.indexOf(h))
                          if (k && 0 < k.length)
                              for (var r = 0; r < k.length; r++) {
                                  if (0 > c.indexOf(k[r])) {
                                      Xg(11);
                                      p = !1;
                                      break a
                                  }
                              } else {
                                  p = !1;
                                  break a
                              }
                      p = !0
                  }
                  n = p
              }
              var u = !1;
              if (d) {
                  var t = 0 <= e.indexOf(h);
                  if (t) u = t;
                  else {
                      var q = Ra(e, k || []);
                      q && Xg(10);
                      u = q
                  }
              }
              var v = !n || u;
              v || !(0 <= k.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = Ra(e, Dh));
              return f[h] = v
          }
      },
      Fh = function() {
          return Ah.test(m.location && m.location.hostname)
      };
  var Hh = {
          active: !0,
          isAllowed: function() {
              return !0
          }
      },
      Ih = function(a) {
          var b = Yg.zones;
          return b ? b.checkState(L.I, a) : Hh
      },
      Jh = function(a) {
          var b = Yg.zones;
          !b && a && (b = Yg.zones = a());
          return b
      };
  var Kh = new function(a, b) {
      this.g = a;
      this.defaultValue = void 0 === b ? !1 : b
  }(1933);
  var Mh = function() {
      var a = Lh,
          b = "sf";
      if (a.sf && a.hasOwnProperty(b)) return a.sf;
      var c = new a;
      a.sf = c;
      a.hasOwnProperty(b);
      return c
  };
  var Lh = function() {
      var a = {};
      this.g = function() {
          var b = Kh.g,
              c = Kh.defaultValue;
          return null != a[b] ? a[b] : c
      };
      this.o = function() {
          a[Kh.g] = !0
      }
  };
  var Nh = [];

  function Oh() {
      var a = dc("google_tag_data", {});
      a.ics || (a.ics = {
          entries: {},
          set: Ph,
          update: Qh,
          addListener: Rh,
          notifyListeners: Sh,
          active: !1,
          usedDefault: !1,
          usedUpdate: !1,
          accessedDefault: !1,
          accessedAny: !1,
          wasSetLate: !1
      });
      return a.ics
  }

  function Ph(a, b, c, d, e, f) {
      var g = Oh();
      g.usedUpdate && (g.wasSetLate = !0);
      if (g.accessedDefault || g.accessedAny) g.wasSetLate = !0;
      g.active = !0;
      g.usedDefault = !0;
      if (void 0 != b) {
          var h = g.entries,
              k = h[a] || {},
              n = k.region,
              p = c && Ia(c) ? c.toUpperCase() : void 0;
          d = d.toUpperCase();
          e = e.toUpperCase();
          if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
              var r = !!(f && 0 < f && void 0 === k.update),
                  u = {
                      region: p,
                      initial: "granted" === b,
                      update: k.update,
                      quiet: r
                  };
              if ("" !== d || !1 !== k.initial) h[a] = u;
              r && m.setTimeout(function() {
                  h[a] === u && u.quiet && (u.quiet = !1, Th(a),
                      Sh(), Vg("TAGGING", 2))
              }, f)
          }
      }
  }

  function Qh(a, b) {
      var c = Oh();
      c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
      c.active = !0;
      c.usedUpdate = !0;
      if (void 0 != b) {
          var d = Uh(a),
              e = c.entries,
              f = e[a] = e[a] || {};
          f.update = "granted" === b;
          var g = Uh(a);
          f.quiet ? (f.quiet = !1, Th(a)) : g !== d && Th(a)
      }
  }

  function Rh(a, b) {
      Nh.push({
          ff: a,
          jj: b
      })
  }

  function Th(a) {
      for (var b = 0; b < Nh.length; ++b) {
          var c = Nh[b];
          Ka(c.ff) && -1 !== c.ff.indexOf(a) && (c.sh = !0)
      }
  }

  function Sh(a) {
      for (var b = 0; b < Nh.length; ++b) {
          var c = Nh[b];
          if (c.sh) {
              c.sh = !1;
              try {
                  c.jj({
                      consentEventId: a
                  })
              } catch (d) {}
          }
      }
  }
  var Uh = function(a) {
          var b = Oh();
          b.accessedAny = !0;
          var c = b.entries[a] || {};
          return void 0 !== c.update ? c.update : c.initial
      },
      Vh = function(a) {
          var b = Oh();
          b.accessedDefault = !0;
          return (b.entries[a] || {}).initial
      },
      Wh = function(a) {
          var b = Oh();
          b.accessedAny = !0;
          return !(b.entries[a] || {}).quiet
      },
      Xh = function() {
          if (!Mh().g()) return !1;
          var a = Oh();
          a.accessedAny = !0;
          return a.active
      },
      Yh = function() {
          var a = Oh();
          a.accessedDefault = !0;
          return a.usedDefault
      },
      ai = function(a, b) {
          Oh().addListener(a, b)
      },
      bi = function(a) {
          Oh().notifyListeners(a)
      },
      ci = function(a, b) {
          function c() {
              for (var e = 0; e < b.length; e++)
                  if (!Wh(b[e])) return !0;
              return !1
          }
          if (c()) {
              var d = !1;
              ai(b, function(e) {
                  d || c() || (d = !0, a(e))
              })
          } else a({})
      },
      di = function(a, b) {
          function c() {
              for (var f = [], g = 0; g < d.length; g++) {
                  var h = d[g];
                  !1 === Uh(h) || e[h] || (f.push(h), e[h] = !0)
              }
              return f
          }
          var d = Ia(b) ? [b] : b,
              e = {};
          c().length !== d.length && ai(d, function(f) {
              var g = c();
              0 < g.length && (f.ff = g, a(f))
          })
      };

  function ei() {}

  function fi() {};

  function gi(a) {
      for (var b = [], c = 0; c < hi.length; c++) {
          var d = a(hi[c]);
          b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
      }
      return b.join("")
  }
  var hi = [R.D, R.J],
      ii = function(a) {
          var b = a[R.oe];
          b && Xg(40);
          var c = a[R.Qf];
          c && Xg(41);
          for (var d = Ka(b) ? b : [b], e = {
                  sc: 0
              }; e.sc < d.length; e = {
                  sc: e.sc
              }, ++e.sc) Sa(a, function(f) {
              return function(g, h) {
                  if (g !== R.oe && g !== R.Qf) {
                      var k = d[f.sc];
                      Oh().set(g, h, k, "TR", "TR-34", c)
                  }
              }
          }(e))
      },
      ji = 0,
      ki = function(a, b) {
          Sa(a, function(e, f) {
              Oh().update(e, f)
          });
          bi(b);
          var c = db(),
              d = c - ji;
          ji && 0 <= d && 1E3 > d && Xg(66);
          ji = c
      },
      li = function(a) {
          var b = Uh(a);
          return void 0 != b ? b : !0
      },
      mi = function() {
          return "G1" + gi(Uh)
      },
      ni = function() {
          return "G1" +
              gi(Vh)
      },
      oi = function(a, b) {
          ai(a, b)
      },
      pi = function(a, b) {
          di(a, b)
      },
      qi = function(a, b) {
          ci(a, b)
      };
  var si = function(a) {
          return ri ? H.querySelectorAll(a) : null
      },
      ti = function(a, b) {
          if (!ri) return null;
          if (Element.prototype.closest) try {
              return a.closest(b)
          } catch (e) {
              return null
          }
          var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
              d = a;
          if (!H.documentElement.contains(d)) return null;
          do {
              try {
                  if (c.call(d, b)) return d
              } catch (e) {
                  break
              }
              d = d.parentElement || d.parentNode
          } while (null !== d && 1 === d.nodeType);
          return null
      },
      ui = !1;
  if (H.querySelectorAll) try {
      var vi = H.querySelectorAll(":root");
      vi && 1 == vi.length && vi[0] == H.documentElement && (ui = !0)
  } catch (a) {}
  var ri = ui;
  var wi = function(a) {
          return void 0 === a || null === a ? "" : Ia(a) ? ab(String(a)) : "e0"
      },
      yi = function(a) {
          return a.replace(xi, "")
      },
      Ai = function(a) {
          return zi(a.replace(/\s/g, ""))
      },
      zi = function(a) {
          return ab(a.replace(Bi, "").toLowerCase())
      },
      Di = function(a) {
          a = a.replace(/[\s-()/.]/g, "");
          "+" !== a.charAt(0) && (a = "+" + a);
          return Ci.test(a) ? a : "e0"
      },
      Fi = function(a) {
          var b = a.toLowerCase().split("@");
          if (2 == b.length) {
              var c = b[0];
              /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
              c = c + "@" + b[1];
              if (Ei.test(c)) return c
          }
          return "e0"
      },
      Ii = function(a, b) {
          window.Promise || b([]);
          Promise.all(a.map(function(c) {
              return c.value && -1 !== Gi.indexOf(c.name) ? Hi(c.value).then(function(d) {
                  c.value = d
              }) : Promise.resolve()
          })).then(function() {
              b(a)
          }).catch(function() {
              b([])
          })
      },
      Hi = function(a) {
          if ("" === a || "e0" === a) return Promise.resolve(a);
          if (m.crypto && m.crypto.subtle) try {
              var b = Ji(a);
              return m.crypto.subtle.digest("SHA-256", b).then(function(c) {
                  var d = Array.from(new Uint8Array(c)).map(function(e) {
                      return String.fromCharCode(e)
                  }).join("");
                  return m.btoa(d).replace(/\+/g,
                      "-").replace(/\//g, "_").replace(/=+$/, "")
              }).catch(function() {
                  return "e2"
              })
          } catch (c) {
              return Promise.resolve("e2")
          } else return Promise.resolve("e1")
      },
      Ji = function(a) {
          var b;
          if (m.TextEncoder) b = (new m.TextEncoder("utf-8")).encode(a);
          else {
              for (var c = [], d = 0; d < a.length; d++) {
                  var e = a.charCodeAt(d);
                  128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 | e >> 6 & 63, 128 | e & 63))
              }
              b = new Uint8Array(c)
          }
          return b
      },
      Bi = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
      Ei = /^\S+@\S+\.\S+$/,
      Ci = /^\+\d{11,15}$/,
      xi = /[.~]/g,
      Ki = {},
      Li = (Ki.email = "em", Ki.phone_number = "pn", Ki.first_name = "fn", Ki.last_name = "ln", Ki.street = "sa", Ki.city = "ct", Ki.region = "rg", Ki.country = "co", Ki.postal_code = "pc", Ki.error_code = "ec", Ki),
      Mi = function(a, b) {
          function c(n, p, r) {
              var u = n[p];
              Ka(u) || (u = [u]);
              for (var t = 0; t < u.length; ++t) {
                  var q = wi(u[t]);
                  "" !== q && f.push({
                      name: p,
                      value: r(q),
                      index: void 0
                  })
              }
          }

          function d(n, p, r, u) {
              var t = wi(n[p]);
              "" !== t && f.push({
                  name: p,
                  value: r(t),
                  index: u
              })
          }

          function e(n) {
              return function(p) {
                  Xg(64);
                  return n(p)
              }
          }
          var f = [];
          if ("https:" === m.location.protocol) {
              c(a, "email", Fi);
              c(a, "phone_number", Di);
              c(a, "first_name", e(Ai));
              c(a, "last_name", e(Ai));
              var g = a.home_address || {};
              c(g, "street", e(zi));
              c(g, "city", e(zi));
              c(g, "postal_code", e(yi));
              c(g, "region", e(zi));
              c(g, "country", e(yi));
              var h = a.address || {};
              Ka(h) || (h = [h]);
              for (var k = 0; k < h.length; k++) d(h[k], "first_name", Ai, k), d(h[k], "last_name", Ai, k), d(h[k], "street", zi, k), d(h[k], "city", zi, k), d(h[k], "postal_code", yi, k), d(h[k],
                  "region", zi, k), d(h[k], "country", yi, k);
              Ii(f, b)
          } else f.push({
              name: "error_code",
              value: "e3",
              index: void 0
          }), b(f)
      },
      Ni = function(a, b) {
          Mi(a, function(c) {
              for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
                  var g = c[f].name,
                      h = c[f].value,
                      k = c[f].index,
                      n = Li[g];
                  n && h && (-1 === Gi.indexOf(g) || /^e\d+$/.test(h) || /^[0-9A-Za-z_-]{43}$/.test(h)) && (void 0 !== k && (n += k), d.push(n + "." + h), e++)
              }
              1 === c.length && "error_code" === c[0].name && (e = 0);
              b(encodeURIComponent(d.join("~")), e)
          })
      },
      Oi = function(a) {
          if (m.Promise) try {
              return new Promise(function(b) {
                  Ni(a,
                      function(c, d) {
                          b({
                              cd: c,
                              Dk: d
                          })
                      })
              })
          } catch (b) {}
      },
      Gi = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
  var Pi = function() {
          this.eventModel = {};
          this.targetConfig = {};
          this.containerConfig = {};
          this.globalConfig = {};
          this.remoteConfig = {};
          this.onSuccess = function() {};
          this.onFailure = function() {};
          this.setContainerTypeLoaded = function() {};
          this.getContainerTypeLoaded = function() {};
          this.eventId = void 0;
          this.isGtmEvent = !1
      },
      Qi = function(a) {
          var b = new Pi;
          b.eventModel = a;
          return b
      },
      Ri = function(a, b) {
          a.targetConfig = b;
          return a
      },
      Si = function(a, b) {
          a.containerConfig = b;
          return a
      },
      Ti = function(a, b) {
          a.globalConfig = b;
          return a
      },
      Ui = function(a,
          b) {
          a.remoteConfig = b;
          return a
      },
      Vi = function(a, b) {
          a.onSuccess = b;
          return a
      },
      Wi = function(a, b) {
          a.setContainerTypeLoaded = b;
          return a
      },
      Xi = function(a, b) {
          a.getContainerTypeLoaded = b;
          return a
      },
      Yi = function(a, b) {
          a.onFailure = b;
          return a
      };
  Pi.prototype.getWithConfig = function(a) {
      if (void 0 !== this.eventModel[a]) return this.eventModel[a];
      if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
      if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
      if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
      if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a]
  };
  var Zi = function(a) {
          function b(d) {
              for (var e = Object.keys(d), f = 0; f < e.length; ++f) c[e[f]] = 1
          }
          var c = {};
          b(a.eventModel);
          b(a.targetConfig);
          b(a.containerConfig);
          b(a.globalConfig);
          return Object.keys(c)
      },
      $i = function(a, b, c) {
          function d(g) {
              Pc(g) && Sa(g, function(h, k) {
                  f = !0;
                  e[h] = k
              })
          }
          var e = {},
              f = !1;
          c && 1 !== c || (d(a.remoteConfig[b]), d(a.globalConfig[b]), d(a.containerConfig[b]), d(a.targetConfig[b]));
          c && 2 !== c || d(a.eventModel[b]);
          return f ? e : void 0
      },
      aj = function(a) {
          var b = [R.Ac, R.Yf, R.Zf, R.$f, R.ag, R.bg, R.cg],
              c = {},
              d = !1,
              e = function(f) {
                  for (var g =
                          0; g < b.length; g++) void 0 !== f[b[g]] && (c[b[g]] = f[b[g]], d = !0);
                  return d
              };
          if (e(a.eventModel) || e(a.targetConfig) || e(a.containerConfig) || e(a.globalConfig)) return c;
          e(a.remoteConfig);
          return c
      },
      bj = function(a) {
          var b = [],
              c;
          for (c in a.eventModel) c !== R.cc && a.eventModel.hasOwnProperty(c) && void 0 !== a.eventModel[c] && b.push(c);
          return b
      };
  var cj, dj = !1;

  function ej() {
      dj = !0;
      cj = cj || {}
  }
  var fj = function(a) {
      dj || ej();
      return cj[a]
  };
  var gj = function(a) {
      if (H.hidden) return !0;
      var b = a.getBoundingClientRect();
      if (b.top == b.bottom || b.left == b.right || !m.getComputedStyle) return !0;
      var c = m.getComputedStyle(a, null);
      if ("hidden" === c.visibility) return !0;
      for (var d = a, e = c; d;) {
          if ("none" === e.display) return !0;
          var f = e.opacity,
              g = e.filter;
          if (g) {
              var h = g.indexOf("opacity(");
              0 <= h && (g = g.substring(h + 8, g.indexOf(")", h)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g, f))
          }
          if (void 0 !== f && 0 >= f) return !0;
          (d = d.parentElement) && (e = m.getComputedStyle(d,
              null))
      }
      return !1
  };
  var pj = /:[0-9]+$/,
      qj = function(a, b, c, d) {
          for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
              var h = f[g].split("=");
              if (decodeURIComponent(h[0]).replace(/\+/g, " ") === b) {
                  var k = h.slice(1).join("=");
                  if (!c) return d ? k : decodeURIComponent(k).replace(/\+/g, " ");
                  e.push(d ? k : decodeURIComponent(k).replace(/\+/g, " "))
              }
          }
          return c ? e : void 0
      },
      tj = function(a, b, c, d, e) {
          b && (b = String(b).toLowerCase());
          if ("protocol" === b || "port" === b) a.protocol = rj(a.protocol) || rj(m.location.protocol);
          "port" === b ? a.port = String(Number(a.hostname ? a.port :
              m.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || m.location.hostname).replace(pj, "").toLowerCase());
          return sj(a, b, c, d, e)
      },
      sj = function(a, b, c, d, e) {
          var f, g = rj(a.protocol);
          b && (b = String(b).toLowerCase());
          switch (b) {
              case "url_no_fragment":
                  f = uj(a);
                  break;
              case "protocol":
                  f = g;
                  break;
              case "host":
                  f = a.hostname.replace(pj, "").toLowerCase();
                  if (c) {
                      var h = /^www\d*\./.exec(f);
                      h && h[0] && (f = f.substr(h[0].length))
                  }
                  break;
              case "port":
                  f = String(Number(a.port) || ("http" ==
                      g ? 80 : "https" == g ? 443 : ""));
                  break;
              case "path":
                  a.pathname || a.hostname || Vg("TAGGING", 1);
                  f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                  var k = f.split("/");
                  0 <= (d || []).indexOf(k[k.length - 1]) && (k[k.length - 1] = "");
                  f = k.join("/");
                  break;
              case "query":
                  f = a.search.replace("?", "");
                  e && (f = qj(f, e, !1, void 0));
                  break;
              case "extension":
                  var n = a.pathname.split(".");
                  f = 1 < n.length ? n[n.length - 1] : "";
                  f = f.split("/")[0];
                  break;
              case "fragment":
                  f = a.hash.replace("#", "");
                  break;
              default:
                  f = a && a.href
          }
          return f
      },
      rj = function(a) {
          return a ?
              a.replace(":", "").toLowerCase() : ""
      },
      uj = function(a) {
          var b = "";
          if (a && a.href) {
              var c = a.href.indexOf("#");
              b = 0 > c ? a.href : a.href.substr(0, c)
          }
          return b
      },
      vj = function(a) {
          var b = H.createElement("a");
          a && (b.href = a);
          var c = b.pathname;
          "/" !== c[0] && (a || Vg("TAGGING", 1), c = "/" + c);
          var d = b.hostname.replace(pj, "");
          return {
              href: b.href,
              protocol: b.protocol,
              host: b.host,
              hostname: d,
              pathname: c,
              search: b.search,
              hash: b.hash,
              port: b.port
          }
      },
      wj = function(a) {
          function b(n) {
              var p = n.split("=")[0];
              return 0 > d.indexOf(p) ? n : p + "=0"
          }

          function c(n) {
              return n.split("&").map(b).filter(function(p) {
                  return void 0 !=
                      p
              }).join("&")
          }
          var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
              e = vj(a),
              f = a.split(/[?#]/)[0],
              g = e.search,
              h = e.hash;
          "?" === g[0] && (g = g.substring(1));
          "#" === h[0] && (h = h.substring(1));
          g = c(g);
          h = c(h);
          "" !== g && (g = "?" + g);
          "" !== h && (h = "#" + h);
          var k = "" + f + g + h;
          "/" === k[k.length - 1] && (k = k.substring(0, k.length - 1));
          return k
      };
  var xj = {};
  var Aj = function(a) {
          if (0 == a.length) return null;
          var b;
          b = yj(a, function(c) {
              return !zj.test(c.Oa)
          });
          b = yj(b, function(c) {
              return "INPUT" === c.element.tagName.toUpperCase()
          });
          b = yj(b, function(c) {
              return !gj(c.element)
          });
          return b[0]
      },
      yj = function(a, b) {
          if (1 >= a.length) return a;
          var c = a.filter(b);
          return 0 == c.length ? a : c
      },
      Bj = function(a) {
          var b;
          if (a === H.body) b = "body";
          else {
              var c;
              if (a.id) c = "#" + a.id;
              else {
                  var d;
                  if (a.parentElement) {
                      var e;
                      a: {
                          var f = a.parentElement;
                          if (f) {
                              for (var g = 0; g < f.childElementCount; g++)
                                  if (f.children[g] === a) {
                                      e =
                                          g + 1;
                                      break a
                                  } e = -1
                          } else e = 1
                      }
                      d = Bj(a.parentElement) + ">:nth-child(" + e + ")"
                  } else d = "";
                  c = d
              }
              b = c
          }
          return b
      },
      Cj = !0,
      Dj = !1;
  xj.Mh = "true";
  var Ej = function(a) {
          if ("false" === xj.Mh || !Cj) return !1;
          if (Dj) return !0;
          var b = fj("AW-" +
              a);
          return !!b && !!b.preAutoPii
      },
      Fj = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),
      Gj = new RegExp(/@(gmail|googlemail)\./i),
      zj = new RegExp(/support|noreply/i),
      Hj = "SCRIPT STYLE IMG SVG PATH BR".split(" "),
      Ij = ["BR"],
      Jj = {},
      Kj = function(a) {
          a = a || {
              de: !0,
              ee: !0
          };
          a.qb = a.qb || {
              email: !0,
              phone: !0,
              Og: !0
          };
          var b, c = a,
              d = !!c.de + "." + !!c.ee;
          c && c.Tc && c.Tc.length && (d += "." + c.Tc.join("."));
          c && c.qb && (d += "." + c.qb.email + "." + c.qb.phone + "." + c.qb.Og);
          b = d;
          var e = Jj[b];
          if (e && 200 > db() - e.timestamp) return e.result;
          var f;
          var g = [],
              h = H.body;
          if (h) {
              for (var k = h.querySelectorAll("*"), n = 0; n < k.length && 1E4 > n; n++) {
                  var p = k[n];
                  if (!(0 <= Hj.indexOf(p.tagName.toUpperCase())) && p.children instanceof HTMLCollection) {
                      for (var r = !1, u = 0; u < p.childElementCount && 1E4 > u; u++)
                          if (!(0 <= Ij.indexOf(p.children[u].tagName.toUpperCase()))) {
                              r = !0;
                              break
                          } r || g.push(p)
                  }
              }
              f = {
                  elements: g,
                  status: 1E4 < k.length ? "2" : "1"
              }
          } else f = {
              elements: g,
              status: "4"
          };
          var t = f,
              q = t.status,
              v;
          if (a.qb && a.qb.email) {
              for (var w = t.elements, y = [], x = 0; x < w.length; x++) {
                  var z = w[x],
                      A = z.textContent;
                  "INPUT" === z.tagName.toUpperCase() &&
                      z.value && (A = z.value);
                  if (A) {
                      var C = A.match(Fj);
                      if (C) {
                          var E = C[0],
                              D;
                          if (m.location) {
                              var F = sj(m.location, "host", !0);
                              D = 0 <= E.toLowerCase().indexOf(F)
                          } else D = !1;
                          D || y.push({
                              element: z,
                              Oa: E
                          })
                      }
                  }
              }
              var S;
              var M = a && a.Tc;
              if (M && 0 !== M.length) {
                  for (var J = [], K = 0; K < y.length; K++) {
                      for (var Q = !0, N = 0; N < M.length; N++) {
                          var V = M[N];
                          if (V && ti(y[K].element, V)) {
                              Q = !1;
                              break
                          }
                      }
                      Q && J.push(y[K])
                  }
                  S = J
              } else S = y;
              v = Aj(S);
              10 < y.length && (q = "3")
          }
          var aa = [];
          if (v) {
              var X = v.element,
                  Ga = {
                      Oa: v.Oa,
                      tagName: X.tagName,
                      type: 1
                  };
              a.de && (Ga.querySelector = Bj(X));
              a.ee &&
                  (Ga.isVisible = !gj(X));
              aa.push(Ga)
          }
          var Ha = {
              elements: aa,
              status: q
          };
          Jj[b] = {
              timestamp: db(),
              result: Ha
          };
          return Ha
      },
      Lj = function(a) {
          return a.tagName + ":" + a.isVisible + ":" + a.Oa.length + ":" + Gj.test(a.Oa)
      };
  var Mj = function(a, b, c) {
          if (c) {
              var d = c.selector_type,
                  e = String(c.value),
                  f;
              if ("js_variable" === d) {
                  e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
                  for (var g = e.split(","), h = 0; h < g.length; h++) {
                      var k = g[h].trim();
                      if (k) {
                          if (0 === k.indexOf("dataLayer.")) f = rh(k.substring(10));
                          else {
                              var n = k.split(".");
                              f = m[n.shift()];
                              for (var p = 0; p < n.length; p++) f = f && f[n[p]]
                          }
                          if (void 0 !== f) break
                      }
                  }
              } else if ("css_selector" === d && ri) {
                  var r = si(e);
                  r && 0 < r.length && (f = sc(r[0]) || ab(r[0].value))
              }
              f && (a[b] = f)
          }
      },
      Nj = function(a) {
          if (a) {
              var b = {};
              Mj(b, "email",
                  a.email);
              Mj(b, "phone_number", a.phone);
              b.address = [];
              for (var c = a.name_and_address || [], d = 0; d < c.length; d++) {
                  var e = {};
                  Mj(e, "first_name", c[d].first_name);
                  Mj(e, "last_name", c[d].last_name);
                  Mj(e, "street", c[d].street);
                  Mj(e, "city", c[d].city);
                  Mj(e, "region", c[d].region);
                  Mj(e, "country", c[d].country);
                  Mj(e, "postal_code", c[d].postal_code);
                  b.address.push(e)
              }
              return b
          }
      },
      Oj = function(a) {
          if (a) switch (a.mode) {
              case "selectors":
                  return Nj(a.selectors);
              case "auto_detect":
                  var b;
                  var c = a.auto_detect;
                  if (c) {
                      var d = Kj({
                              de: !1,
                              ee: !1,
                              Tc: c.exclude_element_selectors,
                              qb: {
                                  email: !!c.email,
                                  phone: !!c.phone,
                                  Og: !!c.address
                              }
                          }).elements,
                          e = {};
                      if (0 < d.length)
                          for (var f = 0; f < d.length; f++) {
                              var g = d[f];
                              if (1 === g.type) {
                                  e.email = g.Oa;
                                  break
                              }
                          }
                      b = e
                  } else b = void 0;
                  return b
          }
      },
      Pj = function(a) {
          switch (a.enhanced_conversions_mode) {
              case "manual":
                  var b = a.enhanced_conversions_manual_var;
                  return void 0 !== b ? b : m.enhanced_conversion_data;
              case "automatic":
                  return Nj(a[R.hg])
          }
      };
  var Qj = {},
      Rj = function(a, b) {
          if (m._gtmexpgrp && m._gtmexpgrp.hasOwnProperty(a)) return m._gtmexpgrp[a];
          void 0 === Qj[a] && (Qj[a] = Math.floor(Math.random() * b));
          return Qj[a]
      };
  var Sj = function(a) {
      var b = 1,
          c, d, e;
      if (a)
          for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 != c ? b ^ c >> 21 : b;
      return b
  };
  var Tj = function(a, b, c) {
      for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
          var g = e[f].split("="),
              h = g[0].replace(/^\s*|\s*$/g, "");
          if (h && h == a) {
              var k = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
              k && c && (k = decodeURIComponent(k));
              d.push(k)
          }
      }
      return d
  };

  function Uj(a) {
      return "null" !== a.origin
  };
  var Xj = function(a, b, c, d) {
          return Vj(d) ? Tj(a, String(b || Wj()), c) : []
      },
      ak = function(a, b, c, d, e) {
          if (Vj(e)) {
              var f = Yj(a, d, e);
              if (1 === f.length) return f[0].id;
              if (0 !== f.length) {
                  f = Zj(f, function(g) {
                      return g.Vd
                  }, b);
                  if (1 === f.length) return f[0].id;
                  f = Zj(f, function(g) {
                      return g.dd
                  }, c);
                  return f[0] ? f[0].id : void 0
              }
          }
      };

  function bk(a, b, c, d) {
      var e = Wj(),
          f = window;
      Uj(f) && (f.document.cookie = a);
      var g = Wj();
      return e != g || void 0 != c && 0 <= Xj(b, g, !1, d).indexOf(c)
  }
  var fk = function(a, b, c, d) {
          function e(w, y, x) {
              if (null == x) return delete h[y], w;
              h[y] = x;
              return w + "; " + y + "=" + x
          }

          function f(w, y) {
              if (null == y) return delete h[y], w;
              h[y] = !0;
              return w + "; " + y
          }
          if (!Vj(c.$a)) return 2;
          var g;
          void 0 == b ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = ck(b), g = a + "=" + b);
          var h = {};
          g = e(g, "path", c.path);
          var k;
          c.expires instanceof Date ? k = c.expires.toUTCString() : null != c.expires && (k = "" + c.expires);
          g = e(g, "expires", k);
          g = e(g, "max-age", c.Gj);
          g = e(g, "samesite",
              c.Yj);
          c.$j && (g = f(g, "secure"));
          var n = c.domain;
          if (n && "auto" === n.toLowerCase()) {
              for (var p = dk(), r = void 0, u = !1, t = 0; t < p.length; ++t) {
                  var q = "none" !== p[t] ? p[t] : void 0,
                      v = e(g, "domain", q);
                  v = f(v, c.flags);
                  try {
                      d && d(a, h)
                  } catch (w) {
                      r = w;
                      continue
                  }
                  u = !0;
                  if (!ek(q, c.path) && bk(v, a, b, c.$a)) return 0
              }
              if (r && !u) throw r;
              return 1
          }
          n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
          g = f(g, c.flags);
          d && d(a, h);
          return ek(n, c.path) ? 1 : bk(g, a, b, c.$a) ? 0 : 1
      },
      gk = function(a, b, c) {
          null == c.path && (c.path = "/");
          c.domain || (c.domain = "auto");
          return fk(a,
              b, c)
      };

  function Zj(a, b, c) {
      for (var d = [], e = [], f, g = 0; g < a.length; g++) {
          var h = a[g],
              k = b(h);
          k === c ? d.push(h) : void 0 === f || k < f ? (e = [h], f = k) : k === f && e.push(h)
      }
      return 0 < d.length ? d : e
  }

  function Yj(a, b, c) {
      for (var d = [], e = Xj(a, void 0, void 0, c), f = 0; f < e.length; f++) {
          var g = e[f].split("."),
              h = g.shift();
          if (!b || -1 !== b.indexOf(h)) {
              var k = g.shift();
              k && (k = k.split("-"), d.push({
                  id: g.join("."),
                  Vd: 1 * k[0] || 1,
                  dd: 1 * k[1] || 1
              }))
          }
      }
      return d
  }
  var ck = function(a) {
          a && 1200 < a.length && (a = a.substring(0, 1200));
          return a
      },
      hk = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
      ik = /(^|\.)doubleclick\.net$/i,
      ek = function(a, b) {
          return ik.test(window.document.location.hostname) || "/" === b && hk.test(a)
      },
      Wj = function() {
          return Uj(window) ? window.document.cookie : ""
      },
      dk = function() {
          var a = [],
              b = window.document.location.hostname.split(".");
          if (4 === b.length) {
              var c = b[b.length - 1];
              if (parseInt(c, 10).toString() === c) return ["none"]
          }
          for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
          var e = window.document.location.hostname;
          ik.test(e) || hk.test(e) || a.push("none");
          return a
      },
      Vj = function(a) {
          if (!Mh().g() || !a || !Xh()) return !0;
          if (!Wh(a)) return !1;
          var b = Uh(a);
          return null == b ? !0 : !!b
      };
  var jk = function(a) {
          var b = Math.round(2147483647 * Math.random());
          return a ? String(b ^ Sj(a) & 2147483647) : String(b)
      },
      kk = function(a) {
          return [jk(a), Math.round(db() / 1E3)].join(".")
      },
      nk = function(a, b, c, d, e) {
          var f = lk(b);
          return ak(a, f, mk(c), d, e)
      },
      ok = function(a, b, c, d) {
          var e = "" + lk(c),
              f = mk(d);
          1 < f && (e += "-" + f);
          return [b, e, a].join(".")
      },
      lk = function(a) {
          if (!a) return 1;
          a = 0 === a.indexOf(".") ? a.substr(1) : a;
          return a.split(".").length
      },
      mk = function(a) {
          if (!a || "/" === a) return 1;
          "/" !== a[0] && (a = "/" + a);
          "/" !== a[a.length - 1] && (a += "/");
          return a.split("/").length -
              1
      };

  function pk(a, b, c) {
      var d, e = Number(null != a.Mb ? a.Mb : void 0);
      0 !== e && (d = new Date((b || db()) + 1E3 * (e || 7776E3)));
      return {
          path: a.path,
          domain: a.domain,
          flags: a.flags,
          encode: !!c,
          expires: d
      }
  };
  var qk = ["1"],
      rk = {},
      sk = {},
      wk = function(a, b) {
          b = void 0 === b ? !0 : b;
          var c = tk(a.prefix);
          if (!rk[c] && !uk(c, a.path, a.domain) && b) {
              var d = tk(a.prefix),
                  e = kk();
              if (0 === vk(d, e, a)) {
                  var f = dc("google_tag_data", {});
                  f._gcl_au ? Vg("GTM", 57) : f._gcl_au = e
              }
              uk(c, a.path, a.domain)
          }
      };

  function vk(a, b, c, d) {
      var e = ok(b, "1", c.domain, c.path),
          f = pk(c, d);
      f.$a = "ad_storage";
      return gk(a, e, f)
  }

  function uk(a, b, c) {
      var d = nk(a, b, c, qk, "ad_storage");
      if (!d) return !1;
      var e = d.split(".");
      5 === e.length ? (rk[a] = e.slice(0, 2).join("."), sk[a] = {
          id: e.slice(2, 4).join("."),
          kh: Number(e[4]) || 0
      }) : 3 === e.length ? sk[a] = {
          id: e.slice(0, 2).join("."),
          kh: Number(e[2]) || 0
      } : rk[a] = d;
      return !0
  }

  function tk(a) {
      return (a || "_gcl") + "_au"
  };
  var xk = function(a) {
      for (var b = [], c = H.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
          var f = c[e].match(d);
          f && b.push({
              Mf: f[1],
              value: f[2],
              timestamp: Number(f[2].split(".")[1]) || 0
          })
      }
      b.sort(function(g, h) {
          return h.timestamp - g.timestamp
      });
      return b
  };

  function yk(a, b) {
      var c = xk(a),
          d = {};
      if (!c || !c.length) return d;
      for (var e = 0; e < c.length; e++) {
          var f = c[e].value.split(".");
          if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
              d[c[e].Mf] || (d[c[e].Mf] = []);
              var g = {
                  version: f[0],
                  timestamp: 1E3 * Number(f[1]),
                  xa: f[2]
              };
              b && 3 < f.length && (g.labels = f.slice(3));
              d[c[e].Mf].push(g)
          }
      }
      return d
  };

  function zk() {
      for (var a = Ak, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
      return b
  }

  function Bk() {
      var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      a += a.toLowerCase() + "0123456789-_";
      return a + "."
  }
  var Ak, Ck;

  function Dk(a) {
      Ak = Ak || Bk();
      Ck = Ck || zk();
      for (var b = [], c = 0; c < a.length; c += 3) {
          var d = c + 1 < a.length,
              e = c + 2 < a.length,
              f = a.charCodeAt(c),
              g = d ? a.charCodeAt(c + 1) : 0,
              h = e ? a.charCodeAt(c + 2) : 0,
              k = f >> 2,
              n = (f & 3) << 4 | g >> 4,
              p = (g & 15) << 2 | h >> 6,
              r = h & 63;
          e || (r = 64, d || (p = 64));
          b.push(Ak[k], Ak[n], Ak[p], Ak[r])
      }
      return b.join("")
  }

  function Ek(a) {
      function b(k) {
          for (; d < a.length;) {
              var n = a.charAt(d++),
                  p = Ck[n];
              if (null != p) return p;
              if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
          }
          return k
      }
      Ak = Ak || Bk();
      Ck = Ck || zk();
      for (var c = "", d = 0;;) {
          var e = b(-1),
              f = b(0),
              g = b(64),
              h = b(64);
          if (64 === h && -1 === e) return c;
          c += String.fromCharCode(e << 2 | f >> 4);
          64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != h && (c += String.fromCharCode(g << 6 & 192 | h)))
      }
  };
  var Fk;
  var Gk = {
          nk: 0,
          zk: 1,
          tk: 2,
          sk: 3
      },
      Kk = function() {
          var a = Hk,
              b = Ik,
              c = Jk(),
              d = function(g) {
                  a(g.target || g.srcElement || {})
              },
              e = function(g) {
                  b(g.target || g.srcElement || {})
              };
          if (!c.init) {
              pc(H, "mousedown", d);
              pc(H, "keyup", d);
              pc(H, "submit", e);
              var f = HTMLFormElement.prototype.submit;
              HTMLFormElement.prototype.submit = function() {
                  b(this);
                  f.call(this)
              };
              c.init = !0
          }
      },
      Lk = function(a, b, c, d, e) {
          var f = {
              callback: a,
              domains: b,
              fragment: 2 === c,
              placement: c,
              forms: d,
              sameHost: e
          };
          Jk().decorators.push(f)
      },
      Mk = function(a, b, c) {
          for (var d = Jk().decorators,
                  e = {}, f = 0; f < d.length; ++f) {
              var g = d[f],
                  h;
              if (h = !c || g.forms) a: {
                  var k = g.domains,
                      n = a,
                      p = !!g.sameHost;
                  if (k && (p || n !== H.location.hostname))
                      for (var r = 0; r < k.length; r++)
                          if (k[r] instanceof RegExp) {
                              if (k[r].test(n)) {
                                  h = !0;
                                  break a
                              }
                          } else if (0 <= n.indexOf(k[r]) || p && 0 <= k[r].indexOf(n)) {
                      h = !0;
                      break a
                  }
                  h = !1
              }
              if (h) {
                  var u = g.placement;
                  void 0 == u && (u = g.fragment ? 2 : 1);
                  u === b && gb(e, g.callback())
              }
          }
          return e
      };

  function Jk() {
      var a = dc("google_tag_data", {}),
          b = a.gl;
      b && b.decorators || (b = {
          decorators: []
      }, a.gl = b);
      return b
  };
  var Nk = /(.*?)\*(.*?)\*(.*)/,
      Ok = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
      Pk = /^(?:www\.|m\.|amp\.)+/,
      Qk = /\*?xp_[0-3]\*?/,
      Rk = /([^?#]+)(\?[^#]*)?(#.*)?/;

  function Sk(a) {
      return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
  }
  var Vk = function(a, b) {
      var c = [],
          d;
      for (d in a)
          if (a.hasOwnProperty(d)) {
              var e = a[d];
              void 0 !== e && e === e && null !== e && "[object Object]" !== e.toString() && (c.push(d), c.push(Dk(String(e))))
          } var f = c.join("*");
      if (void 0 !== b) {
          var g = "xp_" + b,
              h = Tk[b](f);
          f = [f, g, Dk(String(h))].join("*")
      }
      return ["1", Uk(f), f].join("*")
  };

  function Uk(a, b) {
      var c = [m.navigator.userAgent, (new Date).getTimezoneOffset(), bc.userLanguage || bc.language, Math.floor(db() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
          d;
      if (!(d = Fk)) {
          for (var e = Array(256), f = 0; 256 > f; f++) {
              for (var g = f, h = 0; 8 > h; h++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
              e[f] = g
          }
          d = e
      }
      Fk = d;
      for (var k = 4294967295, n = 0; n < c.length; n++) k = k >>> 8 ^ Fk[(k ^ c.charCodeAt(n)) & 255];
      return ((k ^ -1) >>> 0).toString(36)
  }
  var Wk = {},
      Tk = (Wk[0] = function() {
          return "BASELINE"
      }, Wk[1] = Xk, Wk[2] = Yk, Wk[3] = Zk, Wk);

  function Xk() {
      return "CHECKSUM_EXP_DISABLED"
  }

  function Yk() {
      return "CHECKSUM_EXP_DISABLED"
  }

  function Zk() {
      return "CHECKSUM_EXP_DISABLED"
  }

  function $k() {
      return function(a) {
          var b = vj(m.location.href),
              c = b.search.replace("?", ""),
              d = qj(c, "_gl", !1, !0) || "";
          a.query = al(d) || {};
          var e = tj(b, "fragment").match(Sk("_gl"));
          a.fragment = al(e && e[3] || "") || {}
      }
  }
  var bl = function(a) {
          var b = $k(),
              c = Jk();
          c.data || (c.data = {
              query: {},
              fragment: {}
          }, b(c.data));
          var d = {},
              e = c.data;
          e && (gb(d, e.query), a && gb(d, e.fragment));
          return d
      },
      al = function(a) {
          var b;
          b = void 0 === b ? 3 : b;
          try {
              if (a) {
                  var c;
                  a: {
                      for (var d = a, e = 0; 3 > e; ++e) {
                          var f = Nk.exec(d);
                          if (f) {
                              c = f;
                              break a
                          }
                          d = decodeURIComponent(d)
                      }
                      c = void 0
                  }
                  var g = c;
                  if (g && "1" === g[1]) {
                      var h = g[2],
                          k = g[3],
                          n = null !== k.match(Qk),
                          p;
                      a: {
                          for (var r = 0; r < b; ++r)
                              if (h === Uk(k, r)) {
                                  p = !0;
                                  break a
                              } p = !1
                      }
                      var u = p;
                      if (u || n) {
                          for (var t = {}, q = k ? k.split("*") : [], v = 0; v + 1 < q.length; v += 2) {
                              var w =
                                  q[v],
                                  y = null !== w.match(Qk);
                              if (u || y) {
                                  var x = Ek(q[v + 1]);
                                  t[w] = x
                              }
                              if (y) {
                                  var z = w.split("_")[1];
                                  if (!(Number(z) < Object.keys(Gk).length)) return;
                                  var A = b,
                                      C = t[w],
                                      E = k.slice(0, k.indexOf("*xp")),
                                      D = u;
                                  if (0 !== Number(z)) a: {
                                      var F = C,
                                          S = E,
                                          M = A;
                                      if ("undefined" !== F && "UA_DATA_NOT_PRESENT" !== F && "UACH_ACCESSED_TOO_EARLY" !== F)
                                          for (var J = 0; J < M; ++J)
                                              if (F === Tk[z](S, J)) {
                                                  D = !0;
                                                  break a
                                              } D = !1
                                  }
                                  t._z = "uaxp." + (u ? D === u ? "" + z + 0 : "" + z + 3 : D === u ? "" + z + 1 : "" + z + 2)
                              }
                          }
                          Vg("TAGGING", 6);
                          return t
                      }
                      Vg("TAGGING", 7)
                  }
              }
          } catch (K) {
              Vg("TAGGING", 8)
          }
      };

  function cl(a, b, c, d) {
      function e(p) {
          var r = p,
              u = Sk(a).exec(r),
              t = r;
          if (u) {
              var q = u[2],
                  v = u[4];
              t = u[1];
              v && (t = t + q + v)
          }
          p = t;
          var w = p.charAt(p.length - 1);
          p && "&" !== w && (p += "&");
          return p + n
      }
      d = void 0 === d ? !1 : d;
      var f = Rk.exec(c);
      if (!f) return "";
      var g = f[1],
          h = f[2] || "",
          k = f[3] || "",
          n = a + "=" + b;
      d ? k = "#" + e(k.substring(1)) : h = "?" + e(h.substring(1));
      return "" + g + h + k
  }

  function dl(a, b) {
      var c = "FORM" === (a.tagName || "").toUpperCase(),
          d = Mk(b, 1, c),
          e = Mk(b, 2, c),
          f = Mk(b, 3, c);
      if (hb(d)) {
          var g = Vk(d, void 0);
          c ? el("_gl", g, a) : fl("_gl", g, a, !1)
      }
      if (!c && hb(e)) {
          var h = Vk(e);
          fl("_gl", h, a, !0)
      }
      for (var k in f)
          if (f.hasOwnProperty(k)) a: {
              var n = k,
                  p = f[k],
                  r = a;
              if (r.tagName) {
                  if ("a" === r.tagName.toLowerCase()) {
                      fl(n, p, r, void 0);
                      break a
                  }
                  if ("form" === r.tagName.toLowerCase()) {
                      el(n, p, r);
                      break a
                  }
              }
              "string" == typeof r && cl(n, p, r, void 0)
          }
  }

  function fl(a, b, c, d) {
      if (c.href) {
          var e = cl(a, b, c.href, void 0 === d ? !1 : d);
          Jb.test(e) && (c.href = e)
      }
  }

  function el(a, b, c) {
      if (c && c.action) {
          var d = (c.method || "").toLowerCase();
          if ("get" === d) {
              for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                  var h = e[g];
                  if (h.name === a) {
                      h.setAttribute("value", b);
                      f = !0;
                      break
                  }
              }
              if (!f) {
                  var k = H.createElement("input");
                  k.setAttribute("type", "hidden");
                  k.setAttribute("name", a);
                  k.setAttribute("value", b);
                  c.appendChild(k)
              }
          } else if ("post" === d) {
              var n = cl(a, b, c.action);
              Jb.test(n) && (c.action = n)
          }
      }
  }

  function Hk(a) {
      try {
          var b;
          a: {
              for (var c = a, d = 100; c && 0 < d;) {
                  if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                      b = c;
                      break a
                  }
                  c = c.parentNode;
                  d--
              }
              b = null
          }
          var e = b;
          if (e) {
              var f = e.protocol;
              "http:" !== f && "https:" !== f || dl(e, e.hostname)
          }
      } catch (g) {}
  }

  function Ik(a) {
      try {
          if (a.action) {
              var b = tj(vj(a.action), "host");
              dl(a, b)
          }
      } catch (c) {}
  }
  var gl = function(a, b, c, d) {
          Kk();
          Lk(a, b, "fragment" === c ? 2 : 1, !!d, !1)
      },
      hl = function(a, b) {
          Kk();
          Lk(a, [sj(m.location, "host", !0)], b, !0, !0)
      },
      il = function() {
          var a = H.location.hostname,
              b = Ok.exec(H.referrer);
          if (!b) return !1;
          var c = b[2],
              d = b[1],
              e = "";
          if (c) {
              var f = c.split("/"),
                  g = f[1];
              e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
          } else if (d) {
              if (0 === d.indexOf("xn--")) return !1;
              e = d.replace(/-/g, ".").replace(/\.\./g, "-")
          }
          var h = a.replace(Pk, ""),
              k = e.replace(Pk, ""),
              n;
          if (!(n = h === k)) {
              var p = "." + k;
              n = h.substring(h.length - p.length,
                  h.length) === p
          }
          return n
      },
      jl = function(a, b) {
          return !1 === a ? !1 : a || b || il()
      };
  var kl = {};
  var ll = /^\w+$/,
      ml = /^[\w-]+$/,
      nl = {
          aw: "_aw",
          dc: "_dc",
          gf: "_gf",
          ha: "_ha",
          gp: "_gp",
          gb: "_gb"
      },
      ol = function() {
          if (!Mh().g() || !Xh()) return !0;
          var a = Uh("ad_storage");
          return null == a ? !0 : !!a
      },
      rl = function(a, b) {
          Wh("ad_storage") ? ol() ? a() : di(a, "ad_storage") : b ? Vg("TAGGING", 3) : ci(function() {
              rl(a, !0)
          }, ["ad_storage"])
      },
      tl = function(a) {
          return sl(a).map(function(b) {
              return b.xa
          })
      },
      sl = function(a) {
          var b = [];
          if (!Uj(m) || !H.cookie) return b;
          var c = Xj(a, H.cookie, void 0, "ad_storage");
          if (!c || 0 == c.length) return b;
          for (var d = {}, e = 0; e < c.length; d = {
                  nd: d.nd
              }, e++) {
              var f = ul(c[e]);
              if (null != f) {
                  var g = f,
                      h = g.version;
                  d.nd = g.xa;
                  var k = g.timestamp,
                      n = g.labels,
                      p = Ma(b, function(r) {
                          return function(u) {
                              return u.xa === r.nd
                          }
                      }(d));
                  p ? (p.timestamp = Math.max(p.timestamp, k), p.labels = vl(p.labels, n || [])) : b.push({
                      version: h,
                      xa: d.nd,
                      timestamp: k,
                      labels: n
                  })
              }
          }
          b.sort(function(r, u) {
              return u.timestamp - r.timestamp
          });
          return wl(b)
      };

  function vl(a, b) {
      for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
      for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
      return d
  }

  function xl(a) {
      return a && "string" == typeof a && a.match(ll) ? a : "_gcl"
  }
  var zl = function() {
          var a = vj(m.location.href),
              b = tj(a, "query", !1, void 0, "gclid"),
              c = tj(a, "query", !1, void 0, "gclsrc"),
              d = tj(a, "query", !1, void 0, "wbraid"),
              e = tj(a, "query", !1, void 0, "dclid");
          if (!b || !c || !d) {
              var f = a.hash.replace("#", "");
              b = b || qj(f, "gclid", !1, void 0);
              c = c || qj(f, "gclsrc", !1, void 0);
              d = d || qj(f, "wbraid", !1, void 0)
          }
          return yl(b, c, e, d)
      },
      yl = function(a, b, c, d) {
          var e = {},
              f = function(g, h) {
                  e[h] || (e[h] = []);
                  e[h].push(g)
              };
          e.gclid = a;
          e.gclsrc = b;
          e.dclid = c;
          void 0 !== d && ml.test(d) && (e.gbraid = d, f(d, "gb"));
          if (void 0 !==
              a && a.match(ml)) switch (b) {
              case void 0:
                  f(a, "aw");
                  break;
              case "aw.ds":
                  f(a, "aw");
                  f(a, "dc");
                  break;
              case "ds":
                  f(a, "dc");
                  break;
              case "3p.ds":
                  f(a, "dc");
                  break;
              case "gf":
                  f(a, "gf");
                  break;
              case "ha":
                  f(a, "ha")
          }
          c && f(c, "dc");
          return e
      },
      Bl = function(a) {
          var b = zl();
          rl(function() {
              Al(b, !1, a)
          })
      };

  function Al(a, b, c, d, e) {
      function f(w, y) {
          var x = Cl(w, g);
          x && (gk(x, y, h), k = !0)
      }
      c = c || {};
      e = e || [];
      var g = xl(c.prefix);
      d = d || db();
      var h = pk(c, d, !0);
      h.$a = "ad_storage";
      var k = !1,
          n = Math.round(d / 1E3),
          p = function(w) {
              var y = ["GCL", n, w];
              0 < e.length && y.push(e.join("."));
              return y.join(".")
          };
      a.aw && f("aw", p(a.aw[0]));
      a.dc && f("dc", p(a.dc[0]));
      a.gf && f("gf", p(a.gf[0]));
      a.ha && f("ha", p(a.ha[0]));
      a.gp && f("gp", p(a.gp[0]));
      if ((void 0 == kl.enable_gbraid_cookie_write ? 0 : kl.enable_gbraid_cookie_write) && !k && a.gb) {
          var r = a.gb[0],
              u = Cl("gb",
                  g),
              t = !1;
          if (!b)
              for (var q = sl(u), v = 0; v < q.length; v++) q[v].xa === r && q[v].labels && 0 < q[v].labels.length && (t = !0);
          t || f("gb", p(r))
      }
  }
  var El = function(a, b) {
          var c = bl(!0);
          rl(function() {
              for (var d = xl(b.prefix), e = 0; e < a.length; ++e) {
                  var f = a[e];
                  if (void 0 !== nl[f]) {
                      var g = Cl(f, d),
                          h = c[g];
                      if (h) {
                          var k = Math.min(Dl(h), db()),
                              n;
                          b: {
                              var p = k;
                              if (Uj(m))
                                  for (var r = Xj(g, H.cookie, void 0, "ad_storage"), u = 0; u < r.length; ++u)
                                      if (Dl(r[u]) > p) {
                                          n = !0;
                                          break b
                                      } n = !1
                          }
                          if (!n) {
                              var t = pk(b, k, !0);
                              t.$a = "ad_storage";
                              gk(g, h, t)
                          }
                      }
                  }
              }
              Al(yl(c.gclid, c.gclsrc), !1, b)
          })
      },
      Cl = function(a, b) {
          var c = nl[a];
          if (void 0 !== c) return b + c
      },
      Dl = function(a) {
          return 0 !== Fl(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
              0) : 0
      };

  function ul(a) {
      var b = Fl(a.split("."));
      return 0 === b.length ? null : {
          version: b[0],
          xa: b[2],
          timestamp: 1E3 * (Number(b[1]) || 0),
          labels: b.slice(3)
      }
  }

  function Fl(a) {
      return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !ml.test(a[2]) ? [] : a
  }
  var Gl = function(a, b, c, d, e) {
          if (Ka(b) && Uj(m)) {
              var f = xl(e),
                  g = function() {
                      for (var h = {}, k = 0; k < a.length; ++k) {
                          var n = Cl(a[k], f);
                          if (n) {
                              var p = Xj(n, H.cookie, void 0, "ad_storage");
                              p.length && (h[n] = p.sort()[p.length - 1])
                          }
                      }
                      return h
                  };
              rl(function() {
                  gl(g, b, c, d)
              })
          }
      },
      wl = function(a) {
          return a.filter(function(b) {
              return ml.test(b.xa)
          })
      },
      Hl = function(a, b) {
          if (Uj(m)) {
              for (var c = xl(b.prefix), d = {}, e = 0; e < a.length; e++) nl[a[e]] && (d[a[e]] = nl[a[e]]);
              rl(function() {
                  Sa(d, function(f, g) {
                      var h = Xj(c + g, H.cookie, void 0, "ad_storage");
                      h.sort(function(t,
                          q) {
                          return Dl(q) - Dl(t)
                      });
                      if (h.length) {
                          var k = h[0],
                              n = Dl(k),
                              p = 0 !== Fl(k.split(".")).length ? k.split(".").slice(3) : [],
                              r = {},
                              u;
                          u = 0 !== Fl(k.split(".")).length ? k.split(".")[2] : void 0;
                          r[f] = [u];
                          Al(r, !0, b, n, p)
                      }
                  })
              })
          }
      };

  function Il(a, b) {
      for (var c = 0; c < b.length; ++c)
          if (a[b[c]]) return !0;
      return !1
  }
  var Jl = function(a) {
      function b(e, f, g) {
          g && (e[f] = g)
      }
      if (Xh()) {
          var c = zl();
          if (Il(c, a)) {
              var d = {};
              b(d, "gclid", c.gclid);
              b(d, "dclid", c.dclid);
              b(d, "gclsrc", c.gclsrc);
              b(d, "wbraid", c.gbraid);
              hl(function() {
                  return d
              }, 3);
              hl(function() {
                  var e = {};
                  return e._up = "1", e
              }, 1)
          }
      }
  };

  function Kl(a, b) {
      var c = xl(b),
          d = Cl(a, c);
      if (!d) return 0;
      for (var e = sl(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
      return f
  }

  function Ll(a) {
      var b = 0,
          c;
      for (c in a)
          for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
      return b
  };
  var gm = !1,
      hm = 0,
      im = [];

  function jm(a) {
      if (!gm) {
          var b = H.createEventObject,
              c = "complete" == H.readyState,
              d = "interactive" == H.readyState;
          if (!a || "readystatechange" != a.type || c || !b && d) {
              gm = !0;
              for (var e = 0; e < im.length; e++) I(im[e])
          }
          im.push = function() {
              for (var f = 0; f < arguments.length; f++) I(arguments[f]);
              return 0
          }
      }
  }

  function km() {
      if (!gm && 140 > hm) {
          hm++;
          try {
              H.documentElement.doScroll("left"), jm()
          } catch (a) {
              m.setTimeout(km, 50)
          }
      }
  }
  var lm = function(a) {
      gm ? a() : im.push(a)
  };
  var om = function(a, b) {
          this.g = !1;
          this.C = [];
          this.F = {
              tags: []
          };
          this.O = !1;
          this.o = this.s = 0;
          nm(this, a, b)
      },
      pm = function(a, b, c, d) {
          if (ah.hasOwnProperty(b) || "__zone" === b) return -1;
          var e = {};
          Pc(d) && (e = Qc(d, e));
          e.id = c;
          e.status = "timeout";
          return a.F.tags.push(e) - 1
      },
      qm = function(a, b, c, d) {
          var e = a.F.tags[b];
          e && (e.status = c, e.executionTime = d)
      },
      rm = function(a) {
          if (!a.g) {
              for (var b = a.C, c = 0; c < b.length; c++) b[c]();
              a.g = !0;
              a.C.length = 0
          }
      },
      nm = function(a, b, c) {
          Fa(b) && a.Kc(b);
          c && m.setTimeout(function() {
              return rm(a)
          }, Number(c))
      };
  om.prototype.Kc = function(a) {
      var b = this,
          c = fb(function() {
              return I(function() {
                  a(L.I, b.F)
              })
          });
      this.g ? c() : this.C.push(c)
  };
  var sm = function(a) {
      a.s++;
      return fb(function() {
          a.o++;
          a.O && a.o >= a.s && rm(a)
      })
  };
  var tm = function() {
          function a(d) {
              return !Ja(d) || 0 > d ? 0 : d
          }
          if (!Yg._li && m.performance && m.performance.timing) {
              var b = m.performance.timing.navigationStart,
                  c = Ja(sh.get("gtm.start")) ? sh.get("gtm.start") : 0;
              Yg._li = {
                  cst: a(c - b),
                  cbt: a(gh - b)
              }
          }
      },
      um = function(a) {
          m.performance && m.performance.mark(L.I + "_" + a + "_start")
      },
      vm = function(a) {
          if (m.performance) {
              var b = L.I + "_" + a + "_start",
                  c = L.I + "_" + a + "_duration";
              m.performance.measure(c, b);
              var d = m.performance.getEntriesByName(c)[0];
              m.performance.clearMarks(b);
              m.performance.clearMeasures(c);
              var e = Yg._p || {};
              void 0 === e[a] && (e[a] = d.duration, Yg._p = e);
              return d.duration
          }
      },
      wm = function() {
          if (m.performance && m.performance.now) {
              var a = Yg._p || {};
              a.PAGEVIEW = m.performance.now();
              Yg._p = a
          }
      };
  var xm = {},
      ym = function() {
          return m.GoogleAnalyticsObject && m[m.GoogleAnalyticsObject]
      },
      zm = !1;

  function Dm() {
      return m.GoogleAnalyticsObject || "ga"
  }
  var Em = function(a) {},
      Fm = function(a, b) {
          return function() {
              var c = ym(),
                  d = c && c.getByName && c.getByName(a);
              if (d) {
                  var e = d.get("sendHitTask");
                  d.set("sendHitTask", function(f) {
                      var g = f.get("hitPayload"),
                          h = f.get("hitCallback"),
                          k = 0 > g.indexOf("&tid=" + b);
                      k && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                      e(f);
                      k && (f.set("hitPayload",
                          g, !0), f.set("hitCallback", h, !0), f.set("_x_19", void 0, !0), e(f))
                  })
              }
          }
      };
  var Mm = function(a) {},
      Qm = function(a) {},
      Rm =
      function() {
          return "&tc=" + bf.filter(function(a) {
              return a
          }).length
      },
      Um = function() {
          2022 <= Sm().length && Tm()
      },
      Vm = function(a) {
          return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*"
      },
      Xm = function() {
          Wm || (Wm = m.setTimeout(Tm, 500))
      },
      Tm = function() {
          Wm && (m.clearTimeout(Wm), Wm = void 0);
          void 0 === Ym || Zm[Ym] && !$m && !an || (bn[Ym] || cn.xj() || 0 >= dn-- ? (Xg(1), bn[Ym] = !0) : (cn.Tj(), lc(Sm(!0)), Zm[Ym] = !0, en = fn = gn = an = $m = ""))
      },
      Sm = function(a) {
          var b = Ym;
          if (void 0 === b) return "";
          var c = Wg("GTM"),
              d = Wg("TAGGING");
          return [hn, Zm[b] ? "" : "&es=1",
              jn[b], Mm(b), c ? "&u=" + c : "", d ? "&ut=" + d : "", Rm(), $m, an, gn, fn, Qm(a), en, "&z=0"
          ].join("")
      },
      ln = function() {
          hn = kn()
      },
      kn = function() {
          return [hh, "&v=3&t=t", "&pid=" + Na(), "&rv=" + L.Ld].join("")
      },
      Pm = ["L", "S", "Y"],
      Lm = ["S", "E"],
      mn = {
          sampleRate: "0.005000",
          Jh: "",
          Ih: Number("5")
      },
      nn = 0 <= H.location.search.indexOf("?gtm_latency=") || 0 <= H.location.search.indexOf("&gtm_latency="),
      on;
  if (!(on = nn)) {
      var pn = Math.random(),
          qn = mn.sampleRate;
      on = pn < qn
  }
  var rn = on,
      sn = {
          label: L.I + " Container",
          children: [{
              label: "Initialization",
              children: []
          }]
      },
      hn = kn(),
      Zm = {},
      $m = "",
      an = "",
      en = "",
      fn = "",
      Om = {},
      Nm = !1,
      Km = {},
      tn = {},
      gn = "",
      Ym = void 0,
      jn = {},
      bn = {},
      Wm = void 0,
      un = 5;
  0 < mn.Ih && (un = mn.Ih);
  var cn = function(a, b) {
          for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
          return {
              xj: function() {
                  return c < a ? !1 : db() - d[c % a] < b
              },
              Tj: function() {
                  var f = c++ % a;
                  d[f] = db()
              }
          }
      }(un, 1E3),
      dn = 1E3,
      wn = function(a, b) {
          if (rn && !bn[a] && Ym !==
              a) {
              Tm();
              Ym = a;
              en = $m = "";
              jn[a] = "&e=" + Vm(b) + "&eid=" + a;
              Xm();
          }
      },
      xn = function(a, b, c, d) {
          if (rn && b) {
              var e, f = String(b[ve.Eb] || "").replace(/_/g, "");
              0 === f.indexOf("cvt") && (f = "cvt");
              e = f;
              var g = c + e;
              if (!bn[a]) {
                  a !== Ym && (Tm(), Ym = a);
                  $m = $m ? $m + "." + g : "&tr=" + g;
                  var h = b["function"];
                  if (!h) throw Error("Error: No function name given for function call.");
                  var k = (df[h] ? "1" : "2") + e;
                  en = en ? en + "." + k : "&ti=" + k;
                  Xm();
                  Um()
              }
          }
      };
  var En = function(a, b, c) {
          if (rn && !bn[a]) {
              a !== Ym && (Tm(), Ym = a);
              var d = c + b;
              an = an ? an + "." + d : "&epr=" + d;
              Xm();
              Um()
          }
      },
      Fn = function(a, b, c) {};

  function Gn(a, b, c, d) {
      var e = bf[a],
          f = Hn(a, b, c, d);
      if (!f) return null;
      var g = kf(e[ve.Eg], c, []);
      if (g && g.length) {
          var h = g[0];
          f = Gn(h.index, {
              onSuccess: f,
              onFailure: 1 === h.Zg ? b.terminate : f,
              terminate: b.terminate
          }, c, d)
      }
      return f
  }

  function Hn(a, b, c, d) {
      function e() {
          if (f[ve.Di]) h();
          else {
              var w = lf(f, c, []);
              var y = w[ve.Oh];
              if (null != y)
                  for (var x = 0; x < y.length; x++)
                      if (!li(y[x])) {
                          h();
                          return
                      } var z = pm(c.pb, String(f[ve.Eb]), Number(f[ve.Gg]), w[ve.Ei]),
                  A = !1;
              w.vtp_gtmOnSuccess = function() {
                  if (!A) {
                      A = !0;
                      var D = db() - E;
                      xn(c.id, bf[a], "5", D);
                      qm(c.pb, z, "success",
                          D);
                      g()
                  }
              };
              w.vtp_gtmOnFailure = function() {
                  if (!A) {
                      A = !0;
                      var D = db() - E;
                      xn(c.id, bf[a], "6", D);
                      qm(c.pb, z, "failure", D);
                      h()
                  }
              };
              w.vtp_gtmTagId = f.tag_id;
              w.vtp_gtmEventId = c.id;
              xn(c.id, f, "1");
              var C = function() {
                  var D = db() - E;
                  xn(c.id, f, "7", D);
                  qm(c.pb, z, "exception", D);
                  A || (A = !0, h())
              };
              var E = db();
              try {
                  jf(w, {
                      event: c,
                      index: a,
                      type: 1
                  })
              } catch (D) {
                  C(D)
              }
          }
      }
      var f = bf[a],
          g = b.onSuccess,
          h = b.onFailure,
          k = b.terminate;
      if (c.uf(f)) return null;
      var n = kf(f[ve.Hg], c, []);
      if (n && n.length) {
          var p = n[0],
              r = Gn(p.index, {
                  onSuccess: g,
                  onFailure: h,
                  terminate: k
              }, c, d);
          if (!r) return null;
          g = r;
          h = 2 === p.Zg ? k : r
      }
      if (f[ve.zg] || f[ve.Ii]) {
          var u =
              f[ve.zg] ? cf : c.gk,
              t = g,
              q = h;
          if (!u[a]) {
              e = fb(e);
              var v = In(a, u, e);
              g = v.onSuccess;
              h = v.onFailure
          }
          return function() {
              u[a](t, q)
          }
      }
      return e
  }

  function In(a, b, c) {
      var d = [],
          e = [];
      b[a] = Jn(d, e, c);
      return {
          onSuccess: function() {
              b[a] = Kn;
              for (var f = 0; f < d.length; f++) d[f]()
          },
          onFailure: function() {
              b[a] = Ln;
              for (var f = 0; f < e.length; f++) e[f]()
          }
      }
  }

  function Jn(a, b, c) {
      return function(d, e) {
          a.push(d);
          b.push(e);
          c()
      }
  }

  function Kn(a) {
      a()
  }

  function Ln(a, b) {
      b()
  };
  var Mn = function(a) {
          return arguments
      },
      Pn = function(a, b) {
          for (var c = [], d = 0; d < bf.length; d++)
              if (a[d]) {
                  var e = bf[d];
                  var f = sm(b.pb);
                  try {
                      var g = Gn(d, {
                          onSuccess: f,
                          onFailure: f,
                          terminate: f
                      }, b, d);
                      if (g) {
                          var h = c,
                              k = h.push,
                              n = d,
                              p = e["function"];
                          if (!p) throw "Error: No function name given for function call.";
                          var r = df[p];
                          k.call(h, {
                              Bh: n,
                              th: r ? r.priorityOverride || 0 : 0,
                              execute: g
                          })
                      } else Nn(d, b), f()
                  } catch (q) {
                      f()
                  }
              } var u = b.pb;
          u.O = !0;
          u.o >= u.s &&
              rm(u);
          c.sort(On);
          for (var t = 0; t < c.length; t++) c[t].execute();
          return 0 < c.length
      };

  function On(a, b) {
      var c, d = b.th,
          e = a.th;
      c = d > e ? 1 : d < e ? -1 : 0;
      var f;
      if (0 !== c) f = c;
      else {
          var g = a.Bh,
              h = b.Bh;
          f = g > h ? 1 : g < h ? -1 : 0
      }
      return f
  }

  function Nn(a, b) {
      if (!rn) return;
      var c = function(d) {
          var e = b.uf(bf[d]) ? "3" : "4",
              f = kf(bf[d][ve.Eg], b, []);
          f && f.length && c(f[0].index);
          xn(b.id, bf[d], e);
          var g = kf(bf[d][ve.Hg], b, []);
          g && g.length && c(g[0].index)
      };
      c(a);
  }
  var Qn = !1,
      Rn;
  var Yn = function(a) {
      var b = db(),
          c = a["gtm.uniqueEventId"],
          d = a.event;
      if ("gtm.js" === d) {
          if (Qn) return !1;
          Qn = !0;
      }
      var g = Ih(c),
          h = !1;
      if (!g.active) {
          if ("gtm.js" !== d) return !1;
          h = !0;
          g = Ih(Number.MAX_SAFE_INTEGER)
      }
      wn(c,
          d);
      var k = a.eventCallback,
          n = a.eventTimeout,
          p = k;
      var r = {
          id: c,
          name: d,
          uf: Gh(g.isAllowed),
          gk: [],
          nh: function() {
              Xg(6)
          },
          Tg: Tn(c),
          pb: new om(p, n)
      };
      r.Sg = Un();
      Vn(c, r.pb);
      var u = uf(r);
      h && (u = Wn(u));
      var t = Pn(u, r);
      "gtm.js" !== d && "gtm.sync" !== d || Em(L.I);
      return Xn(u, t)
  };

  function Tn(a) {
      return function(b) {
          rn && (Uc(b) || Fn(a, "input", b))
      }
  }

  function Vn(a, b) {
      xh(a, "event", 1);
      xh(a, "ecommerce", 1);
      xh(a, "gtm");
      xh(a, "eventModel");
  }

  function Un() {
      var a = {};
      a.event = wh("event", 1);
      a.ecommerce = wh("ecommerce", 1);
      a.gtm = wh("gtm");
      a.eventModel = wh("eventModel");
      return a
  }

  function Wn(a) {
      for (var b = [], c = 0; c < a.length; c++) a[c] && $g[String(bf[c][ve.Eb])] && (b[c] = !0);
      return b
  }

  function Xn(a, b) {
      if (!b) return b;
      for (var c = 0; c < a.length; c++)
          if (a[c] && bf[c] && !ah[String(bf[c][ve.Eb])]) return !0;
      return !1
  }

  function Zn(a, b) {
      if (a) {
          var c = "" + a;
          0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
          "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
          return vj("" + c + b).href
      }
  }

  function $n(a, b) {
      return ao() ? Zn(a, b) : void 0
  }

  function ao() {
      var a = !1;
      return a
  }

  function bo() {
      return !!L.Md && "SGTM_TOKEN" !== L.Md.replaceAll("@@", "")
  };
  var co = function() {
      var a = !1;
      return a
  };
  var eo;
  if (3 === L.Ld.length) eo = "g";
  else {
      var fo = "G";
      fo = "g";
      eo = fo
  }
  var go = {
          "": "n",
          UA: "u",
          AW: "a",
          DC: "d",
          G: "e",
          GF: "f",
          HA: "h",
          GTM: eo,
          OPT: "o"
      },
      ho = function(a) {
          var b = L.I.split("-"),
              c = b[0].toUpperCase(),
              d = go[c] || "i",
              e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
              f;
          if (3 === L.Ld.length) {
              var g = "w";
              g = co() ? "s" : "o";
              f = "2" + g
          } else f = "";
          return f + d + L.Ld + e
      };

  function io(a, b) {
      if ("" === a) return b;
      var c = Number(a);
      return isNaN(c) ? b : c
  };
  var jo = function(a, b) {
      a.addEventListener && a.addEventListener.call(a, "message", b, !1)
  };

  function ko() {
      return Lb("iPhone") && !Lb("iPod") && !Lb("iPad")
  };
  Lb("Opera");
  Lb("Trident") || Lb("MSIE");
  Lb("Edge");
  !Lb("Gecko") || -1 != Kb().toLowerCase().indexOf("webkit") && !Lb("Edge") || Lb("Trident") || Lb("MSIE") || Lb("Edge"); - 1 != Kb().toLowerCase().indexOf("webkit") && !Lb("Edge") && Lb("Mobile");
  Lb("Macintosh");
  Lb("Windows");
  Lb("Linux") || Lb("CrOS");
  var lo = na.navigator || null;
  lo && (lo.appVersion || "").indexOf("X11");
  Lb("Android");
  ko();
  Lb("iPad");
  Lb("iPod");
  ko() || Lb("iPad") || Lb("iPod");
  Kb().toLowerCase().indexOf("kaios");
  var mo = function(a, b) {
          for (var c = a, d = 0; 50 > d; ++d) {
              var e;
              try {
                  e = !(!c.frames || !c.frames[b])
              } catch (h) {
                  e = !1
              }
              if (e) return c;
              var f;
              a: {
                  try {
                      var g = c.parent;
                      if (g && g != c) {
                          f = g;
                          break a
                      }
                  } catch (h) {}
                  f = null
              }
              if (!(c = f)) break
          }
          return null
      },
      no = function(a) {
          if (!a || !H.head) return null;
          var b, c;
          c = void 0 === c ? document : c;
          b = c.createElement("meta");
          H.head.appendChild(b);
          b.httpEquiv = "origin-trial";
          b.content = a;
          return b
      };
  var oo = function() {};
  var po = function(a) {
          void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
          void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
          return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
      },
      qo = function(a, b) {
          this.o = a;
          this.g = null;
          this.C = {};
          this.O = 0;
          this.F = void 0 === b ? 500 : b;
          this.s = null
      };
  ma(qo, oo);
  var so = function(a) {
      return "function" === typeof a.o.__tcfapi || null != ro(a)
  };
  qo.prototype.addEventListener = function(a) {
      var b = {},
          c = $b(function() {
              return a(b)
          }),
          d = 0; - 1 !== this.F && (d = setTimeout(function() {
          b.tcString = "tcunavailable";
          b.internalErrorState = 1;
          c()
      }, this.F));
      var e = function(f, g) {
          clearTimeout(d);
          f ? (b = f, b.internalErrorState = po(b), g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
          a(b)
      };
      try {
          to(this, "addEventListener", e)
      } catch (f) {
          b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d),
              d = 0), c()
      }
  };
  qo.prototype.removeEventListener = function(a) {
      a && a.listenerId && to(this, "removeEventListener", null, a.listenerId)
  };
  var vo = function(a, b, c) {
          var d;
          d = void 0 === d ? "755" : d;
          var e;
          a: {
              if (a.publisher && a.publisher.restrictions) {
                  var f = a.publisher.restrictions[b];
                  if (void 0 !== f) {
                      e = f[void 0 === d ? "755" : d];
                      break a
                  }
              }
              e = void 0
          }
          var g = e;
          if (0 === g) return !1;
          var h = c;
          2 === c ? (h = 0, 2 === g && (h = 1)) : 3 === c && (h = 1, 1 === g && (h = 0));
          var k;
          if (0 === h)
              if (a.purpose && a.vendor) {
                  var n = uo(a.vendor.consents, void 0 === d ? "755" : d);
                  k = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && uo(a.purpose.consents, b)
              } else k = !0;
          else k = 1 === h ? a.purpose && a.vendor ? uo(a.purpose.legitimateInterests,
              b) && uo(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
          return k
      },
      uo = function(a, b) {
          return !(!a || !a[b])
      },
      to = function(a, b, c, d) {
          c || (c = function() {});
          if ("function" === typeof a.o.__tcfapi) {
              var e = a.o.__tcfapi;
              e(b, 2, c, d)
          } else if (ro(a)) {
              wo(a);
              var f = ++a.O;
              a.C[f] = c;
              if (a.g) {
                  var g = {};
                  a.g.postMessage((g.__tcfapiCall = {
                      command: b,
                      version: 2,
                      callId: f,
                      parameter: d
                  }, g), "*")
              }
          } else c({}, !1)
      },
      ro = function(a) {
          if (a.g) return a.g;
          a.g = mo(a.o, "__tcfapiLocator");
          return a.g
      },
      wo = function(a) {
          a.s || (a.s = function(b) {
              try {
                  var c;
                  c = ("string" ===
                      typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                  a.C[c.callId](c.returnValue, c.success)
              } catch (d) {}
          }, jo(a.o, a.s))
      };
  var xo = !0;
  xo = !1;
  var yo = {
          1: 0,
          3: 0,
          4: 0,
          7: 3,
          9: 3,
          10: 3
      },
      zo = io("", 550),
      Ao = io("", 500);

  function Bo() {
      var a = Yg.tcf || {};
      return Yg.tcf = a
  }
  var Co = function(a, b) {
          this.s = a;
          this.g = b;
          this.o = db();
      },
      Do = function(a) {},
      Eo = function(a) {},
      Ko = function() {
          var a = Bo(),
              b = new qo(m, xo ? 3E3 : -1),
              c = new Co(b, a);
          if ((Fo() ? !0 === m.gtag_enable_tcf_support : !1 !== m.gtag_enable_tcf_support) && !a.active && ("function" === typeof m.__tcfapi || so(b))) {
              a.active = !0;
              a.hd = {};
              Go();
              var d = null;
              xo ? d = m.setTimeout(function() {
                  Ho(a);
                  Io(a);
                  d = null
              }, Ao) : a.tcString = "tcunavailable";
              try {
                  b.addEventListener(function(e) {
                      d && (clearTimeout(d), d = null);
                      if (0 !== e.internalErrorState) Ho(a), Io(a), Do(c);
                      else {
                          var f;
                          a.gdprApplies = e.gdprApplies;
                          if (!1 === e.gdprApplies) f = Jo(), b.removeEventListener(e);
                          else if ("tcloaded" === e.eventStatus || "useractioncomplete" === e.eventStatus || "cmpuishown" === e.eventStatus) {
                              var g = {},
                                  h;
                              for (h in yo)
                                  if (yo.hasOwnProperty(h))
                                      if ("1" === h) {
                                          var k = e,
                                              n = !0;
                                          n = void 0 === n ? !1 : n;
                                          var p;
                                          var r = k;
                                          !1 === r.gdprApplies ? p = !0 : (void 0 === r.internalErrorState && (r.internalErrorState = po(r)), p = "error" === r.cmpStatus || 0 !== r.internalErrorState || "loaded" === r.cmpStatus && ("tcloaded" === r.eventStatus || "useractioncomplete" ===
                                              r.eventStatus) ? !0 : !1);
                                          g["1"] = p ? !1 === k.gdprApplies || "tcunavailable" === k.tcString || void 0 === k.gdprApplies && !n || "string" !== typeof k.tcString || !k.tcString.length ? !0 : vo(k, "1", 0) : !1
                                      } else g[h] = vo(e, h, yo[h]);
                              f = g
                          }
                          f && (a.tcString = e.tcString || "tcempty", a.hd = f, Io(a), Do(c))
                      }
                  }), Eo(c)
              } catch (e) {
                  d && (clearTimeout(d), d = null), Ho(a), Io(a)
              }
          }
      };

  function Ho(a) {
      a.type = "e";
      a.tcString = "tcunavailable";
      xo && (a.hd = Jo())
  }

  function Go() {
      var a = {},
          b = (a.ad_storage = "denied", a.wait_for_update = zo, a);
      ii(b)
  }
  var Fo = function() {
      var a = !1;
      a = !0;
      return a
  };

  function Jo() {
      var a = {},
          b;
      for (b in yo) yo.hasOwnProperty(b) && (a[b] = !0);
      return a
  }

  function Io(a) {
      var b = {},
          c = (b.ad_storage = a.hd["1"] ? "granted" : "denied", b);
      ki(c, 0, {
          gdprApplies: a ? a.gdprApplies : void 0,
          tcString: Lo()
      })
  }
  var Mo = function() {
          var a = Bo();
          if (a.active && void 0 !== a.loadTime) return Number(a.loadTime)
      },
      Lo = function() {
          var a = Bo();
          return a.active ? a.tcString || "" : ""
      },
      No = function() {
          var a = Bo();
          return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
      },
      Oo = function(a) {
          if (!yo.hasOwnProperty(String(a))) return !0;
          var b = Bo();
          return b.active && b.hd ? !!b.hd[String(a)] : !0
      };
  var Vo = !1;
  var Wo = function() {
          this.g = {}
      },
      Xo = function(a, b, c) {
          null != c && (a.g[b] = c)
      },
      Yo = function(a) {
          return Object.keys(a.g).map(function(b) {
              return encodeURIComponent(b) + "=" + encodeURIComponent(a.g[b])
          }).join("&")
      },
      $o = function(a, b, c, d, e) {};
  var bp = /[A-Z]+/,
      cp = /\s/,
      dp = function(a) {
          if (Ia(a)) {
              a = ab(a);
              var b = a.indexOf("-");
              if (!(0 > b)) {
                  var c = a.substring(0, b);
                  if (bp.test(c)) {
                      var d = !1;
                      d = !0;
                      for (var e = a.substring(b + 1).split("/"), f = 0; f < e.length; f++)
                          if (!e[f] || cp.test(e[f]) && ("AW" !== c || 1 !== f || !d)) return;
                      return {
                          id: a,
                          prefix: c,
                          containerId: c + "-" + e[0],
                          N: e
                      }
                  }
              }
          }
      },
      fp = function(a) {
          for (var b = {}, c = 0; c < a.length; ++c) {
              var d =
                  dp(a[c]);
              d && (b[d.id] = d)
          }
          ep(b);
          var e = [];
          Sa(b, function(f, g) {
              e.push(g)
          });
          return e
      };

  function ep(a) {
      var b = [],
          c;
      for (c in a)
          if (a.hasOwnProperty(c)) {
              var d = a[c];
              "AW" === d.prefix && d.N[1] && b.push(d.containerId)
          } for (var e = 0; e < b.length; ++e) delete a[b[e]]
  };
  var hp = function(a, b, c, d) {
          return (2 === gp() || d || "http:" != m.location.protocol ? a : b) + c
      },
      gp = function() {
          var a = jc(),
              b;
          if (1 === a) a: {
              var c = dh;c = c.toLowerCase();
              for (var d = "https://" + c, e = "http://" + c, f = 1, g = H.getElementsByTagName("script"), h = 0; h < g.length && 100 > h; h++) {
                  var k = g[h].src;
                  if (k) {
                      k = k.toLowerCase();
                      if (0 === k.indexOf(e)) {
                          b = 3;
                          break a
                      }
                      1 === f && 0 === k.indexOf(d) && (f = 2)
                  }
              }
              b = f
          }
          else b = a;
          return b
      };
  var Ap = !1;

  function Bp() {
      if (Fa(bc.joinAdInterestGroup)) return !0;
      Ap || (no(''), Ap = !0);
      return Fa(bc.joinAdInterestGroup)
  }

  function Cp(a, b) {
      var c = void 0;
      try {
          c = H.querySelector('iframe[data-tagging-id="' + b + '"]')
      } catch (e) {}
      if (c) {
          var d = Number(c.dataset.loadTime);
          if (d && 6E4 > db() - d) return
      } else try {
          if (50 <= H.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) return
      } catch (e) {}
      kc(a, void 0, {
          allow: "join-ad-interest-group"
      }, {
          taggingId: b,
          loadTime: db()
      }, c)
  };
  var zq = function() {
          var a = !0;
          Oo(7) && Oo(9) && Oo(10) || (a = !1);
          var b = !0;
          b = !1;
          b && !yq() && (a = !1);
          return a
      },
      yq = function() {
          var a = !0;
          Oo(3) && Oo(4) || (a = !1);
          return a
      };
  var tr = !1;

  function ur() {
      var a = Yg;
      return a.gcq = a.gcq || new vr
  }
  var wr = function(a, b, c) {
          ur().register(a, b, c)
      },
      xr = function(a, b, c, d) {
          ur().push("event", [b, a], c, d)
      },
      yr = function(a, b) {
          ur().push("config", [a], b)
      },
      zr = function(a, b, c, d) {
          ur().push("get", [a, b], c, d)
      },
      Ar = function(a) {
          return ur().getRemoteConfig(a)
      },
      Br = {},
      Cr = function() {
          this.status = 1;
          this.containerConfig = {};
          this.targetConfig = {};
          this.remoteConfig = {};
          this.o = {};
          this.s = null;
          this.g = !1
      },
      Dr = function(a, b, c, d, e) {
          this.type = a;
          this.s = b;
          this.W = c || "";
          this.g = d;
          this.o = e
      },
      vr = function() {
          this.o = {};
          this.s = {};
          this.g = [];
          this.C = {
              AW: !1,
              UA: !1
          }
      },
      Er = function(a, b) {
          var c = dp(b);
          return a.o[c.containerId] = a.o[c.containerId] || new Cr
      },
      Fr = function(a, b, c) {
          if (b) {
              var d = dp(b);
              if (d && 1 === Er(a, b).status) {
                  Er(a, b).status = 2;
                  var e = {};
                  rn && (e.timeoutId = m.setTimeout(function() {
                      Xg(38);
                      Xm()
                  }, 3E3));
                  a.push("require", [e], d.containerId);
                  Br[d.containerId] = db();
                  if (co()) {} else {
                      var g = "/gtag/js?id=" + encodeURIComponent(d.containerId) + "&l=" + L.Z + "&cx=c";
                      bo() && (g += "&sign=" + L.Md);
                      var h = ("http:" != m.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com" + g),
                          k = $n(c, g) || h;
                      ic(k)
                  }
              }
          }
      },
      Gr = function(a, b, c, d) {
          if (d.W) {
              var e = Er(a, d.W),
                  f = e.s;
              if (f) {
                  var g = Qc(c),
                      h = Qc(e.targetConfig[d.W]),
                      k = Qc(e.containerConfig),
                      n = Qc(e.remoteConfig),
                      p = Qc(a.s),
                      r = rh("gtm.uniqueEventId"),
                      u = dp(d.W).prefix,
                      t = fb(function() {
                          var v = g[R.$b];
                          v && I(v)
                      }),
                      q = Xi(Wi(Yi(Vi(Ti(Ui(Si(Ri(Qi(g), h), k), n), p), function() {
                          En(r, u, "2");
                          tr && t()
                      }), function() {
                          En(r, u, "3");
                          tr && t()
                      }), function(v, w) {
                          a.C[v] = w
                      }), function(v) {
                          return a.C[v]
                      });
                  try {
                      En(r, u, "1");
                      f(d.W, b, d.s, q)
                  } catch (v) {
                      En(r, u, "4");
                  }
              }
          }
      };
  vr.prototype.register = function(a, b, c) {
      var d = Er(this, a);
      if (3 !== d.status) {
          d.s = b;
          d.status = 3;
          c && (Qc(d.remoteConfig, c), d.remoteConfig = c);
          var e = dp(a),
              f = Br[e.containerId];
          if (void 0 !== f) {
              var g = Yg[e.containerId].bootstrap,
                  h = e.prefix.toUpperCase();
              Yg[e.containerId]._spx && (h = h.toLowerCase());
              var k = rh("gtm.uniqueEventId"),
                  n = h,
                  p = db() - g;
              if (rn && !bn[k]) {
                  k !== Ym && (Tm(), Ym = k);
                  var r = n + "." + Math.floor(g - f) + "." + Math.floor(p);
                  fn = fn ? fn + "," + r : "&cl=" + r
              }
              delete Br[e.containerId]
          }
          this.flush()
      }
  };
  vr.prototype.push = function(a, b, c, d) {
      var e = Math.floor(db() / 1E3);
      Fr(this, c, b[0][R.wa] || this.s[R.wa]);
      c && Er(this, c).g && (d = !1);
      this.g.push(new Dr(a, e, c, b, d));
      d || this.flush()
  };
  vr.prototype.insert = function(a, b, c) {
      var d = Math.floor(db() / 1E3);
      0 < this.g.length ? this.g.splice(1, 0, new Dr(a, d, c, b, !1)) : this.g.push(new Dr(a, d, c, b, !1))
  };
  vr.prototype.flush = function(a) {
      for (var b = this, c = [], d = !1, e = {}; this.g.length;) {
          var f = this.g[0];
          if (f.o) !f.W || Er(this, f.W).g ? (f.o = !1, this.g.push(f)) : c.push(f), this.g.shift();
          else {
              switch (f.type) {
                  case "require":
                      if (3 !== Er(this, f.W).status && !a) {
                          this.g.push.apply(this.g, c);
                          return
                      }
                      rn && m.clearTimeout(f.g[0].timeoutId);
                      break;
                  case "set":
                      Sa(f.g[0], function(u, t) {
                          Qc(kb(u, t), b.s)
                      });
                      break;
                  case "config":
                      e.Pa = {};
                      Sa(f.g[0], function(u) {
                          return function(t, q) {
                              Qc(kb(t, q), u.Pa)
                          }
                      }(e));
                      var g = !!e.Pa[R.Dd];
                      delete e.Pa[R.Dd];
                      var h =
                          Er(this, f.W),
                          k = dp(f.W),
                          n = k.containerId === k.id;
                      g || (n ? h.containerConfig = {} : h.targetConfig[f.W] = {});
                      h.g && g || Gr(this, R.Ba, e.Pa, f);
                      h.g = !0;
                      delete e.Pa[R.cc];
                      n ? Qc(e.Pa, h.containerConfig) : Qc(e.Pa, h.targetConfig[f.W]);
                      d = !0;
                      break;
                  case "event":
                      e.md = {};
                      Sa(f.g[0], function(u) {
                          return function(t, q) {
                              Qc(kb(t, q), u.md)
                          }
                      }(e));
                      Gr(this, f.g[1], e.md, f);
                      break;
                  case "get":
                      var p = {},
                          r = (p[R.Ta] = f.g[0], p[R.hb] = f.g[1], p);
                      Gr(this, R.Ra, r, f)
              }
              this.g.shift();
              Hr(this, f)
          }
          e = {
              Pa: e.Pa,
              md: e.md
          }
      }
      this.g.push.apply(this.g, c);
      d && this.flush()
  };
  var Hr = function(a, b) {
      if ("require" !== b.type)
          if (b.W)
              for (var c = a.getCommandListeners(b.W)[b.type] || [], d = 0; d < c.length; d++) c[d]();
          else
              for (var e in a.o)
                  if (a.o.hasOwnProperty(e)) {
                      var f = a.o[e];
                      if (f && f.o)
                          for (var g = f.o[b.type] || [], h = 0; h < g.length; h++) g[h]()
                  }
  };
  vr.prototype.getRemoteConfig = function(a) {
      return Er(this, a).remoteConfig
  };
  vr.prototype.getCommandListeners = function(a) {
      return Er(this, a).o
  };
  var Cf;
  var Ir = {},
      Jr = function(a, b) {
          b = b.toString().split(",");
          for (var c = 0; c < b.length; c++) {
              var d = Ir[b[c]] || [];
              Ir[b[c]] = d;
              0 > d.indexOf(a) && d.push(a)
          }
      },
      Kr = function(a) {
          Sa(Ir, function(b, c) {
              var d = c.indexOf(a);
              0 <= d && c.splice(d, 1)
          })
      };
  var Lr = "HA GF G UA AW DC".split(" "),
      Mr = !1;
  var Nr = !1,
      Or = !1,
      Pr = 0;

  function Qr(a, b) {
      var c = {
          event: a
      };
      b && (c.eventModel = Qc(b), b[R.$b] && (c.eventCallback = b[R.$b]), b[R.wd] && (c.eventTimeout = b[R.wd]));
      return c
  }

  function Rr(a) {
      a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
          value: kh()
      });
      return a["gtm.uniqueEventId"]
  }

  function Sr() {
      if (!Nr && !Yg.gtagRegistered) {
          Nr = Yg.gtagRegistered = !0;
          Yg.addTargetToGroup = function(c) {
              Jr(c, "default")
          };
          var a = Yg.pendingDefaultTargets;
          delete Yg.pendingDefaultTargets;
          if (Ka(a))
              for (var b = 0; b < a.length; ++b) Jr(a[b], "default")
      }
      return Nr
  }
  var Tr = {
          config: function(a) {
              var b, c = Rr(a);
              if (2 > a.length || !Ia(a[1])) return;
              var d = {};
              if (2 < a.length) {
                  if (void 0 != a[2] && !Pc(a[2]) || 3 < a.length) return;
                  d = a[2]
              }
              var e = dp(a[1]);
              if (!e) return;
              Kr(e.id);
              Jr(e.id, d[R.Je] || "default");
              delete d[R.Je];
              Or || Xg(43);
              if (Sr() && -1 !== Lr.indexOf(e.prefix)) {
                  "G" === e.prefix && (d[R.cc] = !0);
                  Mr && delete d[R.$b];
                  e.id === e.containerId && (Yg.configCount = ++Pr);
                  yr(d, e.id);
                  return
              }
              uh("gtag.targets." + e.id, void 0);
              uh("gtag.targets." + e.id, Qc(d));
              var f = {};
              f[R.Db] = e.id;
              b = Qr(R.Ba, f);
              b["gtm.uniqueEventId"] = c;
              return b
          },
          consent: function(a) {
              function b() {
                  Sr() && Qc(a[2], {
                      subcommand: a[1]
                  })
              }
              if (3 === a.length) {
                  Xg(39);
                  var c = kh(),
                      d = a[1];
                  "default" === d ? (b(), ii(a[2])) : "update" === d && (b(), ki(a[2], c))
              }
          },
          event: function(a) {
              var b = a[1];
              if (!(2 > a.length) && Ia(b)) {
                  var c;
                  if (2 < a.length) {
                      if (!Pc(a[2]) && void 0 != a[2] || 3 < a.length) return;
                      c = a[2]
                  }
                  var d = Qr(b, c),
                      e = Rr(a);
                  d["gtm.uniqueEventId"] = e;
                  if ("optimize.callback" === b) return d.eventModel = d.eventModel || {}, d;
                  var f;
                  var g = c && c[R.Db];
                  void 0 === g && (g = rh(R.Db, 2), void 0 === g && (g = "default"));
                  if (Ia(g) || Ka(g)) {
                      for (var h = g.toString().replace(/\s+/g, "").split(","), k = [], n = 0; n < h.length; n++)
                          if (0 <= h[n].indexOf("-")) k.push(h[n]);
                          else {
                              var p = Ir[h[n]];
                              p && p.length && (k = k.concat(p))
                          } f = fp(k)
                  } else f = void 0;
                  var r = f;
                  if (!r) return;
                  for (var u = Sr(), t = [], q = 0; u && q < r.length; q++) {
                      var v = r[q];
                      if (-1 !== Lr.indexOf(v.prefix)) {
                          var w = Qc(c);
                          "G" === v.prefix && (w[R.cc] = !0);
                          Mr && delete w[R.$b];
                          xr(b, w, v.id)
                      }
                      t.push(v.id)
                  }
                  d.eventModel = d.eventModel || {};
                  0 < r.length ? d.eventModel[R.Db] = t.join() : delete d.eventModel[R.Db];
                  Or || Xg(43);
                  return d
              }
          },
          get: function(a) {
              Xg(53);
              if (4 !== a.length || !Ia(a[1]) || !Ia(a[2]) || !Fa(a[3])) return;
              var b = dp(a[1]),
                  c = String(a[2]),
                  d = a[3];
              if (!b) return;
              Or || Xg(43);
              if (!Sr() || -1 === Lr.indexOf(b.prefix)) return;
              kh();
              var e = {};
              ei(Qc((e[R.Ta] = c, e[R.hb] = d, e)));
              zr(c, function(f) {
                  I(function() {
                      return d(f)
                  })
              }, b.id);
          },
          js: function(a) {
              if (2 == a.length && a[1].getTime) {
                  Or = !0;
                  Sr();
                  var b = {};
                  return b.event = "gtm.js", b["gtm.start"] = a[1].getTime(), b["gtm.uniqueEventId"] = Rr(a), b
              }
          },
          policy: function(a) {
              if (3 === a.length) {
                  var b = a[1],
                      c = a[2],
                      d = Cf.o;
                  d.g[b] ? d.g[b].push(c) : d.g[b] = [c]
              }
          },
          set: function(a) {
              var b;
              2 == a.length && Pc(a[1]) ? b = Qc(a[1]) : 3 == a.length && Ia(a[1]) && (b = {}, Pc(a[2]) || Ka(a[2]) ? b[a[1]] = Qc(a[2]) : b[a[1]] = a[2]);
              if (b) {
                  if (kh(), Sr()) {
                      Qc(b);
                      var c = Qc(b);
                      ur().push("set", [c])
                  }
                  b._clear = !0;
                  return b
              }
          }
      },
      Ur = {
          policy: !0
      };
  var Vr = function() {
      this.g = [];
      this.o = []
  };
  Vr.prototype.push = function(a, b, c) {
      var d = {
          ej: c,
          message: a,
          nc: b,
          Ff: this.g.length + 1
      };
      this.g.push(d);
      for (var e = 0; e < this.o.length; e++) try {
          this.o[e](d)
      } catch (f) {}
  };
  Vr.prototype.mh = function(a) {
      this.o.push(a)
  };
  Vr.prototype.get = function() {
      for (var a = {}, b = 0; b < this.g.length; b++) {
          var c = this.g[b],
              d = a[c.nc];
          d || (d = [], a[c.nc] = d);
          d.push(c)
      }
      return a
  };
  Vr.prototype.get = Vr.prototype.get;
  Vr.prototype.listen = Vr.prototype.mh;
  Vr.prototype.push = Vr.prototype.push;

  function Wr(a, b) {
      return a.nc - b.nc || a.Ff - b.Ff
  };
  var Xr = function(a) {
          var b = m[L.Z].hide;
          if (b && void 0 !== b[a] && b.end) {
              b[a] = !1;
              var c = !0,
                  d;
              for (d in b)
                  if (b.hasOwnProperty(d) && !0 === b[d]) {
                      c = !1;
                      break
                  } c && (b.end(), b.end = null)
          }
      },
      Yr = function(a) {
          var b = m[L.Z],
              c = b && b.hide;
          c && c.end && (c[a] = !0)
      };
  var Zr = !1,
      $r = [];

  function as() {
      if (!Zr) {
          Zr = !0;
          for (var a = 0; a < $r.length; a++) I($r[a])
      }
  }
  var bs = function(a) {
      Zr ? I(a) : $r.push(a)
  };
  var ss = function(a) {
      if (rs(a)) return a;
      this.g = a
  };
  ss.prototype.rj = function() {
      return this.g
  };
  var rs = function(a) {
      return !a || "object" !== Nc(a) || Pc(a) ? !1 : "getUntrustedUpdateValue" in a
  };
  ss.prototype.getUntrustedUpdateValue = ss.prototype.rj;
  var ts = 0,
      us, vs = {},
      ws = [],
      xs = [],
      ys = !1,
      zs = !1,
      As = function(a) {
          return m[L.Z].push(a)
      },
      Bs = function(a, b, c) {
          a.eventCallback = b;
          c && (a.eventTimeout = c);
          return As(a)
      },
      Cs = function(a, b) {
          var c = Yg[L.Z],
              d = c ? c.subscribers : 1,
              e = 0,
              f = !1,
              g = void 0;
          b && (g = m.setTimeout(function() {
              f || (f = !0, a());
              g = void 0
          }, b));
          return function() {
              ++e === d && (g && (m.clearTimeout(g), g = void 0), f || (a(), f = !0))
          }
      };

  function Ds(a) {
      var b = a._clear;
      Sa(a, function(d, e) {
          "_clear" !== d && (b && uh(d, void 0), uh(d, e))
      });
      fh || (fh = a["gtm.start"]);
      var c = a["gtm.uniqueEventId"];
      if (!a.event) return !1;
      c || (c = kh(), a["gtm.uniqueEventId"] = c, uh("gtm.uniqueEventId", c));
      return Yn(a)
  }

  function Es(a) {
      if (null == a || "object" !== typeof a) return !1;
      if (a.event) return !0;
      if (Ta(a)) {
          var b = a[0];
          if ("config" === b || "event" === b || "js" === b) return !0
      }
      return !1
  }

  function Fs() {
      for (var a = !1; !zs && (0 < ws.length || 0 < xs.length);) {
          if (!ys && Es(ws[0])) {
              var b = {},
                  c = (b.event = "gtm.init_consent", b),
                  d = {},
                  e = (d.event = "gtm.init", d),
                  f = ws[0]["gtm.uniqueEventId"];
              f && (c["gtm.uniqueEventId"] = f - 2, e["gtm.uniqueEventId"] = f - 1);
              ws.unshift(c, e);
              ys = !0
          }
          zs = !0;
          delete oh.eventModel;
          qh();
          var g = null;
          null == g && (g = ws.shift());
          if (null != g) {
              var h = rs(g);
              if (h) {
                  var k = g;
                  g = rs(k) ? k.getUntrustedUpdateValue() : void 0;
                  vh()
              }
              try {
                  if (Fa(g)) try {
                      g.call(sh)
                  } catch (y) {} else if (Ka(g)) {
                      var n = g;
                      if (Ia(n[0])) {
                          var p = n[0].split("."),
                              r = p.pop(),
                              u = n.slice(1),
                              t = rh(p.join("."), 2);
                          if (void 0 !== t && null !== t) try {
                              t[r].apply(t, u)
                          } catch (y) {}
                      }
                  } else {
                      if (Ta(g)) {
                          a: {
                              var q = g;
                              if (q.length && Ia(q[0])) {
                                  var v = Tr[q[0]];
                                  if (v && (!h || !Ur[q[0]])) {
                                      g = v(q);
                                      break a
                                  }
                              }
                              g = void 0
                          }
                          if (!g) {
                              zs = !1;
                              continue
                          }
                      }
                      a = Ds(g) ||
                          a;
                  }
              } finally {
                  h && qh(!0)
              }
          }
          zs = !1
      }
      return !a
  }

  function Hs() {
      var b = Fs();
      try {
          Xr(L.I)
      } catch (c) {}
      return b
  }
  var Ks = function() {
      var a = dc(L.Z, []),
          b = dc("google_tag_manager", {});
      b = b[L.Z] = b[L.Z] || {};
      lm(function() {
          b.gtmDom || (b.gtmDom = !0, a.push({
              event: "gtm.dom"
          }))
      });
      bs(function() {
          b.gtmLoad || (b.gtmLoad = !0, a.push({
              event: "gtm.load"
          }))
      });
      b.subscribers = (b.subscribers || 0) + 1;
      var c = a.push;
      a.push = function() {
          var e;
          if (0 < Yg.SANDBOXED_JS_SEMAPHORE) {
              e = [];
              for (var f =
                      0; f < arguments.length; f++) e[f] = new ss(arguments[f])
          } else e = [].slice.call(arguments, 0);
          ws.push.apply(ws, e);
          var g = c.apply(a, e);
          if (300 < this.length)
              for (Xg(4); 300 < this.length;) this.shift();
          var h = "boolean" !== typeof g || g;
          return Fs() && h
      };
      var d = a.slice(0);
      ws.push.apply(ws, d);
      if (Is()) {
          I(Hs)
      }
  };
  var Is = function() {
      var a = !0;
      return a
  };

  function Ms(a) {
      if (null == a || 0 === a.length) return !1;
      var b = Number(a),
          c = db();
      return b < c + 3E5 && b > c - 9E5
  };
  var Ns = function(a) {
      Yg.addTargetToGroup ? Yg.addTargetToGroup(a) : (Yg.pendingDefaultTargets = Yg.pendingDefaultTargets || [], Yg.pendingDefaultTargets.push(a))
  };
  var Os = function() {
      var a = [];
      return a
  };
  var Ps = {};
  Ps.Hd = new String("undefined");
  var Ss = function(a, b, c) {
          var d = {
              event: b,
              "gtm.element": a,
              "gtm.elementClasses": wc(a, "className"),
              "gtm.elementId": a["for"] || rc(a, "id") || "",
              "gtm.elementTarget": a.formTarget || wc(a, "target") || ""
          };
          c && (d["gtm.triggers"] = c.join(","));
          d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || wc(a, "href") || a.src || a.code || a.codebase || "";
          return d
      },
      Ts = function(a) {
          Yg.hasOwnProperty("autoEventsSettings") || (Yg.autoEventsSettings = {});
          var b = Yg.autoEventsSettings;
          b.hasOwnProperty(a) || (b[a] = {});
          return b[a]
      },
      Us = function(a, b, c) {
          Ts(a)[b] = c
      },
      Vs = function(a, b, c, d) {
          var e = Ts(a),
              f = eb(e, b, d);
          e[b] = c(f)
      },
      Ws = function(a, b, c) {
          var d = Ts(a);
          return eb(d, b, c)
      };
  var pt = m.clearTimeout,
      qt = m.setTimeout,
      U = function(a, b, c, d) {
          if (co()) {
              b && I(b)
          } else return ic(a, b, c, d)
      },
      rt = function() {
          return new Date
      },
      st = function() {
          return m.location.href
      },
      tt = function(a) {
          return tj(vj(a), "fragment")
      },
      ut = function(a) {
          return uj(vj(a))
      },
      vt = function(a, b) {
          return rh(a, b || 2)
      },
      wt = function(a, b, c) {
          return b ? Bs(a, b, c) : As(a)
      },
      xt = function(a, b) {
          m[a] = b
      },
      W = function(a, b, c) {
          b && (void 0 === m[a] || c && !m[a]) && (m[a] = b);
          return m[a]
      },
      yt = function(a, b, c) {
          return Xj(a, b, void 0 === c ? !0 : !!c)
      },
      zt = function(a, b, c) {
          return 0 === gk(a, b, c)
      },
      At = function(a, b) {
          if (co()) {
              b && I(b)
          } else kc(a, b)
      },
      Bt = function(a) {
          return !!Ws(a, "init", !1)
      },
      Ct = function(a) {
          Us(a, "init", !0)
      },
      Dt = function(a) {
          var b = dh,
              c = "?id=" + encodeURIComponent(a) + "&l=" + L.Z;
          bo() && (c += "&sign=" + L.Md, cc && (b = cc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]));
          var d = hp("https://", "http://", b + c);
          U(d)
      },
      Et = function(a,
          b, c) {
          rn && (Uc(a) || Fn(c, b, a))
      };

  function bu(a, b) {
      a = String(a);
      b = String(b);
      var c = a.length - b.length;
      return 0 <= c && a.indexOf(b, c) == c
  }
  var cu = new Qa;

  function du(a, b, c) {
      var d = c ? "i" : void 0;
      try {
          var e = String(b) + d,
              f = cu.get(e);
          f || (f = new RegExp(b, d), cu.set(e, f));
          return f.test(a)
      } catch (g) {
          return !1
      }
  }

  function eu(a, b) {
      function c(g) {
          var h = vj(g),
              k = tj(h, "protocol"),
              n = tj(h, "host", !0),
              p = tj(h, "port"),
              r = tj(h, "path").toLowerCase().replace(/\/$/, "");
          if (void 0 === k || "http" == k && "80" == p || "https" == k && "443" == p) k = "web", p = "default";
          return [k, n, p, r]
      }
      for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
          if (d[f] !== e[f]) return !1;
      return !0
  }

  function fu(a) {
      return gu(a) ? 1 : 0
  }

  function gu(a) {
      var b = a.arg0,
          c = a.arg1;
      if (a.any_of && Array.isArray(c)) {
          for (var d = 0; d < c.length; d++) {
              var e = Qc(a, {});
              Qc({
                  arg1: c[d],
                  any_of: void 0
              }, e);
              if (fu(e)) return !0
          }
          return !1
      }
      switch (a["function"]) {
          case "_cn":
              return 0 <= String(b).indexOf(String(c));
          case "_css":
              var f;
              a: {
                  if (b) {
                      var g = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
                      try {
                          for (var h = 0; h < g.length; h++)
                              if (b[g[h]]) {
                                  f = b[g[h]](c);
                                  break a
                              }
                      } catch (k) {}
                  }
                  f = !1
              }
              return f;
          case "_ew":
              return bu(b, c);
          case "_eq":
              return String(b) ==
                  String(c);
          case "_ge":
              return Number(b) >= Number(c);
          case "_gt":
              return Number(b) > Number(c);
          case "_lc":
              return 0 <= String(b).split(",").indexOf(String(c));
          case "_le":
              return Number(b) <= Number(c);
          case "_lt":
              return Number(b) < Number(c);
          case "_re":
              return du(b, c, a.ignore_case);
          case "_sw":
              return 0 == String(b).indexOf(String(c));
          case "_um":
              return eu(b, c)
      }
      return !1
  };

  function hu(a, b) {
      var c = this;
  };

  function iu(a, b, c) {
      var d;
      return d
  };

  function ju(a, b, c) {};

  function ku(a, b, c, d) {};

  function lu(a) {};

  function pu(a) {};
  var qu = {},
      ru = [],
      su = {},
      tu = 0,
      uu = 0;

  function Bu(a, b) {}

  function Iu(a, b) {};

  function Nu(a) {};
  var Ou = {},
      Pu = [];
  var Wu = function(a, b) {};

  function cv(a, b) {};
  var dv = /^\s*$/,
      ev, fv = !1;

  function qv(a, b) {}

  function rv(a, b, c) {};
  var sv = ["www.youtube.com", "www.youtube-nocookie.com"],
      tv, uv = !1,
      vv = 0;

  function Fv(a, b) {}

  function Gv(a, b) {
      return !0
  };

  function Hv(a, b, c) {};

  function Iv(a, b) {
      var c;
      return c
  };

  function Jv(a) {};

  function Kv(a) {};

  function Lv(a) {
      O(G(this), ["listener:!Fn"], arguments);
      P(this, "process_dom_events", "window", "load");
      bs(Sc(a))
  };

  function Mv(a) {
      var b;
      return b
  };

  function Nv(a, b) {
      var c;
      var d = !1;
      var e = Rc(c, this.g, d);
      void 0 === e && void 0 !== c && Xg(45);
      return e
  };

  function Ov(a) {
      var b;
      return b
  };

  function Pv(a, b) {
      var c = null,
          d = !1;
      return Rc(c, this.g, d)
  };

  function Qv(a) {
      var b;
      var g = !1;
      return Rc(b, this.g, g)
  };
  var Rv = {},
      Sv = [],
      Tv = {},
      Uv = 0,
      Vv = 0;
  var aw = function(a, b) {
      return b
  };

  function fw(a, b) {
      return b
  };

  function kw() {};
  var lw = {},
      mw = [];

  function tw(a, b) {
      return b
  }

  function xw(a, b) {
      return b
  };
  var yw, zw;
  var Iw = function(a, b) {
      return b
  };
  var Yb = ca(["data-gtm-yt-inspected-"]),
      Jw = ["www.youtube.com", "www.youtube-nocookie.com"],
      Kw, Lw = !1;

  function Vw(a, b) {
      return b
  }

  function Ww(a) {
      return !1
  }
  var Xw;

  function Yw(a) {
      var b = !1;
      return b
  };
  var Zw = function(a) {
      var b;
      return b
  };

  function $w(a, b) {
      b = void 0 === b ? !0 : b;
      var c;
      return c
  };

  function ax() {
      var a = [];
      return Rc(a)
  };

  function bx(a) {
      var b = null;
      return b
  };

  function cx(a, b) {
      var c;
      return c
  };

  function dx(a, b) {
      var c;
      return c
  };

  function ex(a, b) {
      var c;
      return c
  };

  function fx(a) {
      var b = "";
      return b
  };

  function gx(a, b) {
      var c;
      return c
  };

  function hx(a) {
      var b = "";
      return b
  };

  function ix() {
      P(this, "get_user_agent");
      return m.navigator.userAgent
  };

  function kx(a, b) {};

  function lx(a, b) {};
  var mx = {};

  function nx(a, b, c, d, e, f) {
      f ? e[f] ? (e[f][0].push(c), e[f][1].push(d)) : (e[f] = [
          [c],
          [d]
      ], ic(a, function() {
          for (var g = e[f][0], h = 0; h < g.length; h++) I(g[h]);
          g.push = function(k) {
              I(k);
              return 0
          }
      }, function() {
          for (var g = e[f][1], h = 0; h < g.length; h++) I(g[h]);
          e[f] = null
      }, b)) : ic(a, c, d, b)
  }

  function ox(a, b, c, d) {}
  var px = Object.freeze({
          dl: 1,
          id: 1
      }),
      qx = {};

  function rx(a, b, c, d) {};

  function sx(a) {
      var b = !0;
      return b
  };
  var tx = function() {
          return !1
      },
      ux = {
          getItem: function(a) {
              var b = null;
              return b
          },
          setItem: function(a,
              b) {
              return !1
          },
          removeItem: function(a) {}
      };
  var vx = ["textContent", "value", "tagName", "children", "childElementCount"];

  function wx(a) {
      var b;
      return b
  };

  function xx() {};

  function yx(a, b) {
      var c;
      return c
  };

  function zx(a) {
      var b = void 0;
      return b
  };

  function Ax(a, b) {
      var c = !1;
      return c
  };

  function Bx() {
      var a = "";
      return a
  };

  function Cx() {
      var a = "";
      return a
  };

  function Ex(a, b) {};
  var Fx = Object.freeze(["config", "event", "get", "set"]);

  function Gx(a, b, c) {};

  function Hx(a, b) {
      var c = !1;
      return c
  };

  function Ix() {};

  function Jx(a, b, c, d) {
      d = void 0 === d ? !1 : d;
  };

  function Kx(a, b, c) {};

  function Lx(a, b, c, d) {
      var e = this;
      d = void 0 === d ? !0 : d;
      var f = !1;
      return f
  };
  var Mx = !1;

  function Nx(a) {
      O(G(this), ["consentSettings:!DustMap"], arguments);
      for (var b = a.Fb(), c = b.length(), d = 0; d < c; d++) {
          var e = b.get(d);
          e !== R.oe && P(this, "access_consent", e, "write")
      }
      var f = this.g.g;
      if (Mx) {
          var g = {
                  Yg: f.jc.type,
                  ih: f.jc.index,
                  qh: L.I
              },
              h = Mn("consent", "default", Sc(a));
          Ls(h, f.eventId, g)
      } else ii(Sc(a))
  }

  function Ox(a, b, c) {
      return !1
  };

  function Px(a, b, c) {
      O(G(this), ["targetId:!string", "name:!string", "value:!*"], arguments);
      var d = fj(a) || {};
      d[b] = Sc(c, this.g);
      var e = a;
      dj || ej();
      cj[e] = d;
  };

  function Qx(a, b, c) {};
  var Rx = function(a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
          var e = a.charCodeAt(d);
          128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
      }
      return b
  };

  function Sx(a, b, c, d) {
      var e = this;
  };

  function Tx(a, b, c) {};
  var Ux = {},
      Vx = {};
  Ux.getItem = function(a) {
      var b = null;
      return b
  };
  Ux.setItem = function(a, b) {};
  Ux.removeItem = function(a) {};
  Ux.clear = function() {};
  var Wx = function(a) {
      var b;
      return b
  };
  var Xx = !1;

  function Yx(a) {
      O(G(this), ["consentSettings:!DustMap"], arguments);
      var b = Sc(a),
          c;
      for (c in b) b.hasOwnProperty(c) && P(this, "access_consent", c, "write");
      var d = this.g.g;
      Xx ? Ls(Mn("consent", "update", b), d.eventId, {
          Yg: d.jc.type,
          ih: d.jc.index,
          qh: L.I
      }) : ki(b, d.eventId)
  }
  var Zx = function() {
      var a = new Mg;
      co() ? (a.add("injectHiddenIframe", Ea), a.add("injectScript", Ea)) : (a.add("injectHiddenIframe", lx), a.add("injectScript", ox));
      var b = Kx;
      a.add("Math", rg());
      a.add("Object", Kg);
      a.add("TestHelper", Pg());
      a.add("addConsentListener", hu);
      a.add("addEventCallback", lu);
      a.add("aliasInWindow", Gv);
      a.add("assertApi",
          ng);
      a.add("assertThat", og);
      a.add("callInWindow", Iv);
      a.add("callLater", Jv);
      a.add("copyFromDataLayer", Nv);
      a.add("copyFromWindow", Ov);
      a.add("createArgumentsQueue", Pv);
      a.add("createQueue", Qv);
      a.add("decodeUri", sg);
      a.add("decodeUriComponent", tg);
      a.add("encodeUri", ug);
      a.add("encodeUriComponent", vg);
      a.add("fail", wg);
      a.add("fromBase64", Zw, !("atob" in m));
      a.add("generateRandom", xg);
      a.add("getContainerVersion", yg);
      a.add("getCookieValues", $w);
      a.add("getQueryParameters", dx);
      a.add("getReferrerQueryParameters",
          ex);
      a.add("getReferrerUrl", fx);
      a.add("getTimestamp", Bg);
      a.add("getTimestampMillis", Bg);
      a.add("getType", Cg);
      a.add("getUrl", hx);
      a.add("isConsentGranted", sx);
      a.add("localStorage", ux, !tx());
      a.add("logToConsole", xx);
      a.add("makeInteger", Eg);
      a.add("makeNumber", Fg);
      a.add("makeString", Gg);
      a.add("makeTableMap", Hg);
      a.add("mock", Jg);
      a.add("parseUrl", zx);
      a.add("queryPermission", Ax);
      a.add("readCharacterSet", Bx);
      a.add("readTitle", Cx);
      a.add("sendPixel", b);
      a.add("setCookie", Lx);
      a.add("setDefaultConsentState", Nx);
      a.add("setInWindow", Ox);
      a.add("sha256", Sx);
      a.add("templateStorage", Ux);
      a.add("toBase64", Wx, !("btoa" in m));
      a.add("updateConsentState", Yx);
      Og(a, "callOnWindowLoad", Lv);
      a.add("JSON", Dg(function(c) {
          var d = this.g.g;
          d && d.log.call(this, "error", c)
      }));
      Og(a, "internal.appendRemoteConfigParameter", Hv);
      Og(a, "internal.getRemoteConfigParameter", gx);
      Og(a, "internal.setRemoteConfigParameter",
          Qx);
      Og(a, "internal.sortRemoteConfigParameters", Tx);
      Og(a, "internal.evaluateMatchingRules", Yw), Og(a, "internal.registerGtagCommandListener", Gx);
      Og(a, "internal.addGaSendListener", Nu);
      Og(a, "internal.evaluateFilteringRules",
          Ww);
      Og(a, "internal.getProductSettingsParameter", cx);
      Og(a, "internal.setProductSettingsParameter", Px);
      Og(a, "internal.addHistoryChangeListener", Wu);

      Og(a, "internal.sendGtagEvent", Jx);
      co() ? Og(a, "internal.injectScript", Ea) : Og(a, "internal.injectScript", rx);
      Og(a, "internal.locateUserData", wx);
      Og(a, "internal.addFormInteractionListener", Bu);
      Og(a, "internal.addFormSubmitListener", Iu);
      Og(a, "internal.getFlags", Ag);
      return function(c) {
          var d;
          if (a.g.hasOwnProperty(c)) d = a.get(c, this);
          else {
              var e;
              if (e =
                  a.o.hasOwnProperty(c)) {
                  var f = !1,
                      g = this.g.g;
                  if (g) {
                      var h = g.Wc();
                      if (h) {
                          0 !== h.indexOf("__cvt_") && (f = !0);
                      }
                  }
                  e = f
              }
              if (e) {
                  var k = a.o.hasOwnProperty(c) ? a.o[c] : void 0;
                  d = k
              } else throw Error(c + " is not a valid API name.");
          }
          return d
      }
  };
  var $x = function() {
          return !1
      },
      ay = function() {
          var a = {};
          return function(b, c, d) {}
      };
  var by;

  function cy() {
      var a = by;
      return function(b, c, d) {
          var e = d && d.event;
          dy(c);
          var f = new ub;
          Sa(c, function(r, u) {
              var t = Rc(u);
              void 0 === t && void 0 !== u && Xg(44);
              f.set(r, t)
          });
          a.g.g.F = rf();
          var g = {
              Ti: Df(b),
              eventId: void 0 !== e ? e.id : void 0,
              Kc: void 0 !== e ? function(r) {
                  return e.pb.Kc(r)
              } : void 0,
              Wc: function() {
                  return b
              },
              log: function() {},
              jc: {
                  index: d && d.index,
                  type: d && d.type
              }
          };
          if ($x()) {
              var h =
                  ay(),
                  k = void 0,
                  n = void 0;
              g.Ha = {
                  Lc: {},
                  sb: function(r, u, t) {
                      1 === u && (k = r);
                      7 === u && (n = t);
                      h(r, u, t)
                  },
                  Af: Ig()
              };
              g.log = function(r, u) {
                  if (k) {
                      var t = Array.prototype.slice.call(arguments, 1);
                      h(k, 4, {
                          level: r,
                          source: n,
                          message: t
                      })
                  }
              }
          }
          var p = ue(a, g, [b, f]);
          a.g.g.F = void 0;
          p instanceof pa && "return" === p.g && (p = p.o);
          return Sc(p)
      }
  }

  function dy(a) {
      var b = a.gtmOnSuccess,
          c = a.gtmOnFailure;
      Fa(b) && (a.gtmOnSuccess = function() {
          I(b)
      });
      Fa(c) && (a.gtmOnFailure = function() {
          I(c)
      })
  }

  function ey() {
      by.g.g.O = function(a, b, c) {
          Yg.SANDBOXED_JS_SEMAPHORE = Yg.SANDBOXED_JS_SEMAPHORE || 0;
          Yg.SANDBOXED_JS_SEMAPHORE++;
          try {
              return a.apply(b, c)
          } finally {
              Yg.SANDBOXED_JS_SEMAPHORE--
          }
      }
  }

  function fy(a) {
      void 0 !== a && Sa(a, function(b, c) {
          for (var d = 0; d < c.length; d++) {
              var e = c[d].replace(/^_*/, "");
              jh[e] = jh[e] || [];
              jh[e].push(b)
          }
      })
  };
  var gy = encodeURI,
      Y = encodeURIComponent,
      hy = lc;
  var iy = function(a, b) {
      if (!a) return !1;
      var c = tj(vj(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
          var e = b[d] && b[d].toLowerCase();
          if (e) {
              var f = c.length - e.length;
              0 < f && "." != e.charAt(0) && (f--, e = "." + e);
              if (0 <= f && c.indexOf(e, f) == f) return !0
          }
      }
      return !1
  };
  var jy = function(a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
      return e ? d : null
  };
  var tz = {};
  tz[R.Xb] = "";
  tz[R.Ca] = "";
  tz[R.Ja] = "";
  tz[R.ma] = "auto";
  tz[R.fb] = "/";
  tz[R.va] = 63072E3;
  tz[R.Fc] = 30;
  tz[R.Bd] = 1E4;
  tz[R.oa] = !0;
  var uz = function(a, b, c, d, e, f) {
      f = void 0 === f ? !1 : f;
      this.o = a;
      this.eventName = b;
      this.C = c;
      this.M = d.eventModel;
      this.Li = d.containerConfig;
      this.g = d;
      this.Qa = d.getWithConfig(R.zb) ? 1 : 8;
      this.We = d.getWithConfig(R.Zb) ? 1 : 8;
      this.O = e;
      this.Tb = this.Ve = this.Mg = this.F = this.Ig = this.Jg = this.Gd = !1;
      this.Lb = 0;
      this.Ze = this.Fd = !1;
      this.$e = void 0;
      this.Ed = 0;
      this.Bg = this.Ye = this.Lg = this.s = this.Fg = this.Xe =
          void 0;
      this.Mi = f
  };
  l = uz.prototype;
  l.Ka = function(a, b) {
      void 0 === this.B(a) && (this.M[a] = b)
  };
  l.zh = function(a, b) {
      b <= this.Qa && (this.M[R.zb] = a, this.Qa = b)
  };
  l.dk = function(a, b) {
      b <= this.We && (this.M[R.Zb] = a, this.We = b)
  };
  l.B = function(a) {
      return void 0 !== this.M[a] ? this.M[a] : void 0 !== this.g.getWithConfig(a) ? this.g.getWithConfig(a) : void 0 !== this.O[a] ? this.O[a] : tz[a]
  };
  l.getRemoteConfig = function(a) {
      return void 0 !== this.g.remoteConfig[a] ? this.g.remoteConfig[a] : this.O[a]
  };
  l.ae = function(a) {
      var b = this.Kb(R.vd, this.O[R.vd]);
      if (b && void 0 !== b[a || this.eventName]) return b[a || this.eventName]
  };
  l.Kb = function(a, b) {
      var c = fj(this.o);
      if (c && c.hasOwnProperty(a)) return c[a];
      return b
  };
  l.dh = function() {
      var a = this.B(R.Da);
      if ("object" === typeof a) return a
  };
  l.fh = function() {
      return !!this.dh()
  };
  l.abort = function() {
      throw "ABORT";
  };
  l.Ya = function() {
      return !(!0 !== this.B(R.Cc) && "true" !== this.B(R.Cc) || !this.B(R.wa))
  };
  l.Ij =
      function() {
          return this.F || !!this.B(R.ig)
      };
  l.wf = function() {
      var a = !1;
      return a
  };
  l.vf = function() {
      return this.Kb(R.Ie, !1)
  };
  l.cf = function() {
      return !1 !== this.B(R.ia)
  };
  l.Qi = function() {
      return !1 !== this.B(R.U)
  };
  var vz = !1,
      wz = function() {
          vz = !0;
          vz = !0;
      },
      xz = function(a) {
          var b = !1;
          b = a.eventName === R.yc && Xh() && a.Ya();
          return !(!bc.sendBeacon || a.Fd || a.s && a.fh() || a.F || a.Ve || a.Tb || b || vz)
      };
  var yz = function(a) {
      Vg("GA4_EVENT", a)
  };
  var Az = function(a) {
          return !a || zz.test(a) || R.xi.hasOwnProperty(a)
      },
      Bz = function(a) {
          var b = a[R.Ne];
          if (b) return b;
          var c = a[R.Cb];
          if (Ia(c)) {
              if ("function" === typeof URL) try {
                  return (new URL(c)).pathname
              } catch (e) {
                  return
              }
              var d = vj(c);
              return d.hostname ? tj(d, "path") : void 0
          }
      },
      Cz = function(a, b, c) {
          if (c) switch (c.type) {
              case "event_name":
                  return a;
              case "const":
                  return c.const_value;
              case "event_param":
                  var d = c.event_param.param_name,
                      e = b[d];
                  return e
          }
      },
      Dz = function(a, b, c) {
          for (var d = c.event_param_ops || [], e = 0; e < d.length; e++) {
              var f = d[e];
              if (f.edit_param) {
                  var g = f.edit_param.param_name,
                      h = Cz(a, b, f.edit_param.param_value),
                      k;
                  if (h) {
                      var n = Number(h);
                      k = isNaN(n) ? h : n
                  } else k = h;
                  b[g] = k
              } else f.delete_param && delete b[f.delete_param.param_name]
          }
      },
      Ez = function(a, b) {
          var c = b.values || [],
              d = Cz(a.eventName, a.M, c[0]),
              e = Cz(a.eventName, a.M, c[1]),
              f = b.type;
          if ("eqi" === f || "swi" === f || "ewi" === f || "cni" === f) d = "string" === typeof d ? d.toLowerCase() : d, e = "string" === typeof e ? e.toLowerCase() :
              e;
          var g = !1;
          switch (f) {
              case "eq":
              case "eqi":
                  g = String(d) == String(e);
                  break;
              case "sw":
              case "swi":
                  g = 0 == String(d).indexOf(String(e));
                  break;
              case "ew":
              case "ewi":
                  g = bu(d, e);
                  break;
              case "cn":
              case "cni":
                  g = 0 <= String(d).indexOf(String(e));
                  break;
              case "lt":
                  g = Number(d) < Number(e);
                  break;
              case "le":
                  g = Number(d) <= Number(e);
                  break;
              case "gt":
                  g = Number(d) > Number(e);
                  break;
              case "ge":
                  g = Number(d) >= Number(e);
                  break;
              case "re":
              case "rei":
                  g = du(d, e, "rei" === f)
          }
          return !!b.negate !== g
      },
      Fz = function(a, b) {
          var c = b.event_name_predicate;
          if (c && !Ez(a,
                  c)) return !1;
          var d = b.conditions || [];
          if (0 === d.length) return !0;
          for (var e = 0; e < d.length; e++) {
              for (var f = d[e].predicates || [], g = !0, h = 0; h < f.length; h++)
                  if (!Ez(a, f[h])) {
                      g = !1;
                      break
                  } if (g) return !0
          }
          return !1
      },
      zz = /^(_|ga_|google_|gtag\.|firebase_).*$/;
  var Gz = function(a) {
          var b = 0,
              c = 0;
          return {
              start: function() {
                  b = db()
              },
              stop: function() {
                  c = this.get()
              },
              get: function() {
                  var d = 0;
                  a.xf() && (d = db() - b);
                  return d + c
              }
          }
      },
      Hz = function() {
          this.g = void 0;
          this.o = 0;
          this.isActive = this.isVisible = this.s = !1;
          this.F = this.C = void 0
      };
  l = Hz.prototype;
  l.Ai = function(a) {
      var b = this;
      if (!this.g) {
          this.s = H.hasFocus();
          this.isVisible = !H.hidden;
          this.isActive = !0;
          var c = function(d, e, f) {
              pc(d, e, function(g) {
                  b.g.stop();
                  f(g);
                  b.xf() && b.g.start()
              })
          };
          c(m, "focus", function() {
              b.s = !0
          });
          c(m, "blur", function() {
              b.s = !1
          });
          c(m, "pageshow", function(d) {
              b.isActive = !0;
              d.persisted && Xg(56);
              b.F && b.F()
          });
          c(m, "pagehide", function() {
              b.isActive = !1;
              b.C && b.C()
          });
          c(H, "visibilitychange", function() {
              b.isVisible = !H.hidden
          });
          a.Ya() && -1 === (bc.userAgent || "").indexOf("Firefox") && -1 === (bc.userAgent || "").indexOf("FxiOS") && c(m, "beforeunload", function() {
              wz()
          });
          this.Hf();
          this.o = 0
      }
  };
  l.Hf = function() {
      this.o +=
          this.$d();
      this.g = Gz(this);
      this.xf() && this.g.start()
  };
  l.ik = function(a) {
      a.Ed = this.$d()
  };
  l.tj = function(a) {
      a.Ed = 0;
      this.Hf();
      this.o = 0
  };
  l.xf = function() {
      return this.s && this.isVisible && this.isActive
  };
  l.pj = function() {
      return this.o + this.$d()
  };
  l.$d = function() {
      return this.g && this.g.get() || 0
  };
  l.Vj = function(a) {
      this.C = a
  };
  l.wh = function(a) {
      this.F = a
  };

  function Iz() {
      return m.gaGlobal = m.gaGlobal || {}
  }
  var Jz = function() {
          var a = Iz();
          a.hid = a.hid || Na();
          return a.hid
      },
      Kz = function(a, b) {
          var c = Iz();
          if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
      };
  var Oz = function(a, b) {
          var c;
          var d = Lz(b),
              e = String(b.B(R.ma)),
              f = String(b.B(R.fb)),
              g = Number(b.B(R.va)),
              h = b.B(R.Yb),
              k = {
                  $a: R.J,
                  domain: e,
                  path: f,
                  expires: g ? new Date(db() + 1E3 * g) : void 0,
                  flags: "" + b.B(R.Ja)
              };
          if (!1 === h && Mz(b) === a) c = !0;
          else {
              var n = ok(a, Nz[0], e, f);
              c = 1 !== gk(d, n, k)
          }
          return c
      },
      Mz = function(a) {
          var b = Lz(a),
              c = "" + a.B(R.ma),
              d = "" + a.B(R.fb),
              e = nk(b, c, d, Nz, R.J);
          if (!e) {
              var f = String(a.B(R.Xb));
              f && f != b && (e = nk(f, c, d, Nz, R.J))
          }
          return e
      },
      Lz = function(a) {
          return String(a.B(R.Ca)) + "_ga"
      },
      Nz = ["GA1"];
  var Rz = function(a, b) {
          var c = Pz(b),
              d = String(b.B(R.ma)),
              e = String(b.B(R.fb)),
              f = Number(b.B(R.va)),
              g = ok(a, Qz[0], d, e),
              h = {
                  $a: R.J,
                  domain: d,
                  path: e,
                  expires: f ? new Date(db() + 1E3 * f) : void 0,
                  flags: String(b.B(R.Ja))
              };
          return 1 !== gk(c, g, h)
      },
      Sz = function(a) {
          var b = Pz(a),
              c = String(a.B(R.ma)),
              d = String(a.B(R.fb));
          return nk(b, c, d, Qz, R.J)
      },
      Qz = ["GS1"],
      Pz = function(a) {
          return String(a.B(R.Ca)) + "_ga_" + a.o.substr(2)
      },
      Tz = function(a) {
          var b;
          var c = a.M[R.Gc],
              d = a.M[R.Pe],
              e = !!a.M[R.jg],
              f = a.M[R.Zb];
          if (c && d) {
              var g = [c, d, Ua(a.M[R.Oe]), a.C, a.Lb];
              b = g.join(".")
          } else b = void 0;
          return b
      };
  var Uz = function(a) {
          var b = a.B(R.na),
              c = a.getRemoteConfig(R.na);
          if (c === b) return c;
          var d = Qc(b);
          c && c[R.P] && (d[R.P] = (d[R.P] || []).concat(c[R.P]));
          return d
      },
      Vz = function(a, b) {
          var c = bl(!0);
          return "1" !== c._up ? {} : {
              clientId: c[a],
              yh: c[b]
          }
      },
      Wz = function(a, b, c) {
          var d = bl(!0),
              e = d[b];
          e && (a.zh(e, 2), Oz(e, a));
          var f = d[c];
          f && Rz(f, a);
          return !(!e || !f)
      },
      Xz = !1,
      Yz = function(a) {
          var b = Uz(a) || {},
              c = Lz(a),
              d = Pz(a);
          jl(b[R.ac], !!b[R.P]) && Wz(a, c, d) && (Xz = !0);
          b[R.P] && gl(function() {
              var e = {},
                  f = Mz(a);
              f && (e[c] = f);
              var g = Sz(a);
              g && (e[d] = g);
              var h =
                  Xj("FPLC", void 0, void 0, R.J);
              h.length && (e._fplc = h[0]);
              return e
          }, b[R.P], b[R.Dc], !!b[R.bc])
      },
      $z = function(a) {
          if (!a.B(R.kb)) return {};
          var b = Lz(a),
              c = Pz(a);
          hl(function() {
              var d;
              if (li("analytics_storage")) d = {};
              else {
                  var e = {};
                  d = (e._up = "1", e[b] = a.M[R.zb], e[c] = Tz(a), e)
              }
              return d
          }, 1);
          if (!li("analytics_storage") && Zz()) return Vz(b, c);
          return {}
      },
      Zz = function() {
          var a = sj(m.location, "host"),
              b = sj(vj(H.referrer),
                  "host");
          return a && b ? a === b || 0 <= a.indexOf("." + b) || 0 <= b.indexOf("." + a) ? !0 : !1 : !1
      };
  var aA = function() {
      var a = db(),
          b = a + 864E5,
          c = 20,
          d = 5E3;
      return function() {
          var e = db();
          e >= b && (b = e + 864E5, d = 5E3);
          if (1 > d) return !1;
          c = Math.min(c + (e - a) / 1E3 * 5, 20);
          a = e;
          if (1 > c) return !1;
          d--;
          c--;
          return !0
      }
  };
  var bA = !1;
  bA = !0;
  var cA = "" + Na(),
      dA = !1,
      eA = void 0;
  var fA = function() {
      if (Fa(m.__uspapi)) {
          var a = "";
          try {
              m.__uspapi("getUSPData", 1, function(b, c) {
                  if (c && b) {
                      var d = b.uspString;
                      d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                  }
              })
          } catch (b) {}
          return a
      }
  };
  var gA = function(a, b) {
          if (b.Ya()) {
              var c = fA();
              c && (a.us_privacy = c);
              var d = No();
              d && (a.gdpr = d);
              var e = Lo();
              e && (a.gdpr_consent = e)
          }
      },
      iA = function(a, b) {
          if (Xh() && (a.gcs = mi(), b.Ye && (a.gcu = "1"), b.Ya())) {
              Yh() && (a.gcd = ni());
              var c = b.B(R.X);
              a.adr = void 0 !== c && !1 !== c ? "1" : "0";
              b.Ye && (a.gcut = hA[b.Bg || ""]);
          }
      },
      jA = function(a, b, c) {
          void 0 === c && (c = {});
          if ("object" === typeof b)
              for (var d in b) jA(a + "." + d, b[d], c);
          else c[a] = b;
          return c
      },
      kA = function(a) {
          var b = "https://www.google-analytics.com/g/collect",
              c = Zn(a.B(R.wa), "/g/collect");
          if (c) return c;
          var d = !0;
          li(R.D) && li(R.J) || (d = !1);
          var e = !1 !== a.B(R.U);
          e = !0;
          var f = a.Kb(R.ib, a.B(R.ib));
          f && !a.vf() && e && !1 !== a.B(R.zc) && zq() && d && (b = "https://analytics.google.com/g/collect");
          return b
      },
      lA = {},
      hA = (lA[R.D] = "1", lA[R.J] = "2", lA),
      mA = {};
  mA[R.ui] = "tid";
  mA[R.zb] = "cid";
  mA[R.Bb] = "ul";
  mA[R.He] = "_fid";
  mA[R.ug] = "tt";
  mA[R.Ke] = "ir";
  var nA = {};
  nA[R.Gc] = "sid";
  nA[R.Pe] = "sct";
  nA[R.Oe] = "seg";
  nA[R.Cb] = "dl";
  nA[R.Ua] = "dr";
  nA[R.zd] = "dt";
  nA[R.ja] = "cu";
  nA[R.lb] = "uid";
  var oA = {};
  oA[R.Yf] = "cc";
  oA[R.Zf] = "ci";
  oA[R.$f] = "cm";
  oA[R.ag] = "cn";
  oA[R.bg] = "cs";
  oA[R.cg] = "ck";
  var pA = function(a,
      b, c) {
      function d(z, A) {
          if (void 0 !== A && !R.vi.hasOwnProperty(z)) {
              null === A && (A = "");
              var C;
              if ("_" === z.charAt(0)) {
                  e[z] = Jf(A, 300)
              } else if (mA[z]) C = mA[z], e[C] = Jf(A, 300);
              else if (nA[z]) C = nA[z], g[C] = Jf(A, 300);
              else if (!u(z, A)) {
                  r(z, A)
              }
          }
      }
      var e = {},
          f = {},
          g = {};
      e.v = "2";
      e.tid = a.o;
      e.gtm = ho();
      e._p = Jz();
      a.$e && (e.sr = a.$e);
      a.Fg && (e._z = a.Fg);
      c && (e.em = c);
      a.Tb && (e._gaz = 1);
      iA(e, a);
      gA(e, a);
      a.Lg && (e.gtm_up = "1");
      var h = mb($i(a.g, R.aa, 1), ".");
      h && (e.gdid =
          h);
      f.en = Jf(a.eventName, 40);
      a.Gd && (f._fv = a.Jg ? 2 : 1);
      a.Ig && (f._nsi = 1);
      a.F && (f._ss = a.Mg ? 2 : 1);
      a.Fd && (f._c = 1);
      0 < a.Ed && (f._et = a.Ed);
      if (a.Ze) {
          var k = a.B(R.da);
          if (Ka(k))
              for (var n = 0; n < k.length && 200 > n; n++) f["pr" + (n + 1)] = Of(k[n])
      }
      a.Xe && (f._eu = a.Xe);
      var p = mb($i(a.g, R.aa, 2), ".");
      p && (f.edid = p);
      for (var r = function(z, A) {
              z = Jf(z, 40);
              var C = "ep." + z,
                  E = "epn." + z;
              z = Ja(A) ? E : C;
              var D = Ja(A) ? C : E;
              f.hasOwnProperty(D) && delete f[D];
              f[z] = Jf(A, 100)
          }, u = function(z, A) {
              var C = z.split(".");
              if (z === R.Da && "object" !== typeof A) return r(z, A), !0;
              if (C[0] ===
                  R.Da) {
                  if ((1 < C.length || "object" === typeof A) && a.Ya()) {
                      var E = jA(z, A);
                      Sa(E, function(D, F) {
                          return void r(D, F)
                      })
                  }
                  return !0
              }
              return !1
          }, t = 0; t < R.wg.length; ++t) {
          var q = R.wg[t];
          d(q, a.B(q))
      }
      a.Ze && d(R.ja, a.B(R.ja));
      Sa(a.Li, d);
      Sa(a.M, d);
      var y = a.B(R.Va) || {};
      !1 !== a.B(R.U) && yq() || (y._npa = "1");
      Sa(y, function(z, A) {
          if (void 0 !== A && (null === A && (A = ""), b[z] !== A)) {
              if (z !== R.lb || g.uid) {
                  var C = (Ja(A) ? "upn." : "up.") + Jf(z, 24);
                  f[C] = Jf(A, 36)
              } else g.uid = Jf(A, 36);
              b[z] = A
          }
      });
      var x = !1;
      return Qf.call(this, {
          Fa: e,
          Ob: g,
          M: f
      }, kA(a), a.Ya(), x) || this
  };
  ma(pA, Qf);
  var qA = function(a, b) {
          return a.replace(/\$\{([^\}]+)\}/g, function(c, d) {
              return b[d] || c
          })
      },
      rA = function(a) {
          var b = a.search;
          return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse")
      },
      sA = function(a) {
          var b = {},
              c = "",
              d = a.pathname.indexOf("/g/collect");
          0 <= d && (c = a.pathname.substring(0, d));
          b.transport_url = a.protocol + "//" + a.hostname + c;
          return b
      },
      tA = function(a, b) {
          var c = new m.XMLHttpRequest;
          c.withCredentials = !0;
          var d = b ? "POST" : "GET",
              e = "",
              f = 0,
              g = vj(a),
              h = sA(g),
              k = rA(g);
          c.onprogress = function(n) {
              if (200 === c.status) {
                  e += c.responseText.substring(f);
                  f = n.loaded;
                  for (var p = qA(e, h), r = p.indexOf("\n\n"); - 1 !== r;) {
                      var u;
                      a: {
                          var t = ea(p.substring(0, r).split("\n")),
                              q = t.next().value,
                              v = t.next().value;
                          if (q.startsWith("event: message") && v.startsWith("data: ")) try {
                              u = JSON.parse(v.substring(v.indexOf(":") + 1));
                              break a
                          } catch (S) {}
                          u = void 0
                      }
                      if (u) {
                          var w = u.send_pixel || [];
                          if (Array.isArray(w))
                              for (var y = 0; y < w.length; y++) {
                                  var x = w[y],
                                      z = io('',
                                          0);
                                  if (1 === z) {
                                      var A = Math.floor(2 * Math.random()) + 1,
                                          C, E = x,
                                          D = A,
                                          F = 0 < E.indexOf("?") ? "&" : "?";
                                      C = "" + E + F + "gtmexpsb=" + D;
                                      2 === A ? vc(C) : lc(C)
                                  } else 2 === z ? vc(x) : lc(x)
                              }
                      }
                      p = p.substring(r + 2);
                      r = p.indexOf("\n\n")
                  }
                  e = p
              }
          };
          c.open(d, k);
          c.send(b);
      };
  var xA = function(a, b, c, d) {
          var e = a + "?" + b;
          uA && (d = !(0 === e.indexOf("https://www.google-analytics.com/g/collect") || 0 === e.indexOf("https://analytics.google.com/g/collect")));
          vA && d && !vz ? tA(e, c) : wA(a, b, c)
      },
      yA = function(a) {
          return a && 0 === a.indexOf("google.") && "google.com" != a ? "https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&".replace("%", a) : void 0
      },
      vA = !1;
  vA = !0;
  var uA = !1;
  var zA = function() {
      this.C = 1;
      this.F = {};
      this.g = new Rf;
      this.o = -1
  };
  zA.prototype.s = function(a, b) {
      var c = this,
          d;
      try {
          d = new pA(a, this.F, b)
      } catch (n) {
          a.abort()
      }
      var e = xz(a);
      e && this.g.C(d) || this.flush();
      if (e && this.g.add(d)) {
          if (0 > this.o) {
              var f = m,
                  g = f.setTimeout,
                  h;
              a.Ya() ? AA ? (AA = !1, h = BA) : h = CA : h = 5E3;
              this.o = g.call(f, function() {
                  return c.flush()
              }, h)
          }
      } else {
          var k = Tf(d, this.C++);
          xA(d.o, k.Ef, k.body, d.C);
          DA(d, a.Ve, a.Tb, String(a.Kb(R.yd, a.B(R.yd))), a.cf(),
              a.Qi())
      }
  };
  zA.prototype.add = function(a) {
      a.s && !vz ? this.O(a) : this.s(a)
  };
  zA.prototype.flush = function() {
      if (this.g.events.length) {
          var a = Uf(this.g, this.C++);
          xA(this.g.g, a.Ef, a.body, this.g.o);
          this.g = new Rf;
          0 <= this.o && (m.clearTimeout(this.o), this.o = -1)
      }
  };
  zA.prototype.O = function(a) {
      var b = this,
          c = a.dh();
      c ? Ni(c, function(d) {
          b.s(a, d)
      }) : this.s(a)
  };
  var DA = function(a, b, c, d, e, f) {
          function g(n) {
              h.push(n + "=" + encodeURIComponent("" + a.Fa[n]))
          }
          if (b || c) {
              var h = [];
              g("tid");
              g("cid");
              g("gtm");
              h.push("aip=1");
              a.Ob.uid && h.push("uid=" + encodeURIComponent("" + a.Ob.uid));
              b && (wA("https://stats.g.doubleclick.net/g/collect", "v=2&" + h.join("&")), fi("https://stats.g.doubleclick.net/g/collect?v=2&" + h.join("&")));
              if (c) {
                  h.push("z=" + Na());
                  var k = yA(d);
                  k && lc(k + h.join("&"));
              }
          }
      },
      wA = function(a, b, c) {
          var d = a + "?" + b;
          c ? bc.sendBeacon && bc.sendBeacon(d, c) : vc(d)
      },
      BA = io('', 500),
      CA = io('', 5E3),
      AA = !0;
  var EA = window,
      FA = document,
      GA = function(a) {
          var b = EA._gaUserPrefs;
          if (b && b.ioo && b.ioo() || a && !0 === EA["ga-disable-" + a]) return !0;
          try {
              var c = EA.external;
              if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
          } catch (f) {}
          for (var d = Tj("AMP_TOKEN", String(FA.cookie), !0), e = 0; e < d.length; e++)
              if ("$OPT_OUT" == d[e]) return !0;
          return FA.getElementById("__gaOptOutExtension") ? !0 : !1
      };
  var HA = {};
  var IA = function(a, b) {
      var c = R.D;
      li(c) || pi(function() {
          b.Ye = !0;
          b.Bg = c;
          a.Ng(b)
      }, c)
  };
  HA.wi = "";
  var JA = function(a, b) {
      this.Qa = a;
      this.Tb = b;
      this.O = new zA;
      this.g = void 0;
      this.C = new Hz;
      this.o = this.s = void 0;
      this.F = !1
  };
  l = JA.prototype;
  l.Pj = function(a, b, c) {
      var d = this,
          e = !1;
      if (c.eventModel[R.cc]) {
          e = !0;
          if ("_" === a.charAt(0)) return;
          a !== R.Ba && a !== R.Ra && Az(a) && Xg(58);
          KA(c)
      }
      var f = new uz(this.Qa, a, b, c, this.Tb, e),
          g = [R.J],
          h = !1;
      h = f.Ya();
      (f.Kb(R.ib, f.B(R.ib)) || h) && g.push(R.D);
      qi(function() {
          d.Qj(f)
      }, g)
  };
  l.Qj = function(a) {
      this.o = a;
      try {
          GA(a.o) && (Xg(28), a.abort());
          0 <= HA.wi.replace(/\s+/g, "").split(",").indexOf(a.eventName) && (Xg(33), a.abort());
          var b = a.ae();
          b && b.blacklisted && (Xg(34), a.abort());
          var c = H.location.protocol;
          "http:" != c && "https:" != c && (Xg(29), a.abort());
          bc && "preview" == bc.loadPurpose && (Xg(30), a.abort());
          var d = Yg.grl;
          d || (d = aA(), Yg.grl = d);
          d() || (Xg(35), a.abort());
          this.Bi(a);
          this.C.ik(a);
          var g = this.vh,
              h;
          b: {
              if (!a.B(R.kb) || li(R.J) || 1 === a.Qa) break b;a.Lg = !0;
          }
          a.eventName === R.Ba ? (a.B(R.kb) && Jl(["aw", "dc"]), Yz(a), h = $z(a)) : h = {};
          g.call(this, h);
          a.eventName ==
              R.Ba && (a.Mi && 0 < bj(a.g).length && (Xg(68), 1 < Yg.configCount && Xg(69)), a.B(R.oa) || a.abort(), a.g.eventModel[R.aa] && (a.g.containerConfig[R.aa] = a.g.eventModel[R.aa], a.g.eventModel[R.aa] = void 0), a.eventName = R.yc);
          var k = this.g,
              n = this.s,
              p = this.C,
              r = Sz(a);
          r || (r = n);
          var u = Ua(a.B(R.Fc)),
              t;
          t = Ua(a.B(R.Bd));
          var q;
          a: {
              if (r) {
                  var v = r.split(".");
                  if (!(5 > v.length || 7 < v.length)) {
                      q = {
                          sessionId: v[0],
                          Lf: Number(v[1]),
                          ie: !!Number(v[2]),
                          yf: Number(v[3]),
                          Lb: Number(v[4] || 0),
                          mc: "1" === v[5],
                          lf: "0" !== v[6] ? v[6] : void 0
                      };
                      break a
                  }
              }
              q = void 0
          }
          q && q.Lb && (a.Lb = Math.max(0, q.Lb - Math.max(0, a.C - q.yf)));
          var w = !1;
          q || (w = a.Gd = !0, q = {
              sessionId: String(a.C),
              Lf: 1,
              ie: !1,
              yf: a.C,
              mc: !1,
              lf: void 0
          });
          a.C > q.yf + 60 * u && (w = !0, q.sessionId = String(a.C), q.Lf++, q.ie = !1);
          if (w) a.F = !0, p.tj(a);
          else if (p.pj() > t || a.eventName == R.yc) q.ie = !0;
          a.Ka(R.Gc, q.sessionId);
          a.Ka(R.Pe, q.Lf);
          a.Ka(R.Oe, q.ie ? 1 : 0);
          var A = a.B(R.zb),
              C = a.Qa;
          A || (A = Mz(a), C = 3);
          A || (A = k, C = 5);
          if (!A) {
              var E = li(R.J),
                  D = Iz();
              A = !D.from_cookie || E ? D.vid : void 0;
              C = 6
          }
          A ? A = "" + A : (a.Gd = a.Ig = !0, A =
              kk(), C = 7);
          a.zh(A, C);
          var F = "",
              S = H.location;
          if (S) {
              var M = S.pathname || "";
              "/" != M.charAt(0) && (M = "/" + M);
              F = S.protocol + "//" + S.hostname + M + S.search
          }
          a.Ka(R.Cb, F);
          var J;
          a: {
              var K = Xj("_opt_expid", void 0, void 0, R.J)[0];
              if (K) {
                  var Q = decodeURIComponent(K).split("$");
                  if (3 === Q.length) {
                      J = Q[2];
                      break a
                  }
              }
              if (void 0 !== Yg.ga4_referrer_override) J = Yg.ga4_referrer_override;
              else {
                  var N = rh("gtm.gtagReferrer." + a.o);
                  J = N ? "" + N : H.referrer
              }
          }
          var V = J;
          V && a.Ka(R.Ua, V);
          a.Ka(R.zd, H.title);
          a.Ka(R.Bb, (bc.language || "").toLowerCase());
          var aa = m.screen,
              X = aa ? aa.width : 0,
              Ga = aa ? aa.height : 0;
          a.$e = X + "x" + Ga;
          var Ha = !1 !== a.B(R.U);
          Ha = !0;
          if (Ha && !1 !== a.B(R.zc) && zq() && li(R.D)) {
              var xa = a.Kb(R.ib, a.B(R.ib));
              a.Ij() && (a.Ve = !!xa);
              xa && !a.vf() && 0 === a.Lb && (a.Lb = 60, a.Tb = !0)
          }
          LA(a);
          a.Ze = R.xg.hasOwnProperty(a.eventName);
          for (var La = a.B(R.Le) || [],
                  da = 0; da < La.length; da++) {
              var Ca = La[da];
              if (Ca.rule_result) {
                  a.Ka(R.ug, Ca.traffic_type);
                  yz(3);
                  break
              }
          }
          if (a.B(R.wa)) {
              var Va = Uz(a) || {},
                  Za = jl(Va[R.ac], !!Va[R.P]) ? bl(!0)._fplc : void 0;
              a.M._fplc = Za || (0 < Xj("FPLC", void 0, void 0, R.J).length ? void 0 : "0")
          }
          if (void 0 === a.B(R.Ke)) {
              var nb = a.B(R.Ad),
                  Oa, bd;
              a: {
                  if (Xz) {
                      var Je = Uz(a) || {};
                      if (Je && Je[R.P])
                          for (var Wf = tj(vj(a.B(R.Ua)), "host", !0), mc = Je[R.P], wd = 0; wd < mc.length; wd++)
                              if (mc[wd] instanceof RegExp) {
                                  if (mc[wd].test(Wf)) {
                                      bd = !0;
                                      break a
                                  }
                              } else if (0 <= Wf.indexOf(mc[wd])) {
                          bd = !0;
                          break a
                      }
                  }
                  bd = !1
              }
              var Yd;
              if (!(Yd = bd))
                  if (bA) Yd = !1;
                  else {
                      var Xf = tj(vj(a.B(R.Ua)), "host", !0),
                          Gc;
                      var Ke = String(a.B(R.ma));
                      if ("none" !== Ke)
                          if ("auto" !== Ke) Gc = Ke;
                          else {
                              if (!dA) {
                                  for (var xd = String(a.B(R.fb)), yd = dk(), zd = 0; zd < yd.length; zd++)
                                      if ("none" !== yd[zd]) {
                                          var Zd = String(a.B(R.Ca)) + "_ga_autodomain";
                                          if (0 === gk(Zd, cA, {
                                                  $a: R.J,
                                                  domain: yd[zd],
                                                  path: xd
                                              })) {
                                              gk(Zd, void 0, {
                                                  $a: R.J,
                                                  domain: yd[zd],
                                                  path: xd
                                              });
                                              eA = yd[zd];
                                              break
                                          }
                                      } dA = !0
                              }
                              Gc = eA
                          }
                      else Gc = void 0;
                      var Yf = Gc;
                      Yd = Yf ? 0 <= Xf.indexOf(Yf) : !1
                  } if (!(Oa = Yd)) {
                  var Le;
                  if (Le = nb) a: {
                      for (var Da = nb.include_conditions || [], ra = tj(vj(a.B(R.Ua)), "host", !0), bb = 0; bb < Da.length; bb++)
                          if (Da[bb].test(ra)) {
                              Le = !0;
                              break a
                          } Le = !1
                  }
                  Oa = Le
              }
              Oa && (a.Ka(R.Ke, 1), yz(4))
          }
          if (a.eventName == R.Ra) {
              var $d = a.B(R.Ta);
              a.B(R.hb)(a.B($d));
              a.abort()
          }
          if (a.M[R.Nd]) delete a.M[R.Nd];
          else {
              var Hc = a.B(R.Ce);
              if (Hc) {
                  for (var Pb = Hc.edit_rules || [], nc = !1, Db = 0; Db < Pb.length; Db++) {
                      var Eb;
                      a: {
                          var T = a,
                              oc = Pb[Db];
                          if (Fz(T, oc)) {
                              if (oc.new_event_name) {
                                  var ae = "string" === typeof oc.new_event_name ? String(oc.new_event_name) : Cz(T.eventName, T.M, oc.new_event_name);
                                  if (Az(ae)) {
                                      Eb = !1;
                                      break a
                                  }
                                  T.eventName = String(ae)
                              }
                              Dz(T.eventName, T.M, oc);
                              var Pa = T.M[R.Nd] = !0;
                              yz(2);
                              if (Pa) {
                                  var Zf = T.eventName,
                                      Me = T.M,
                                      Ne = T.o;
                                  ur().insert("event", [Me, Zf], Ne);
                                  T.abort()
                              }
                              Eb = !0
                          } else Eb = !1
                      }
                      Eb && (nc = !0)
                  }
                  for (var $f = Hc.synthesis_rules || [], Ad = 0; Ad < $f.length; Ad++) {
                      var Oe = a,
                          Ic = $f[Ad];
                      if (Fz(Oe, Ic)) {
                          var cd = Ic.new_event_name;
                          if (!Az(cd)) {
                              var be = Ic.merge_source_event_params ? Qc(Oe.M) : {};
                              be[R.Nd] = !0;
                              Dz(cd, be, Ic);
                              var Zh = cd,
                                  Ub = be,
                                  ob = Oe.o;
                              ur().insert("event", [Ub, Zh], ob);
                              yz(1)
                          }
                      }
                  }
              }
          }
          var ce = a.M[R.Qe];
          if (Ka(ce))
              for (var dd = 0; dd < ce.length; dd++) yz(ce[dd]);
          var Pe = Wg("GA4_EVENT");
          Pe && (a.Xe = Pe);
          var SA = this.vh,
              qr = this.g,
              pl;
          var ql = Tz(a);
          ql ? (Rz(ql, a) || (Xg(25), a.abort()), pl = ql) : pl = void 0;
          var TA =
              pl,
              $h;
          var Bd = a.M[R.zb];
          qr && Bd === qr ? $h = Bd : Bd ? (Bd = "" + Bd, Oz(Bd, a) || (Xg(31), a.abort()), Kz(Bd, li(R.J)), $h = Bd) : (Xg(32), a.abort(), $h = "");
          SA.call(this, {
              clientId: $h,
              yh: TA
          });
          this.hk();
          a.Ya() && ("page_view" === a.eventName || a.Fd) && IA(this, a);
          this.C.Hf();
          this.Ng(a);
          a.g.onSuccess()
      } catch (YA) {
          a.g.onFailure()
      }
      delete Ug.GA4_EVENT
  };
  l.Ng = function(a) {
      this.O.add(a)
  };
  l.vh = function(a) {
      var b = a.clientId,
          c = a.yh;
      b && c && (this.g = b,
          this.s = c)
  };
  l.flush = function() {
      this.O.flush()
  };
  l.hk = function() {
      var a = this;
      if (!this.F) {
          var b = li(R.J);
          oi([R.J], function() {
              var c = li(R.J);
              if (b ^ c && a.o && a.s && a.g) {
                  var d = a.g;
                  if (c) {
                      var e = Mz(a.o);
                      e ? (a.g = e, a.s = Sz(a.o)) : (Oz(a.g, a.o), Rz(a.s, a.o), Kz(a.g, !0));
                  } else {
                      a.s = void 0;
                      a.g = void 0;
                  }
                  b =
                      c
              }
          });
          this.F = !0
      }
  };
  l.Bi = function(a) {
      a.eventName !== R.Ra && this.C.Ai(a)
  };
  var LA = function(a) {
      var b = function(c) {
          return !!c && c.conversion
      };
      a.Fd = b(a.ae());
      a.Gd && (a.Jg = b(a.ae("first_visit")));
      a.F && (a.Mg = b(a.ae("session_start")))
  };

  function KA(a) {
      delete a.eventModel[R.cc];
      MA(a.eventModel)
  }
  var MA = function(a) {
      Sa(a, function(c) {
          "_" === c.charAt(0) && delete a[c]
      });
      var b = a[R.Va] || {};
      Sa(b, function(c) {
          "_" === c.charAt(0) && delete b[c]
      })
  };
  var NA = function(a) {
          if ("prerender" == H.visibilityState) return !1;
          a();
          return !0
      },
      OA = function(a) {
          if (!NA(a)) {
              var b = !1,
                  c = function() {
                      !b && NA(a) && (b = !0, qc(H, "visibilitychange", c), Xg(55))
                  };
              pc(H, "visibilitychange", c);
              Xg(54)
          }
      };
  var PA = function(a, b, c) {
          xr(b, c, a)
      },
      QA = function(a, b, c) {
          xr(b, c, a, !0)
      },
      UA = function(a, b) {
          var c = new JA(a, b);
          OA(function() {
              RA(a, c)
          });
      };

  function RA(a, b) {
      var c = b.C;
      wr(a, function(d, e, f, g) {
          b.Pj(e, f, g)
      });
      c.Vj(function() {
          ur().flush();
          1E3 <= c.$d() && bc.sendBeacon && PA(a, R.te, {});
          wz();
          b.flush();
          c.wh(function() {
              vz = !1;
              vz = !1;
              c.wh(void 0)
          })
      });
  }
  var Z = {
      h: {}
  };


  Z.h.ehl = ["google"],
      function() {
          function a(k) {
              return k.target && k.target.location && k.target.location.href ? k.target.location.href : st()
          }

          function b(k, n) {
              pc(k, "hashchange", function(p) {
                  var r = a(p);
                  n({
                      source: "hashchange",
                      state: null,
                      url: ut(r),
                      K: tt(r)
                  })
              })
          }

          function c(k, n) {
              pc(k, "popstate", function(p) {
                  var r = a(p);
                  n({
                      source: "popstate",
                      state: p.state,
                      url: ut(r),
                      K: tt(r)
                  })
              })
          }

          function d(k, n, p) {
              var r = n.history,
                  u = r[k];
              if (Fa(u)) try {
                  r[k] = function(t, q, v) {
                      u.apply(r, [].slice.call(arguments, 0));
                      p({
                          source: k,
                          state: t,
                          url: ut(st()),
                          K: tt(st())
                      })
                  }
              } catch (t) {}
          }

          function e() {
              var k = {
                  source: null,
                  state: W("history").state || null,
                  url: ut(st()),
                  K: tt(st())
              };
              return function(n, p) {
                  var r = k,
                      u = {};
                  u[r.source] = !0;
                  u[n.source] = !0;
                  if (!u.popstate || !u.hashchange || r.K != n.K) {
                      var t = {
                          event: "gtm.historyChange-v2",
                          "gtm.historyChangeSource": n.source,
                          "gtm.oldUrlFragment": k.K,
                          "gtm.newUrlFragment": n.K,
                          "gtm.oldHistoryState": k.state,
                          "gtm.newHistoryState": n.state,
                          "gtm.oldUrl": k.url,
                          "gtm.newUrl": n.url,
                          "gtm.triggers": p.join(",")
                      };
                      k = n;
                      wt(t)
                  }
              }
          }

          function f(k, n) {
              var p = "" +
                  n;
              if (g[p]) g[p].push(k);
              else {
                  var r = [k];
                  g[p] = r;
                  var u = e(),
                      t = -1;
                  h.push(function(q) {
                      0 <= t && pt(t);
                      n ? t = qt(function() {
                          u(q, r);
                          t = -1
                      }, n) : u(q, r)
                  })
              }
          }
          var g = {},
              h = [];
          (function(k) {
              Z.__ehl = k;
              Z.__ehl.m = "ehl";
              Z.__ehl.isVendorTemplate = !0;
              Z.__ehl.priorityOverride = 0
          })(function(k) {
              var n = W("self"),
                  p = k.vtp_uniqueTriggerId || "0",
                  r = k.vtp_groupEvents ? Number(k.vtp_groupEventsInterval) : 0;
              0 > r ? r = 0 : isNaN(r) && (r = 1E3);
              if (Bt("ehl")) {
                  var u = Ws("ehl", "reg");
                  u ? (u(p, r),
                      I(k.vtp_gtmOnSuccess)) : I(k.vtp_gtmOnFailure)
              } else {
                  var t = function(q) {
                      for (var v = 0; v < h.length; v++) h[v](q)
                  };
                  b(n, t);
                  c(n, t);
                  d("pushState", n, t);
                  d("replaceState", n, t);
                  f(p, r);
                  Us("ehl", "reg", f);
                  Ct("ehl");
                  I(k.vtp_gtmOnSuccess)
              }
          })
      }();



  Z.h.read_container_data = ["google"],
      function() {
          (function(a) {
              Z.__read_container_data = a;
              Z.__read_container_data.m = "read_container_data";
              Z.__read_container_data.isVendorTemplate = !0;
              Z.__read_container_data.priorityOverride = 0
          })(function() {
              return {
                  assert: function() {},
                  R: function() {
                      return {}
                  }
              }
          })
      }();
  Z.h.c = ["google"],
      function() {
          (function(a) {
              Z.__c = a;
              Z.__c.m = "c";
              Z.__c.isVendorTemplate = !0;
              Z.__c.priorityOverride = 0
          })(function(a) {
              Et(a.vtp_value, "c", a.vtp_gtmEventId);
              return a.vtp_value
          })
      }();
  Z.h.e = ["google"],
      function() {
          (function(a) {
              Z.__e = a;
              Z.__e.m = "e";
              Z.__e.isVendorTemplate = !0;
              Z.__e.priorityOverride = 0
          })(function(a) {
              var b = String(yh(a.vtp_gtmEventId, "event"));
              a.vtp_gtmCachedValues && (b = String(a.vtp_gtmCachedValues.event));
              return b
          })
      }();

  Z.h.u = ["google"],
      function() {
          var a = function(b) {
              return {
                  toString: function() {
                      return b
                  }
              }
          };
          (function(b) {
              Z.__u = b;
              Z.__u.m = "u";
              Z.__u.isVendorTemplate = !0;
              Z.__u.priorityOverride = 0
          })(function(b) {
              var c;
              c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : vt("gtm.url", 1)) || st();
              var d = b[a("vtp_component")];
              if (!d || "URL" == d) return ut(String(c));
              var e = vj(String(c)),
                  f;
              if ("QUERY" === d) a: {
                  var g = b[a("vtp_multiQueryKeys").toString()],
                      h = b[a("vtp_queryKey").toString()] || "",
                      k = b[a("vtp_ignoreEmptyQueryParam").toString()],
                      n;g ? Ka(h) ?
                  n = h : n = String(h).replace(/\s+/g, "").split(",") : n = [String(h)];
                  for (var p = 0; p < n.length; p++) {
                      var r = tj(e, "QUERY", void 0, void 0, n[p]);
                      if (void 0 != r && (!k || "" !== r)) {
                          f = r;
                          break a
                      }
                  }
                  f = void 0
              }
              else f = tj(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0, void 0);
              return f
          })
      }();
  Z.h.v = ["google"],
      function() {
          (function(a) {
              Z.__v = a;
              Z.__v.m = "v";
              Z.__v.isVendorTemplate = !0;
              Z.__v.priorityOverride = 0
          })(function(a) {
              var b = a.vtp_name;
              if (!b || !b.replace) return !1;
              var c = vt(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                  d = void 0 !== c ? c : a.vtp_defaultValue;
              Et(d, "v", a.vtp_gtmEventId);
              return d
          })
      }();


  Z.h.aev = ["google"],
      function() {
          function a(t, q, v) {
              var w = t || yh(q, "gtm");
              if (w) return w[v]
          }

          function b(t, q, v, w, y) {
              y || (y = "element");
              var x = q + "." + v,
                  z;
              if (p.hasOwnProperty(x)) z = p[x];
              else {
                  var A = a(t, q, y);
                  if (A && (z = w(A), p[x] = z, r.push(x), 35 < r.length)) {
                      var C = r.shift();
                      delete p[C]
                  }
              }
              return z
          }

          function c(t, q, v, w) {
              var y = a(t, q, u[v]);
              return void 0 !== y ? y : w
          }

          function d(t, q) {
              if (!t) return !1;
              var v = e(st());
              Ka(q) || (q = String(q || "").replace(/\s+/g, "").split(","));
              for (var w = [v], y = 0; y < q.length; y++) {
                  var x = q[y];
                  if (x.hasOwnProperty("is_regex"))
                      if (x.is_regex) try {
                          x =
                              new RegExp(x.domain)
                      } catch (A) {
                          continue
                      } else x = x.domain;
                  if (x instanceof RegExp) {
                      if (x.test(t)) return !1
                  } else {
                      var z = x;
                      if (0 != z.length) {
                          if (0 <= e(t).indexOf(z)) return !1;
                          w.push(e(z))
                      }
                  }
              }
              return !iy(t, w)
          }

          function e(t) {
              n.test(t) || (t = "http://" + t);
              return tj(vj(t), "HOST", !0)
          }

          function f(t, q, v, w) {
              switch (t) {
                  case "SUBMIT_TEXT":
                      return b(q, v, "FORM." + t, g, "formSubmitElement") || w;
                  case "LENGTH":
                      var y = b(q, v, "FORM." + t, h);
                      return void 0 === y ? w : y;
                  case "INTERACTED_FIELD_ID":
                      return k(q, v, "id", w);
                  case "INTERACTED_FIELD_NAME":
                      return k(q,
                          v, "name", w);
                  case "INTERACTED_FIELD_TYPE":
                      return k(q, v, "type", w);
                  case "INTERACTED_FIELD_POSITION":
                      var x = a(q, v, "interactedFormFieldPosition");
                      return void 0 === x ? w : x;
                  case "INTERACT_SEQUENCE_NUMBER":
                      var z = a(q, v, "interactSequenceNumber");
                      return void 0 === z ? w : z;
                  default:
                      return w
              }
          }

          function g(t) {
              switch (t.tagName.toLowerCase()) {
                  case "input":
                      return rc(t, "value");
                  case "button":
                      return sc(t);
                  default:
                      return null
              }
          }

          function h(t) {
              if ("form" === t.tagName.toLowerCase() && t.elements) {
                  for (var q = 0, v = 0; v < t.elements.length; v++) Zs(t.elements[v]) &&
                      q++;
                  return q
              }
          }

          function k(t, q, v, w) {
              var y = a(t, q, "interactedFormField");
              return y && rc(y, v) || w
          }
          var n = /^https?:\/\//i,
              p = {},
              r = [],
              u = {
                  ATTRIBUTE: "elementAttribute",
                  CLASSES: "elementClasses",
                  ELEMENT: "element",
                  ID: "elementId",
                  HISTORY_CHANGE_SOURCE: "historyChangeSource",
                  HISTORY_NEW_STATE: "newHistoryState",
                  HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
                  HISTORY_OLD_STATE: "oldHistoryState",
                  HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
                  TARGET: "elementTarget"
              };
          (function(t) {
              Z.__aev = t;
              Z.__aev.m = "aev";
              Z.__aev.isVendorTemplate = !0;
              Z.__aev.priorityOverride = 0
          })(function(t) {
              var q = t.vtp_gtmEventId,
                  v = t.vtp_defaultValue,
                  w = t.vtp_varType,
                  y;
              t.vtp_gtmCachedValues && (y = t.vtp_gtmCachedValues.gtm);
              switch (w) {
                  case "TAG_NAME":
                      var x = a(y, q, "element");
                      return x && x.tagName || v;
                  case "TEXT":
                      return b(y, q, w, sc) || v;
                  case "URL":
                      var z;
                      a: {
                          var A = String(a(y, q, "elementUrl") || v || ""),
                              C = vj(A),
                              E = String(t.vtp_component || "URL");
                          switch (E) {
                              case "URL":
                                  z = A;
                                  break a;
                              case "IS_OUTBOUND":
                                  z = d(A, t.vtp_affiliatedDomains);
                                  break a;
                              default:
                                  z = tj(C, E, t.vtp_stripWww, t.vtp_defaultPages, t.vtp_queryKey)
                          }
                      }
                      return z;
                  case "ATTRIBUTE":
                      var D;
                      if (void 0 === t.vtp_attribute) D = c(y, q, w, v);
                      else {
                          var F = t.vtp_attribute,
                              S = a(y, q, "element");
                          D = S && rc(S, F) || v || ""
                      }
                      return D;
                  case "MD":
                      var M = t.vtp_mdValue,
                          J = b(y, q, "MD", kt);
                      return M && J ? nt(J, M) || v : J || v;
                  case "FORM":
                      return f(String(t.vtp_component || "SUBMIT_TEXT"), y, q, v);
                  default:
                      var K = c(y, q, w, v);
                      Et(K, "aev", t.vtp_gtmEventId);
                      return K
              }
          })
      }();

  Z.h.dlm = ["google"],
      function() {
          (function(a) {
              Z.__dlm = a;
              Z.__dlm.m = "dlm";
              Z.__dlm.isVendorTemplate = !0;
              Z.__dlm.priorityOverride = 0
          })(function(a) {
              var b = jy(a.vtp_userInput || [], "key", "value") || {};
              a.vtp_synchronousWrite ? Sa(b, function(c, d) {
                  uh(c, d)
              }) : wt(b);
              I(a.vtp_gtmOnSuccess)
          })
      }();

  Z.h.gct = ["google"],
      function() {
          function a(d) {
              for (var e = [], f = 0; f < d.length; f++) try {
                  e.push(new RegExp(d[f]))
              } catch (g) {}
              return e
          }

          function b(d) {
              return d.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&")
          }

          function c(d) {
              for (var e = [], f = 0; f < d.length; f++) {
                  var g = d[f].matchValue,
                      h;
                  switch (d[f].matchType) {
                      case "BEGINS_WITH":
                          h = "^" + b(g);
                          break;
                      case "ENDS_WITH":
                          h = b(g) + "$";
                          break;
                      case "EQUALS":
                          h = "^" + b(g) + "$";
                          break;
                      case "REGEX":
                          h = g;
                          break;
                      default:
                          h = b(g)
                  }
                  e.push(h)
              }
              return e
          }(function(d) {
              Z.__gct = d;
              Z.__gct.m = "gct";
              Z.__gct.isVendorTemplate = !0;
              Z.__gct.priorityOverride = 0
          })(function(d) {
              var e = {};
              0 < d.vtp_sessionDuration && (e[R.Fc] = d.vtp_sessionDuration);
              e[R.vd] = d.vtp_eventSettings;
              e[R.Ce] = d.vtp_dynamicEventSettings;
              e[R.ib] = 1 === d.vtp_googleSignals;
              e[R.yd] = d.vtp_foreignTld;
              e[R.Ie] = 1 === d.vtp_restrictDomain;
              e[R.Le] = d.vtp_internalTrafficResults;
              var f = R.na,
                  g = d.vtp_linker;
              g && g[R.P] && (g[R.P] = a(g[R.P]));
              e[f] = g;
              var h = R.Ad,
                  k = d.vtp_referralExclusionDefinition;
              k && k.include_conditions && (k.include_conditions = a(k.include_conditions));
              e[h] = k;
              var n = Ar(d.vtp_trackingId),
                  p = n.referral_exclusion_conditions;
              p && (p.length && "object" === typeof p[0] && (p = c(p)), e[R.Ad] = {
                  include_conditions: a(p)
              });
              var r = n.cross_domain_conditions;
              if (r) {
                  r.length && "object" === typeof r[0] && (r = c(r));
                  var u = {};
                  e[R.na] = (u[R.P] = a(r), u[R.bc] = !0, u[R.ac] = !0, u[R.Dc] = "query", u)
              }
              UA(d.vtp_trackingId, e);
              I(d.vtp_gtmOnSuccess)
          })
      }();




  Z.h.get = ["google"],
      function() {
          (function(a) {
              Z.__get = a;
              Z.__get.m = "get";
              Z.__get.isVendorTemplate = !0;
              Z.__get.priorityOverride = 0
          })(function(a) {
              var b = a.vtp_settings;
              (a.vtp_deferrable ? QA : PA)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {});
              a.vtp_gtmOnSuccess()
          })
      }();




  Z.h.lcl = [],
      function() {
          function a() {
              var c = W("document"),
                  d = 0,
                  e = function(f) {
                      var g = f.target;
                      if (g && 3 !== f.which && !(f.ad || f.timeStamp && f.timeStamp === d)) {
                          d = f.timeStamp;
                          g = uc(g, ["a", "area"], 100);
                          if (!g) return f.returnValue;
                          var h = f.defaultPrevented || !1 === f.returnValue,
                              k = Ws("lcl", h ? "nv.mwt" : "mwt", 0),
                              n;
                          n = h ? Ws("lcl", "nv.ids", []) : Ws("lcl", "ids", []);
                          if (n.length) {
                              var p = Ss(g, "gtm.linkClick", n);
                              if (b(f, g, c) && !h && k && g.href) {
                                  var r = !!Ma(String(wc(g, "rel") || "").split(" "), function(v) {
                                      return "noreferrer" === v.toLowerCase()
                                  });
                                  r && Xg(36);
                                  var u = W((wc(g, "target") || "_self").substring(1)),
                                      t = !0,
                                      q = Cs(function() {
                                          var v;
                                          if (v = t && u) {
                                              var w;
                                              a: if (r) {
                                                  var y;
                                                  try {
                                                      y = new MouseEvent(f.type, {
                                                          bubbles: !0
                                                      })
                                                  } catch (x) {
                                                      if (!c.createEvent) {
                                                          w = !1;
                                                          break a
                                                      }
                                                      y = c.createEvent("MouseEvents");
                                                      y.initEvent(f.type, !0, !0)
                                                  }
                                                  y.ad = !0;
                                                  f.target.dispatchEvent(y);
                                                  w = !0
                                              } else w = !1;
                                              v = !w
                                          }
                                          v && (u.location.href = wc(g, "href"))
                                      }, k);
                                  if (wt(p, q, k)) t = !1;
                                  else return f.preventDefault && f.preventDefault(), f.returnValue = !1
                              } else wt(p, function() {}, k || 2E3);
                              return !0
                          }
                      }
                  };
              pc(c, "click", e, !1);
              pc(c, "auxclick",
                  e, !1)
          }

          function b(c, d, e) {
              if (2 === c.which || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey) return !1;
              var f = wc(d, "href"),
                  g = f.indexOf("#"),
                  h = wc(d, "target");
              if (h && "_self" !== h && "_parent" !== h && "_top" !== h || 0 === g) return !1;
              if (0 < g) {
                  var k = ut(f),
                      n = ut(e.location);
                  return k !== n
              }
              return !0
          }(function(c) {
              Z.__lcl = c;
              Z.__lcl.m = "lcl";
              Z.__lcl.isVendorTemplate = !0;
              Z.__lcl.priorityOverride = 0
          })(function(c) {
              var d = void 0 === c.vtp_waitForTags ? !0 : c.vtp_waitForTags,
                  e = void 0 === c.vtp_checkValidation ? !0 : c.vtp_checkValidation,
                  f = Number(c.vtp_waitForTagsTimeout);
              if (!f || 0 >= f) f = 2E3;
              var g = c.vtp_uniqueTriggerId || "0";
              if (d) {
                  var h = function(n) {
                      return Math.max(f, n)
                  };
                  Vs("lcl", "mwt", h, 0);
                  e || Vs("lcl", "nv.mwt", h, 0)
              }
              var k = function(n) {
                  n.push(g);
                  return n
              };
              Vs("lcl", "ids", k, []);
              e || Vs("lcl", "nv.ids", k, []);
              Bt("lcl") || (a(), Ct("lcl"));
              I(c.vtp_gtmOnSuccess)
          })
      }();
  var VA = {};
  VA.dataLayer = sh;
  VA.callback = function(a) {
      ih.hasOwnProperty(a) && Fa(ih[a]) && ih[a]();
      delete ih[a]
  };
  VA.bootstrap = 0;
  VA._spx = !1;

  function WA() {
      Yg[L.I] = VA;
      gb(jh, Z.h);
      gf = vf
  }

  function XA() {
      var a = !1;
      a && um("INIT");
      Mh().o();
      Yg = m.google_tag_manager = m.google_tag_manager || {};
      Ko();
      kl.enable_gbraid_cookie_write = !0;
      var b = !!Yg[L.I];
      if (b) {
          var c = Yg.zones;
          c && c.unregisterChild(L.I);
      } else {
          for (var f = data.resource || {}, g = f.macros || [], h = 0; h < g.length; h++) Ze.push(g[h]);
          for (var k = f.tags || [], n = 0; n < k.length; n++) bf.push(k[n]);
          for (var p = f.predicates || [], r = 0; r < p.length; r++) af.push(p[r]);
          for (var u = f.rules || [], t = 0; t < u.length; t++) {
              for (var q = u[t], v = {}, w = 0; w < q.length; w++) v[q[w][0]] = Array.prototype.slice.call(q[w], 1);
              $e.push(v)
          }
          df = Z;
          ef = fu;
          Cf = new Bf;
          var y = data.sandboxed_scripts,
              x = data.security_groups,
              z = data.runtime || [],
              A = data.runtime_lines;
          by = new se;
          ey();
          Ye = cy();
          var C = by,
              E = Zx();
          xb(C.g, "require", E);
          for (var D =
                  0; D < z.length; D++) {
              var F = z[D];
              if (!Ka(F) || 3 > F.length) {
                  if (0 === F.length) continue;
                  break
              }
              A && A[D] && A[D].length && of (F, A[D]);
              by.execute(F)
          }
          if (void 0 !== y)
              for (var S = ["sandboxedScripts"], M = 0; M < y.length; M++) {
                  var J = y[M].replace(/^_*/, "");
                  jh[J] = S
              }
          fy(x);
          WA();
          Ks();
          gm = !1;
          hm = 0;
          if ("interactive" == H.readyState && !H.createEventObject || "complete" == H.readyState) jm();
          else {
              pc(H, "DOMContentLoaded", jm);
              pc(H, "readystatechange", jm);
              if (H.createEventObject && H.documentElement.doScroll) {
                  var K = !0;
                  try {
                      K = !m.frameElement
                  } catch (X) {}
                  K && km()
              }
              pc(m,
                  "load", jm)
          }
          Zr = !1;
          "complete" === H.readyState ? as() : pc(m, "load", as);
          rn && m.setInterval(ln, 864E5);
          gh = (new Date).getTime();
          VA.bootstrap = gh;
          if (a) {
              var aa = vm("INIT");
          }
      }
  }
  (function(a) {
      if (!m["__TAGGY_INSTALLED"]) {
          var b = !1;
          if (H.referrer) {
              var c = vj(H.referrer);
              b = "cct.google" === sj(c, "host")
          }
          if (!b) {
              var d = Xj("googTaggyReferrer");
              b = d.length && d[0].length
          }
          b && (m["__TAGGY_INSTALLED"] = !0, ic("https://cct.google/taggy/agent.js"))
      }
      var f = function(r) {
              var u = "GTM",
                  t = "GTM";
              u = "OGT", t = "GTAG";
              var q = m["google.tagmanager.debugui2.queue"];
              q || (q = [], m["google.tagmanager.debugui2.queue"] = q, ic("https://" + L.pe + "/debug/bootstrap?id=" + L.I + "&src=" + t + "&cond=" + r + "&gtm=" + ho()));
              var v = {
                  messageType: "CONTAINER_STARTING",
                  data: {
                      scriptSource: cc,
                      containerProduct: u,
                      debug: !1,
                      id: L.I
                  }
              };
              v.data.resume = function() {
                  a()
              };
              L.Ph && (v.data.initialPublish = !0);
              q.push(v)
          },
          g = void 0,
          h = tj(m.location, "query", !1, void 0, "gtm_debug");
      Ms(h) && (g = 2);
      if (!g && H.referrer) {
          var k = vj(H.referrer);
          "tagassistant.google.com" === sj(k, "host") && (g = 3)
      }
      if (!g) {
          var n = Xj("__TAG_ASSISTANT");
          n.length && n[0].length && (g = 4)
      }
      if (!g) {
          var p = H.documentElement.getAttribute("data-tag-assistant-present");
          Ms(p) && (g = 5)
      }
      g && cc ? f(g) : a()
  })(XA);

})()