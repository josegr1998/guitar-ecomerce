const btns = document.querySelectorAll(".review-btn");
const imgDOM = document.querySelector(".review-img");
const titleDOM = document.querySelector(".review-title");
const descDOM = document.querySelector(".review-desc");

let counter = 0;

const move = async () => {
  //fetch the reviews info
  const response = await fetch("../api/reviews.json");
  const data = await response.json();

  //default
  const setUpReview = () => {
    imgDOM.src = data[counter].img;
    titleDOM.textContent = data[counter].name;
    descDOM.textContent = data[counter].des;
  };
  setUpReview();

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (e.target.parentElement.classList.contains("next-btn")) {
        counter++;
        if (counter > data.length - 1) {
          counter = 0;
        }
      } else if (e.target.parentElement.classList.contains("prev-btn")) {
        counter--;
        if (counter < 0) {
          counter = data.length - 1;
        }
      }

      setUpReview();
    });
  });
};

move();
