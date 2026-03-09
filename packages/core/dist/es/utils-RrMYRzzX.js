import { f as r, i as n, a as s } from "./vendor-BX5TV4Bt.js";
function c(n2) {
  return (s2) => r(n2, (r2) => s2.use(r2));
}
const e = (r2) => (r2.install = (n2) => {
  const s2 = r2.name;
  n2.component(s2, r2);
}, r2);
class o extends Error {
  constructor(r2) {
    super(r2), this.name = "ErUIError";
  }
}
function t(r2, s2) {
  if ("production" !== process.env.NODE_ENV) {
    const c2 = n(r2) ? function(r3, n2) {
      return new o(`[${r3}] ${n2}`);
    }(r2, s2) : r2;
    console.warn(c2);
  }
}
function a(r2, c2 = "px") {
  return r2 ? s(r2) || ((r3) => !!n(r3) && !Number.isNaN(Number(r3)))(r2) ? `${r2}${c2}` : n(r2) ? r2 : void t("utils/style", "[binding value must be a string or number]") : "";
}
const i = /* @__PURE__ */ new Map([["info", "circle-info"], ["success", "check-circle"], ["warning", "circle-exclamation"], ["danger", "circle-xmark"], ["error", "circle-xmark"]]), u = (r2, n2) => {
  const s2 = r2.__vccOpts || r2;
  for (const [r3, c2] of n2) s2[r3] = c2;
  return s2;
};
export {
  u as _,
  a,
  t as d,
  c as m,
  i as t,
  e as w
};
