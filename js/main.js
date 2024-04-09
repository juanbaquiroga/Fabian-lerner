const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 400,
  spaceBetween: 30,
  autoplay: true,
  disableOnInteraction: true,
  delay: 5000,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    600: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
