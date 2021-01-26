const menuBurger = document.querySelector(".menu-burger");
const burgerItems = document.querySelector(".nav-items__wrapper");

const buttonHero = document.getElementById("button-hero");
const buttonFeatures = document.getElementById("button-features");
const buttonCapabilities = document.getElementById("button-capabilities");
const buttonHelpUs = document.getElementById("button-help-us");
const buttonStartEnterprise = document.getElementById(
  "button-start_enterprise"
);

const sectionHero = document.querySelector(".hero");
const sectionFeatures = document.querySelector(".features");
const sectionCapabilities = document.querySelector(".capabilities");
const sectionHelpUs = document.querySelector(".help-us ");
const sectionStartEnterprise = document.querySelector(".start_enterprise");

menuBurger.addEventListener("click", handleChangeBurger);
// buttonHero.addEventListener("click", scrollToSection(sectionHero));
// buttonFeatures.addEventListener("click", scrollToSection(sectionFeatures));
// buttonCapabilities.addEventListener(
//   "click",
//   scrollToSection(sectionCapabilities)
// );
// buttonHelpUs.addEventListener("click", scrollToSection(sectionHelpUs));
// buttonStartEnterprise.addEventListener(
//   "click",
//   scrollToSection(sectionStartEnterprise)
// );

function handleChangeBurger() {
  menuBurger.classList.toggle("open");
  burgerItems.classList.toggle("open");
}

function scrollToSection(section) {
  const sectionPositionY = section.getBoundingClientRect().y;
  console.log(section.getBoundingClientRect());
  return function (event) {
    event.preventDefault();
    console.log(sectionPositionY);
    window.scroll({
      top: sectionPositionY,
      left: 0,
      behavior: "smooth",
    });
  };
}

// contributed.addEventListener("click", () => {
//   window.scrollTo({
//     top: featuresPositionY,
//     behavior: "smooth",
//   });
// });
