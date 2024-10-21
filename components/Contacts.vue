<template>
  <div
    class="сontact"
    :class="{ activContact: activ }"
    @click.stop="closeBlock($event)"
  >
    <div class="contactBlock">
      <div class="closeContact" @click="$emit('update:activ', false)">
        <icon-s-v-g-icon-close />
      </div>
      <h3>Контакты</h3>
      <ul class="formContact__ul">
        <li>
          <icon-s-v-g-icon-phone />
          <a href="tel:+79268650820">8-(926)-865-08-20</a>
        </li>
        <li>
          <icon-s-v-g-icon-mail />
          <a href="mailto:oddff@mail.ru">oddff@mail.ru</a>
        </li>
      </ul>
      <div class="links">
        <a href="https://t.me/Lerts_D" target="_blank">
          <icon-s-v-g-icon-telegram />
        </a>
        <a href="https://github.com/Lerts007" target="_blank">
          <icon-s-v-g-icon-git-hub />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["activ"]);
const emit = defineEmits();
const closeBlock = (event) => {
  const clickedElement = event.target;
  const targetElement = event.currentTarget;

  if (clickedElement === targetElement) {
    emit("update:activ", false);
  }
};
</script>

<style lang="scss" scoped>
.сontact {
  display: none;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba($color: #fff, $alpha: 0.3);
}
.activContact {
  display: block;

  & :deep(html) {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
}
.noScrol {
  overflow-y: scroll;
}
.contactBlock {
  position: absolute;
  top: calc(50% - 83px);
  left: calc(50% - 160px);
  width: 320px;
  padding: 15px;
  text-align: center;
  background-color: $bg-html;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px $color-text-accent,
    0 2px 4px -2px $color-text-accent;
  & h3 {
    margin-bottom: 10px;
  }
  & li {
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0px;
    }
  }
}
.links {
  margin-top: 10px;
}
.links path {
  transition: fill 0.5s;
}

.сontact {
  & li {
    margin-right: 20px;
    list-style-type: none;
    transition: color 0.5s;
    cursor: pointer;
  }
  & li path {
    transition: fill 0.5s;
  }
  & li a {
    transition: color 0.5s;
  }
  & li:last-child {
    margin-right: 0;
  }
  @media (hover: hover) {
    & li:hover {
      color: $color-text-accent;
    }
    & li:hover a {
      color: $color-text-accent;
    }
    & li:hover path {
      fill: $color-text-accent;
    }
    .links svg:hover path {
      fill: $color-text-accent;
    }
  }
}
.closeContact {
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
}
.modalOpen {
  overflow: hidden;
}
</style>
