let iconLocation = document.querySelector(".location");
let card = document.querySelector(".card");
let actions = document.querySelector(".actions");

iconLocation.addEventListener("click", () => {
  iconLocation.classList.toggle("inactive");
  card.classList.toggle("active");

  iconLocation.style.animation = "none";
});

actions.addEventListener("click", () => {
  iconLocation.classList.toggle("inactive");
  card.classList.toggle("active");
});
