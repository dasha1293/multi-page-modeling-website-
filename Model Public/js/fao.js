document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = button.getAttribute("data-target");

      const targetContent = document.getElementById(targetId);

      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      if (targetContent) {
        button.classList.add("active");
        targetContent.classList.add("active");
      }
    });
  });
});
