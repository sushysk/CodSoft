document.addEventListener("DOMContentLoaded", () => {
  ScrollReveal().reveal(".header__content h1", {
    delay: 200,
    duration: 1000,
    origin: "top",
    distance: "50px",
  });

  ScrollReveal().reveal(".header__content p", {
    delay: 400,
    duration: 1000,
    origin: "left",
    distance: "50px",
  });

  ScrollReveal().reveal(".header__content form", {
    delay: 600,
    duration: 1000,
    origin: "bottom",
    distance: "50px",
  });

  ScrollReveal().reveal(".header__image img", {
    delay: 800,
    duration: 1000,
    origin: "right",
    distance: "50px",
  });
});
