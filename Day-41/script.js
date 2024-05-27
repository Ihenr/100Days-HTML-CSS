const btn = document.querySelector(".button");
const messege = document.querySelector(".alert");

btn.addEventListener("click", () => {
  messege.classList.toggle("hide");
});
