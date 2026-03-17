import { defineComponent as e, computed as a, ref as i, onMounted as t, watch as c, openBlock as l, createElementBlock as s, normalizeClass as n, createElementVNode as u, withKeys as o, unref as r, toDisplayString as d, createCommentVNode as v } from "vue";
import { b as h } from "./hooks-OP8606-a.js";
import { w as m } from "./utils-B2WdIr7B.js";
const p = ["id", "name", "disabled", "checked"], f = { class: "er-switch__core" }, _ = { class: "er-switch__core-inner" }, w = { key: 0, class: "er-switch__core-inner-text" }, k = m(e({ name: "ErSwitch", inheritAttrs: false, __name: "Switch", props: { modelValue: { type: [Boolean, String, Number] }, disabled: { type: Boolean }, activeText: {}, inactiveText: {}, activeValue: { type: [Boolean, String, Number], default: true }, inactiveValue: { type: [Boolean, String, Number], default: false }, name: {}, id: {}, size: {} }, emits: ["update:modelValue", "change"], setup(e2, { expose: m2, emit: k2 }) {
  const b = e2, x = k2, V = a(() => b.disabled), y = i(b.modelValue), T = i(), g = h().value, S = a(() => y.value === b.activeValue);
  function B() {
    if (V.value) return;
    const e3 = S.value ? b.inactiveValue : b.activeValue;
    y.value = e3, x("update:modelValue", e3), x("change", e3);
  }
  return t(() => {
    T.value.checked = S.value;
  }), c(S, (e3) => {
    T.value.checked = e3;
  }), m2({ checked: S, focus: function() {
    var _a;
    (_a = T.value) == null ? void 0 : _a.focus();
  } }), (a2, i2) => (l(), s("div", { class: n(["er-switch", { [`er-switch--${e2.size}`]: e2.size, "is-disabled": V.value, "is-checked": S.value }]), onClick: B }, [u("input", { class: "er-switch__input", type: "checkbox", role: "switch", ref_key: "inputRef", ref: T, id: r(g), name: e2.name, disabled: V.value, checked: S.value, onKeydown: o(B, ["enter"]) }, null, 40, p), u("div", f, [u("div", _, [e2.activeText || e2.inactiveText ? (l(), s("span", w, d(S.value ? e2.activeText : e2.inactiveText), 1)) : v("", true)]), i2[0] || (i2[0] = u("div", { class: "er-switch__core-action" }, null, -1))])], 2));
} }));
export {
  k as E
};
