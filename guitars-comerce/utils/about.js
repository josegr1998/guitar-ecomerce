const infoContainers = [
  ...document.querySelectorAll(".about-specific-container"),
];
const btnContainer = document.querySelector(".about-btn-container");
const btns = document.querySelectorAll(".about-btn");

btnContainer.addEventListener("click", (e) => {
  const btnID = e.target.dataset.id;
  if (e.target.classList.contains("about-btn")) {
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
  }

  infoContainers.forEach((container) => {
    container.classList.remove("active");
  });
  infoContainers.filter((container) => {
    if (container.id === btnID) {
      container.classList.add("active");
    }
  });
});
