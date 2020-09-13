const textInput = document.querySelector('.text-input');
const memeText = document.querySelector('.meme-text');
const inputImgMeme = document.querySelector('.meme-insert');
const memeImg = document.querySelector('.meme-image');
const memeContainer = document.querySelector('.meme-image-container');
const fire = document.querySelector('.fire');
const water = document.querySelector('.water');
const earth = document.querySelector('.earth');
const meme1 = document.querySelector('.meme-1');
const meme2 = document.querySelector('.meme-2');
const meme3 = document.querySelector('.meme-3');
const meme4 = document.querySelector('.meme-4');

textInput.addEventListener('keyup', function () {
  memeText.innerHTML = textInput.value;
});

inputImgMeme.addEventListener('change', function () {
  memeImg.src = URL.createObjectURL(event.target.files[0]);
  memeImg.onload = function () {
    URL.revokeObjectURL(memeImg.src);
  };
});

fire.addEventListener('click', function () {
  memeContainer.style.border = '3px dashed rgb(255, 0, 0)';
});

water.addEventListener('click', function () {
  memeContainer.style.border = '5px double rgb(0, 0, 255)';
});

earth.addEventListener('click', function () {
  memeContainer.style.border = '6px groove rgb(0, 128 ,0)';
});

meme1.addEventListener('click', function () {
  memeImg.src = meme1.src;
  memeText.innerHTML = 'Depois de 15 horas codando';
});

meme2.addEventListener('click', function () {
  memeImg.src = meme2.src;
  memeText.innerHTML = 'Zerei as issues do code climate';
});

meme3.addEventListener('click', function () {
  memeImg.src = meme3.src;
  memeText.innerHTML = 'Eu depois de formar na trybe';
});

meme4.addEventListener('click', function () {
  memeImg.src = meme4.src;
  memeText.innerHTML = 'Lucas pede para eu não invadir as aulas, pois já formei. EU:';
});
