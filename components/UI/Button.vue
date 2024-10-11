<template>
  <button>
    {{ text }}
  </button>
</template>

<script setup>
const props = defineProps(["text"]);
</script>

<style lang="scss" scoped>
button {
  padding: 13px;
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid $color-text-accent;
  border-radius: 25px;
  color: $color-text;
  transition: all 0.5s;

  cursor: pointer;
}
@media (hover: hover) {
  button:hover {
    background-color: $color-text-accent;
    color: #000;
  }
}
</style>
