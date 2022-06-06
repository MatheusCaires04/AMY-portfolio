const btn = document.querySelector(".btn__top");

document.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    btn.style.display = "flex";
  } else {
    btn.style.display = "none";
  }
});

btn.addEventListener("click", () => {
  window.scrollY = 0;
});
