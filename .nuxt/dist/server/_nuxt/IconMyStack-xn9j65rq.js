import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "devalue";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "25",
    height: "24",
    viewBox: "0 0 25 24",
    fill: "none"
  }, _attrs))}><path d="M12.9138 3.08963C12.6509 2.97012 12.3491 2.97012 12.0862 3.08963L1.0862 8.08963C0.729203 8.2519 0.5 8.60786 0.5 9C0.5 9.39214 0.729203 9.7481 1.0862 9.91037L4.5 11.4621V18C4.5 18.2569 4.5998 18.5049 4.77705 18.6909C4.93116 18.8519 5.11017 18.9912 5.29 19.1218C5.6013 19.3477 6.05806 19.6328 6.68014 19.9122C7.92787 20.4726 9.81817 21 12.5 21C15.1818 21 17.0721 20.4726 18.3199 19.9122C18.9419 19.6328 19.3987 19.3477 19.71 19.1218C19.8898 18.9913 20.0671 18.8519 20.222 18.6919C20.3992 18.5059 20.5 18.2569 20.5 18V11.4621L22.5 10.553V13C22.5 13.5523 22.9477 14 23.5 14C24.0523 14 24.5 13.5523 24.5 13V9C24.5 8.60786 24.2708 8.2519 23.9138 8.08963L12.9138 3.08963ZM6.5 17.5284V12.3712L12.0862 14.9104C12.3491 15.0299 12.6509 15.0299 12.9138 14.9104L18.5 12.3712V17.5284C18.2921 17.6759 17.9646 17.8793 17.5005 18.0878C16.5216 18.5274 14.9119 19 12.5 19C10.0881 19 8.47838 18.5274 7.49954 18.0878C7.03538 17.8793 6.70788 17.6759 6.5 17.5284ZM21.0834 9L19.1068 9.89844C19.0933 9.90424 19.0799 9.91033 19.0667 9.91669L12.5 12.9015L3.91661 9L12.5 5.09846L21.0834 9Z" fill="#FFF"></path><path d="M24.5 17C24.5 16.4477 24.0523 16 23.5 16C22.9477 16 22.5 16.4477 22.5 17V18C22.5 18.5523 22.9477 19 23.5 19C24.0523 19 24.5 18.5523 24.5 18V17Z" fill="#FFF"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/iconSVG/IconMyStack.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const IconMyStack = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  IconMyStack as default
};
//# sourceMappingURL=IconMyStack-xn9j65rq.js.map
