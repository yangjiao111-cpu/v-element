import { defineComponent as s, computed as r, openBlock as l, createElementBlock as p, mergeProps as c, createVNode as i, unref as y, normalizeProps as m, guardReactiveProps as B } from "vue";
import { FontAwesomeIcon as f } from "@fortawesome/vue-fontawesome";
import { o as u } from "./vendor-kxk_OrdB.js";
import { w as d } from "./utils-CGuI4S4L.js";
const v = /* @__PURE__ */ s({
  name: "ErIcon",
  inheritAttrs: !1,
  __name: "Icon",
  props: {
    border: { type: Boolean },
    fixedWidth: { type: Boolean },
    flip: {},
    icon: {},
    mask: {},
    listItem: { type: Boolean },
    pull: {},
    pulse: { type: Boolean },
    rotation: {},
    swapOpacity: { type: Boolean },
    size: {},
    spin: { type: Boolean },
    transform: {},
    symbol: { type: [Boolean, String] },
    title: {},
    inverse: { type: Boolean },
    bounce: { type: Boolean },
    shake: { type: Boolean },
    beat: { type: Boolean },
    fade: { type: Boolean },
    beatFade: { type: Boolean },
    spinPulse: { type: Boolean },
    spinReverse: { type: Boolean },
    type: {},
    color: {}
  },
  setup(e) {
    const o = e, t = r(() => u(o, ["type", "color"])), n = r(() => ({ color: o.color ?? void 0 }));
    return (a, b) => (l(), p("i", c({
      class: ["er-icon", { [`er-icon--${e.type}`]: e.type }],
      style: n.value
    }, a.$attrs), [
      i(y(f), m(B(t.value)), null, 16)
    ], 16));
  }
}), I = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [n, a] of o)
    t[n] = a;
  return t;
}, _ = /* @__PURE__ */ I(v, [["__scopeId", "data-v-61203d03"]]), w = d(_);
export {
  w as E,
  _ as I,
  I as _
};
