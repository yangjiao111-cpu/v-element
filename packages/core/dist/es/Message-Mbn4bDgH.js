import { defineComponent as e, ref as o, computed as t, onMounted as n, watch as s, openBlock as a, createBlock as l, Transition as r, withCtx as c, withDirectives as i, createElementVNode as u, normalizeStyle as d, normalizeClass as p, createVNode as f, renderSlot as m, unref as y, createCommentVNode as g, createElementBlock as v, withModifiers as b, vShow as x, shallowReactive as _, isVNode as B, h, render as C, reactive as k, nextTick as w, createTextVNode as I, toDisplayString as T, resolveDynamicComponent as E, withKeys as $ } from "vue";
import { d as j, e as z, f as M, b as O } from "./hooks-BFQBeDsw.js";
import { t as P, R as A, _ as L, b as V } from "./utils-DiswYszl.js";
import { E as D } from "./Icon-BX-aiFSd.js";
import { j as R, l as N, f as K, i as S, p as Z, q, s as H, k as U, b as F, d as G, r as J, u as Q } from "./vendor-D30j_OjZ.js";
import { E as W } from "./Overlay-Cqho992x.js";
import { E as X } from "./Button-Dlckw9Te.js";
import { E as Y } from "./Input-Bg_z9P2U.js";
const ee = ["info", "success", "warning", "danger", "error"], oe = { class: "er-message__content" }, te = { key: 0, class: "er-message__close" }, ne = L(e({ name: "ErMessage", __name: "Message", props: { id: {}, message: {}, duration: { default: 3e3 }, showClose: { type: Boolean }, center: { type: Boolean }, type: { default: "info" }, offset: { default: 10 }, zIndex: {}, transitionName: { default: "fade-up" }, onDestory: {} }, setup(e2, { expose: _2 }) {
  const B2 = e2, h2 = o(false), C2 = o(), k2 = t(() => P.get(B2.type) ?? "circle-info"), w2 = o(0), { topOffset: I2, bottomOffset: T2 } = j({ getLastBottomOffset: R(ie, B2), offset: B2.offset, boxHeight: w2 }), E2 = t(() => ({ top: I2.value + "px", zIndex: B2.zIndex }));
  let $2;
  function M2() {
    0 !== B2.duration && ($2 = N(L2, B2.duration));
  }
  function O2() {
    clearTimeout($2);
  }
  function L2() {
    h2.value = false;
  }
  return n(() => {
    h2.value = true, M2();
  }), z(document, "keydown", (e3) => {
    const { code: o2 } = e3;
    "Escape" === o2 && L2();
  }), s(h2, (e3) => {
    e3 || (w2.value = -B2.offset);
  }), _2({ bottomOffset: T2, close: L2 }), (o2, t2) => (a(), l(r, { name: e2.transitionName, onEnter: t2[0] || (t2[0] = (e3) => w2.value = C2.value.getBoundingClientRect().height), onAfterLeave: t2[1] || (t2[1] = (o3) => !h2.value && e2.onDestory()) }, { default: c(() => [i(u("div", { ref_key: "messageRef", ref: C2, class: p(["er-message", { [`er-message--${e2.type}`]: e2.type, "is-close": e2.showClose, "text-center": e2.center }]), style: d(E2.value), role: "alert", onMouseenter: O2, onMouseleave: M2 }, [f(D, { class: "er-message__icon", icon: k2.value }, null, 8, ["icon"]), u("div", oe, [m(o2.$slots, "default", {}, () => [e2.message ? (a(), l(y(A), { key: 0, vNode: e2.message }, null, 8, ["vNode"])) : g("", true)], true)]), e2.showClose ? (a(), v("div", te, [f(D, { icon: "xmark", onClick: b(L2, ["stop"]) })])) : g("", true)], 38), [[x, h2.value]])]), _: 3 }, 8, ["name"]));
} }), [["__scopeId", "data-v-3588295f"]]), se = _([]), { nextZIndex: ae } = M(), le = { type: "info", duration: 3e3, offset: 10, transitionName: "fade-up" };
function re(e2) {
  const o2 = !e2 || B(e2) || S(e2) ? { message: e2 } : e2;
  return { ...le, ...o2 };
}
const ce = function(e2 = {}) {
  return function(e3) {
    const o2 = O().value, t2 = document.createElement("div"), n2 = { ...e3, id: o2, zIndex: ae(), onDestory: () => {
      const e4 = Z(se, { id: o2 });
      -1 !== e4 && (se.splice(e4, 1), C(null, t2));
    } }, s2 = h(ne, n2);
    C(s2, t2), document.body.appendChild(t2.firstElementChild);
    const a2 = s2.component, l2 = { close: () => a2.exposed.close() }, r2 = { props: n2, id: o2, vm: a2, vnode: s2, handler: l2 };
    return se.push(r2), r2;
  }(re(e2)).handler;
};
function ie() {
  const e2 = Z(se, { id: this.id });
  return e2 <= 0 ? 0 : q(se, [e2 - 1, "vm", "exposed", "bottomOffset", "value"]);
}
K(ee, (e2) => H(ce, e2, (o2) => {
  const t2 = re(o2);
  return ce({ ...t2, type: e2 });
})), ce.closeAll = function(e2) {
  K(se, (o2) => {
    e2 ? o2.props.type === e2 && o2.handler.close() : o2.handler.close();
  });
};
const ue = V(ce, "$message"), de = { class: "er-message-box__title" }, pe = { class: "er-message-box__content" }, fe = { key: 1, class: "er-message-box__message" }, me = { class: "er-message-box__input" }, ye = { class: "er-message-box__footer" }, ge = e({ name: "ErMessageBox", inheritAttrs: false, __name: "MessageBox", props: { visible: {}, doClose: {}, doAction: {}, destroy: {}, title: {}, message: {}, type: {}, boxType: { default: "" }, icon: {}, callback: {}, showClose: { type: Boolean, default: true }, showInput: { type: Boolean }, showCancelButton: { type: Boolean }, showConfirmButton: { type: Boolean, default: true }, cancelButtonText: { default: "Cancel" }, confirmButtonText: { default: "Ok" }, cancelButtonLoading: { type: Boolean }, confirmButtonLoading: { type: Boolean }, cancelButtonDisabled: { type: Boolean }, confirmButtonDisabled: { type: Boolean }, cancelButtonType: {}, confirmButtonType: { default: "primary" }, roundButton: { type: Boolean, default: false }, center: { type: Boolean }, lockScroll: { type: Boolean, default: true }, closeOnClickModal: { type: Boolean, default: true }, inputPlaceholder: { default: "Please input..." }, inputValue: { default: "" }, inputType: {}, buttonSize: {}, beforeClose: {} }, setup(e2) {
  const n2 = e2, { doAction: d2 } = n2, _2 = o(), B2 = o(), h2 = O(), { nextZIndex: C2 } = M(), j2 = k({ ...n2, zIndex: C2() }), z2 = t(() => !!j2.message), A2 = t(() => j2.icon ?? P.get(j2.type ?? ""));
  function L2() {
    n2.closeOnClickModal && R2("close");
  }
  function V2(e3) {
    if ("textarea" !== j2.inputType) return e3.preventDefault(), R2("confirm");
  }
  function R2(e3) {
    F(n2.beforeClose) ? n2.beforeClose(e3, j2, () => d2(e3, j2.inputValue)) : d2(e3, j2.inputValue);
  }
  function N2() {
    R2("close");
  }
  return s(() => {
    var _a;
    return (_a = n2.visible) == null ? void 0 : _a.value;
  }, (e3) => {
    e3 && (j2.zIndex = C2()), "prompt" === n2.boxType && e3 && w(() => {
      B2.value && B2.value.focus();
    });
  }), (o2, t2) => (a(), l(r, { name: "fade-in-linear", onAfterLeave: e2.destroy }, { default: c(() => [i(f(W, { "z-index": j2.zIndex, mask: "" }, { default: c(() => [u("div", { role: "dialog", class: "er-overlay-message-box", onClick: L2 }, [u("div", { ref: "rootRef", class: p(["er-message-box", { "is-center": j2.center }]), onClick: t2[5] || (t2[5] = b(() => {
  }, ["stop"])) }, [y(U)(j2.title) ? g("", true) : (a(), v("div", { key: 0, ref_key: "headerRef", ref: _2, class: p(["er-message-box__header", { "show-close": j2.showClose }]) }, [u("div", de, [A2.value && j2.center ? (a(), l(D, { key: 0, class: p({ [`er-icon-${j2.type}`]: j2.type }), icon: A2.value }, null, 8, ["class", "icon"])) : g("", true), I(" " + T(j2.title), 1)]), e2.showClose ? (a(), v("button", { key: 0, class: "er-message-box__header-btn", onClick: b(N2, ["stop"]) }, [f(D, { icon: "xmark" })])) : g("", true)], 2)), u("div", pe, [A2.value && !j2.center && z2.value ? (a(), l(D, { key: 0, class: p({ [`er-icon-${j2.type}`]: j2.type }), icon: A2.value }, null, 8, ["class", "icon"])) : g("", true), z2.value ? (a(), v("div", fe, [m(o2.$slots, "default", {}, () => [(a(), l(E(j2.showInput ? "label" : "p"), { for: j2.showInput ? y(h2) : void 0 }, { default: c(() => [I(T(j2.message), 1)]), _: 1 }, 8, ["for"]))], true)])) : g("", true)]), i(u("div", me, [f(Y, { modelValue: j2.inputValue, "onUpdate:modelValue": t2[0] || (t2[0] = (e3) => j2.inputValue = e3), ref_key: "inputRef", ref: B2, placeholder: j2.inputPlaceholder, type: j2.inputType, onKeyup: $(V2, ["enter"]) }, null, 8, ["modelValue", "placeholder", "type"])], 512), [[x, j2.showInput]]), u("div", ye, [j2.showCancelButton ? (a(), l(X, { key: 0, class: "er-message-box__footer-btn er-message-box__cancel-btn", type: j2.cancelButtonType, round: j2.roundButton, loading: j2.cancelButtonLoading, onClick: t2[1] || (t2[1] = (e3) => R2("cancel")), onKeydown: t2[2] || (t2[2] = $(b((e3) => R2("cancel"), ["prevent"]), ["enter"])) }, { default: c(() => [I(T(j2.cancelButtonText), 1)]), _: 1 }, 8, ["type", "round", "loading"])) : g("", true), i(f(X, { class: "er-message-box__footer-btn er-message-box__confirm-btn", type: j2.confirmButtonType ?? "primary", round: j2.roundButton, loading: j2.confirmButtonLoading, onClick: t2[3] || (t2[3] = (e3) => R2("confirm")), onKeydown: t2[4] || (t2[4] = $(b((e3) => R2("confirm"), ["prevent"]), ["enter"])) }, { default: c(() => [I(T(j2.confirmButtonText), 1)]), _: 1 }, 8, ["type", "round", "loading"]), [[x, j2.showConfirmButton]])])], 2)])]), _: 3 }, 8, ["z-index"]), [[x, e2.visible.value]])]), _: 3 }, 8, ["onAfterLeave"]));
} }), ve = L(ge, [["__scopeId", "data-v-57af638e"]]), be = /* @__PURE__ */ new Map();
function xe(e2) {
  let t2;
  return S(e2) || B(e2) ? e2 = { message: e2 } : t2 = e2.callback, new Promise((n2, s2) => {
    const a2 = function(e3) {
      const t3 = document.createElement("div"), n3 = function(e4, t4) {
        const n4 = o(false), s4 = F(e4 == null ? void 0 : e4.message) || B(e4 == null ? void 0 : e4.message), a3 = f(ve, { ...e4, visible: n4 }, s4 ? { default: ((e5) => F(e5) ? e5 : () => e5)(e4.message) } : void 0);
        return C(a3, t4), document.body.appendChild(t4.firstElementChild), a3.component;
      }({ ...e3, doClose: () => {
        s3.visible.value = false;
      }, doAction: (o2, t4) => {
        const n4 = be.get(s3);
        let a3;
        w(() => s3.doClose()), a3 = e3.showInput ? { value: t4, action: o2 } : o2, e3.callback ? e3.callback(a3) : "cancel" !== o2 && "close" !== o2 ? n4 == null ? void 0 : n4.resolve(a3) : n4 == null ? void 0 : n4.reject(o2);
      }, destroy: () => {
        C(null, t3), be.delete(s3);
      } }, t3), s3 = n3 == null ? void 0 : n3.proxy;
      return s3.visible.value = true, s3;
    }(e2);
    be.set(a2, { options: e2, callback: t2, resolve: n2, reject: s2 });
  });
}
const _e = { alert: { closeOnClickModal: false }, confirm: { showCancelButton: true }, prompt: { showCancelButton: true, showInput: true } };
K(["alert", "confirm", "prompt"], (e2) => {
  return H(xe, e2, (o2 = e2, (e3, t2, n2) => {
    let s2 = "";
    return J(t2) ? (n2 = t2, s2 = "") : s2 = Q(t2) ? "" : t2, xe(G({ title: s2, message: e3, type: "", boxType: o2, ..._e[o2] }, n2));
  }));
  var o2;
}), H(xe, "close", () => {
  be.forEach((e2, o2) => {
    o2.doClose();
  }), be.clear();
});
const Be = xe;
H(Be, "install", (e2) => {
  e2.config.globalProperties.$msgbox = xe, e2.config.globalProperties.$messageBox = xe, e2.config.globalProperties.$alert = xe.alert, e2.config.globalProperties.$confirm = xe.confirm, e2.config.globalProperties.$prompt = xe.prompt;
});
export {
  ue as E,
  Be as a,
  ee as m
};
