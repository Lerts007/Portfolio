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
  }, _attrs))}><path d="M9.10557 3.55279C9.27496 3.214 9.62123 3 10 3H18C18.3788 3 18.725 3.214 18.8944 3.55279L20.8944 7.55279C20.9639 7.69164 21 7.84476 21 8V14.0821C22.0311 14.1469 23.1681 14.4493 23.8321 15.4453C23.9947 15.6893 24.0421 15.9925 23.9616 16.2745C23.8811 16.5565 23.6808 16.789 23.4138 16.9104L14.5417 20.9431C12.9785 21.6537 11.2446 21.9022 9.54467 21.6594L5.98862 21.1514C5.91566 21.6318 5.50082 22 5 22H1C0.447715 22 0 21.5523 0 21V13C0 12.4477 0.447715 12 1 12H5C5.55228 12 6 12.4477 6 13H7V8C7 7.84476 7.03615 7.69164 7.10557 7.55279L9.10557 3.55279ZM19 14.1711V9H9V13H11C12.4378 13 13.6984 13.7586 14.4034 14.8974L16.7208 14.5327C16.8727 14.5074 17.035 14.4792 17.2048 14.4498C17.7458 14.3559 18.3668 14.2482 19 14.1711ZM11 15H5C4.44772 15 4 14.5523 4 14H2V20H4V18C4 17.4477 4.44772 17 5 17C5.55228 17 6 17.4477 6 18V19.1327L9.82752 19.6795C11.1497 19.8684 12.4982 19.6751 13.7141 19.1224L20.434 16.0679C20.4081 16.0682 20.3818 16.0686 20.3551 16.0692C19.4746 16.0882 18.5089 16.2548 17.5882 16.4136C17.4052 16.4452 17.2235 16.4765 17.0451 16.5063L17.0362 16.5078L14.9964 16.8287C14.9988 16.8855 15 16.9426 15 17C15 17.5523 14.5523 18 14 18H9C8.44772 18 8 17.5523 8 17C8 16.4477 8.44772 16 9 16H12.7324C12.3866 15.4022 11.7403 15 11 15ZM9.61803 7H13V5H10.618L9.61803 7ZM15 5V7H18.382L17.382 5H15Z" fill="#FFF"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/iconSVG/IconPortfolio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const IconPortfolio = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  IconPortfolio as default
};
//# sourceMappingURL=IconPortfolio-OxWguZrI.js.map
