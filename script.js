const openHamburgerBtn = document.querySelector(".open-mobile-menu");
const closeHamburgerBtn = document.querySelector(".close-mobile-menu");
const mobileMenu = document.querySelector(".nav-links");
const documentBody = document.body;
let ariaExpandedValue = document.querySelector(".open-mobile-menu").getAttribute("aria-expanded");

openHamburgerBtn.addEventListener("click", () => {
  openHamburgerBtn.classList.add("hidden");
  closeHamburgerBtn.classList.remove("hidden");
  mobileMenu.classList.remove("mobile-shifted-right");
  documentBody.classList.add("darkened");
  documentBody.classList.add("stop-scrolling");

  if(ariaExpandedValue == "true") {
    ariaExpandedValue = "false"
  } else {
    ariaExpandedValue = "true"
  }
  
  document.querySelector(".open-mobile-menu").setAttribute("aria-expanded", ariaExpandedValue);
})

closeHamburgerBtn.addEventListener("click", () => {
  openHamburgerBtn.classList.remove("hidden");
  closeHamburgerBtn.classList.add("hidden");
  mobileMenu.classList.add("mobile-shifted-right");
  documentBody.classList.remove("darkened");
  documentBody.classList.remove("stop-scrolling");

  if(ariaExpandedValue == "true") {
    ariaExpandedValue = "false"
  } else {
    ariaExpandedValue = "true"
  }
  
  document.querySelector(".open-mobile-menu").setAttribute("aria-expanded", ariaExpandedValue)
})