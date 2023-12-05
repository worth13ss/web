const menuBtn = document.querySelector(".menu__button");
const menu = document.querySelector(".drop-menu")

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});