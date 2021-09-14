import displayProducts from "../displayproducts.js";

const brands = (store) => {
  //display the buttons

  const container = document.querySelector(".all-products-container");
  const btns = document.querySelectorAll(".filter-brand-btn");
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const newStore = store.filter((item) => {
        if (item.brand === btn.dataset.id) {
          return item;
        }
      });
      if (e.target.dataset.id === "all") {
        displayProducts(store, container, true);
      } else {
        displayProducts(newStore, container);
      }
    });
  });
};

export default brands;
