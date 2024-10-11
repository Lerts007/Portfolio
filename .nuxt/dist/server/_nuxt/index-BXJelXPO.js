import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { useSSRContext, mergeProps, ref } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import { _ as __nuxt_component_0$5, a as __nuxt_component_1$2, b as __nuxt_component_2$1, c as __nuxt_component_3$1 } from "./iconGitHub-DKYX9Cnk.js";
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
const _sfc_main$9 = {
  __name: "Button",
  __ssrInlineRender: true,
  props: ["text"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(_attrs)} data-v-6be4ad75>${ssrInterpolate(__props.text)}</button>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/Button.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-6be4ad75"]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "25px",
    height: "25px",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#FFF"></path></svg>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/iconSVG/iconClose.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$7 = {
  __name: "Contacts",
  __ssrInlineRender: true,
  props: ["activ"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon_s_v_g_icon_close = __nuxt_component_0$3;
      const _component_icon_s_v_g_icon_phone = __nuxt_component_0$5;
      const _component_icon_s_v_g_icon_mail = __nuxt_component_1$2;
      const _component_icon_s_v_g_icon_telegram = __nuxt_component_2$1;
      const _component_icon_s_v_g_icon_git_hub = __nuxt_component_3$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["сontact", { activContact: __props.activ }]
      }, _attrs))} data-v-e011eb46><div class="contactBlock" data-v-e011eb46><div class="closeContact" data-v-e011eb46>`);
      _push(ssrRenderComponent(_component_icon_s_v_g_icon_close, null, null, _parent));
      _push(`</div><h3 data-v-e011eb46>Контакты</h3><ul class="formContact__ul" data-v-e011eb46><li data-v-e011eb46>`);
      _push(ssrRenderComponent(_component_icon_s_v_g_icon_phone, null, null, _parent));
      _push(`<a href="tel:+79268650820" data-v-e011eb46>8-(926)-865-08-20</a></li><li data-v-e011eb46>`);
      _push(ssrRenderComponent(_component_icon_s_v_g_icon_mail, null, null, _parent));
      _push(`<a href="mailto:oddff@mail.ru" data-v-e011eb46>oddff@mail.ru</a></li></ul><div class="links" data-v-e011eb46><a href="https://t.me/Lerts_D" target="_blank" data-v-e011eb46>`);
      _push(ssrRenderComponent(_component_icon_s_v_g_icon_telegram, null, null, _parent));
      _push(`</a><a href="https://github.com/Lerts007" target="_blank" data-v-e011eb46>`);
      _push(ssrRenderComponent(_component_icon_s_v_g_icon_git_hub, null, null, _parent));
      _push(`</a></div></div></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contacts.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-e011eb46"]]);
const _sfc_main$6 = {
  __name: "mainHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const activ = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIButton = __nuxt_component_0$4;
      const _component_Contacts = __nuxt_component_1$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "mainHeader" }, _attrs))} data-v-b5789ab5><div class="mainHeader-content content scrollContent" data-v-b5789ab5><h1 class="mainHeader-content__title" data-v-b5789ab5> Привет, меня зовут <br data-v-b5789ab5>Стрельников Дмитрий, занимаюсь Frontend разработкой </h1><div class="mainHeader-btn" data-v-b5789ab5>`);
      _push(ssrRenderComponent(_component_UIButton, {
        text: "Контакты",
        onClick: ($event) => activ.value = true
      }, null, _parent));
      _push(`<form action="./docs/Resume.pdf" target="_blank" data-v-b5789ab5>`);
      _push(ssrRenderComponent(_component_UIButton, { text: "Резюме" }, null, _parent));
      _push(`</form></div></div>`);
      _push(ssrRenderComponent(_component_Contacts, {
        activ: activ.value,
        "onUpdate:activ": ($event) => activ.value = $event
      }, null, _parent));
      _push(`<div class="mainHeader-img" data-v-b5789ab5></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mainHeader.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-b5789ab5"]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ id: "aboutMe" }, _attrs))} data-v-69fdd319><div class="aboutMe-content content scrollContent" data-v-69fdd319><h3 data-v-69fdd319>Обо мне</h3><p class="aboutMe-content__info" data-v-69fdd319> Я начинающий frontend разработчик увлеченный созданием интерактивных, доступных и адаптивных веб-сайтов. В моем портфолио мало проектов, но они являются точкой старта в моем путешествии. В своей работе я стремлюсь сделать так, чтобы все было сделанно аккуратно, ровно, читаемо. Давайте вместе делать веб-страницы, которые не только функциональны, но приятны глазу! </p></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mainAboutMe.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-69fdd319"]]);
