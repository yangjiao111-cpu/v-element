import { isRef as e, watch as t, onMounted as a, onBeforeUnmount as o, unref as r, getCurrentInstance as n, useSlots as l, watchEffect as s, computed as i, inject as c, ref as u } from "vue";
import { f as d, b as p, c as m, d as h, o as v, n as g, e as f } from "./vendor-f3c6mRls.js";
function w(n2, l2, s2) {
  e(n2) ? t(n2, (e2, t2) => {
    null == t2 || t2.removeEventListener(l2, s2), null == e2 || e2.addEventListener(l2, s2);
  }) : a(() => null == n2 ? void 0 : n2.addEventListener(l2, s2)), o(() => {
    var e2;
    return null == (e2 = r(n2)) ? void 0 : e2.removeEventListener(l2, s2);
  });
}
function b(e2, t2) {
  w(document, "click", (a2) => {
    e2.value && a2.target && (e2.value.contains(a2.target) || t2(a2));
  });
}
const x = (e2, t2) => d(e2, (e3) => {
  p(t2) && t2(e3), e3.children && x(e3.children, t2);
});
function y() {
  var e2, t2;
  const a2 = /* @__PURE__ */ new Map(), o2 = n(), r2 = null == (t2 = null == (e2 = l()) ? void 0 : e2.default) ? void 0 : t2.call(e2);
  s(() => {
    var e3;
    (null == (e3 = o2.props) ? void 0 : e3.disabled) ? x(r2 ?? [], (e4) => {
      (null == e4 ? void 0 : e4.props) && (a2.set(e4, m(e4.props)), e4.props = h(null == e4 ? void 0 : e4.props, { style: { cursor: "not-allowed", color: "var(--er-text-color-placeholder)" } }));
    }) : x(r2 ?? [], (e4) => {
      a2.has(e4) && (e4.props = a2.get(e4));
    });
  });
}
const T = { profix: Math.floor(1e4 * Math.random()), current: 0 };
function k(e2 = "er") {
  return i(() => `${e2}-${T.profix}-${T.current++}`);
}
const D = { name: "en", el: { colorpicker: { confirm: "OK", clear: "Clear", defaultLabel: "color picker", description: "current color is {color}. press enter to select a new color." }, datepicker: { now: "Now", today: "Today", cancel: "Cancel", clear: "Clear", confirm: "OK", dateTablePrompt: "Use the arrow keys and enter to select the day of the month", monthTablePrompt: "Use the arrow keys and enter to select the month", yearTablePrompt: "Use the arrow keys and enter to select the year", selectedDate: "Selected date", selectDate: "Select date", selectTime: "Select time", startDate: "Start Date", startTime: "Start Time", endDate: "End Date", endTime: "End Time", prevYear: "Previous Year", nextYear: "Next Year", prevMonth: "Previous Month", nextMonth: "Next Month", year: "", month1: "January", month2: "February", month3: "March", month4: "April", month5: "May", month6: "June", month7: "July", month8: "August", month9: "September", month10: "October", month11: "November", month12: "December", week: "week", weeks: { sun: "Sun", mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat" }, weeksFull: { sun: "Sunday", mon: "Monday", tue: "Tuesday", wed: "Wednesday", thu: "Thursday", fri: "Friday", sat: "Saturday" }, months: { jan: "Jan", feb: "Feb", mar: "Mar", apr: "Apr", may: "May", jun: "Jun", jul: "Jul", aug: "Aug", sep: "Sep", oct: "Oct", nov: "Nov", dec: "Dec" } }, inputNumber: { decrease: "decrease number", increase: "increase number" }, select: { loading: "Loading", noMatch: "No matching data", noData: "No data", placeholder: "Select" }, dropdown: { toggleDropdown: "Toggle Dropdown" }, cascader: { noMatch: "No matching data", loading: "Loading", placeholder: "Select", noData: "No data" }, pagination: { goto: "Go to", pagesize: "/page", total: "Total {total}", pageClassifier: "", page: "Page", prev: "Go to previous page", next: "Go to next page", currentPage: "page {pager}", prevPages: "Previous {pager} pages", nextPages: "Next {pager} pages", deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details" }, dialog: { close: "Close this dialog" }, drawer: { close: "Close this dialog" }, messagebox: { title: "Message", confirm: "OK", cancel: "Cancel", error: "Illegal input", close: "Close this dialog" }, upload: { deleteTip: "press delete to remove", delete: "Delete", preview: "Preview", continue: "Continue" }, slider: { defaultLabel: "slider between {min} and {max}", defaultRangeStartLabel: "pick start value", defaultRangeEndLabel: "pick end value" }, table: { emptyText: "No Data", confirmFilter: "Confirm", resetFilter: "Reset", clearFilter: "All", sumText: "Sum" }, tour: { next: "Next", previous: "Previous", finish: "Finish" }, tree: { emptyText: "No Data" }, transfer: { noMatch: "No matching data", noData: "No data", titles: ["List 1", "List 2"], filterPlaceholder: "Enter keyword", noCheckedFormat: "{total} items", hasCheckedFormat: "{checked}/{total} checked" }, image: { error: "FAILED" }, pageHeader: { title: "Back" }, popconfirm: { confirmButtonText: "Yes", cancelButtonText: "No" }, carousel: { leftArrow: "Carousel arrow left", rightArrow: "Carousel arrow right", indicator: "Carousel switch to index {index}" } } };
function M(e2) {
  return v(c(g, f({ locale: D.name, messages: { en: D.el } })), "install");
}
function N(e2) {
  const t2 = i(() => e2.getLastBottomOffset()), a2 = i(() => e2.offset + t2.value), o2 = i(() => a2.value + e2.boxHeight.value);
  return { topOffset: a2, bottomOffset: o2 };
}
const C = u(0);
function F(e2 = 2e3) {
  const t2 = u(e2), a2 = i(() => C.value + t2.value);
  return { initialValue: t2, currentZindex: a2, nextZIndex: () => (C.value++, a2.value) };
}
function S(e2, { afterFocus: t2, beforeBlur: a2, afterBlur: o2 } = {}) {
  const r2 = n(), { emit: l2 } = r2, s2 = u(), i2 = u(false);
  return w(s2, "click", () => {
    var t3;
    null == (t3 = e2.value) || t3.focus();
  }), { wrapperRef: s2, isFocused: i2, handleFocus: (e3) => {
    i2.value || (i2.value = true, l2("focus", e3), null == t2 || t2());
  }, handleBlur: (e3) => {
    var t3;
    p(a2) && a2(e3) || e3.relatedTarget && (null == (t3 = s2.value) ? void 0 : t3.contains(e3.relatedTarget)) || (i2.value = false, l2("blur", e3), null == o2 || o2());
  } };
}
function L(e2) {
  const t2 = n();
  if (!t2) throw new Error("useProp must be used within a component");
  return i(() => {
    var a2, o2;
    return null == (o2 = null == (a2 = null == t2 ? void 0 : t2.proxy) ? void 0 : a2.$props) ? void 0 : o2[e2];
  });
}
export {
  M as a,
  k as b,
  y as c,
  N as d,
  w as e,
  F as f,
  L as g,
  S as h,
  b as u
};
