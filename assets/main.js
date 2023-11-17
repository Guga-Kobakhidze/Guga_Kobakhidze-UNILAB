// Pop Up

const forPopUp = document.querySelectorAll(".card_button");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close_button");
const popUpDiv = document.querySelector(".popUp");

forPopUp.forEach((popup) => {
  popup.addEventListener("click", (e) => {
    e.preventDefault();

    popUpDiv.style.top = "50%";
    overlay.style.display = "block";
  });
});

closeBtn.addEventListener("click", () => {
  popUpDiv.style.top = "-500%";
  overlay.style.display = "none";
});

overlay.addEventListener("click", () => {
  popUpDiv.style.top = "-500%";
  overlay.style.display = "none";
});

// Timer

const timerSection = document.querySelectorAll(".timer");
const deleteSale = document.querySelectorAll(".delete_sale");
const lastPrice = document.querySelector(".last_price");

let timer = 20;

function countDown() {
  timerSection.forEach((section) => {
    section.innerHTML = `${timer} seconds`;
  });
  if (timer > 0) {
    timer--;
    setTimeout(countDown, 1000);
  } else {
    timerSection.forEach((section) => {
      section.innerHTML = "Not for sale";
    });
    deleteSale.forEach((sale) => {
      sale.style.display = "none";
    });
    lastPrice.style.display = "none";
  }
}

countDown();
