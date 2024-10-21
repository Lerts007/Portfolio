<template>
  <section id="mainHeader">
    <div class="mainHeader-content content scrollContent">
      <h1 class="mainHeader-content__title">
        Привет, меня зовут <br />Стрельников Дмитрий, занимаюсь Frontend
        разработкой
      </h1>
      <div class="mainHeader-btn">
        <UIButton :text="'Контакты'" @click="activ = true" />
        <a href="./Resume.pdf" target="_blank">
          <UIButton :text="'Резюме'" />
        </a>
      </div>
    </div>
    <Contacts :activ="activ" @update:activ="activ = $event" />
    <div class="mainHeader-img"></div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const activ = ref(false);

watch(activ, (newVal) => {
  console.log("asdas");

  if (newVal) {
    document.documentElement.classList.add("no-scroll");
  } else {
    document.documentElement.classList.remove("no-scroll");
  }
});
</script>

<style lang="scss" scoped>
#mainHeader {
  padding-top: 25px;
  height: 100vh;
}
.mainHeader-content {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  flex-direction: column;
  text-align: center;
}
.mainHeader-content__title {
  @include Rubik40;

  max-width: 500px;

  background: linear-gradient(270deg, #9517f9, #ff46cb, #09c4ff);
  background: -webkit-linear-gradient (270deg, #9517f9, #ff46cb, #09c4ff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: h1-animation 5s ease infinite;
  -webkit-animation: h1-animation 5s ease infinite;
  background-size: 400% 200%;
}
@keyframes h1-animation {
  0% {
    background-position: 0% center;
  }
  50% {
    background-position: 50% center;
  }
  100% {
    background-position: 0% center;
  }
}
.mainHeader-btn {
  margin-top: 50px;
  display: flex;
  gap: 50px;
}
@media (max-width: 780px) {
  #mainHeader {
    padding-top: 60px;
  }
}
@media (max-width: 520px) {
  .mainHeader-content__title {
    font-size: 30px;
  }
}
@media (max-width: 340px) {
  .mainHeader-content__title {
    font-size: 25px;
  }
}
</style>
