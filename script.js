// Optional: Toggle mobile menu
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector("nav button");
  const navLinks = document.querySelector("nav .md\\:flex");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("hidden");
    });
  }
});
