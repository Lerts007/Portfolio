document.addEventListener("DOMContentLoaded", function () {
  const blocks = document.querySelectorAll(".scrollContent");

  function checkBlocksVisibility() {
    let windowHeight = window.innerHeight;

    blocks.forEach((block) => {
      let blockPositionTop = block.getBoundingClientRect().top;
      let blockPositionBottom = block.getBoundingClientRect().bottom;

      console.log("TOP: " + blockPositionTop);
      console.log("BOTTOM: " + blockPositionBottom);
      //   console.log("windowHeight: " + windowHeight);

      if (blockPositionTop < windowHeight) {
        block.style.opacity = "1";
        block.style.transform = "translateY(0)";
      }

      if (blockPositionTop >= windowHeight) {
        block.style.opacity = "0";
        block.style.transform = "translateY(150px)";
      }
    });
  }

  checkBlocksVisibility();

  window.addEventListener("scroll", function () {
    checkBlocksVisibility();
  });

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
});
