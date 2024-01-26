const slideLi = document.querySelectorAll(".slide-li");
const blocks = document.querySelectorAll(".scrollContent");

slideLi.forEach((e, index) => {
  e.addEventListener("mouseover", () => {
    console.log(e.childrenparent);
    e.children[0].style.cssText = `
      border: 3px solid rgba(61, 199, 241, 0.6);`;
  });
  e.addEventListener("mouseout", () => {
    e.children[0].style.cssText = `
      border: 3px solid rgba(61, 199, 241, 0.2);`;
  });
  e.addEventListener("click", () => {
    console.log(blocks);
    const rect = blocks[index].getBoundingClientRect();
    window.scrollTo({
      top: rect.top + window.scrollY - window.innerHeight / 2,
      behavior: "smooth",
    });
    console.log(`${rect.top}, ${window.scrollY}`);
  });
  console.log(e.children[1]);
});
