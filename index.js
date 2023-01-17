AOS.init();

var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const section0 = document.querySelector(".section0");

openBtn.addEventListener("click", (e) => {
  section0.setAttribute("id", "open-section-0");
});

closeBtn.addEventListener("click", (e) => {
  section0.removeAttribute("id", "open-section-0");
});
