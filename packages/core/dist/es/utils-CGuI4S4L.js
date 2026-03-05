import { f as l } from "./vendor-kxk_OrdB.js";
function e(a) {
  return (s) => l(a, (r) => s.use(r));
}
const i = (a) => (a.install = (t) => {
  const s = a.name;
  t.component(s, a);
}, a);
export {
  e as m,
  i as w
};
