
// Text for text meme

const text = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');

text.addEventListener('keyup', function () {
  memeText.innerText = text.value;
});

// Image for meme

const inputPicuture = document.querySelector('#meme-insert');
inputPicuture.addEventListener('change', function () {
  const picture = document.querySelector('#meme-image');
  picture.className = 'imgMeme';
  picture.src = URL.createObjectURL(this.files[0]);
  picture.onload = function () {
    URL.revokeObjectURL(this.src);
  };
});

// Action buttons

const container = document.getElementById('meme-image-container');
const fire = document.querySelector('#fire');
fire.addEventListener('click', function () {
  container.style.border = '3px dashed red';
});

const water = document.querySelector('#water');
water.addEventListener('click', function () {
  container.style.border = '5px double blue';
});

const earth = document.querySelector('#earth');
earth.addEventListener('click', function () {
  container.style.border = '6px groove green';
});

// Actions thumbnails

const meme1 = document.querySelector('#meme-1');
meme1.addEventListener('click', function () {
  document.getElementById('meme-image').src = 'imgs/meme1.png';
  document.getElementById('meme-image').className = 'imgMeme';
});

const meme2 = document.querySelector('#meme-2');
meme2.addEventListener('click', function () {
  document.getElementById('meme-image').src = 'imgs/meme2.png';
  document.getElementById('meme-image').className = 'imgMeme';
});

const meme3 = document.querySelector('#meme-3');
meme3.addEventListener('click', function () {
  document.getElementById('meme-image').src = 'imgs/meme3.png';
  document.getElementById('meme-image').className = 'imgMeme';
});

const meme4 = document.querySelector('#meme-4');
meme4.addEventListener('click', function () {
  document.getElementById('meme-image').src = 'imgs/meme4.png';
  document.getElementById('meme-image').className = 'imgMeme';
});
