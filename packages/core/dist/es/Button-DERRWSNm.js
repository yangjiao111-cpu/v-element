import { defineComponent as h, useSlots as $, inject as S, ref as N, computed as a, openBlock as u, createBlock as B, resolveDynamicComponent as O, unref as U, normalizeClass as w, withCtx as D, renderSlot as c, createVNode as R, normalizeStyle as x, createCommentVNode as v, provide as K, reactive as P, toRef as s, createElementBlock as V } from "vue";
import { I as g, _ as k } from "./Icon-Ctpwk2P9.js";
import { t as X } from "./vendor-kxk_OrdB.js";
import { w as z } from "./utils-CGuI4S4L.js";
const T = Symbol(
  "BUTTON_GROUP_CTX_KEY"
), Y = /* @__PURE__ */ h({
  name: "ErButton",
  __name: "Button",
  props: {
    tag: { default: "button" },
    type: {},
    size: {},
    nativeType: { default: "button" },
    disabled: { type: Boolean },
    loading: { type: Boolean },
    icon: {},
    circle: { type: Boolean },
    plain: { type: Boolean },
    round: { type: Boolean },
    loadingIcon: {},
    autofocus: { type: Boolean },
    useThrottle: { type: Boolean, default: !0 },
    throttleDuration: { default: 500 }
  },
  emits: ["click"],
  setup(e, { expose: n, emit: i }) {
    const o = e, C = i, E = $(), t = S(T, void 0), r = N(), d = a(() => (t == null ? void 0 : t.size) ?? o.size ?? ""), f = a(() => (t == null ? void 0 : t.type) ?? o.type ?? ""), y = a(() => (t == null ? void 0 : t.disabled) ?? o.disabled ?? ""), I = a(() => {
      E.default;
    }), m = (l) => C("click", l), G = X(m, o.throttleDuration, { trailing: !1 });
    return n({
      ref: r
    }), (l, p) => (u(), B(O(o.tag), {
      autofocus: e.autofocus,
      ref_key: "_ref",
      ref: r,
      class: w(["er-button", {
        [`er-button--${f.value}`]: f.value,
        [`er-button--${d.value}`]: d.value,
        "is-plain": e.plain,
        "is-round": e.round,
        "is-circle": e.circle,
        "is-disabled": y.value,
        "is-loading": e.loading
      }]),
      type: e.tag === "button" ? e.nativeType : void 0,
      disabled: y.value || e.loading ? !0 : void 0,
      onClick: p[0] || (p[0] = (b) => {
        e.useThrottle ? U(G)(b) : m(b);
      })
    }, {
      default: D(() => [
        e.loading ? c(l.$slots, "loading", { key: 0 }, () => [
          R(g, {
            style: x(I.value),
            class: "loading-icon",
            icon: e.loadingIcon ?? "spinner",
            size: "1x",
            spin: ""
          }, null, 8, ["style", "icon"])
        ], !0) : v("", !0),
        e.icon && !e.loading ? (u(), B(g, {
          key: 1,
          icon: e.icon,
          size: "1x",
          style: {}
        }, null, 8, ["icon"])) : v("", !0),
        c(l.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["autofocus", "type", "disabled", "class"]));
  }
}), j = /* @__PURE__ */ k(Y, [["__scopeId", "data-v-e0b7bb2f"]]), q = { class: "er-button-group" }, A = /* @__PURE__ */ h({
  name: "ErButtonGroup",
  __name: "ButtonGroup",
  props: {
    size: {},
    type: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const n = e;
    return K(T, P({
      size: s(n.size),
      type: s(n.type),
      disabled: s(n.disabled)
    })), (i, o) => (u(), V("div", q, [
      c(i.$slots, "default", {}, void 0, !0)
    ]));
  }
}), F = /* @__PURE__ */ k(A, [["__scopeId", "data-v-5fc038bb"]]), Q = z(j), W = z(F);
export {
  Q as E,
  W as a
};
