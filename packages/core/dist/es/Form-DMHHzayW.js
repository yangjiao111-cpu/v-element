import { defineComponent as e, reactive as r, toRefs as a, provide as t, openBlock as l, createElementBlock as s, renderSlot as o, useCssVars as i, useSlots as u, inject as n, ref as d, computed as c, onMounted as v, onUnmounted as p, watchEffect as f, watch as m, normalizeClass as b, unref as h, createBlock as g, resolveDynamicComponent as y, withCtx as I, createTextVNode as q, toDisplayString as F, createCommentVNode as _, createElementVNode as k, nextTick as x, toRef as w } from "vue";
import { b as j, g as P } from "./hooks-OP8606-a.js";
import { v as $, w as B, f as A, x as W, k as M, y as S, z as E, i as V, q as C, a as O, A as R, c as z, B as D, C as G } from "./vendor-f3c6mRls.js";
import H from "async-validator";
import { _ as J, w as K } from "./utils-B2WdIr7B.js";
const L = Symbol("formContext"), N = Symbol("formItemContext"), Q = { class: "er-form" }, T = e({ name: "ErForm", __name: "Form", props: { model: {}, rules: {}, disabled: { type: Boolean }, labelWidth: {}, labelPosition: { default: "right" }, labelSuffix: {}, showMessage: { type: Boolean, default: true }, hideRequiredAsterisk: { type: Boolean, default: false }, requiredAsteriskPosition: { default: "left" } }, emits: ["validate"], setup(e2, { expose: i2, emit: u2 }) {
  const n2 = u2, d2 = [], c2 = async function(e3 = [], r2) {
    const a2 = $(e3) ? B(d2, (r3) => W(e3, r3.prop)) : d2;
    try {
      const e4 = await async function(e5 = []) {
        let r3 = {};
        for (const a3 of e5) try {
          await a3.validate("");
        } catch (e6) {
          r3 = { ...r3, ...e6 };
        }
        return !$(Object.keys(r3)) || Promise.reject(r3);
      }(a2);
      return true === e4 && (r2 == null ? void 0 : r2(e4)), e4;
    } catch (e4) {
      if (e4 instanceof Error) throw e4;
      const a3 = e4;
      return r2 == null ? void 0 : r2(false, a3), Promise.reject(a3);
    }
  };
  function v2(e3, r2) {
    return $(r2) ? B(e3, (e4) => W(r2, e4.prop)) : e3;
  }
  const p2 = r({ ...a(e2), emits: n2, addField: function(e3) {
    e3.prop && d2.push(e3);
  }, removeField: function(e3) {
    e3.prop && d2.splice(d2.indexOf(e3), 1);
  } });
  return t(L, p2), i2({ validate: async function(e3) {
    return c2([], e3);
  }, validateField: c2, resetFields: function(e3 = []) {
    A(v2(d2, e3), (e4) => e4.resetField());
  }, clearValidate: function(e3 = []) {
    A(v2(d2, e3), (e4) => e4.clearValidate());
  } }), (e3, r2) => (l(), s("form", Q, [o(e3.$slots, "default")]));
} }), U = { class: "er-form-item__content" }, X = { key: 0, class: "er-form-item__error-msg" }, Y = J(e({ name: "ErFormItem", __name: "FormItem", props: { prop: {}, label: {}, for: {}, labelWidth: {}, disabled: { type: Boolean }, required: { type: Boolean, default: void 0 }, showMessage: { type: Boolean, default: true }, error: {}, rules: {} }, setup(e2, { expose: w2 }) {
  i((e3) => ({ e58e5a82: ne.value }));
  const P2 = e2, A2 = u(), J2 = n(L), K2 = j().value, Q2 = d("init"), T2 = d(""), Y2 = d([]), Z2 = (e3) => e3 && P2.prop && !M(C(e3, P2.prop)) ? C(e3, P2.prop) : null, ee2 = c(() => !(!P2.label && !A2.label)), re2 = c(() => P2.for || (Y2.value.length ? Y2.value[0] : "")), ae2 = c(() => `${P2.label ?? ""}${(J2 == null ? void 0 : J2.labelSuffix) ?? ""}`), te2 = c(() => {
    const e3 = J2 == null ? void 0 : J2.model;
    return Z2(e3);
  }), le = c(() => {
    const { required: e3 } = P2, r2 = [];
    P2.rules && r2.push(...P2.rules);
    const a2 = J2 == null ? void 0 : J2.rules;
    if (a2 && P2.prop) {
      const e4 = Z2(a2);
      e4 && r2.push(...e4);
    }
    if (!M(e3)) {
      const a3 = B(S(r2, (e4, r3) => [e4, r3]), (e4) => W(D(e4[0]), "required"));
      if ($(a3)) for (const t2 of a3) {
        const [a4, l2] = t2;
        a4.required !== e3 && (r2[l2] = { ...a4, required: e3 });
      }
      else r2.push({ required: e3 });
    }
    return r2;
  }), se = c(() => $(le.value) > 0), oe = c(() => !(J2 == null ? void 0 : J2.hideRequiredAsterisk) && (E(le.value, "required") || (P2 == null ? void 0 : P2.required))), ie = c(() => (J2 == null ? void 0 : J2.disabled) || (P2 == null ? void 0 : P2.disabled)), ue = c(() => P2.prop ? V(P2.prop) ? P2.prop : P2.prop.join(".") : ""), ne = c(() => {
    const e3 = (e4) => O(e4) ? `${e4}px` : R(e4, "px") ? e4 : `${e4}px`;
    return P2.labelWidth ? e3(P2.labelWidth) : (J2 == null ? void 0 : J2.labelWidth) ? e3(J2.labelWidth) : "150px";
  });
  let de = null, ce = false;
  const ve = async function(e3, r2) {
    if (ce || !P2.prop || ie.value) return false;
    if (!se.value) return r2 == null ? void 0 : r2(false), false;
    const a2 = function(e4) {
      const r3 = le.value;
      return r3 ? B(r3, (r4) => !r4.trigger || !e4 || (G(r4.trigger) ? r4.trigger.includes(e4) : r4.trigger === e4)).map(({ trigger: e5, ...r4 }) => r4) : [];
    }(e3);
    return $(a2) ? (Q2.value = "validating", async function(e4) {
      const r3 = ue.value;
      return new H({ [r3]: e4 }).validate({ [r3]: te2.value }, { firstFields: true }).then(() => (Q2.value = "success", J2 == null ? void 0 : J2.emits("validate", P2, true, ""), true)).catch((e5) => {
        const { errors: r4 } = e5;
        return Q2.value = "error", T2.value = r4 && $(r4) > 0 ? r4[0].message ?? "" : "", J2 == null ? void 0 : J2.emits("validate", P2, false, T2.value), Promise.reject(e5);
      });
    }(a2).then(() => (r2 == null ? void 0 : r2(true), true)).catch((e4) => {
      const { fields: a3 } = e4;
      return r2 == null ? void 0 : r2(false, a3), Promise.reject(a3);
    })) : (r2 == null ? void 0 : r2(true), true);
  }, pe = function() {
    const e3 = J2 == null ? void 0 : J2.model;
    e3 && ue.value && !M(C(e3, ue.value)) && (ce = true, e3[ue.value] = z(de)), x(() => fe());
  }, fe = function() {
    Q2.value = "init", T2.value = "", ce = false;
  }, me = r({ ...a(P2), disabled: ie.value, validate: ve, resetField: pe, clearValidate: fe, addInputId: function(e3) {
    W(Y2.value, e3) || Y2.value.push(e3);
  }, removeInputId: function(e3) {
    Y2.value = B(Y2.value, (r2) => r2 != e3);
  } });
  return v(() => {
    P2.prop && (J2 == null ? void 0 : J2.addField(me), de = te2.value);
  }), p(() => {
    P2.prop && (J2 == null ? void 0 : J2.removeField(me));
  }), f(() => me.disabled = ie.value), m(() => P2.error, (e3) => {
    T2.value = e3 || "", Q2.value = e3 ? "error" : "init";
  }, { immediate: true }), t(N, me), w2({ validateMessage: T2, validateStatus: Q2, validate: ve, resetField: pe, clearValidate: fe }), (r2, a2) => {
    var _a, _b, _c, _d;
    return l(), s("div", { class: b(["er-form-item", { "is-error": "error" === Q2.value, "is-disabled": ie.value, "is-required": oe.value, "asterisk-left": "left" === ((_a = h(J2)) == null ? void 0 : _a.requiredAsteriskPosition), "asterisk-right": "right" === ((_b = h(J2)) == null ? void 0 : _b.requiredAsteriskPosition) }]) }, [ee2.value ? (l(), g(y(re2.value ? "label" : "div"), { key: 0, class: b(["er-form-item__label", `position-${((_c = h(J2)) == null ? void 0 : _c.labelPosition) ?? "right"}`]), id: h(K2), for: re2.value }, { default: I(() => [o(r2.$slots, "label", { label: ae2.value }, () => [q(F(ae2.value), 1)], true)]), _: 3 }, 8, ["class", "id", "for"])) : _("", true), k("div", U, [o(r2.$slots, "default", { validate: ve }, void 0, true), "error" === Q2.value ? (l(), s("div", X, [((_d = h(J2)) == null ? void 0 : _d.showMessage) && e2.showMessage ? o(r2.$slots, "error", { key: 0, error: T2.value }, () => [q(F(T2.value), 1)], true) : _("", true)])) : _("", true)])], 2);
  };
} }), [["__scopeId", "data-v-21986c98"]]);
function Z() {
  return { form: n(L, void 0), formItem: n(N, void 0) };
}
function ee(e2) {
  const r2 = P("disabled"), a2 = n(L, void 0), t2 = n(N, void 0);
  return c(() => r2.value || h(e2) || (a2 == null ? void 0 : a2.disabled) || (t2 == null ? void 0 : t2.disabled) || false);
}
function re(e2, r2) {
  const a2 = d("");
  let t2;
  return v(() => {
    t2 = m(w(() => e2.id), (e3) => {
      const t3 = e3 ?? j().value;
      t3 !== a2.value && (a2.value && (r2 == null ? void 0 : r2.removeInputId(a2.value)), r2 == null ? void 0 : r2.addInputId(t3), a2.value = t3);
    }, { immediate: true });
  }), p(() => {
    t2 && t2(), a2.value && (r2 == null ? void 0 : r2.removeInputId(a2.value));
  }), { inputId: a2 };
}
const ae = K(T), te = K(Y);
export {
  ae as E,
  Z as a,
  re as b,
  te as c,
  ee as u
};
