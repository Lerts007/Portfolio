<template>
  <ul>
    <li
      v-for="(item, index) in items"
      :key="index"
      @mouseover="hover[index] = true"
      @mouseout="hover[index] = false"
    >
      <a :href="item.href" @click="SlideMenu">
        <component :is="item.icon" :class="{ active: hover[index] }" />
        {{ item.text }}
      </a>
    </li>
  </ul>
</template>

<script setup>
import { ref, defineAsyncComponent } from "vue";

const props = defineProps(["activ"]);
const emit = defineEmits();

const items = [
  {
    href: "#aboutMe",
    icon: defineAsyncComponent(() =>
      import("@/components/iconSVG/IconAboutMe.vue")
    ),
    text: "Обо мне",
  },
  {
    href: "#myStack",
    icon: defineAsyncComponent(() =>
      import("@/components/iconSVG/IconMyStack.vue")
    ),
    text: "Мой стэк",
  },
  {
    href: "#portfolio",
    icon: defineAsyncComponent(() =>
      import("@/components/iconSVG/IconPortfolio.vue")
    ),
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
    list-style-type: none;
    transition: transform 0.5s;
    cursor: pointer;
    & a {
      display: flex;
      gap: 10px;
      transition: color 0.5s;
    }
    & :deep path {
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
