// classList - shows/gets all classes
const navToggleBtn = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".links");

navToggleBtn.addEventListener("click", function () {
  navLinks.classList.toggle("show-links");
});
