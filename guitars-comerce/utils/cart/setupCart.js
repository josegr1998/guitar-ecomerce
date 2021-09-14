import { formatPrice, getStorage, setStorage } from "../utils.js";
import { store } from "../fetchAllProducts.js";
import addToCartDOM from "../cart/addToCartDOM.js";

const cartCountDOM = document.querySelector(".p-value");
const checkOutValue = document.querySelector(".checkout");
const cartItemsContainer = document.querySelector(".items-container");

let cart = getStorage("cart");

const addToCart = (id) => {
  openCart();

  let item = cart.find((item) => {
    if (item.id == id) {
      //recordar siempre que el id puede ser de diferentes tipos string o numero
      return item;
    }
  });

  if (!item) {
    let product = store.find((item) => {
      if (item.id == id) {
        return item;
      }
    });
    product = { ...product, amount: 1 };
    cart.unshift(product);
    addToCartDOM(product);
  } else {
    const amount = increaseAmount(id);
    const allCount = [...document.querySelectorAll(".item-amount-value")];
    allCount.filter((item) => {
      if (item.dataset.id == id) {
        item.textContent = amount;
      }
    });
  }

  displayCartItemCount();
  displayCartTotal();

  setStorage("cart", cart);
};

const openCart = () => {
  const closeBtn = document.querySelector(".close-btn");
  const cartBtn = document.querySelector(".cart");
  const cart = document.querySelector(".cart-overlay");

  cart.classList.add("active");
  closeBtn.addEventListener("click", () => {
    cart.classList.remove("active");
  });
};

//display count in the cart notification
const displayCartItemCount = () => {
  const amount = cart.reduce((total, cartItem) => {
    total += cartItem.amount;
    return total;
  }, 0);
  cartCountDOM.textContent = amount;
};

//display total checkout
const displayCartTotal = () => {
  const amount = cart.reduce((total, cartItem) => {
    total += cartItem.price * cartItem.amount;
    return total;
  }, 0);
  checkOutValue.textContent = `checkout : ${formatPrice(amount)}`;
};
//display cart dom when page loads
const displayCartDOM = () => {
  cart.forEach((item) => {
    addToCartDOM(item);
  });
};

//increase amount
const increaseAmount = (id) => {
  let newAmount;
  cart = cart.map((cartItem) => {
    if (cartItem.id == id) {
      newAmount = cartItem.amount + 1;

      cartItem.amount = newAmount;
      return cartItem;
    } else {
      return cartItem;
    }
  });
  return newAmount;
};

//decrease amount
const decreaseAmount = (id) => {
  let newAmount;
  cart = cart.map((item) => {
    if (item.id == id) {
      newAmount = item.amount - 1;
      item.amount = newAmount;
      return item;
    } else {
      return item;
    }
  });
  setStorage("cart", cart);

  return newAmount;
};

//cart functionality
const cartFunctionality = () => {
  cartItemsContainer.addEventListener("click", (e) => {
    const removeID = e.target.dataset.id;
    //for up and down btn
    const btnID = e.target.parentElement.dataset.id;

    if (e.target.classList.contains("remove-item")) {
      cart = cart.filter((item) => {
        if (item.id != removeID) {
          return item;
        } else {
          return;
        }
      });

      e.target.parentElement.parentElement.remove();
    }

    //up btn
    if (e.target.parentElement.classList.contains("amount-btn-up")) {
      const newAmount = increaseAmount(btnID);
      e.target.parentElement.nextElementSibling.textContent = newAmount;
    }
    if (e.target.parentElement.classList.contains("amount-btn-down")) {
      const newAmount = decreaseAmount(btnID);
      e.target.parentElement.previousElementSibling.textContent = newAmount;

      if (newAmount < 1) {
        e.target.parentElement.parentElement.parentElement.remove();
        cart = cart.filter((item) => {
          if (item.id != btnID) {
            return item;
          } else {
            return;
          }
        });
      }
    }
    setStorage("cart", cart);

    displayCartItemCount();

    displayCartTotal();
  });
};

const init = () => {
  displayCartItemCount();
  displayCartTotal();
  displayCartDOM();
  cartFunctionality();
};
init();
//add remove btn
export { addToCart };
