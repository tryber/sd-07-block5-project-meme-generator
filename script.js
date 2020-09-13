const textInput = document.querySelector('#text-input');
const textOutput = document.querySelector('#meme-text');
const insertImage = document.querySelector('#meme-insert');
const image = document.querySelector('#meme-image');
const buttonFire = document.querySelector('#fire');
const buttonWater = document.querySelector('#water');
const buttonEarth = document.querySelector('#earth');
const container = document.querySelector('#meme-image-container');
const imagememe1 = document.querySelector('#meme-1');
const imagememe2 = document.querySelector('#meme-2');
const imagememe3 = document.querySelector('#meme-3');
const imagememe4 = document.querySelector('#meme-4');

function includeText() {
  textOutput.innerText = textInput.value;
}

textInput.addEventListener('keyup', includeText);

function createImage() {
  image.src = URL.createObjectURL(insertImage.files[0]);
  image.onload = () => URL.revokeObjectURL(image.src);
}

insertImage.addEventListener('change', createImage);

function fireBorder() {
  container.className = 'container';
  container.classList.add('fogo');
}

buttonFire.addEventListener('click', fireBorder);

function waterBorder() {
  container.className = 'container';
  container.classList.add('agua');
}

buttonWater.addEventListener('click', waterBorder);

function earthBorder() {
  container.className = 'container';
  container.classList.add('terra');
}

buttonEarth.addEventListener('click', earthBorder);

function changeImage1() {
  image.src = imagememe1.src;
}

imagememe1.addEventListener('click', changeImage1);

function changeImage2() {
  image.src = imagememe2.src;
}

imagememe2.addEventListener('click', changeImage2);

function changeImage3() {
  image.src = imagememe3.src;
}

imagememe3.addEventListener('click', changeImage3);

function changeImage4() {
  image.src = imagememe4.src;
}

imagememe4.addEventListener('click', changeImage4);
