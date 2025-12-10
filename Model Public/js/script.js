const urlParams = new URLSearchParams(window.location.search);
const currentLang =
  urlParams.get("lang") || localStorage.getItem("language") || "ru";
localStorage.setItem("language", currentLang);

document.addEventListener("DOMContentLoaded", () => {
  const languageBtn = document.getElementById("languageBtn");
  const languageSwitcher = document.querySelector(".language-switcher");
  const currentLangSpan = document.querySelector(".current-lang");

  if (currentLangSpan) {
    currentLangSpan.textContent = currentLang.toUpperCase();
  }

  if (languageBtn) {
    languageBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      languageSwitcher.classList.toggle("active");
    });
  }

  document.addEventListener("click", () => {
    if (languageSwitcher) {
      languageSwitcher.classList.remove("active");
    }
  });

  document.querySelectorAll(".language-dropdown a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const lang = link.dataset.lang;
      const currentPage =
        window.location.pathname.split("/").pop() || "index.html";
      window.location.href = currentPage + "?lang=" + lang;
    });
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3.5,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 75,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 25,
    },
    1440: {
      slidesPerView: 3.5,
      spaceBetween: 30,
    },
  },
});

const menuBtn = document.querySelector(".menu-btn");
const headerList = document.querySelector(".header-list");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  headerList.classList.toggle("active");
});

document.querySelectorAll(".header-list-link").forEach((link) => {
  link.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    headerList.classList.remove("active");
  });
});
