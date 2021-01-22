const menuBurger = document.querySelector(".menu-burger");
const burgerItems = document.querySelector(".nav-items__wrapper");

menuBurger.addEventListener("click", () => handleChangeBurger());

const handleChangeBurger = () => {
  menuBurger.classList.toggle("open");
  burgerItems.classList.toggle("open");
};
