import { defineComponent as e, openBlock as s, createElementBlock as o, normalizeStyle as t, normalizeClass as a, renderSlot as l } from "vue";
import { _ as d } from "./utils-B2WdIr7B.js";
const i = d(e({ name: "ErOverlay", __name: "Overlay", props: { mask: { type: Boolean, default: true }, zIndex: {}, overlayClass: {} }, emits: ["click"], setup(e2, { emit: d2 }) {
  const i2 = d2;
  function r(e3) {
    i2("click", e3);
  }
  return (d3, i3) => e2.mask ? (s(), o("div", { key: 0, class: a(["er-overlay", e2.overlayClass]), style: t({ zIndex: e2.zIndex }), onClick: r }, [l(d3.$slots, "default", {}, void 0, true)], 6)) : (s(), o("div", { key: 1, class: a(e2.overlayClass), style: t({ zIndex: e2.zIndex, position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }) }, [l(d3.$slots, "default", {}, void 0, true)], 6));
} }), [["__scopeId", "data-v-35adad8e"]]);
export {
  i as E
};
