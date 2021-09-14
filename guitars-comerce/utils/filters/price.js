import displayProducts from "../displayproducts.js";

const price = (store) => {
  const section = document.querySelector(".all-products-container");
  const input = document.querySelector(".price-filter");
  const value = document.querySelector(".price-value");

  let maxPrice = store.map((item) => {
    return parseInt(item.price);
  });
  maxPrice = Math.max(...maxPrice);
  maxPrice = Math.ceil(maxPrice / 100);
  input.max = maxPrice;
  input.min = 0;
  input.value = maxPrice;
  value.textContent = `price : $ ${input.value}`;

  input.addEventListener("input", (e) => {
    value.textContent = `price : $ ${input.value}`;
    const newStore = store.filter((item) => {
      if (item.price <= input.value * 100) {
        return item;
      }
    });
    if (newStore.length < 1) {
      section.innerHTML = `<h1 class="no-found">sorry, no products found</h1>`;
    } else {
      displayProducts(newStore, section);
    }
  });
};

export default price;
