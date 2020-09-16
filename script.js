let imageInput = document.getElementById("meme-insert");
let memeImage = document.getElementById("meme-image");
let textInput = document.getElementById("text-input");
let memeText = document.getElementById("meme-text");
let container = document.getElementById("meme-image-container");

textInput.addEventListener("keyup", addText);

function addText()
{
  memeText.innerText = textInput.value;
}

imageInput.addEventListener("change", loadImage);

function loadImage(event) {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = function() {
    URL.revokeObjectURL(memeImage.src);
  }
};

let fireButton = document.getElementById('fire');
fireButton.addEventListener("click", function() {
  container.style.border = "3px dashed red";
});

let waterButton = document.getElementById('water');
waterButton.addEventListener("click", function() {
  container.style.border = "5px double blue";
});

let earthButton = document.getElementById('earth');
earthButton.addEventListener("click", function() {
  container.style.border = "6px groove green";
});

let meme1 = document.getElementById('meme-1');
meme1.addEventListener("click", addPreSetImage);

let meme2 = document.getElementById('meme-2');
meme2.addEventListener("click", addPreSetImage);

let meme3 = document.getElementById('meme-3');
meme3.addEventListener("click", addPreSetImage);

let meme4 = document.getElementById('meme-4');
meme4.addEventListener("click", addPreSetImage);

function addPreSetImage(event) {
  memeImage.src = event.target.src;
}