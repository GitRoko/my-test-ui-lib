import { openBlock as u, createElementBlock as _, renderSlot as r } from "vue";
const s = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, l] of t)
    n[o] = l;
  return n;
}, a = {};
function c(e, t) {
  return u(), _("button", {
    class: "my-button",
    onClick: t[0] || (t[0] = (n) => e.$emit("click"))
  }, [
    r(e.$slots, "default", {}, void 0, !0)
  ]);
}
const i = /* @__PURE__ */ s(a, [["render", c], ["__scopeId", "data-v-32f2900f"]]);
const p = ["value"], d = {
  __name: "MyInput",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(e) {
    return (t, n) => (u(), _("input", {
      value: e.modelValue,
      onInput: n[0] || (n[0] = (o) => t.$emit("update:modelValue", o.target.value)),
      class: "my-input"
    }, null, 40, p));
  }
}, m = /* @__PURE__ */ s(d, [["__scopeId", "data-v-7f537287"]]);
export {
  i as MyButton,
  m as MyInput
};
