// 1) Declare the variables:

let textInput = document.getElementById('text-input');
let imageInput = document.getElementById('meme-insert');
let container = document.getElementById('meme-image-container');
let memeImage = document.getElementById('meme-image');
let memeText = document.getElementById('meme-text');
let img = document.querySelector('img');

// 2) Define the functions:

// To load the image file:
function loadFile(event) {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = function() {
    URL.revokeObjectURL(memeImage.src) // free memory
  }
}

// To write the text on the image:
function writeText() {
  textInput.setAttribute('maxlength', 60);
  memeText.innerHTML = textInput.value;
}
textInput.value = "";