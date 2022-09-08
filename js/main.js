const mobileNav = document.querySelector(".nav-icon");
const navHeader = document.querySelector(".header__nav");
const closeNav = document.querySelector(".mobile-icon");


mobileNav.addEventListener("click", function() {
    navHeader.classList.add("open")
})

closeNav.addEventListener("click", function() {
    navHeader.classList.remove("open")
})