const input = document.getElementById("google");
const completador = document.querySelector(".autocomplete");

completador.style.visibility = "hidden";

input.addEventListener("input", function () {
  if (this.value != "") {
    completador.style.visibility = "visible";
  } else {
    completador.style.visibility = "hidden";
  }

  var primerElemento = document.querySelector(".autocomplete a:nth-of-type(1)");
  var segundoElemento = document.querySelector(
    ".autocomplete a:nth-of-type(2)"
  );
  var terceroElemento = document.querySelector(
    ".autocomplete a:nth-of-type(3)"
  );

  primerElemento.innerHTML = this.value;
  segundoElemento.innerHTML = "Veritatis et " + this.value;
  terceroElemento.innerHTML = "ut aliquid ext " + this.value + " vero eos";
});
