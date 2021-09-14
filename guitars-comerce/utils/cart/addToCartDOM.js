const addToCartDOM = (product) => {
  const { id, amount, name, price } = product;
  const img = product.img[0];
  const section = document.querySelector(".items-container");
  const article = document.createElement("article");
  article.classList.add("single-item");
  const sectionHTML = `    <img src="${img}" class="item-img" alt="${name}" />
            <div class="item-info">
              <p class="item-title">${name}</p>
              <p class="item-price">$ ${price / 100}</p>
              <button class="remove-item" data-id="${id}">remove</button>
            </div>
            <div class="item-amount">
              <button class="amount-btn-up" data-id = "${id}">
                <i class="fas fa-chevron-up"></i>
              </button>
              <p class="item-amount-value" data-id="${id}">${amount}</p>
              <button class="amount-btn-down" data-id = "${id}">
                <i class="fas fa-chevron-down" ></i>
              </button>
              
            </div>`;
  article.innerHTML = sectionHTML;
  section.appendChild(article);
};
export default addToCartDOM;
