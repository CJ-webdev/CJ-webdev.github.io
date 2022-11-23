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
const aRemove1 = document.querySelector(".a-remove-1");
const aRemove2 = document.querySelector(".a-remove-2");
const aRemove3 = document.querySelector(".a-remove-3");

openBtn.addEventListener("click", (e) => {
  section0.setAttribute("id", "open-section-0");
});

closeBtn.addEventListener("click", (e) => {
  section0.removeAttribute("id", "open-section-0");
});

aRemove1.addEventListener("click", (e) => {
  section0.removeAttribute("id", "open-section-0");
});

aRemove2.addEventListener("click", (e) => {
  section0.removeAttribute("id", "open-section-0");
});

aRemove3.addEventListener("click", (e) => {
  section0.removeAttribute("id", "open-section-0");
});