const _sfc_main$4 = {
  __name: "StackCard",
  __ssrInlineRender: true,
  props: ["card"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "myStack-card myStack-html",
        style: "box-shadow: 0 4px 6px -1px" + __props.card.color + ", 0 2px 4px -2px" + __props.card.color
      }, _attrs))} data-v-0b371575><img${ssrRenderAttr("src", __props.card.img)}${ssrRenderAttr("alt", __props.card.name)} data-v-0b371575><p data-v-0b371575>${ssrInterpolate(__props.card.name)}</p></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StackCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-0b371575"]]);
const _sfc_main$3 = {
  __name: "Stack",
  __ssrInlineRender: true,
  setup(__props) {
    const stack = [
      { name: "HTML", img: "/stack/html.png", color: "#f97316" },
      { name: "CSS", img: "/stack/css.png", color: "#3b82f6" },
      { name: "SCSS", img: "/stack/scss.png", color: "#cc6699" },
      { name: "JavaScript", img: "/stack/javascript.png", color: "#facc15" },
      { name: "Vue", img: "/stack/vue.png", color: "#10b981" },
      { name: "Vuex", img: "/stack/vuex.svg", color: "#10b981" },
      { name: "Axios", img: "/stack/axios.svg", color: "#3b82f6" },
      { name: "Nuxt.js", img: "/stack/nuxtjs.svg", color: "#10b981" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StackCard = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "myStack" }, _attrs))} data-v-00c6077f><div class="myStack-content content scrollContent" data-v-00c6077f><h3 data-v-00c6077f>Мой стэк</h3><div class="myStackCard" data-v-00c6077f><!--[-->`);
      ssrRenderList(stack, (card, index2) => {
        _push(ssrRenderComponent(_component_StackCard, {
          key: index2,
          card
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Stack.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-00c6077f"]]);
const _sfc_main$2 = {
  __name: "ProjectCard",
  __ssrInlineRender: true,
  props: ["project"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIButton = __nuxt_component_0$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "portfolio-card" }, _attrs))} data-v-a859afc2><div class="portfolio-card-img" data-v-a859afc2><img${ssrRenderAttr("src", __props.project.img)} alt="To-Do list" data-v-a859afc2></div><div class="portfolio-card-info" data-v-a859afc2><h2 data-v-a859afc2>${ssrInterpolate(__props.project.title)}</h2><ul data-v-a859afc2><!--[-->`);
      ssrRenderList(__props.project.description, (item, index2) => {
        _push(`<li data-v-a859afc2>${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul><div class="portfolio-card-btn" data-v-a859afc2><a${ssrRenderAttr("href", __props.project.linkCode)} target="_blank" data-v-a859afc2>`);
      _push(ssrRenderComponent(_component_UIButton, { text: "Demo" }, null, _parent));
      _push(`</a><a${ssrRenderAttr("href", __props.project.linkWebSite)} target="_blank" data-v-a859afc2>`);
      _push(ssrRenderComponent(_component_UIButton, { text: "GitHub" }, null, _parent));
      _push(`</a></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a859afc2"]]);
const _sfc_main$1 = {
  __name: "MyProject",
  __ssrInlineRender: true,
  setup(__props) {
    const Projects = [
      {
        title: "To do list",
        img: "/projects/To-do-list.png",
        linkCode: "https://lerts007.github.io/To-do_list/",
        linkWebSite: "https://github.com/Lerts007/To-do_list",
        description: [
          "На странице отображается список всех продуктов",
          "Имеется возможность добавить в список новый продукт",
          "Для каждого продукта имеется возможность “вычеркнуть” его, после чего название продукта становится зачеркнутым и продукт помещается в конец списка",
          "Имеется возможность удалить продукт",
          "Все действия на сайте происходят без перезагрузки страницы",
          "После перезагрузки страницы состояние списка продуктов сохраняется"
        ]
      },
      {
        title: "SPA-elevator",
        img: "/projects/SPA-elevator.png",
        linkCode: "https://lerts007.github.io/SPA-Elevator/",
        linkWebSite: "https://github.com/Lerts007/SPA-Elevator",
        description: [
          "Имитация работы лифта",
          "Можно изменять кол-во лифтов (4 макс) и кол-во этажей (10 макс)",
          "Близжайший свободный лифт едет на вызванный этаж",
          "На этаже вызова лифт задерживается на 3 сек. (Лифт мигает синим цветов)",
          "Если этаж стоит в очереди вызова и мимо проезжает лифт, то лифт останавливается",
          "У каждого лифта есть индикатор направления движения",
          "У кнопки вызова есть три состония: Синия - не активна; Розовый - лифт едет на этаж; Зеленая - этаж в очереди",
          "Все действия на сайте происходят без перезагрузки страницы"
        ]
      },
      {
        title: "SPA с использованием API reqres.in",
        img: "/projects/web_application_of_users.png",
        linkCode: "https://lerts007.github.io/web_application_of_users/",
        linkWebSite: "https://github.com/Lerts007/web_application_of_users",
        description: [
          "Получение списĸа пользователей с URL-адреса https://reqres.in/api/users?page=1",
          "Обработĸа ответа с сервера, валидация полученного списĸа",
          "Сохранение списĸа пользователей в Local Storage",
          "Отображение пользователей в виде ĸарточеĸ",
          "При нажатии на элемент списĸа  поĸазывать в диалоговом оĸне подробную информацию по выбранному пользователю",
          "Редаĸтирование данных отдельного пользователя",
          "Удаление пользователей",
          "Обновление списĸа пользователей с сервера (загрузĸа с reqres.in)"
        ]
      },
      {
        title: "SPA с использованием API openweathermap.org",
        img: "/projects/WeatherAPIVue.png",
        linkCode: "https://lerts007.github.io/WeatherAPIVue/",
        linkWebSite: "https://github.com/Lerts007/WeatherAPIVue",
        description: [
          "Получение дынных о погоде с URL-адреса https://openweathermap.org/",
          "В поисковой строке ввдится название населеннго пункты",
          "После предлагается выбрать один из нескольких вариантов",
          "Погода выводится на 5 дней веперед"
        ]
      },
      {
        title: "Landing page webStore",
        img: "/projects/webStore.png",
        linkCode: "https://lerts007.github.io/webStoreLandingPage/",
        linkWebSite: "https://github.com/Lerts007/webStoreLandingPage",
        description: [
          "Создать LandingPage по макету из Figma",
          "Подключить API YandexMap, с небольшой стилизацией"
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProjectCard = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "portfolio" }, _attrs))} data-v-b7165219><div class="portfolio-content content scrollContent" data-v-b7165219><h3 data-v-b7165219>Мои проекты</h3><div class="portfolioCard" data-v-b7165219><!--[-->`);
      ssrRenderList(Projects, (project, index2) => {
        _push(ssrRenderComponent(_component_ProjectCard, {
          key: index2,
          project
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MyProject.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b7165219"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_MainHeader = __nuxt_component_0$2;
  const _component_MainAboutMe = __nuxt_component_1;
  const _component_Stack = __nuxt_component_2;
  const _component_MyProject = __nuxt_component_3;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_MainHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_MainAboutMe, null, null, _parent));
  _push(ssrRenderComponent(_component_Stack, null, null, _parent));
  _push(ssrRenderComponent(_component_MyProject, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-BXJelXPO.js.map
