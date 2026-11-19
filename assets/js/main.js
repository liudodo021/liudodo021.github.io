const menuButton = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

if (menuButton && sidebar) {
  menuButton.addEventListener("click", () => {
    const isOpen = sidebar.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "×" : "☰";
  });
}

document.querySelectorAll(".side-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".side-nav a").forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
    if (window.innerWidth <= 800 && sidebar) sidebar.classList.remove("open");
    if (menuButton) {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = "☰";
    }
  });
});

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
