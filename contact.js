const btnContact = document.querySelector(".mainHeader-btn__contact");
const blockContact = document.querySelector(".сontact");
const closeContact = document.querySelector(".closeContact");
const body = document.querySelector("body");

btnContact.addEventListener("click", () => {
  blockContact.classList.toggle("activContact");
  body.classList.toggle("modalOpen");
});

closeContact.addEventListener("click", () => {
  blockContact.classList.toggle("activContact");
  body.classList.toggle("modalOpen");
});

blockContact.addEventListener("click", (e) => {
  console.log(e.target.classList[0]);
  if (e.target.classList[0] === "сontact") {
    blockContact.classList.toggle("activContact");
    body.classList.toggle("modalOpen");
  }
});
