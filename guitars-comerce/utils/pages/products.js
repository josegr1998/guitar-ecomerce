// import "../navBar.js";
import "../toggleCart.js";
import "../toggleNav.js";
import "../setupStore.js";
import "../cart/setupCart.js";
import { fetchAllProducts, store } from "../fetchAllProducts.js";
import displayProducts from "../displayproducts.js";
import search from "../filters/search.js";
import brands from "../filters/brand.js";
import price from "../filters/price.js";
import { addToCart } from "../cart/setupCart.js";

const container = document.querySelector(".all-products-container");

window.addEventListener("DOMContentLoaded", async () => {
  await fetchAllProducts();
  displayProducts(store, container);

  search(store);
  brands(store);
  price(store);
});
