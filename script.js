//  https://github.com/Marxneves/Trybe/blob/master/Projetos/meme-generator/script.js
const inputText = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
inputText.addEventListener('input', function () {
  memeText.innerText = inputText.value;
});

const inputImage = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');
inputImage.addEventListener('change', function (event) {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
});
