const navBar = document.querySelector(".nav-container");
const links = document.querySelectorAll(".nav-link");
const linksContainer = document.querySelector(".links-container");

window.addEventListener("scroll", () => {
  const navHeight = navBar.getBoundingClientRect().height;
  const offset = window.pageYOffset;

  if (offset > navHeight) {
    navBar.classList.add("fixed");
  } else {
    navBar.classList.remove("fixed");
  }
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    if (linksContainer.classList.contains("show")) {
      linksContainer.classList.remove("show");
    }
    let elementOffset;
    const id = e.target.dataset.id;
    const element = document.getElementById(id);
    console.log(id);
    console.log(element);
    console.log(e.target);
    if (e.target.dataset.id != `products`) {
      e.preventDefault();
      const navHeight = navBar.getBoundingClientRect().height;

      if (e.target.dataset.id != "faq") {
        elementOffset = element.offsetTop - (navHeight + 64);
      }
      if (e.target.dataset.id == "faq" || e.target.dataset.id == "featured") {
        elementOffset = element.offsetTop - navHeight; //automaticamente los numeros los traduce a px
      }

      window.scrollTo({
        top: elementOffset,
        right: 0,
      });
    }
  });
});
