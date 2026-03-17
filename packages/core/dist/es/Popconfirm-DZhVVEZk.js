import { defineComponent as o, ref as e, computed as t, resolveComponent as n, openBlock as i, createBlock as c, createSlots as r, withCtx as l, createElementVNode as a, normalizeStyle as f, createCommentVNode as s, createTextVNode as m, toDisplayString as p, createVNode as u, unref as d, renderSlot as _ } from "vue";
import { E as y } from "./Tooltip-BNCybFQR.js";
import { E as B } from "./Button-DzCA7Y0N.js";
import { a as h, _ as v, w as T } from "./utils-B2WdIr7B.js";
import { a as k } from "./hooks-OP8606-a.js";
const x = { class: "er-popconfirm__main" }, j = { class: "er-popconfirm__action" }, w = T(v(o({ name: "ErPopconfirm", __name: "Popconfirm", props: { title: { default: "" }, confirmButtonText: {}, cancelButtonText: {}, confirmButtonType: { default: "primary" }, cancelButtonType: {}, icon: { default: "question-circle" }, iconColor: { default: "#f90" }, hideIcon: { type: Boolean }, hideAfter: { default: 200 }, width: { default: 150 } }, emits: ["confirm", "cancel"], setup(o2, { emit: v2 }) {
  const T2 = o2, w2 = e(), C = t(() => ({ width: h(T2.width) })), E = v2, { t: $ } = k();
  function I() {
    var _a;
    (_a = w2.value) == null ? void 0 : _a.hide();
  }
  function g(o3) {
    E("confirm", o3), I();
  }
  function z(o3) {
    E("cancel", o3), I();
  }
  return (e2, t2) => {
    const h2 = n("er-icon");
    return i(), c(y, { ref_key: "tooltipRef", ref: w2, trigger: "click", "hide-timeout": o2.hideAfter }, r({ content: l(() => [a("div", { class: "er-popconfirm", style: f(C.value) }, [a("div", x, [!o2.hideIcon && o2.icon ? (i(), c(h2, { key: 0, icon: o2.icon, color: o2.iconColor }, null, 8, ["icon", "color"])) : s("", true), m(" " + p(o2.title), 1)]), a("div", j, [u(B, { size: "small", class: "er-popconfirm__cancel", type: o2.cancelButtonType, onClick: z }, { default: l(() => [m(p(o2.cancelButtonText || d($)("popconfirm.cancelButtonText")), 1)]), _: 1 }, 8, ["type"]), u(B, { size: "small", class: "er-popconfirm__confirm", type: o2.confirmButtonType, onClick: g }, { default: l(() => [m(p(o2.confirmButtonText || d($)("popconfirm.confirmButtonText")), 1)]), _: 1 }, 8, ["type"])])], 4)]), _: 2 }, [e2.$slots.default ? { name: "default", fn: l(() => [_(e2.$slots, "default", {}, void 0, true)]), key: "0" } : void 0, e2.$slots.reference ? { name: "default", fn: l(() => [_(e2.$slots, "reference", {}, void 0, true)]), key: "1" } : void 0]), 1032, ["hide-timeout"]);
  };
} }), [["__scopeId", "data-v-b4368d67"]]));
export {
  w as E
};
