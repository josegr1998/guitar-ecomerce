import { fecthItem } from "./utils.js";
const url = "../api/brands.json";
const container = document.querySelector(".products-container");

const init = async () => {
  const brands = await fecthItem(url);
  console.log(brands);
  const containerHTML = brands
    .map((item) => {
      return `<a href="products.html" id="${item.id}" class="single-product">
            <div class="single-product-container ${item.pos}">
              <h4 class="single-product-title">${item.brand}</h4>
            </div>
          </a>`;
    })
    .join("");
  container.innerHTML = containerHTML;
};

init();
