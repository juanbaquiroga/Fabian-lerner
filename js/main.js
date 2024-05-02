const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 400,
  spaceBetween: 30,
  autoplay: true,
  disableOnInteraction: true,
  delay: 5000,
  initialSlide: 4,

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
    320: {
      slidesPerView: 1,
    },
    750: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1500: {
      slidesPerView: 4,
    },
  },
});

function toggleNav() {
  let nav = document.getElementById("header");
  if (nav.className === "header") {
    nav.className = "responsiveHeader";
  } else {
    nav.className = "header";
  }
}

function closeNav() {
  let nav = document.getElementById("header");
  nav.className = "header";
}


const section = document.querySelector(".glaucoma"),
overlay = document.querySelector("#overlay"),
showBtn = document.querySelector(".button-show-glaucoma-modal"),
closeBtn = document.querySelector(".button-close-glaucoma-modal");

showBtn.addEventListener("click", () => section.classList.add("glaucoma-active"));

overlay.addEventListener("click", () =>
section.classList.remove("glaucoma-active")
);

closeBtn.addEventListener("click", () =>
section.classList.remove("glaucoma-active")
);