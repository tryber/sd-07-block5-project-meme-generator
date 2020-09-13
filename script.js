let caixaDeTexto = document.getElementById("text-input");
let textoDiv = document.getElementById("meme-text");

caixaDeTexto.addEventListener("keyup", function () {
  textoDiv.innerHTML = caixaDeTexto.value;
})

//Método tirado do link: https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977

var loadFile = function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById('meme-image');
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};

let borderColorButtons = document.querySelectorAll("#btns-container>ul>li>button");

for (let i = 0; i < borderColorButtons.length; i += 1) {
  if (i == 0){
    borderColorButtons[i].addEventListener("click", function () {
        let content = document.getElementById("meme-image-container");
        content.style.border = "3px dashed red";
      })
  } else if (i == 1){
    borderColorButtons[i].addEventListener("click", function () {
        let content = document.getElementById("meme-image-container");
        content.style.border = "5px double blue";
      })
  } else {
    borderColorButtons[i].addEventListener("click", function () {
        let content = document.getElementById("meme-image-container");
        content.style.border = "7px groove green";
      })
  }
}

