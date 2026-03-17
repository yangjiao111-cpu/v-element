import { defineComponent as e, inject as l, computed as a, openBlock as t, createElementBlock as o, withModifiers as n, normalizeClass as i, renderSlot as s, createVNode as u, unref as d, ref as r, reactive as c, useSlots as p, h, watch as v, onMounted as f, provide as m, withCtx as b, Fragment as g, renderList as y, createBlock as _, mergeProps as V, createElementVNode as I, nextTick as x } from "vue";
import { R as k, _ as w, d as M, w as O } from "./utils-B2WdIr7B.js";
import { h as S, u as E } from "./hooks-OP8606-a.js";
import { u as L, a as j, b as B } from "./Form-DMHHzayW.js";
import { E as D } from "./Tooltip-BNCybFQR.js";
import { E as F } from "./Icon-nki9Ukht.js";
import { E as N } from "./Input-DHDV8x3e.js";
import { E as R, F as C, q as H, w as W, v as $, y as q, d as z, k as A, G as U, h as G, H as K, f as P, D as T, b as J, x as Q } from "./vendor-f3c6mRls.js";
const X = Symbol("selectContext"), Y = { modifiers: [{ name: "offset", options: { offset: [0, 9] } }, { name: "sameWidth", enabled: true, fn: ({ state: e2 }) => {
  e2.styles.popper.width = `${e2.rects.reference.width}px`;
}, phase: "beforeWrite", requires: ["computeStyles"] }] }, Z = ["id"], ee = w(e({ name: "ErOption", __name: "Option", props: { value: {}, label: {}, disabled: { type: Boolean, default: false } }, setup(e2) {
  const r2 = e2, c2 = l(X), p2 = a(() => {
    var _a, _b;
    return ((_b = (_a = c2 == null ? void 0 : c2.selectStates) == null ? void 0 : _a.selectedOption) == null ? void 0 : _b.value) === r2.value;
  }), h2 = a(() => R(["label", "value"], (e3) => C(H(c2, ["highlightedLine", "value", e3]), H(r2, e3))));
  function v2() {
    r2.disabled || (c2 == null ? void 0 : c2.handleSelect(r2));
  }
  return (l2, a2) => (t(), o("li", { class: i(["er-select__menu-item", { "is-disabled": e2.disabled, "is-selected": p2.value, "is-highlighted": h2.value }]), id: `select-item-${e2.value}`, onClick: n(v2, ["stop"]) }, [s(l2.$slots, "default", {}, () => {
    var _a, _b;
    return [u(d(k), { vNode: ((_a = d(c2)) == null ? void 0 : _a.renderLabel) ? (_b = d(c2)) == null ? void 0 : _b.renderLabel(r2) : e2.label }, null, 8, ["vNode"])];
  }, true)], 10, Z));
} }), [["__scopeId", "data-v-f633aeff"]]), le = { key: 0, class: "er-select__loading" }, ae = { key: 1, class: "er-select__nodata" }, te = { key: 2, class: "er-select__menu" }, oe = "ErSelect", ne = O(w(e({ name: oe, __name: "Select", props: { modelValue: {}, id: {}, options: { default: () => [] }, placeholder: {}, disabled: { type: Boolean }, clearable: { type: Boolean }, renderLabel: {}, filterable: { type: Boolean }, filterMethod: {}, remote: { type: Boolean }, remoteMethod: {} }, emits: ["update:modelValue", "change", "visible-change", "clear", "focus", "blur"], setup(e2, { expose: l2, emit: s2 }) {
  const w2 = e2, O2 = s2, R2 = Fe(w2.modelValue), Z2 = r(), ne2 = r(), ie2 = r(), se = r(false), ue = r(w2.options ?? []), de = r(/* @__PURE__ */ new Map()), re = c({ inputValue: (R2 == null ? void 0 : R2.label) ?? "", selectedOption: R2, mouseHover: false, loading: false, highlightedIndex: -1 }), ce = p(), pe = L(), { formItem: he } = j(), { inputId: ve } = B(w2, he), { wrapperRef: fe, isFocused: me, handleBlur: be, handleFocus: ge } = S(ie2);
  E(Z2, (e3) => Ne(e3));
  const ye = a(() => {
    var _a;
    let e3;
    if (Ve.value) {
      const l3 = (_a = [...de.value][re.highlightedIndex]) == null ? void 0 : _a[0];
      e3 = de.value.get(l3);
    } else e3 = ue.value[re.highlightedIndex];
    return e3;
  }), _e = a(() => {
    var _a;
    return W((_a = ce == null ? void 0 : ce.default) == null ? void 0 : _a.call(ce), (e3) => C(e3.type, ee));
  }), Ve = a(() => $(_e.value) > 0), Ie = a(() => Ve.value ? q(_e.value, (e3) => {
    var _a, _b, _c;
    return { vNode: h(e3), props: z(e3.props, { disabled: true === ((_a = e3.props) == null ? void 0 : _a.disabled) || !A((_b = e3.props) == null ? void 0 : _b.disabled) && !U((_c = e3.props) == null ? void 0 : _c.disabled) }) };
  }) : []), xe = a(() => w2.filterable && re.selectedOption && se.value ? re.selectedOption.label : w2.placeholder), ke = a(() => w2.remote ? 300 : 0), we = a(() => Ve.value && de.value.size > 0 || !Ve.value && $(ue.value) > 0), Me = a(() => !!w2.filterable && !we.value), Oe = a(() => Ve.value ? de.value.size - 1 : $(ue.value) - 1), Se = a(() => w2.clearable && re.mouseHover && "" !== re.inputValue), Ee = G(function() {
    const e3 = re.inputValue;
    re.highlightedIndex = -1, Ve.value ? async function(e4) {
      if (w2.filterable) {
        if (w2.remote && w2.remoteMethod && J(w2.remoteMethod)) return await We(w2.remoteMethod, e4), void je(Ie.value);
        if (w2.filterMethod && J(w2.filterMethod)) {
          const l3 = q(w2.filterMethod(e4), "value");
          return void je(W(Ie.value, (e5) => Q(l3, H(e5, ["props", "value"]))));
        }
        je(W(Ie.value, (l3) => Q(H(l3, ["props", "label"]), e4)));
      }
    }(e3) : async function(e4) {
      w2.filterable && (w2.remote && w2.remoteMethod && J(w2.remoteMethod) ? ue.value = await We(w2.remoteMethod, e4) : w2.filterMethod && J(w2.filterMethod) ? ue.value = w2.filterMethod(e4) : ue.value = W(w2.options, (l3) => Q(l3.label, e4)));
    }(e3);
  }, ke.value), Le = function({ isDropdownVisible: e3, controlVisible: l3, selectStates: a2, highlightedLine: t2, handleSelect: o2, hasData: n2, lastIndex: i2 }) {
    const s3 = /* @__PURE__ */ new Map();
    return s3.set("Enter", () => {
      e3.value ? a2.highlightedIndex >= 0 && t2.value ? o2(t2.value) : l3(false) : l3(true);
    }), s3.set("Escape", () => e3.value && l3(!e3.value)), s3.set("ArrowUp", (e4) => {
      e4.preventDefault(), n2.value && (-1 !== a2.highlightedIndex && 0 !== a2.highlightedIndex ? a2.highlightedIndex-- : a2.highlightedIndex = i2.value);
    }), s3.set("ArrowDown", (e4) => {
      e4.preventDefault(), n2.value && (-1 !== a2.highlightedIndex && a2.highlightedIndex !== i2.value ? a2.highlightedIndex++ : a2.highlightedIndex = 0);
    }), s3;
  }({ isDropdownVisible: se, controlVisible: Be, selectStates: re, highlightedLine: ye, handleSelect: Re, hasData: we, lastIndex: Oe });
  function je(e3) {
    de.value.clear(), P(e3, (e4) => {
      de.value.set(e4.vNode, e4.props);
    });
  }
  function Be(e3) {
    var _a;
    ne2.value && ((_a = H(ne2, ["value", e3 ? "show" : "hide"])) == null ? void 0 : _a(), w2.filterable && function(e4) {
      var _a2;
      w2.filterable && (e4 ? (re.selectedOption && (re.inputValue = ""), Ee()) : re.inputValue = ((_a2 = re.selectedOption) == null ? void 0 : _a2.label) || "");
    }(e3), se.value = e3, O2("visible-change", e3), re.highlightedIndex = -1);
  }
  function De() {
    pe.value || Be(!se.value);
  }
  function Fe(e3) {
    return K(w2.options, (l3) => l3.value === e3);
  }
  function Ne(e3) {
    me.value && x(() => be(new FocusEvent("focus", e3)));
  }
  function Re(e3) {
    var _a;
    e3.disabled || (re.inputValue = e3.label, re.selectedOption = e3, P(["change", "update:modelValue"], (l3) => O2(l3, e3.value)), Be(false), (_a = ie2.value) == null ? void 0 : _a.focus());
  }
  function Ce() {
    const e3 = Fe(w2.modelValue);
    e3 && (re.inputValue = e3.label, re.selectedOption = e3);
  }
  function He() {
    var _a;
    (_a = ie2.value) == null ? void 0 : _a.clear(), re.inputValue = "", re.selectedOption = null, O2("clear"), P(["change", "update:modelValue"], (e3) => O2(e3, "")), he == null ? void 0 : he.clearValidate();
  }
  async function We(e3, l3) {
    if (!e3 || !J(e3)) return;
    let a2;
    re.loading = true;
    try {
      a2 = await e3(l3);
    } catch (e4) {
      return M(e4), M(oe, "callRemoteMethod error"), a2 = [], Promise.reject(e4);
    } finally {
      re.loading = false;
    }
    return a2;
  }
  function $e(e3) {
    var _a;
    Le.has(e3.key) && ((_a = Le.get(e3.key)) == null ? void 0 : _a(e3));
  }
  return v(() => w2.options, (e3) => {
    ue.value = e3 ?? [];
  }), v(() => Ie.value, (e3) => je(e3), { immediate: true }), v(() => w2.modelValue, (e3, l3) => {
    e3 !== l3 && (he == null ? void 0 : he.validate("change").catch((e4) => M(e4))), Ce();
  }), f(() => {
    Ce();
  }), m(X, { handleSelect: Re, selectStates: re, renderLabel: function(e3) {
    return J(w2.renderLabel) ? w2.renderLabel(e3) : e3.label;
  }, highlightedLine: ye }), l2({ focus: function() {
    var _a;
    (_a = ie2.value) == null ? void 0 : _a.focus();
  }, blur: function() {
    Ne();
  } }), (l3, a2) => (t(), o("div", { ref_key: "selectRef", ref: Z2, class: i(["er-select", { "is-disabled": d(pe) }]), onClick: n(De, ["stop"]), onMouseenter: a2[2] || (a2[2] = (e3) => re.mouseHover = true), onMouseleave: a2[3] || (a2[3] = (e3) => re.mouseHover = false) }, [u(D, { ref_key: "tooltipRef", ref: ne2, placement: "bottom-start", "popper-options": d(Y), onClickOutside: a2[1] || (a2[1] = (e3) => Be(false)), manual: "" }, { default: b(() => [I("div", { ref_key: "inputWrapperRef", ref: fe }, [u(N, { ref_key: "inputRef", ref: ie2, modelValue: re.inputValue, "onUpdate:modelValue": a2[0] || (a2[0] = (e3) => re.inputValue = e3), id: d(ve), disabled: d(pe), placeholder: e2.filterable ? xe.value : e2.placeholder, readonly: !e2.filterable || !se.value, onFocus: d(ge), onBlur: d(be), onInput: d(Ee), onKeydown: $e }, { suffix: b(() => [Se.value ? (t(), _(F, { key: 0, icon: "circle-xmark", class: "er-input__clear", onClick: n(He, ["stop"]), onMousedown: n(d(T), ["prevent"]) }, null, 8, ["onMousedown"])) : (t(), _(F, { key: 1, class: i(["header-angle", { "is-active": se.value }]), icon: "angle-down" }, null, 8, ["class"]))]), _: 1 }, 8, ["modelValue", "id", "disabled", "placeholder", "readonly", "onFocus", "onBlur", "onInput"])], 512)]), content: b(() => [re.loading ? (t(), o("div", le, [u(F, { icon: "spinner", spin: "" })])) : e2.filterable && Me.value ? (t(), o("div", ae, " No data ")) : (t(), o("ul", te, [Ve.value ? (t(true), o(g, { key: 1 }, y(de.value, ([e3, l4]) => (t(), _(d(k), { key: l4.value, vNode: e3 }, null, 8, ["vNode"]))), 128)) : (t(true), o(g, { key: 0 }, y(ue.value, (e3) => (t(), _(ee, V({ key: e3.value }, { ref_for: true }, e3), null, 16))), 128))]))]), _: 1 }, 8, ["popper-options"])], 34));
} }), [["__scopeId", "data-v-eef90474"]])), ie = O(ee);
export {
  ne as E,
  ie as a
};
