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
        <p class="congratulations-title">Excelente!!!</p>
        <p class="congratulations-subtitle">
        Hiciste la mejor decisión. Ámame y se feliz!!!!
        </p>
        <hr class="congratulations-separator"/>
        <p class="congratulations-message">Felicitaciones!</p>
    </span>
  `;
});