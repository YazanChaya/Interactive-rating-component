const card = document.querySelector(".card");

const ratingLi = document.querySelectorAll(".rating li");
ratingLi.forEach((li) => {
  li.addEventListener("click", () => {
    li.classList.add("focus");
  });
});

function addRating() {
  const ratingFocus = document.querySelectorAll(".focus");
  card.innerHTML = `
    <div class="thanks">
        <img src="images/illustration-thank-you.svg" alt="thank-you" />
    </div>
    <div class="rating-result">
        <p>You selected ${ratingFocus.length} out of 5</p>
    </div>
    <div class="thanks-text">
        <h1>Thank you!</h1>
        <p>We appreciate you taking the time to give a rating. If you
        need more support, don’t hesitate to get in touch!
        </p>
    </div>
    `;
}
