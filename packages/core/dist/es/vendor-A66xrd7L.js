var t = "object" == typeof global && global && global.Object === Object && global, r = "object" == typeof self && self && self.Object === Object && self, e = t || r || Function("return this")(), n = e.Symbol, o = Object.prototype, a = o.hasOwnProperty, c = o.toString, i = n ? n.toStringTag : void 0, u = Object.prototype.toString, f = n ? n.toStringTag : void 0;
function l(t2) {
  return null == t2 ? void 0 === t2 ? "[object Undefined]" : "[object Null]" : f && f in Object(t2) ? function(t3) {
    var r2 = a.call(t3, i), e2 = t3[i];
    try {
      t3[i] = void 0;
      var n2 = true;
    } catch (t4) {
    }
    var o2 = c.call(t3);
    return n2 && (r2 ? t3[i] = e2 : delete t3[i]), o2;
  }(t2) : function(t3) {
    return u.call(t3);
  }(t2);
}
function s(t2) {
  return null != t2 && "object" == typeof t2;
}
function p(t2) {
  return "symbol" == typeof t2 || s(t2) && "[object Symbol]" == l(t2);
}
function b(t2, r2) {
  for (var e2 = -1, n2 = null == t2 ? 0 : t2.length, o2 = Array(n2); ++e2 < n2; ) o2[e2] = r2(t2[e2], e2, t2);
  return o2;
}
var y = Array.isArray, v = n ? n.prototype : void 0, h = v ? v.toString : void 0;
function j(t2) {
  if ("string" == typeof t2) return t2;
  if (y(t2)) return b(t2, j) + "";
  if (p(t2)) return h ? h.call(t2) : "";
  var r2 = t2 + "";
  return "0" == r2 && 1 / t2 == -1 / 0 ? "-0" : r2;
}
var d = /\s/, _ = /^\s+/;
function g(t2) {
  var r2 = typeof t2;
  return null != t2 && ("object" == r2 || "function" == r2);
}
var O = /^[-+]0x[0-9a-f]+$/i, w = /^0b[01]+$/i, m = /^0o[0-7]+$/i, A = parseInt;
function x(t2) {
  if ("number" == typeof t2) return t2;
  if (p(t2)) return NaN;
  if (g(t2)) {
    var r2 = "function" == typeof t2.valueOf ? t2.valueOf() : t2;
    t2 = g(r2) ? r2 + "" : r2;
  }
  if ("string" != typeof t2) return 0 === t2 ? t2 : +t2;
  var e2;
  t2 = (e2 = t2) ? e2.slice(0, function(t3) {
    for (var r3 = t3.length; r3-- && d.test(t3.charAt(r3)); ) ;
    return r3;
  }(e2) + 1).replace(_, "") : e2;
  var n2 = w.test(t2);
  return n2 || m.test(t2) ? A(t2.slice(2), n2 ? 2 : 8) : O.test(t2) ? NaN : +t2;
}
function S(t2) {
  return t2;
}
function z(t2) {
  if (!g(t2)) return false;
  var r2 = l(t2);
  return "[object Function]" == r2 || "[object GeneratorFunction]" == r2 || "[object AsyncFunction]" == r2 || "[object Proxy]" == r2;
}
var P, T = e["__core-js_shared__"], E = (P = /[^.]+$/.exec(T && T.keys && T.keys.IE_PROTO || "")) ? "Symbol(src)_1." + P : "", F = Function.prototype.toString;
function I(t2) {
  if (null != t2) {
    try {
      return F.call(t2);
    } catch (t3) {
    }
    try {
      return t2 + "";
    } catch (t3) {
    }
  }
  return "";
}
var U = /^\[object .+?Constructor\]$/, M = Function.prototype, $ = Object.prototype, B = M.toString, D = $.hasOwnProperty, k = RegExp("^" + B.call(D).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function C(t2, r2) {
  var e2 = function(t3, r3) {
    return null == t3 ? void 0 : t3[r3];
  }(t2, r2);
  return function(t3) {
    return !(!g(t3) || (r3 = t3, E && E in r3)) && (z(t3) ? k : U).test(I(t3));
    var r3;
  }(e2) ? e2 : void 0;
}
var N, W, R, V = C(e, "WeakMap"), L = Date.now, q = function() {
  try {
    var t2 = C(Object, "defineProperty");
    return t2({}, "", {}), t2;
  } catch (t3) {
  }
}(), G = q ? function(t2, r2) {
  return q(t2, "toString", { configurable: true, enumerable: false, value: (e2 = r2, function() {
    return e2;
  }), writable: true });
  var e2;
} : S, H = (N = G, W = 0, R = 0, function() {
  var t2 = L(), r2 = 16 - (t2 - R);
  if (R = t2, r2 > 0) {
    if (++W >= 800) return arguments[0];
  } else W = 0;
  return N.apply(void 0, arguments);
});
function J(t2, r2) {
  for (var e2 = -1, n2 = null == t2 ? 0 : t2.length; ++e2 < n2 && false !== r2(t2[e2], e2, t2); ) ;
  return t2;
}
var K = /^(?:0|[1-9]\d*)$/;
function Q(t2, r2) {
  var e2 = typeof t2;
  return !!(r2 = null == r2 ? 9007199254740991 : r2) && ("number" == e2 || "symbol" != e2 && K.test(t2)) && t2 > -1 && t2 % 1 == 0 && t2 < r2;
}
function X(t2, r2, e2) {
  "__proto__" == r2 && q ? q(t2, r2, { configurable: true, enumerable: true, value: e2, writable: true }) : t2[r2] = e2;
}
function Y(t2, r2) {
  return t2 === r2 || t2 != t2 && r2 != r2;
}
var Z = Object.prototype.hasOwnProperty;
function tt(t2, r2, e2) {
  var n2 = t2[r2];
  Z.call(t2, r2) && Y(n2, e2) && (void 0 !== e2 || r2 in t2) || X(t2, r2, e2);
}
var rt = Math.max;
function et(t2) {
  return "number" == typeof t2 && t2 > -1 && t2 % 1 == 0 && t2 <= 9007199254740991;
}
function nt(t2) {
  return null != t2 && et(t2.length) && !z(t2);
}
var ot = Object.prototype;
function at(t2) {
  var r2 = t2 && t2.constructor;
  return t2 === ("function" == typeof r2 && r2.prototype || ot);
}
function ct(t2) {
  return s(t2) && "[object Arguments]" == l(t2);
}
var it = Object.prototype, ut = it.hasOwnProperty, ft = it.propertyIsEnumerable, lt = ct(/* @__PURE__ */ function() {
  return arguments;
}()) ? ct : function(t2) {
  return s(t2) && ut.call(t2, "callee") && !ft.call(t2, "callee");
}, st = "object" == typeof exports && exports && !exports.nodeType && exports, pt = st && "object" == typeof module && module && !module.nodeType && module, bt = pt && pt.exports === st ? e.Buffer : void 0, yt = (bt ? bt.isBuffer : void 0) || function() {
  return false;
}, vt = {};
function ht(t2) {
  return function(r2) {
    return t2(r2);
  };
}
vt["[object Float32Array]"] = vt["[object Float64Array]"] = vt["[object Int8Array]"] = vt["[object Int16Array]"] = vt["[object Int32Array]"] = vt["[object Uint8Array]"] = vt["[object Uint8ClampedArray]"] = vt["[object Uint16Array]"] = vt["[object Uint32Array]"] = true, vt["[object Arguments]"] = vt["[object Array]"] = vt["[object ArrayBuffer]"] = vt["[object Boolean]"] = vt["[object DataView]"] = vt["[object Date]"] = vt["[object Error]"] = vt["[object Function]"] = vt["[object Map]"] = vt["[object Number]"] = vt["[object Object]"] = vt["[object RegExp]"] = vt["[object Set]"] = vt["[object String]"] = vt["[object WeakMap]"] = false;
var jt = "object" == typeof exports && exports && !exports.nodeType && exports, dt = jt && "object" == typeof module && module && !module.nodeType && module, _t = dt && dt.exports === jt && t.process, gt = function() {
  try {
    return dt && dt.require && dt.require("util").types || _t && _t.binding && _t.binding("util");
  } catch (t2) {
  }
}(), Ot = gt && gt.isTypedArray, wt = Ot ? ht(Ot) : function(t2) {
  return s(t2) && et(t2.length) && !!vt[l(t2)];
}, mt = Object.prototype.hasOwnProperty;
function At(t2, r2) {
  var e2 = y(t2), n2 = !e2 && lt(t2), o2 = !e2 && !n2 && yt(t2), a2 = !e2 && !n2 && !o2 && wt(t2), c2 = e2 || n2 || o2 || a2, i2 = c2 ? function(t3, r3) {
    for (var e3 = -1, n3 = Array(t3); ++e3 < t3; ) n3[e3] = r3(e3);
    return n3;
  }(t2.length, String) : [], u2 = i2.length;
  for (var f2 in t2) !r2 && !mt.call(t2, f2) || c2 && ("length" == f2 || o2 && ("offset" == f2 || "parent" == f2) || a2 && ("buffer" == f2 || "byteLength" == f2 || "byteOffset" == f2) || Q(f2, u2)) || i2.push(f2);
  return i2;
}
function xt(t2, r2) {
  return function(e2) {
    return t2(r2(e2));
  };
}
var St = xt(Object.keys, Object), zt = Object.prototype.hasOwnProperty;
function Pt(t2) {
  return nt(t2) ? At(t2) : function(t3) {
    if (!at(t3)) return St(t3);
    var r2 = [];
    for (var e2 in Object(t3)) zt.call(t3, e2) && "constructor" != e2 && r2.push(e2);
    return r2;
  }(t2);
}
var Tt = Object.prototype.hasOwnProperty, Et = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ft = /^\w*$/, It = C(Object, "create"), Ut = Object.prototype.hasOwnProperty, Mt = Object.prototype.hasOwnProperty;
function $t(t2) {
  var r2 = -1, e2 = null == t2 ? 0 : t2.length;
  for (this.clear(); ++r2 < e2; ) {
    var n2 = t2[r2];
    this.set(n2[0], n2[1]);
  }
}
function Bt(t2, r2) {
  for (var e2 = t2.length; e2--; ) if (Y(t2[e2][0], r2)) return e2;
  return -1;
}
$t.prototype.clear = function() {
  this.__data__ = It ? It(null) : {}, this.size = 0;
}, $t.prototype.delete = function(t2) {
  var r2 = this.has(t2) && delete this.__data__[t2];
  return this.size -= r2 ? 1 : 0, r2;
}, $t.prototype.get = function(t2) {
  var r2 = this.__data__;
  if (It) {
    var e2 = r2[t2];
    return "__lodash_hash_undefined__" === e2 ? void 0 : e2;
  }
  return Ut.call(r2, t2) ? r2[t2] : void 0;
}, $t.prototype.has = function(t2) {
  var r2 = this.__data__;
  return It ? void 0 !== r2[t2] : Mt.call(r2, t2);
}, $t.prototype.set = function(t2, r2) {
  var e2 = this.__data__;
  return this.size += this.has(t2) ? 0 : 1, e2[t2] = It && void 0 === r2 ? "__lodash_hash_undefined__" : r2, this;
};
var Dt = Array.prototype.splice;
function kt(t2) {
  var r2 = -1, e2 = null == t2 ? 0 : t2.length;
  for (this.clear(); ++r2 < e2; ) {
    var n2 = t2[r2];
    this.set(n2[0], n2[1]);
  }
}
kt.prototype.clear = function() {
  this.__data__ = [], this.size = 0;
}, kt.prototype.delete = function(t2) {
  var r2 = this.__data__, e2 = Bt(r2, t2);
  return !(e2 < 0 || (e2 == r2.length - 1 ? r2.pop() : Dt.call(r2, e2, 1), --this.size, 0));
}, kt.prototype.get = function(t2) {
  var r2 = this.__data__, e2 = Bt(r2, t2);
  return e2 < 0 ? void 0 : r2[e2][1];
}, kt.prototype.has = function(t2) {
  return Bt(this.__data__, t2) > -1;
}, kt.prototype.set = function(t2, r2) {
  var e2 = this.__data__, n2 = Bt(e2, t2);
  return n2 < 0 ? (++this.size, e2.push([t2, r2])) : e2[n2][1] = r2, this;
};
var Ct = C(e, "Map");
function Nt(t2, r2) {
  var e2, n2, o2 = t2.__data__;
  return ("string" == (n2 = typeof (e2 = r2)) || "number" == n2 || "symbol" == n2 || "boolean" == n2 ? "__proto__" !== e2 : null === e2) ? o2["string" == typeof r2 ? "string" : "hash"] : o2.map;
}
function Wt(t2) {
  var r2 = -1, e2 = null == t2 ? 0 : t2.length;
  for (this.clear(); ++r2 < e2; ) {
    var n2 = t2[r2];
    this.set(n2[0], n2[1]);
  }
}
function Rt(t2, r2) {
  if ("function" != typeof t2 || null != r2 && "function" != typeof r2) throw new TypeError("Expected a function");
  var e2 = function() {
    var n2 = arguments, o2 = r2 ? r2.apply(this, n2) : n2[0], a2 = e2.cache;
    if (a2.has(o2)) return a2.get(o2);
    var c2 = t2.apply(this, n2);
    return e2.cache = a2.set(o2, c2) || a2, c2;
  };
  return e2.cache = new (Rt.Cache || Wt)(), e2;
}
Wt.prototype.clear = function() {
  this.size = 0, this.__data__ = { hash: new $t(), map: new (Ct || kt)(), string: new $t() };
}, Wt.prototype.delete = function(t2) {
  var r2 = Nt(this, t2).delete(t2);
  return this.size -= r2 ? 1 : 0, r2;
}, Wt.prototype.get = function(t2) {
  return Nt(this, t2).get(t2);
}, Wt.prototype.has = function(t2) {
  return Nt(this, t2).has(t2);
}, Wt.prototype.set = function(t2, r2) {
  var e2 = Nt(this, t2), n2 = e2.size;
  return e2.set(t2, r2), this.size += e2.size == n2 ? 0 : 1, this;
}, Rt.Cache = Wt;
var Vt, Lt, qt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Gt = /\\(\\)?/g, Ht = (Vt = Rt(function(t2) {
  var r2 = [];
  return 46 === t2.charCodeAt(0) && r2.push(""), t2.replace(qt, function(t3, e2, n2, o2) {
    r2.push(n2 ? o2.replace(Gt, "$1") : e2 || t3);
  }), r2;
}, function(t2) {
  return 500 === Lt.size && Lt.clear(), t2;
}), Lt = Vt.cache, Vt);
function Jt(t2, r2) {
  return y(t2) ? t2 : function(t3, r3) {
    if (y(t3)) return false;
    var e2 = typeof t3;
    return !("number" != e2 && "symbol" != e2 && "boolean" != e2 && null != t3 && !p(t3)) || Ft.test(t3) || !Et.test(t3) || null != r3 && t3 in Object(r3);
  }(t2, r2) ? [t2] : Ht(function(t3) {
    return null == t3 ? "" : j(t3);
  }(t2));
}
function Kt(t2) {
  if ("string" == typeof t2 || p(t2)) return t2;
  var r2 = t2 + "";
  return "0" == r2 && 1 / t2 == -1 / 0 ? "-0" : r2;
}
function Qt(t2, r2) {
  for (var e2 = -1, n2 = r2.length, o2 = t2.length; ++e2 < n2; ) t2[o2 + e2] = r2[e2];
  return t2;
}
var Xt = n ? n.isConcatSpreadable : void 0;
function Yt(t2) {
  return y(t2) || lt(t2) || !!(Xt && t2 && t2[Xt]);
}
function Zt(t2) {
  return null != t2 && t2.length ? function(t3, r2, e2, n2, o2) {
    var a2 = -1, c2 = t3.length;
    for (e2 || (e2 = Yt), o2 || (o2 = []); ++a2 < c2; ) {
      var i2 = t3[a2];
      e2(i2) ? Qt(o2, i2) : o2[o2.length] = i2;
    }
    return o2;
  }(t2) : [];
}
var tr = xt(Object.getPrototypeOf, Object), rr = Function.prototype, er = Object.prototype, nr = rr.toString, or = er.hasOwnProperty, ar = nr.call(Object);
function cr(t2) {
  var r2 = this.__data__ = new kt(t2);
  this.size = r2.size;
}
cr.prototype.clear = function() {
  this.__data__ = new kt(), this.size = 0;
}, cr.prototype.delete = function(t2) {
  var r2 = this.__data__, e2 = r2.delete(t2);
  return this.size = r2.size, e2;
}, cr.prototype.get = function(t2) {
  return this.__data__.get(t2);
}, cr.prototype.has = function(t2) {
  return this.__data__.has(t2);
}, cr.prototype.set = function(t2, r2) {
  var e2 = this.__data__;
  if (e2 instanceof kt) {
    var n2 = e2.__data__;
    if (!Ct || n2.length < 199) return n2.push([t2, r2]), this.size = ++e2.size, this;
    e2 = this.__data__ = new Wt(n2);
  }
  return e2.set(t2, r2), this.size = e2.size, this;
};
var ir = "object" == typeof exports && exports && !exports.nodeType && exports, ur = ir && "object" == typeof module && module && !module.nodeType && module, fr = ur && ur.exports === ir ? e.Buffer : void 0;
function lr() {
  return [];
}
fr && fr.allocUnsafe;
var sr = Object.prototype.propertyIsEnumerable, pr = Object.getOwnPropertySymbols, br = pr ? function(t2) {
  return null == t2 ? [] : (t2 = Object(t2), function(t3, r2) {
    for (var e2 = -1, n2 = null == t3 ? 0 : t3.length, o2 = 0, a2 = []; ++e2 < n2; ) {
      var c2 = t3[e2];
      r2(c2) && (a2[o2++] = c2);
    }
    return a2;
  }(pr(t2), function(r2) {
    return sr.call(t2, r2);
  }));
} : lr, yr = Object.getOwnPropertySymbols ? function(t2) {
  for (var r2 = []; t2; ) Qt(r2, br(t2)), t2 = tr(t2);
  return r2;
} : lr;
function vr(t2) {
  return function(t3, r2, e2) {
    var n2 = function(t4) {
      return nt(t4) ? At(t4, true) : function(t5) {
        if (!g(t5)) return function(t6) {
          var r4 = [];
          if (null != t6) for (var e4 in Object(t6)) r4.push(e4);
          return r4;
        }(t5);
        var r3 = at(t5), e3 = [];
        for (var n3 in t5) ("constructor" != n3 || !r3 && Tt.call(t5, n3)) && e3.push(n3);
        return e3;
      }(t4);
    }(t3);
    return y(t3) ? n2 : Qt(n2, e2(t3));
  }(t2, 0, yr);
}
var hr = C(e, "DataView"), jr = C(e, "Promise"), dr = C(e, "Set"), _r = "[object Map]", gr = "[object Promise]", Or = "[object Set]", wr = "[object WeakMap]", mr = "[object DataView]", Ar = I(hr), xr = I(Ct), Sr = I(jr), zr = I(dr), Pr = I(V), Tr = l;
(hr && Tr(new hr(new ArrayBuffer(1))) != mr || Ct && Tr(new Ct()) != _r || jr && Tr(jr.resolve()) != gr || dr && Tr(new dr()) != Or || V && Tr(new V()) != wr) && (Tr = function(t2) {
  var r2 = l(t2), e2 = "[object Object]" == r2 ? t2.constructor : void 0, n2 = e2 ? I(e2) : "";
  if (n2) switch (n2) {
    case Ar:
      return mr;
    case xr:
      return _r;
    case Sr:
      return gr;
    case zr:
      return Or;
    case Pr:
      return wr;
  }
  return r2;
});
var Er = Object.prototype.hasOwnProperty, Fr = e.Uint8Array;
function Ir(t2) {
  var r2 = new t2.constructor(t2.byteLength);
  return new Fr(r2).set(new Fr(t2)), r2;
}
var Ur = /\w*$/, Mr = n ? n.prototype : void 0, $r = Mr ? Mr.valueOf : void 0, Br = gt && gt.isMap, Dr = Br ? ht(Br) : function(t2) {
  return s(t2) && "[object Map]" == Tr(t2);
}, kr = gt && gt.isSet, Cr = kr ? ht(kr) : function(t2) {
  return s(t2) && "[object Set]" == Tr(t2);
}, Nr = "[object Arguments]", Wr = "[object Function]", Rr = "[object Object]", Vr = {};
function Lr(t2, r2, e2, n2, o2, a2) {
  var c2;
  if (e2 && (c2 = o2 ? e2(t2, n2, o2, a2) : e2(t2)), void 0 !== c2) return c2;
  if (!g(t2)) return t2;
  var i2 = y(t2);
  if (i2) c2 = function(t3) {
    var r3 = t3.length, e3 = new t3.constructor(r3);
    return r3 && "string" == typeof t3[0] && Er.call(t3, "index") && (e3.index = t3.index, e3.input = t3.input), e3;
  }(t2);
  else {
    var u2 = Tr(t2), f2 = u2 == Wr || "[object GeneratorFunction]" == u2;
    if (yt(t2)) return t2.slice();
    if (u2 == Rr || u2 == Nr || f2 && !o2) c2 = {};
    else {
      if (!Vr[u2]) return o2 ? t2 : {};
      c2 = function(t3, r3) {
        var e3, n3, o3, a3, c3, i3 = t3.constructor;
        switch (r3) {
          case "[object ArrayBuffer]":
            return Ir(t3);
          case "[object Boolean]":
          case "[object Date]":
            return new i3(+t3);
          case "[object DataView]":
            return c3 = Ir((a3 = t3).buffer), new a3.constructor(c3, a3.byteOffset, a3.byteLength);
          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return function(t4) {
              var r4 = Ir(t4.buffer);
              return new t4.constructor(r4, t4.byteOffset, t4.length);
            }(t3);
          case "[object Map]":
          case "[object Set]":
            return new i3();
          case "[object Number]":
          case "[object String]":
            return new i3(t3);
          case "[object RegExp]":
            return (o3 = new (n3 = t3).constructor(n3.source, Ur.exec(n3))).lastIndex = n3.lastIndex, o3;
          case "[object Symbol]":
            return e3 = t3, $r ? Object($r.call(e3)) : {};
        }
      }(t2, u2);
    }
  }
  a2 || (a2 = new cr());
  var l2 = a2.get(t2);
  if (l2) return l2;
  a2.set(t2, c2), Cr(t2) ? t2.forEach(function(n3) {
    c2.add(Lr(n3, r2, e2, n3, t2, a2));
  }) : Dr(t2) && t2.forEach(function(n3, o3) {
    c2.set(o3, Lr(n3, r2, e2, o3, t2, a2));
  });
  var s2 = i2 ? void 0 : vr(t2);
  return J(s2 || t2, function(n3, o3) {
    s2 && (n3 = t2[o3 = n3]), tt(c2, o3, Lr(n3, r2, e2, o3, t2, a2));
  }), c2;
}
Vr[Nr] = Vr["[object Array]"] = Vr["[object ArrayBuffer]"] = Vr["[object DataView]"] = Vr["[object Boolean]"] = Vr["[object Date]"] = Vr["[object Float32Array]"] = Vr["[object Float64Array]"] = Vr["[object Int8Array]"] = Vr["[object Int16Array]"] = Vr["[object Int32Array]"] = Vr["[object Map]"] = Vr["[object Number]"] = Vr[Rr] = Vr["[object RegExp]"] = Vr["[object Set]"] = Vr["[object String]"] = Vr["[object Symbol]"] = Vr["[object Uint8Array]"] = Vr["[object Uint8ClampedArray]"] = Vr["[object Uint16Array]"] = Vr["[object Uint32Array]"] = true, Vr["[object Error]"] = Vr[Wr] = Vr["[object WeakMap]"] = false;
var qr, Gr = (qr = function(t2, r2) {
  return t2 && function(t3, r3, e2) {
    for (var n2 = -1, o2 = Object(t3), a2 = e2(t3), c2 = a2.length; c2--; ) {
      var i2 = a2[++n2];
      if (false === r3(o2[i2], i2, o2)) break;
    }
    return t3;
  }(t2, r2, Pt);
}, function(t2, r2) {
  if (null == t2) return t2;
  if (!nt(t2)) return qr(t2, r2);
  for (var e2 = t2.length, n2 = -1, o2 = Object(t2); ++n2 < e2 && false !== r2(o2[n2], n2, o2); ) ;
  return t2;
}), Hr = function() {
  return e.Date.now();
}, Jr = Math.max, Kr = Math.min;
function Qr(t2, r2) {
  var e2;
  return (y(t2) ? J : Gr)(t2, "function" == typeof (e2 = r2) ? e2 : S);
}
var Xr = Object.prototype.hasOwnProperty;
function Yr(t2, r2) {
  var e2 = -1, n2 = (r2 = Jt(r2, t2)).length;
  if (!n2) return true;
  for (var o2 = null == t2 || "object" != typeof t2 && "function" != typeof t2; ++e2 < n2; ) {
    var a2 = r2[e2];
    if ("string" == typeof a2) {
      if ("__proto__" === a2 && !Xr.call(t2, "__proto__")) return false;
      if ("constructor" === a2 && e2 + 1 < n2 && "string" == typeof r2[e2 + 1] && "prototype" === r2[e2 + 1]) {
        if (o2 && 0 === e2) continue;
        return false;
      }
    }
  }
  var c2 = function(t3, r3) {
    return r3.length < 2 ? t3 : function(t4, r4) {
      for (var e3 = 0, n3 = (r4 = Jt(r4, t4)).length; null != t4 && e3 < n3; ) t4 = t4[Kt(r4[e3++])];
      return e3 && e3 == n3 ? t4 : void 0;
    }(t3, function(t4, r4, e3) {
      var n3 = -1, o3 = t4.length;
      r4 < 0 && (r4 = -r4 > o3 ? 0 : o3 + r4), (e3 = e3 > o3 ? o3 : e3) < 0 && (e3 += o3), o3 = r4 > e3 ? 0 : e3 - r4 >>> 0, r4 >>>= 0;
      for (var a3 = Array(o3); ++n3 < o3; ) a3[n3] = t4[n3 + r4];
      return a3;
    }(r3, 0, -1));
  }(t2, r2);
  return null == c2 || delete c2[Kt(function(t3) {
    var r3 = null == t3 ? 0 : t3.length;
    return r3 ? t3[r3 - 1] : void 0;
  }(r2))];
}
function Zr(t2) {
  return function(t3) {
    if (!s(t3) || "[object Object]" != l(t3)) return false;
    var r2 = tr(t3);
    if (null === r2) return true;
    var e2 = or.call(r2, "constructor") && r2.constructor;
    return "function" == typeof e2 && e2 instanceof e2 && nr.call(e2) == ar;
  }(t2) ? void 0 : t2;
}
var te = function(t2) {
  return H(function(t3, r2, e2) {
    return r2 = rt(void 0 === r2 ? t3.length - 1 : r2, 0), function() {
      for (var n2 = arguments, o2 = -1, a2 = rt(n2.length - r2, 0), c2 = Array(a2); ++o2 < a2; ) c2[o2] = n2[r2 + o2];
      o2 = -1;
      for (var i2 = Array(r2 + 1); ++o2 < r2; ) i2[o2] = n2[o2];
      return i2[r2] = e2(c2), function(t4, r3, e3) {
        switch (e3.length) {
          case 0:
            return t4.call(r3);
          case 1:
            return t4.call(r3, e3[0]);
          case 2:
            return t4.call(r3, e3[0], e3[1]);
          case 3:
            return t4.call(r3, e3[0], e3[1], e3[2]);
        }
        return t4.apply(r3, e3);
      }(t3, this, i2);
    };
  }(t2, void 0, Zt), t2 + "");
}(function(t2, r2) {
  var e2 = {};
  if (null == t2) return e2;
  var n2 = false;
  r2 = b(r2, function(r3) {
    return r3 = Jt(r3, t2), n2 || (n2 = r3.length > 1), r3;
  }), function(t3, r3, e3) {
    var n3 = !e3;
    e3 || (e3 = {});
    for (var o3 = -1, a2 = r3.length; ++o3 < a2; ) {
      var c2 = r3[o3], i2 = void 0;
      void 0 === i2 && (i2 = t3[c2]), n3 ? X(e3, c2, i2) : tt(e3, c2, i2);
    }
  }(t2, vr(t2), e2), n2 && (e2 = Lr(e2, 7, Zr));
  for (var o2 = r2.length; o2--; ) Yr(e2, r2[o2]);
  return e2;
});
function re(t2, r2, e2) {
  var n2 = true, o2 = true;
  if ("function" != typeof t2) throw new TypeError("Expected a function");
  return g(e2) && (n2 = "leading" in e2 ? !!e2.leading : n2, o2 = !("trailing" in e2) && o2), function(t3, r3, e3) {
    var n3, o3, a2, c2, i2, u2, f2 = 0, l2 = false, s2 = false, p2 = true;
    if ("function" != typeof t3) throw new TypeError("Expected a function");
    function b2(r4) {
      var e4 = n3, a3 = o3;
      return n3 = o3 = void 0, f2 = r4, c2 = t3.apply(a3, e4);
    }
    function y2(t4) {
      var e4 = t4 - u2;
      return void 0 === u2 || e4 >= r3 || e4 < 0 || s2 && t4 - f2 >= a2;
    }
    function v2() {
      var t4 = Hr();
      if (y2(t4)) return h2(t4);
      i2 = setTimeout(v2, function(t5) {
        var e4 = r3 - (t5 - u2);
        return s2 ? Kr(e4, a2 - (t5 - f2)) : e4;
      }(t4));
    }
    function h2(t4) {
      return i2 = void 0, p2 && n3 ? b2(t4) : (n3 = o3 = void 0, c2);
    }
    function j2() {
      var t4 = Hr(), e4 = y2(t4);
      if (n3 = arguments, o3 = this, u2 = t4, e4) {
        if (void 0 === i2) return function(t5) {
          return f2 = t5, i2 = setTimeout(v2, r3), l2 ? b2(t5) : c2;
        }(u2);
        if (s2) return clearTimeout(i2), i2 = setTimeout(v2, r3), b2(u2);
      }
      return void 0 === i2 && (i2 = setTimeout(v2, r3)), c2;
    }
    return r3 = x(r3) || 0, g(e3) && (l2 = !!e3.leading, a2 = (s2 = "maxWait" in e3) ? Jr(x(e3.maxWait) || 0, r3) : a2, p2 = "trailing" in e3 ? !!e3.trailing : p2), j2.cancel = function() {
      void 0 !== i2 && clearTimeout(i2), f2 = 0, n3 = u2 = o3 = i2 = void 0;
    }, j2.flush = function() {
      return void 0 === i2 ? c2 : h2(Hr());
    }, j2;
  }(t2, r2, { leading: n2, maxWait: r2, trailing: o2 });
}
export {
  Qr as f,
  te as o,
  re as t
};
