<template>
  <div class="container">
    <div class="burger" @click="activ = !activ">
      <div class="burger__line" :class="{ 'line-45deg': activ }"></div>
      <div class="burger__line" :class="{ linenone: activ }"></div>
      <div class="burger__line" :class="{ line45deg: activ }"></div>
    </div>
    <div
      class="menuNavBurger"
      :class="{ slideMenuFrom: !activ, slideMenuTo: activ }"
    >
      <Menu :activ="activ" @update:activ="activ = $event" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activ = ref(false);
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  top: 5px;
  right: 10px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  overflow: hidden;
}
.burger {
  margin-top: 10px;
  margin-bottom: 10px;
}
.burger__line {
  width: 40px;
  height: 5px;
  margin-top: 5px;
  border-radius: 2.5px;
  background-color: #fff;
  transition: transform 0.5s;
  &:first-child {
    margin-top: 0;
  }
}
.line45deg {
  transform: translateY(-10px) rotate(45deg);
}
.line-45deg {
  transform: translateY(10px) rotate(-45deg);
}
.linenone {
  opacity: 0;
}
.menuNavBurger {
  width: 150px;
  height: 100vh;
  // background-color: $bg-html;
  background-color: rgb(14, 20, 27, 0.9);

  border-bottom-left-radius: 5px;
  transition: transform 1.5s;
  transform: translateY(40px);
}

.slideMenuFrom {
  transform: translateX(250px);
}

.slideMenuTo {
  // display: flex;
  transform: translateX(0px);
}

@media (max-width: 520px) {
}
</style>
