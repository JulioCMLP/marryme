const divButtons = document.getElementById("div-buttons");
const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yes-button");
const congratulationsContainer = document.getElementById(
  "congratulations-container"
);

noButton.addEventListener("mouseover", (e) => {
  divButtons.classList.toggle("div-buttons");
  console.log("over");
});

yesButton.addEventListener("click", (e) => {
  e.preventDefault();
  congratulationsContainer.innerHTML = `
    <span class="congratulations-box">
        <p class="congratulations-title">Great!!!</p>
        <p class="congratulations-subtitle">
        You have made the best decision. Love and be happy!!!!
        </p>
        <hr class="congratulations-separator"/>
        <p class="congratulations-message">Congratulations!</p>
    </span>
  `;
});