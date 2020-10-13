// Geziel
const textInput = document.getElementById('text-input');
const memeInsert = document.getElementById('meme-insert');
const img = document.querySelector('img');

textInput.addEventListener('input', function () {
  const textImage = document.getElementById('meme-text');
  textImage.innerHTML = textInput.value;
});

// Uploading image
memeInsert.addEventListener('input', function () {
  img.id = 'meme-image';
  img.src = URL.createObjectURL(this.files[0]);
});

// botões
const button1 = document.getElementById('fire');
button1.addEventListener('click', function () {
  document.getElementById('meme-image-container').style.border = '3px dashed red';
});

const button2 = document.getElementById('water');
button2.addEventListener('click', function () {
  document.getElementById('meme-image-container').style.border = '5px double blue';
});

const button3 = document.getElementById('earth');
button3.addEventListener('click', function () {
  document.getElementById('meme-image-container').style.border = '6px groove green';
});

// let memeInsert = document.querySelector("#meme-insert");
// let img = document.querySelector("img");

// let button1 = document.getElementById("button1");
// let button2 = document.getElementById("button2");
// let button3 = document.getElementById("button3");
// let container = document.getElementById("meme-image-container");
// let imageContainer = document.querySelector('#meme-text');

// let text = document.querySelector('#text-input');

// // Write on img, oninput HTML
// function writeOnImg() {
//   imageContainer.innerHTML = text.value;
//   }

// // Button 1 - border type
// button1.addEventListener("click", function(){
//   container.style.border = "3px dashed red";
// })
// // Button 2 - border type
// button2.addEventListener("click", function(){
//   container.style.border = "5px double blue";
// })
// // Button 3 - border type
// button3.addEventListener("click", function(){
//   container.style.border = "6px groove green";
// })
