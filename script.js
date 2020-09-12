const text = document.querySelector('#text-input');


text.addEventListener('keyup', function () {
  const textInput = document.querySelector('#text-input').value;
  const memeText = document.querySelector('#meme-text');
  memeText.innerText = textInput;
});
const buttonFire = document.querySelector('#fire');
buttonFire.addEventListener('click', function () {
  const backGroundCont = document.querySelector('#meme-image-container');
  backGroundCont.style.border = '3px red dashed';
});

const buttonWater = document.querySelector('#water');
buttonWater.addEventListener('click', function () {
  const backGroundCont = document.querySelector('#meme-image-container');
  backGroundCont.style.border = '5px blue double';
});

const buttonEarth = document.querySelector('#earth');
buttonEarth.addEventListener('click', function () {
  const backGroundCont = document.querySelector('#meme-image-container');
  backGroundCont.style.border = '6px green groove';
});

const meme1 = document.querySelector('#meme-1');
meme1.addEventListener('click', function () {
  const imageMeme = document.querySelector('#meme-image');
  imageMeme.src = meme1.src;
});

const meme2 = document.querySelector('#meme-2');
meme2.addEventListener('click', function () {
  const imageMeme = document.querySelector('#meme-image');
  imageMeme.src = meme2.src;
});

const meme3 = document.querySelector('#meme-3');
meme3.addEventListener('click', function () {
  const imageMeme = document.querySelector('#meme-image');
  imageMeme.src = meme3.src;
});

const meme4 = document.querySelector('#meme-4');
meme4.addEventListener('click', function () {
  const imageMeme = document.querySelector('#meme-image');
  imageMeme.src = meme4.src;
});
