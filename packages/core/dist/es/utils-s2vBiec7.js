import { f as r } from "./vendor-A66xrd7L.js";
function c(c2) {
  return (n2) => r(c2, (r2) => n2.use(r2));
}
const n = (r2) => (r2.install = (c2) => {
  const n2 = r2.name;
  c2.component(n2, r2);
}, r2);
class o extends Error {
  constructor(r2) {
    super(r2), this.name = "ErUIError";
  }
}
function s(r2, c2) {
  if ("production" !== process.env.NODE_ENV) {
    const n2 = new o(`[${r2}]:${c2}]`);
    console.warn(n2);
  }
}
const e = /* @__PURE__ */ new Map([["info", "circle-info"], ["success", "check-circle"], ["warning", "circle-exclamation"], ["danger", "circle-xmark"], ["error", "circle-xmark"]]), t = (r2, c2) => {
  const n2 = r2.__vccOpts || r2;
  for (const [r3, o2] of c2) n2[r3] = o2;
  return n2;
};
export {
  t as _,
  s as d,
  c as m,
  e as t,
  n as w
};
