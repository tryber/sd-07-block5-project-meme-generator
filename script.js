const text = document.querySelector('#text-input');
const textOnPhoto = document.querySelector('#meme-text');
const imagem = document.querySelector('#meme-insert');
const imagemPhoto = document.querySelector('#meme-image');
const image1 = document.querySelectorAll('img')[1];
const image2 = document.querySelectorAll('img')[2];
const image3 = document.querySelectorAll('img')[3];
const image4 = document.querySelectorAll('img')[4];
const button1 = document.querySelectorAll('.botaum button')[0];
const button2 = document.querySelectorAll('.botaum button')[1];
const button3 = document.querySelectorAll('.botaum button')[2];
const meme = document.querySelector('.meme-container');

text.addEventListener('keyup', function () {
  textOnPhoto.innerText = text.value;
});
imagem.addEventListener('change', function () {
  imagemPhoto.src = URL.createObjectURL(event.target.files[0]);
});
image1.addEventListener('click', function () {
  imagemPhoto.src = image1.src;
});
image2.addEventListener('click', function () {
  imagemPhoto.src = image2.src;
});
image3.addEventListener('click', function () {
  imagemPhoto.src = image3.src;
});
image4.addEventListener('click', function () {
  imagemPhoto.src = image4.src;
});
button1.addEventListener('click', function () {
  meme.style.border = '3px dashed red';
});
button2.addEventListener('click', function () {
  meme.style.border = '5px double blue';
});
button3.addEventListener('click', function () {
  meme.style.border = '6px groove green';
});
