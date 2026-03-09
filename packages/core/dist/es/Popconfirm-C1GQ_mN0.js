import { defineComponent as e, ref as o, computed as t, resolveComponent as n, openBlock as i, createBlock as c, createSlots as l, withCtx as r, createElementVNode as a, normalizeStyle as f, createCommentVNode as s, createTextVNode as u, toDisplayString as m, createVNode as d, renderSlot as p } from "vue";
import { E as _ } from "./Tooltip-BK5ki-aY.js";
import { E as y } from "./Button-t4XLIRvj.js";
import { a as v, _ as h, w as B } from "./utils-RrMYRzzX.js";
const T = { class: "er-popconfirm__main" }, k = { class: "er-popconfirm__action" }, x = B(h(e({ name: "ErPopconfirm", __name: "Popconfirm", props: { title: { default: "" }, confirmButtonText: { default: "确认" }, cancelButtonText: { default: "取消" }, confirmButtonType: { default: "primary" }, cancelButtonType: {}, icon: { default: "question-circle" }, iconColor: { default: "#f90" }, hideIcon: { type: Boolean }, hideAfter: { default: 200 }, width: { default: 150 } }, emits: ["confirm", "cancel"], setup(e2, { emit: h2 }) {
  const B2 = e2, x2 = o(), w = t(() => ({ width: v(B2.width) })), C = h2;
  function E() {
    var _a;
    (_a = x2.value) == null ? void 0 : _a.hide();
  }
  function $(e3) {
    C("confirm", e3), E();
  }
  function j(e3) {
    C("cancel", e3), E();
  }
  return (o2, t2) => {
    const v2 = n("er-icon");
    return i(), c(_, { ref_key: "tooltipRef", ref: x2, trigger: "click", "hide-timeout": e2.hideAfter }, l({ content: r(() => [a("div", { class: "er-popconfirm", style: f(w.value) }, [a("div", T, [!e2.hideIcon && e2.icon ? (i(), c(v2, { key: 0, icon: e2.icon, color: e2.iconColor }, null, 8, ["icon", "color"])) : s("", true), u(" " + m(e2.title), 1)]), a("div", k, [d(y, { size: "small", class: "er-popconfirm__cancel", type: e2.cancelButtonType, onClick: j }, { default: r(() => [u(m(e2.cancelButtonText), 1)]), _: 1 }, 8, ["type"]), d(y, { size: "small", class: "er-popconfirm__confirm", type: e2.confirmButtonType, onClick: $ }, { default: r(() => [u(m(e2.confirmButtonText), 1)]), _: 1 }, 8, ["type"])])], 4)]), _: 2 }, [o2.$slots.default ? { name: "default", fn: r(() => [p(o2.$slots, "default", {}, void 0, true)]), key: "0" } : void 0, o2.$slots.reference ? { name: "default", fn: r(() => [p(o2.$slots, "reference", {}, void 0, true)]), key: "1" } : void 0]), 1032, ["hide-timeout"]);
  };
} }), [["__scopeId", "data-v-75820f4a"]]));
export {
  x as E
};
