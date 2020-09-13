let textInputBox = document.getElementById("text-input");
let memeTextBox = document.getElementById("meme-text");
let memeContainer = document.getElementById("meme-image-container");
let memeImage = document.getElementById("meme-image");

textInputBox.addEventListener("keyup", function () {
  memeTextBox.innerText = textInputBox.value;
});

// Código abaixo inspirado em https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
let loadFile = function (event) {
  let memeImage = document.getElementById("meme-image");
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = function () {
    URL.revokeObjectURL(memeImage.src); // free memory
  };
};

const buttonGreen = document.getElementById("earth");
buttonGreen.addEventListener("click", function () {
  // console.log()
  memeContainer.className = "earth-border";
});

const buttonRed = document.getElementById("fire");
buttonRed.addEventListener("click", function () {
  memeContainer.className = "fire-border";
});

const buttonBlue = document.getElementById("water");
buttonBlue.addEventListener("click", function () {
  memeContainer.className = "water-border";
});

let imgFirstMeme = document.getElementById("meme-1");
imgFirstMeme.addEventListener("click", function () {
  memeImage.src = "imgs/meme1.png"
  //memeImage.src = imgFirstMeme.src;
});

let imgSecondMeme = document.getElementById("meme-2");
imgSecondMeme.addEventListener("click", function () {
  memeImage.src = "imgs/meme2.png"
  //memeImage.src = imgSecondMeme.src;
});

let imgThirdMeme = document.getElementById("meme-3");
imgThirdMeme.addEventListener("click", function () {
  memeImage.src = "imgs/meme3.png"
  //memeImage.src = imgThirdMeme.src;
});

let imgFourthMeme = document.getElementById("meme-4");
imgFourthMeme.addEventListener("click", function () {
  memeImage.src = "imgs/meme4.png"
  //memeImage.src = imgFourthMeme.src;
});