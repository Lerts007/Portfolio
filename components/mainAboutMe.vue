<template>
  <section id="aboutMe">
    <div class="aboutMe-content content scrollContent">
      <h3>Обо мне</h3>
      <p class="aboutMe-content__info">
        Я начинающий frontend разработчик увлеченный созданием интерактивных,
        доступных и адаптивных веб-сайтов. В моем портфолио мало проектов, но
        они являются точкой старта в моем путешествии. В своей работе я
        стремлюсь сделать так, чтобы все было сделанно аккуратно, ровно,
        читаемо. Давайте вместе делать веб-страницы, которые не только
        функциональны, но приятны глазу!
      </p>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
#aboutMe {
  padding-top: 100px;
  padding-bottom: 100px;
  & h3 {
    @include Rubik40;
    text-align: center;
  }
}
.aboutMe-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
}
.aboutMe-content__info {
  width: 700px;
}

@media (max-width: 780px) {
  .aboutMe-content__info {
    width: 100%;
  }
}
@media (max-width: 520px) {
  #aboutMe {
    padding-top: 25px;
    padding-bottom: 25px;
    & h3 {
      font-size: 30px;
    }
  }
}
</style>
