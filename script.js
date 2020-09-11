const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');

textInput.addEventListener('input', function () {
  memeText.innerHTML = textInput.value;
});

//---------------------------------------------------------------------------

const memeInsert = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');

memeInsert.addEventListener('change', function (event) {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = function () {
    URL.revokeObjectURL(memeImage.src);
  };
});

//----------------------------------------------------------------------------

const memeConteiner = document.querySelector('#meme-image-container');

const buttonFire = document.querySelector('#fire');

buttonFire.addEventListener('click', function () {
  memeConteiner.style.border = '3px dashed red';
});

const buttonWater = document.querySelector('#water');

buttonWater.addEventListener('click', function () {
  memeConteiner.style.border = '5px double blue';
});

const buttonEarth = document.querySelector('#earth');

buttonEarth.addEventListener('click', function () {
  memeConteiner.style.border = '6px groove green';
});

//-----------------------------------------------------------------------------

const memeOne = document.querySelector('#meme-1');

memeOne.addEventListener('click', function () {
  memeImage.src = memeOne.src;
});

const memeTwo = document.querySelector('#meme-2');

memeTwo.addEventListener('click', function () {
  memeImage.src = memeTwo.src;
});

const memeThree = document.querySelector('#meme-3');

memeThree.addEventListener('click', function () {
  memeImage.src = memeThree.src;
});

const memeFour = document.querySelector('#meme-4');

memeFour.addEventListener('click', function () {
  memeImage.src = memeFour.src;
});
