<template>
  <section id="portfolio">
    <div class="portfolio-content content scrollContent">
      <h3>Мои проекты</h3>
      <div class="portfolioCard">
        <ProjectCard
          v-for="(project, index) in Projects"
          :key="index"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const Projects = [
  {
    title: "To do list",
    img: "/projects/To-do-list.png",
    linkCode: "https://lerts007.github.io/To-do_list/",
    linkWebSite: "https://github.com/Lerts007/To-do_list",
    description: [
      "На странице отображается список всех продуктов",
      "Имеется возможность добавить в список новый продукт",
      "Для каждого продукта имеется возможность “вычеркнуть” его, после чего название продукта становится зачеркнутым и продукт помещается в конец списка",
      "Имеется возможность удалить продукт",
      "Все действия на сайте происходят без перезагрузки страницы",
      "После перезагрузки страницы состояние списка продуктов сохраняется",
    ],
  },
  {
    title: "SPA-elevator",
    img: "/projects/SPA-elevator.png",
    linkCode: "https://lerts007.github.io/SPA-Elevator/",
    linkWebSite: "https://github.com/Lerts007/SPA-Elevator",
    description: [
      "Имитация работы лифта",
      "Можно изменять кол-во лифтов (4 макс) и кол-во этажей (10 макс)",
      "Близжайший свободный лифт едет на вызванный этаж",
      "На этаже вызова лифт задерживается на 3 сек. (Лифт мигает синим цветов)",
      "Если этаж стоит в очереди вызова и мимо проезжает лифт, то лифт останавливается",
      "У каждого лифта есть индикатор направления движения",
      "У кнопки вызова есть три состония: Синия - не активна; Розовый - лифт едет на этаж; Зеленая - этаж в очереди",
      "Все действия на сайте происходят без перезагрузки страницы",
    ],
  },
  {
    title: "SPA с использованием API reqres.in",
    img: "/projects/web_application_of_users.png",
    linkCode: "https://lerts007.github.io/web_application_of_users/",
    linkWebSite: "https://github.com/Lerts007/web_application_of_users",
    description: [
      "Получение списĸа пользователей с URL-адреса https://reqres.in/api/users?page=1",
      "Обработĸа ответа с сервера, валидация полученного списĸа",
      "Сохранение списĸа пользователей в Local Storage",
      "Отображение пользователей в виде ĸарточеĸ",
      "При нажатии на элемент списĸа  поĸазывать в диалоговом оĸне подробную информацию по выбранному пользователю",
      "Редаĸтирование данных отдельного пользователя",
      "Удаление пользователей",
      "Обновление списĸа пользователей с сервера (загрузĸа с reqres.in)",
    ],
  },
  {
    title: "SPA с использованием API openweathermap.org",
    img: "/projects/WeatherAPIVue.png",
    linkCode: "https://lerts007.github.io/WeatherAPIVue/",
    linkWebSite: "https://github.com/Lerts007/WeatherAPIVue",
    description: [
      "Получение дынных о погоде с URL-адреса https://openweathermap.org/",
      "В поисковой строке ввдится название населеннго пункты",
      "После предлагается выбрать один из нескольких вариантов",
      "Погода выводится на 5 дней веперед",
    ],
  },
  {
    title: "Landing page webStore",
    img: "/projects/webStore.png",
    linkCode: "https://lerts007.github.io/webStoreLandingPage/",
    linkWebSite: "https://github.com/Lerts007/webStoreLandingPage",
    description: [
      "Создать LandingPage по макету из Figma",
      "Подключить API YandexMap, с небольшой стилизацией",
    ],
  },
];
</script>

<style lang="scss" scoped>
#portfolio {
  padding-top: 100px;
  padding-bottom: 100px;
  & h3 {
    @include Rubik40;
    text-align: center;
  }
}
.portfolioCard {
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
}
.portfolioCard {
  gap: 40px;
}

@media (max-width: 520px) {
  #portfolio {
    padding-top: 25px;
    padding-bottom: 25px;
    & h3 {
      font-size: 30px;
    }
  }
}
</style>
