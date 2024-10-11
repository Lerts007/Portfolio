<template>
  <section id="myStack">
    <div class="myStack-content content scrollContent">
      <h3>Мой стэк</h3>
      <div class="myStackCard">
        <StackCard v-for="(card, index) in stack" :key="index" :card="card" />
      </div>
    </div>
  </section>
</template>

<script setup>
const stack = [
  { name: "HTML", img: "/stack/html.png", color: "#f97316" },
  { name: "CSS", img: "/stack/css.png", color: "#3b82f6" },
  { name: "SCSS", img: "/stack/scss.png", color: "#cc6699" },
  { name: "JavaScript", img: "/stack/javascript.png", color: "#facc15" },
  { name: "Vue", img: "/stack/vue.png", color: "#10b981" },
  { name: "Vuex", img: "/stack/vuex.svg", color: "#10b981" },
  { name: "Axios", img: "/stack/axios.svg", color: "#3b82f6" },
  { name: "Nuxt.js", img: "/stack/nuxtjs.svg", color: "#10b981" },
];
</script>

<style lang="scss" scoped>
#myStack {
  padding-top: 100px;
  padding-bottom: 100px;
  & h3 {
    @include Rubik40;
    text-align: center;
  }
}
.myStackCard {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  margin-top: 30px;
}
.myStackCard {
  gap: 40px;
}

@media (max-width: 520px) {
  #myStack {
    padding-top: 25px;
    padding-bottom: 25px;
    & h3 {
      font-size: 30px;
    }
  }
}
</style>
