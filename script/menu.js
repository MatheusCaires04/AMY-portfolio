// MENU ASIDE
document.querySelector(".menu").addEventListener("click", () => {
  const menu = document.querySelector(".menu__left");
  const body = document.querySelector("html");

  menu.classList.toggle("active");
  body.classList.toggle("body__hidden");
});

document.querySelector(".close__menu").addEventListener("click", () => {
  const menu = document.querySelector(".menu__left");
  const body = document.querySelector("html");

  menu.classList.toggle("active");
  body.classList.toggle("body__hidden");
});

const linkMenu = document.querySelectorAll(".link__menu");

function removeLink() {
  const menu = document.querySelector(".menu__left");

  menu.classList.toggle("active");
}

linkMenu.forEach((i) => i.addEventListener("click", removeLink));
