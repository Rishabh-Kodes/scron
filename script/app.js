document.addEventListener("DOMContentLoaded", function () {
  barba.init({
    transitions: [
      {
        name: "default-transition",
        leave() {
          // create your stunning leave animation here
        },
        enter() {
          // create your amazing enter animation here
        },
      },
    ],
  });
});

function expandNavbar() {
  const navbar = document.querySelector(".navbar");
  const hamburger = document.querySelector(".hamburger");

  navbar.classList.toggle("active");

  if (navbar.classList.contains("active")) {
    hamburger.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  }
}
