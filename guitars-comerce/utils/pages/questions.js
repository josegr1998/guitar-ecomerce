const questions = document.querySelectorAll(".single-question");
const answer = document.querySelectorAll(".answer");
questions.forEach((question) => {
  question.addEventListener("click", (e) => {
    const btn = e.target.parentElement;
    const selectedAnswer = btn.parentElement.nextElementSibling;

    if (selectedAnswer.classList.contains("active")) {
      selectedAnswer.classList.remove("active");
    } else {
      answer.forEach((answer) => {
        answer.classList.remove("active");
      });
      selectedAnswer.classList.add("active");
    }
  });
});
