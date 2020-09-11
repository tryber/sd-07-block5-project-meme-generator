document.querySelector('#text-input').addEventListener('keyup', function () {
  const text = document.querySelector('#text-input').value;
  document.querySelector('#meme-text').innerHTML = text;
});

const imageHere = document.querySelector('#meme-image');
document.querySelector('#meme-insert').addEventListener('change', function (event) {
  imageHere.src = URL.createObjectURL(event.target.files[0]);
});
// essa função serve para gerar uma URL qualquer como src, assim a img não precisa estar na pasta

document.querySelector('#fire').addEventListener('click', function () {
  const toFire = document.querySelector('#meme-image-container');
  toFire.style.border = '3px dashed red';
});

document.querySelector('#water').addEventListener('click', function () {
  const toWater = document.querySelector('#meme-image-container');
  toWater.style.border = '5px double blue';
});

document.querySelector('#earth').addEventListener('click', function () {
  const toEarth = document.querySelector('#meme-image-container');
  toEarth.style.border = '6px groove green';
});

document.querySelector('#meme-1').addEventListener('click', function () {
  imageHere.src = document.querySelector('#meme-1').src;
});

document.querySelector('#meme-2').addEventListener('click', function () {
  imageHere.src = document.querySelector('#meme-2').src;
});

document.querySelector('#meme-3').addEventListener('click', function () {
  imageHere.src = document.querySelector('#meme-3').src;
});

document.querySelector('#meme-4').addEventListener('click', function () {
  imageHere.src = document.querySelector('#meme-4').src;
});
