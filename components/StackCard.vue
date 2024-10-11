<template>
  <div
    class="myStack-card myStack-html"
    :style="
      'box-shadow: 0 4px 6px -1px' +
      card.color +
      ', 0 2px 4px -2px' +
      card.color
    "
  >
    <img :src="card.img" .alt="card.name" />
    <p>{{ card.name }}</p>
  </div>
</template>

<script setup>
const { card } = defineProps(["card"]);
</script>

<style lang="scss" scoped>
.myStack-card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;

  width: 135px;
  height: 150px;

  border-radius: 10px;
  text-align: center;
  transition: transform 0.5s;
  & img {
    width: 70px;
    height: 70px;
    margin-bottom: 20px;
  }
  @media (hover: hover) {
    &:hover {
      transform: scale(1.2);
    }
  }
}
</style>
