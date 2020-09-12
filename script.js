let caixaTexto = document.querySelector("#text-input");
let saidaTexto = document.querySelector("#meme-text");

function insertText() {
  saidaTexto.innerText = caixaTexto.value;
}

caixaTexto.addEventListener("keyup", insertText);

let image = document.getElementById("meme-insert");
let loadFile = function (event) {
  let image = document.getElementById("meme-image");
  image.src = URL.createObjectURL(event.target.files[0]);
  image.onload = function () {
    URL.revokeObjectURL(image.src);
  };
};
