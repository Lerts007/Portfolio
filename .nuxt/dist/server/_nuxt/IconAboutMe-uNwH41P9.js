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
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, _attrs))}><path d="M12 4C10.3432 4 9.00001 5.34315 9.00001 7C9.00001 8.65685 10.3432 10 12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4ZM7.00001 7C7.00001 4.23858 9.23859 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.23859 12 7.00001 9.76142 7.00001 7Z" fill="#FFF"></path><path d="M8.6376 15C7.43751 15 6.3529 15.7152 5.88016 16.8182L3.91916 21.3939C3.7016 21.9015 3.11372 22.1367 2.60609 21.9191C2.09846 21.7016 1.86331 21.1137 2.08087 20.6061L4.04187 16.0304C4.82976 14.192 6.63746 13 8.6376 13H15.3624C17.3626 13 19.1703 14.192 19.9582 16.0304L21.9192 20.6061C22.1367 21.1137 21.9016 21.7016 21.3939 21.9191C20.8863 22.1367 20.2984 21.9015 20.0809 21.3939L18.1199 16.8182C17.6471 15.7152 16.5625 15 15.3624 15H8.6376Z" fill="#FFF"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/iconSVG/IconAboutMe.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const IconAboutMe = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  IconAboutMe as default
};
//# sourceMappingURL=IconAboutMe-uNwH41P9.js.map
