const panel = document.querySelector("#panel");
const ratingContainer = document.querySelector(".rating-container");
const ratingBoxes = document.querySelectorAll(".rating");
const sendBtn = document.querySelector("#send");

let feedback = "Satisfied";

panel.addEventListener("click", (e) => {
  if (e.target.parentElement.classList.contains("rating")) {
    removeActive();
    let text = e.target.parentElement.querySelector("small").innerText;
    feedback = text;
    e.target.parentElement.classList.add("active");
  }
  if (e.target.classList.contains("rating")) {
    removeActive();
    let text = e.target.querySelector("small").innerText;
    feedback = text;
    e.target.classList.add("active");
  }

  if (e.target.id == "send") {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${feedback}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `;
  }
});

function removeActive() {
  ratingBoxes.forEach((box) => {
    box.classList.remove("active");
  });
}
