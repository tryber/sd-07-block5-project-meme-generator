let textInput = document.querySelector("#text-input");
let container = document.querySelector("#meme-image-container");
let memeImage = document.querySelector("#meme-image");
let memeText = document.querySelector("#meme-text");

function insertText() {
  textInput.setAttribute('maxlength',60);
  textInput.addEventListener("keyup", function () {
  let char = textInput.value;
  memeText.innerHTML = char;
  })
}

let loadFile = function(event) {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = function() {
    URL.revokeObjectURL(memeImage.src)
  }
}