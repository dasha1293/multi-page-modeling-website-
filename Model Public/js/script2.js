document.addEventListener("DOMContentLoaded", () => {
  const slidesTrack = document.getElementById("slides-track");
  const prevButton = document.getElementById("prev-btn");
  const nextButton = document.getElementById("next-btn");
  const slides = slidesTrack ? slidesTrack.querySelectorAll(".slide") : [];

  const stepSize = 2;
  const totalSlides = slides.length;
  const maxIndex = Math.max(totalSlides - stepSize, 0);
  let currentIndex = 0;
  const gapWidth = 20;

  function updateSlider() {
    if (totalSlides < stepSize) {
      prevButton.disabled = true;
      nextButton.disabled = true;
      return;
    }

    const firstSlide = slides[0];
    if (!firstSlide) return;

    const slideWidth = firstSlide.clientWidth;
    const offset = currentIndex * (slideWidth + gapWidth);

    slidesTrack.style.transform = `translateX(-${offset}px)`;
    updateButtons();
  }

  function updateButtons() {
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex >= maxIndex;
  }

  function showNextPage() {
    currentIndex = Math.min(currentIndex + stepSize, maxIndex);
    updateSlider();
  }

  function showPrevPage() {
    currentIndex = Math.max(currentIndex - stepSize, 0);
    updateSlider();
  }

  prevButton.addEventListener("click", showPrevPage);
  nextButton.addEventListener("click", showNextPage);

  updateSlider();
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

var btnss = document.querySelector(".btnn");
btnss.addEventListener("click", () => {
  alert(" Send Application");
});

// if (btnss) {
//   addEventListener("click", () => {
//     alert("hello");
//   });
// } else {
//   console.log("кнокпа не найдена");
// }

document.addEventListener("DOMContentLoaded", function () {
  //  Получаем скрытое поле ввода
  const fileInput = document.getElementById("fileInput");

  //  Получаем ВСЕ кнопки по их КЛАССУ
  const uploadButtons = document.querySelectorAll(".add-photo-button");
  let activeUploadButton = null; // Переменная для хранения ссылки на текущий нажатый квадрат

  uploadButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Запоминаем, какой квадрат был нажат (this = текущая кнопка)
      activeUploadButton = this;

      // Имитируем клик на СКРЫТОМ поле ввода
      fileInput.click();
    });
  });

  fileInput.addEventListener("change", function () {
    if (this.files && this.files[0] && activeUploadButton) {
      const file = this.files[0];
      const reader = new FileReader();

      reader.onload = function (e) {
        const imageUrl = e.target.result;

        const newImage = document.createElement("img");
        newImage.src = imageUrl;
        newImage.alt = "Загруженное фото";
        newImage.style.cssText =
          "width: 100%; height: 100%; object-fit: cover; border-radius: 2px; position: absolute; top: 0; left: 0;";

        activeUploadButton.innerHTML = "";
        activeUploadButton.style.position = "relative";
        activeUploadButton.style.overflow = "hidden";
        activeUploadButton.appendChild(newImage);

        activeUploadButton = null;
      };

      reader.readAsDataURL(file);
    }
    this.value = "";
  });
});
