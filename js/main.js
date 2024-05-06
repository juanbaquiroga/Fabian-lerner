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

const swiper2 = new Swiper(".swiper-books", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 400,
  spaceBetween: 10,
  autoplay: true,
  disableOnInteraction: true,
  delay: 6000,

  pagination: {
    el: ".swiper-pagination-books",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next-books",
    prevEl: ".swiper-button-prev-books",
  },

  breakpoints: {
    330: {
      slidesPerView: 1,
    },
    670: {
      slidesPerView: 3,
    },
    900: {
      slidesPerView: 3,
    }
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

let mysBtn = document 
    .getElementById('scrollbuttonid'); 
  
window.addEventListener('scroll', function () { 
    if (document.body.scrollTop > 20 
        || document.documentElement.scrollTop > 20) { 
        mysBtn.style.display = 'block'; 
    } else { 
        mysBtn.style.display = 'none'; 
    } 
}); 