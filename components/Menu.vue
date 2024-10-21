<template>
  <ul>
    <li
      v-for="(item, index) in items"
      :key="index"
      @mouseover="hover[index] = true"
      @mouseout="hover[index] = false"
    >
      <component :is="item.icon" :class="{ active: hover[index] }" />
      <a :href="item.href" @click="SlideMenu">
        {{ item.text }}
      </a>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
import IconSvgIconAboutMe from "./iconSVG/IconAboutMe.vue";
import IconMyStack from "./iconSVG/IconMyStack.vue";
import IconPortfolio from "./iconSVG/IconPortfolio.vue";

const props = defineProps(["activ"]);
const emit = defineEmits();

const items = [
  {
    href: "#aboutMe",
    icon: IconSvgIconAboutMe,
    text: "Обо мне",
  },
  {
    href: "#myStack",
    icon: IconMyStack,
    text: "Мой стэк",
  },
  {
    href: "#portfolio",
    icon: IconPortfolio,
    text: "Мои проекты",
  },
];

const hover = ref(items.map(() => false));

const SlideMenu = () => {
  emit("update:activ", false);
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  @include Rubik20;

  & li {
    margin-right: 20px;

    display: flex;
    gap: 10px;

    list-style-type: none;
    transition: transform 0.5s;
    cursor: pointer;
    & a {
      transition: color 0.5s;
    }
    & :deep(path) {
      transition: fill 0.5s;
    }
  }
  & li:last-child {
    margin-right: 0;
  }
  @media (hover: hover) {
    & li:hover {
      transform: scale(1.2);
    }
    & li:hover a {
      color: $color-text-accent;
    }
  }
}
.active :deep(path) {
  fill: $color-text-accent;
}

@media (max-width: 780px) {
  ul {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    & li {
      margin-top: 20px;
      list-style-type: none;
      cursor: pointer;
    }
    & li:first-child {
      margin-top: 0;
    }
  }
}

@media (max-width: 520px) {
  ul li {
    margin-top: 10px;
  }
}
</style>
