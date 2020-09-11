const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const choseFile = document.querySelector('#meme-insert');
const btnFire = document.querySelector('#fire');
const btnWater = document.querySelector('#water');
const btnEarth = document.querySelector('#earth');
const memeImageContainer = document.querySelector('#meme-image-container');
const meme1 = document.querySelector('#meme-1');
const meme2 = document.querySelector('#meme-2');
const meme3 = document.querySelector('#meme-3');
const meme4 = document.querySelector('#meme-4');

inputText.addEventListener('input', function () {
  memeText.innerText = inputText.value;
});

choseFile.addEventListener('change', function () {
  document.querySelector('#meme-image').src = window.URL.createObjectURL(choseFile.files[0]);
});

btnFire.addEventListener('click', function () {
  memeImageContainer.style.border = '3px dashed red';
});

btnWater.addEventListener('click', function () {
  memeImageContainer.style.border = '5px double blue';
});

btnEarth.addEventListener('click', function () {
  memeImageContainer.style.border = '6px groove green';
});

meme1.addEventListener('click', function () {
  document.querySelector('#meme-image').src = meme1.src;
});

meme2.addEventListener('click', function () {
  document.querySelector('#meme-image').src = meme2.src;
});

meme3.addEventListener('click', function () {
  document.querySelector('#meme-image').src = meme3.src;
});

meme4.addEventListener('click', function () {
  document.querySelector('#meme-image').src = meme4.src;
});
