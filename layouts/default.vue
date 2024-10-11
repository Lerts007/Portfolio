<template>
  <Header />
  <main>
    <slot />
  </main>

  <Footer />
</template>

<script setup></script>

<style lang="scss" scoped>
main {
  position: relative;
}
</style>
