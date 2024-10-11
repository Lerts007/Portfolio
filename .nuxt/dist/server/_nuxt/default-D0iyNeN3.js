import { defineAsyncComponent, ref, createVNode, resolveDynamicComponent, useSSRContext, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderVNode, ssrInterpolate, ssrRenderClass, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as __nuxt_component_0$2, a as __nuxt_component_1$2, b as __nuxt_component_2, c as __nuxt_component_3 } from "./iconGitHub-DKYX9Cnk.js";
import "ofetch";
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
const _sfc_main$4 = {
  __name: "Menu",
  __ssrInlineRender: true,
  props: ["activ"],
  setup(__props, { emit: __emit }) {
    const items = [
      {
        href: "#aboutMe",
        icon: defineAsyncComponent(
          () => import("./IconAboutMe-uNwH41P9.js")
        ),
        text: "Обо мне"
      },
      {
        href: "#myStack",
        icon: defineAsyncComponent(
          () => import("./IconMyStack-xn9j65rq.js")
        ),
        text: "Мой стэк"
      },
      {
        href: "#portfolio",
        icon: defineAsyncComponent(
          () => import("./IconPortfolio-OxWguZrI.js")
        ),
        text: "Мои проекты"
      }
    ];
    const hover = ref(items.map(() => false));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(_attrs)} data-v-3d7f71f6><!--[-->`);
      ssrRenderList(items, (item, index) => {
        _push(`<li data-v-3d7f71f6><a${ssrRenderAttr("href", item.href)} data-v-3d7f71f6>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), {
          class: { active: hover.value[index] }
        }, null), _parent);
        _push(` ${ssrInterpolate(item.text)}</a></li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Menu.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-3d7f71f6"]]);
const _sfc_main$3 = {
  __name: "Burger",
  __ssrInlineRender: true,
  setup(__props) {
    const activ = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Menu = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-4fcadcd7><div class="burger" data-v-4fcadcd7><div class="${ssrRenderClass([{ "line-45deg": activ.value }, "burger__line"])}" data-v-4fcadcd7></div><div class="${ssrRenderClass([{ linenone: activ.value }, "burger__line"])}" data-v-4fcadcd7></div><div class="${ssrRenderClass([{ line45deg: activ.value }, "burger__line"])}" data-v-4fcadcd7></div></div><div class="${ssrRenderClass([{ slideMenuFrom: !activ.value, slideMenuTo: activ.value }, "menuNavBurger"])}" data-v-4fcadcd7>`);
      _push(ssrRenderComponent(_component_Menu, {
        activ: activ.value,
        "onUpdate:activ": ($event) => activ.value = $event
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Burger.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-4fcadcd7"]]);
const _imports_0 = publicAssetsURL("/Logo.svg");
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_Burger = __nuxt_component_0$1;
  const _component_Menu = __nuxt_component_1$1;
  _push(`<header${ssrRenderAttrs(_attrs)} data-v-f4c76c4b><div class="header-content content" data-v-f4c76c4b><div class="logo" data-v-f4c76c4b><a href="#" data-v-f4c76c4b><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-f4c76c4b></a></div><div class="menuNavBurger" data-v-f4c76c4b>`);
  _push(ssrRenderComponent(_component_Burger, null, null, _parent));
  _push(`</div><nav class="menuNav" data-v-f4c76c4b>`);
  _push(ssrRenderComponent(_component_Menu, null, null, _parent));
  _push(`</nav></div></header>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-f4c76c4b"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_icon_s_v_g_icon_phone = __nuxt_component_0$2;
  const _component_icon_s_v_g_icon_mail = __nuxt_component_1$2;
  const _component_icon_s_v_g_icon_telegram = __nuxt_component_2;
  const _component_icon_s_v_g_icon_git_hub = __nuxt_component_3;
  _push(`<footer${ssrRenderAttrs(_attrs)} data-v-473a9468><div class="footer-content content" data-v-473a9468><div class="logoFooter" data-v-473a9468><div class="logoFooter-logo" data-v-473a9468><a href="#" data-v-473a9468><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-473a9468></a><p class="logoFooter__name" data-v-473a9468>Стрельников Дмитрий</p></div><nav class="menuContact footerLi" data-v-473a9468><ul class="formContact__ul" data-v-473a9468><li data-v-473a9468>`);
  _push(ssrRenderComponent(_component_icon_s_v_g_icon_phone, null, null, _parent));
  _push(`<a href="tel:+79268650820" data-v-473a9468>8-(926)-865-08-20</a></li><li data-v-473a9468>`);
  _push(ssrRenderComponent(_component_icon_s_v_g_icon_mail, null, null, _parent));
  _push(`<a href="malito:oddff@mail.ru" data-v-473a9468>oddff@mail.ru</a></li></ul><div class="links" data-v-473a9468><a href="https://t.me/Lerts_D" target="_blank" data-v-473a9468>`);
  _push(ssrRenderComponent(_component_icon_s_v_g_icon_telegram, null, null, _parent));
  _push(`</a><a href="https://github.com/Lerts007" target="_blank" data-v-473a9468>`);
  _push(ssrRenderComponent(_component_icon_s_v_g_icon_git_hub, null, null, _parent));
  _push(`</a></div></nav></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-473a9468"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = __nuxt_component_0;
  const _component_Footer = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<main data-v-8ffbd978>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8ffbd978"]]);
export {
  _default as default
};
//# sourceMappingURL=default-D0iyNeN3.js.map
