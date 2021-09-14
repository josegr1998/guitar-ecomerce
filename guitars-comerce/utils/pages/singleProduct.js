import "../toggleNav.js";
import "../toggleCart.js";
import "../navBar.js";
import { getStorage } from "../utils.js";
import { store } from "../fetchAllProducts.js";
import { addToCart } from "../cart/setupCart.js";
const titleDOM = document.querySelector(".single-product-title-single");
const bigImgDOM = document.querySelector(".big-img");
const smallImgContainer = document.querySelector(".small-img-container");
const colorContainer = document.querySelector(".color-container");
const specificsList = document.querySelector(".specifics-list");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-img");
const modalClose = document.querySelector(".modal-close-btn");
const rightBtn = document.querySelector(".fa-chevron-right");
const leftBtn = document.querySelector(".fa-chevron-left");
const addToCartBtnDOM = document.querySelector(".add-to-cart-container");

const displaySingleProduct = () => {
  const id = getStorage("id");
  const product = store.find((item) => {
    if (item.id == id) {
      return item;
    }
  });
  console.log(product);
  const { name, id: productID, img, specs, color } = product;
  //definir lo que va a llevar cada elemento de la pagina adentro
  titleDOM.textContent = name;
  bigImgDOM.src = img[0];

  //small img
  const smallImgHTML = img
    .map((img) => {
      return ` <img src="${img}" alt="" class="small-img" />`;
    })
    .join("");
  smallImgContainer.innerHTML = smallImgHTML;

  //colors btns
  const colorHTML = color
    .map((color) => {
      return ` <button class="color ${color}"></button>`;
    })
    .join("");
  colorContainer.innerHTML = colorHTML;

  //list
  const specsListHTML = specs
    .map((spec) => {
      return `<li>
              <p class="specific-list-item">${spec}</p>
            </li>`;
    })
    .join("");

  specificsList.innerHTML = specsListHTML;

  //gallery functionality
  const smallImgs = document.querySelectorAll(".small-img");
  smallImgs.forEach((img) => {
    img.addEventListener("click", (e) => {
      bigImgDOM.src = e.target.src;
    });
  });

  //modal
  bigImgDOM.addEventListener("click", (e) => {
    modal.classList.add("active");
    modalImg.src = e.target.src;
    modalClose.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  });

  //change img

  let counter = 0;

  rightBtn.addEventListener("click", () => {
    counter++;
    if (counter > smallImgs.length - 1) {
      counter = 0;
    }
    modalImg.src = smallImgs[counter].src;
  });
  leftBtn.addEventListener("click", () => {
    counter--;
    if (counter < 0) {
      counter = smallImgs.length - 1;
    }
    modalImg.src = smallImgs[counter].src;
  });

  //add to cart
  const btn = `<button class="addToCartSingleProduct" data-id="${productID}">
              Add to cart
            </button>`;
  addToCartBtnDOM.innerHTML = btn;
  const addBtn = document.querySelector(".addToCartSingleProduct");
  addBtn.addEventListener("click", () => {
    addToCart(addBtn.dataset.id);
  });
};

displaySingleProduct();
