const numberElement = document.querySelector(".fadeIn");
const plusElement = document.querySelector(".plus");
const minusElement = document.querySelector(".minus");
let count = 0;

plusElement.addEventListener("click", function () {
  count++;
  numberElement.textContent = count;
});
minusElement.addEventListener("click", function () {
  if (count > 0) {
    count--;
    numberElement.textContent = count;
  }
});
