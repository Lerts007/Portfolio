document.addEventListener("DOMContentLoaded", function () {
  const blocks = document.querySelectorAll(".scrollContent");
  const slideLi = document.querySelectorAll(".slide-li"); // ДЛЯ БОКОВОГО МЕНЮ
  const headerMenuNav = document.querySelectorAll("header-menuNav");

  blocks[0].style.opacity = "1";
  blocks[0].style.transform = "translateY(0)";

  function checkBlocksVisibility() {
    let windowHeight = window.innerHeight;

    blocks.forEach((block, index) => {
      let blockPositionTop = block.getBoundingClientRect().top;

      //АНИМАЦИЯ ПОЯВЛЕНИЯ БЛОКОВ
      if (block != blocks[0]) {
        if (blockPositionTop < windowHeight) {
          block.style.opacity = "1";
          block.style.transform = "translateY(0)";
        }

        if (blockPositionTop >= windowHeight) {
          block.style.opacity = "0";
          block.style.transform = "translateY(150px)";
        }
      }

      // АНИМАЦИЯ ИЗМЕНЕНИЯ ЦВЕТА У БОКОВОГО МЕНЮ

      if (blockPositionTop < windowHeight / 2) {
        activSlideLi(slideLi[index]);
      }
    });
  }

  // checkBlocksVisibility();

  window.addEventListener("scroll", function () {
    checkBlocksVisibility();
  });

  /*БУРГЕР МЕНЮ*/
  const burger = document.querySelector(".burger");
  const line1 = document.querySelector(".burger__line1");
  const line2 = document.querySelector(".burger__line2");
  const line3 = document.querySelector(".burger__line3");
  const menu = document.querySelector(".menuNavBurger-ul");

  burger.addEventListener("click", () => {
    line1.classList.toggle("line-45deg");
    line2.classList.toggle("linenone");
    line3.classList.toggle("line45deg");
    menu.classList.toggle("burgerActiv");
  });

  menu.addEventListener("click", () => {
    line1.classList.toggle("line-45deg");
    line2.classList.toggle("linenone");
    line3.classList.toggle("line45deg");
    menu.classList.toggle("burgerActiv");
  });

  /*БОКОВОЕ МЕНЮ */

  slideLi.forEach((e, index) => {
    // СОБЫТИЕ НАВЕДЕНИЯ
    e.addEventListener("mouseover", () => {
      if (e.childNodes[1].classList.contains("slide-rotate"))
        e.children[0].style.cssText = `
      border: 3px solid rgba(61, 199, 241, 0.6);`;
    });
    //СОБЫТИЕ ОТВЕДЕНИЯ
    e.addEventListener("mouseout", () => {
      if (e.childNodes[1].classList.contains("slide-rotate"))
        e.children[0].style.cssText = `
      border: 3px solid rgba(61, 199, 241, 0.2);`;
    });
    //СОБЫТИЕ КЛИКА И ПЕРЕХОДА К РАЗДЕЛУ
    e.addEventListener("click", () => {
      blocks[index].scrollIntoView({ block: "center", behavior: "smooth" });
      // activSlideLi(e);
    });
  });

  headerMenuNav.forEach((e, index) => {
    blocks[index + 1].scrollIntoView({ block: "center", behavior: "smooth" });
  });

  function activSlideLi(e) {
    slideLi.forEach((e) => {
      e.childNodes[1].classList.remove("slide-rotate-active");
      e.childNodes[1].classList.add("slide-rotate");
    });
    e.childNodes[1].classList.toggle("slide-rotate");
    e.childNodes[1].removeAttribute("style");
    e.childNodes[1].classList.toggle("slide-rotate-active");
  }
});
