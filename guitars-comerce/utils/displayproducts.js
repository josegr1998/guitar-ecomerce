import { formatPrice, setStorage } from "./utils.js";
import { addToCart } from "./cart/setupCart.js";

const displayProducts = (array, section) => {
  // console.log(array);
  const sectionHTML = array
    .map((item) => {
      const { brand, id, name, price } = item;
      const img = item.img[0];
      return ` <article class="single-product-container-products ${brand}" data-id="${id}">
            <div class="img-container">
              <img
                src="${img}"
                alt="${name}"
                class="product-image"
              />
            </div>
            <div class="info-container">
              <h4 class="product-name">${name}</h4>
              <h5 class="product-price">${formatPrice(price)}</h5>
            </div>
            <footer class="product-footer">
              <a
                class="product-search-icon"
                href="single-product.html"
                data-id="${id}"
                ><i class="fas fa-search" data-id="${id}"></i
              ></a>
              <button class="product-open-cart" data-id="${id}">
                <i class="fas fa-shopping-cart" data-id="${id}"></i>
              </button>
            </footer>
          </article>`;
    })
    .join("");

  section.innerHTML = sectionHTML;

  const cartBtns = document.querySelectorAll(".product-open-cart");
  const searchBtn = document.querySelectorAll(".product-search-icon");

  cartBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("product-open-cart") ||
        e.target.classList.contains("fa-shopping-cart")
      ) {
        addToCart(e.target.dataset.id);
      }
    });
  });
  searchBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (
        e.target.classList.contains("product-search-icon") ||
        e.target.classList.contains("fa-search")
      ) {
        e.preventDefault();

        window.location.href = `../single-product.html`;
        setStorage("id", e.target.dataset.id);
      }
    });
  });
};

export default displayProducts;
