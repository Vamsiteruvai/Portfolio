// Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

var typed = new Typed("#typed-role", {
    strings: ["Fullstack Developer", "Frontend Developer", "Backend Developer", "Java Programmer"],
    typeSpeed: 80,      // typing speed
    backSpeed: 50,      // deleting speed
    backDelay: 1500,    // pause before deleting
    loop: true,         // repeat forever
    showCursor: true,   // blinking cursor
    cursorChar: "|"     // cursor style
  });