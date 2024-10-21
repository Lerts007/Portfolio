<template>
  <header>
    <div class="header-content content">
      <div class="logo">
        <a href="#">
          <img src="../public/Logo.svg" alt="" />
        </a>
      </div>
      <div class="menuNavBurger">
        <Burger />
      </div>
      <nav class="menuNav">
        <Menu />
      </nav>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
header {
  width: 100vw;
  height: 50px;
  position: fixed;
  top: 0;
  background-color: rgb(14, 20, 27, 0.9);
  z-index: 10;
}
.header-content {
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 60px;
}
.logo a {
  display: flex;
  align-items: center;

  & img {
    width: 40px;
  }
}

.logo__name {
  @include Rubik40;
}
.menuNavBurger {
  display: none;
  height: 100%;
}
@media (max-width: 780px) {
  header {
    width: 100vw;
    height: 50px;
    position: fixed;
    top: 0;
    background-color: rgb(14, 20, 27, 0.9);
  }
  .header-content {
    justify-content: space-between;
  }
  .menuNav {
    display: none;
  }
  .menuNavBurger {
    position: relative;
    height: 40px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
}
</style>
