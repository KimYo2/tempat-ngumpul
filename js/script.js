// Togle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketitika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar navbar untuk menghilangkan nav
const hambburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hambburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
