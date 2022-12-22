const openHamburgerBtn = document.querySelector(".open-mobile-menu");
const closeHamburgerBtn = document.querySelector(".close-mobile-menu");
const mobileMenu = document.querySelector(".nav-links");
const documentBody = document.body;

openHamburgerBtn.addEventListener("click", () => {
  openHamburgerBtn.classList.add("hidden");
  closeHamburgerBtn.classList.remove("hidden");
  mobileMenu.classList.remove("mobile-shifted-right");
  documentBody.classList.add("darkened")
})

closeHamburgerBtn.addEventListener("click", () => {
  openHamburgerBtn.classList.remove("hidden");
  closeHamburgerBtn.classList.add("hidden");
  mobileMenu.classList.add("mobile-shifted-right");
  documentBody.classList.remove("darkened")
})