import displayProducts from "../displayproducts.js";

const search = (store) => {
  const filter = document.querySelector(".search-filter");
  const section = document.querySelector(".all-products-container");
  filter.addEventListener("keyup", () => {
    const value = filter.value;
    const newStore = store.filter((item) => {
      if (item.name.toUpperCase().includes(value.toUpperCase())) {
        return item;
      }
    });
    // console.log(newStore);
    if (newStore.length >= 1) {
      displayProducts(newStore, section, false);
    }
    if (newStore.length < 1) {
      section.innerHTML = `<h1 class="no-found">sorry, no products found</h1>`;
    }
    if (newStore.length === store.length) {
      //lo mismo que decir si el value es un empty string
      displayProducts(store, section);
    }
  });
};

export default search;
