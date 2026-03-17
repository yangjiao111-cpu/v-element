import { defineComponent as e, ref as a, shallowRef as o, computed as l, useAttrs as s, watch as t, openBlock as u, createElementBlock as r, normalizeClass as p, unref as n, Fragment as i, renderSlot as d, createCommentVNode as c, createElementVNode as f, withDirectives as v, mergeProps as m, vModelDynamic as y, createBlock as _, withModifiers as h, vModelText as x, nextTick as k } from "vue";
import { u as w, a as $, b } from "./Form-DMHHzayW.js";
import { d as B, _ as V } from "./utils-B2WdIr7B.js";
import { h as I } from "./hooks-OP8606-a.js";
import { E as g } from "./Icon-nki9Ukht.js";
import { D as j, f as C } from "./vendor-f3c6mRls.js";
const F = { key: 0, class: "er-input__prepend" }, R = { key: 0, class: "er-input__prefix" }, z = ["id", "type", "disabled", "readonly", "autocomplete", "placeholder", "autofocus", "form"], E = { key: 1, class: "er-input__suffix" }, P = { key: 1, class: "er-input__append" }, M = ["id", "disabled", "readonly", "autocomplete", "placeholder", "autofocus", "form"], U = V(e({ name: "ErInput", inheritAttrs: false, __name: "Input", props: { id: {}, modelValue: {}, type: { default: "text" }, size: {}, disabled: { type: Boolean }, clearable: { type: Boolean }, showPassword: { type: Boolean }, placeholder: {}, readonly: { type: Boolean }, autocomplete: { default: "off" }, autofocus: { type: Boolean }, form: {} }, emits: ["update:modelValue", "input", "change", "focus", "blur", "clear"], setup(e2, { expose: V2, emit: U2 }) {
  const A = e2, D = U2, q = a(A.modelValue), G = a(false), H = o(), J = o(), K = l(() => A.clearable && !!q.value && !Q.value && X.value), L = l(() => "password" === A.type && A.showPassword && !Q.value && !!q.value), N = l(() => H.value || J.value), O = s(), Q = w(), { formItem: S } = $(), { inputId: T } = b(A, S), { wrapperRef: W, isFocused: X, handleFocus: Y, handleBlur: Z } = I(N, { afterBlur() {
    S == null ? void 0 : S.validate("blur").catch((e3) => B(e3));
  } }), ee = function() {
    q.value = "", C(["update:modelValue", "input", "change"], (e3) => D(e3, "")), D("clear"), S == null ? void 0 : S.clearValidate();
  };
  function ae() {
    D("update:modelValue", q.value), D("input", q.value);
  }
  function oe() {
    D("change", q.value);
  }
  function le() {
    G.value = !G.value;
  }
  return t(() => A.modelValue, (e3) => {
    q.value = e3, S == null ? void 0 : S.validate("change").catch((e4) => B(e4));
  }), V2({ ref: N, focus: async function() {
    var _a;
    await k(), (_a = N.value) == null ? void 0 : _a.focus();
  }, blur: function() {
    var _a;
    (_a = N.value) == null ? void 0 : _a.blur();
  }, select: function() {
    var _a;
    (_a = N.value) == null ? void 0 : _a.select();
  }, clear: ee }), (a2, o2) => (u(), r("div", { class: p(["er-input", { [`er-input--${e2.type}`]: e2.type, [`er-input--${e2.size}`]: e2.size, "is-disabled": n(Q), "is-prepend": a2.$slots.prepend, "is-append": a2.$slots.append, "is-prefix": a2.$slots.prefix, "is-suffix": a2.$slots.suffix, "is-focus": n(X) }]) }, ["textarea" !== e2.type ? (u(), r(i, { key: 0 }, [a2.$slots.prepend ? (u(), r("div", F, [d(a2.$slots, "prepend", {}, void 0, true)])) : c("", true), f("div", { class: "er-input__wrapper", ref_key: "wrapperRef", ref: W }, [a2.$slots.prefix ? (u(), r("span", R, [d(a2.$slots, "prefix", {}, void 0, true)])) : c("", true), v(f("input", m({ class: "er-input__inner", ref_key: "inputRef", ref: H, id: n(T), type: e2.showPassword ? G.value ? "text" : "password" : e2.type, disabled: n(Q), readonly: e2.readonly, autocomplete: e2.autocomplete, placeholder: e2.placeholder, autofocus: e2.autofocus, form: e2.form, "onUpdate:modelValue": o2[0] || (o2[0] = (e3) => q.value = e3) }, n(O), { onInput: ae, onChange: oe, onFocus: o2[1] || (o2[1] = (...e3) => n(Y) && n(Y)(...e3)), onBlur: o2[2] || (o2[2] = (...e3) => n(Z) && n(Z)(...e3)) }), null, 16, z), [[y, q.value]]), a2.$slots.suffix || K.value || L.value ? (u(), r("span", E, [d(a2.$slots, "suffix", {}, void 0, true), K.value ? (u(), _(g, { key: 0, icon: "circle-xmark", class: "er-input__clear", onClick: ee, onMousedown: h(n(j), ["prevent"]) }, null, 8, ["onMousedown"])) : c("", true), L.value && G.value ? (u(), _(g, { key: 1, icon: "eye", class: "er-input__password", onClick: le })) : c("", true), L.value && !G.value ? (u(), _(g, { key: 2, icon: "eye-slash", class: "er-input__password", onClick: le })) : c("", true)])) : c("", true)], 512), a2.$slots.append ? (u(), r("div", P, [d(a2.$slots, "append", {}, void 0, true)])) : c("", true)], 64)) : v((u(), r("textarea", m({ key: 1, class: "er-textarea__wrapper", ref_key: "textareaRef", ref: J, id: n(T), disabled: n(Q), readonly: e2.readonly, autocomplete: e2.autocomplete, placeholder: e2.placeholder, autofocus: e2.autofocus, form: e2.form, "onUpdate:modelValue": o2[3] || (o2[3] = (e3) => q.value = e3) }, n(O), { onInput: ae, onChange: oe, onFocus: o2[4] || (o2[4] = (...e3) => n(Y) && n(Y)(...e3)), onBlur: o2[5] || (o2[5] = (...e3) => n(Z) && n(Z)(...e3)) }), null, 16, M)), [[x, q.value]])], 2));
} }), [["__scopeId", "data-v-6934c739"]]);
export {
  U as E
};
