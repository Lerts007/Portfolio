<template>
  <footer>
    <div class="footer-content content">
      <div class="logoFooter">
        <div class="logoFooter-logo">
          <a href="#">
            <img src="../public/Logo.svg" alt="" />
          </a>
          <p class="logoFooter__name">Стрельников Дмитрий</p>
        </div>

        <nav class="menuContact footerLi">
          <ul class="formContact__ul">
            <li>
              <icon-s-v-g-icon-phone />
              <a href="tel:+79268650820">8-(926)-865-08-20</a>
            </li>
            <li>
              <icon-s-v-g-icon-mail />
              <a href="malito:oddff@mail.ru">oddff@mail.ru</a>
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
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
footer {
  padding-top: 100px;
  padding-bottom: 30px;
}
.footer-content {
  display: flex;
  justify-content: space-between;
}
.logoFooter {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.formContact__ul li {
  margin-bottom: 10px;
}
.formContact__ul li:last-child {
  margin-bottom: 0px;
}
.logoFooter-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  & img {
    width: 40px;
  }
}
.links {
  margin-top: 10px;
}
.links path {
  transition: fill 0.5s;
}

svg {
  margin-right: 10px;
  & svg:last-child {
    margin-right: 0;
  }
}

.footerLi {
  & li {
    display: flex;

    margin-right: 20px;
    list-style-type: none;
    transition: color 0.5s;
    cursor: pointer;
  }
  & li svg:deep(path) {
    transition: fill 0.5s;
  }
  & li a {
    transition: color 0.5s;
  }
  & li:last-child {
    margin-right: 0;
  }
  @media (hover: hover) {
    & li:hover,
    & li:hover a {
      color: $color-text-accent;
    }
    & li:hover svg:deep(path),
    .links svg:hover:deep(path) {
      fill: $color-text-accent;
    }
  }
}

@media (max-width: 520px) {
  footer {
    padding-top: 25px;
  }
  .footer-content {
    justify-content: center;
  }
}
</style>
