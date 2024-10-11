<template>
  <div class="portfolio-card">
    <div class="portfolio-card-img">
      <img :src="project.img" alt="To-Do list" />
    </div>
    <div class="portfolio-card-info">
      <h2>{{ project.title }}</h2>
      <ul>
        <li v-for="(item, index) in project.description" :key="index">
          {{ item }}
        </li>
      </ul>
      <div class="portfolio-card-btn">
        <a :href="project.linkCode" target="_blank">
          <UIButton :text="'Demo'" />
        </a>
        <a :href="project.linkWebSite" target="_blank">
          <UIButton :text="'GitHub'" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const { project } = defineProps(["project"]);
</script>

<style lang="scss" scoped>
.portfolio-card {
  width: 100%;
  padding: 15px;

  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 20px;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px $color-text-accent,
    0 2px 4px -2px $color-text-accent;
}
.portfolio-card-img {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;

  & img {
    min-width: 100%;
    border-radius: 20px;
  }
}
.portfolio-card-info {
  height: 100%;
  padding: 10px;
  & h2 {
    margin-bottom: 25px;

    text-align: center;
  }

  & ul {
    margin-bottom: 30px;
    & li {
      padding-left: 10px;
      list-style-type: "-";
    }
  }
}
.portfolio-card-btn {
  display: flex;
  justify-content: space-around;
}

@media (max-width: 1050px) {
  .portfolio-card {
    grid-template-columns: 300px 1fr;
  }
  .portfolio-card-info {
    & li {
      font-size: 15px;
    }
  }
}
@media (max-width: 600px) {
  .portfolio-card {
    grid-template-columns: 1fr;
    grid-template-rows: 300px 1fr;
  }
}

@media (max-width: 400px) {
  .portfolio-card {
    grid-template-rows: 200px 1fr;
  }
}
</style>
