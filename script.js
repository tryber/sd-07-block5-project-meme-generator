const inputIMG = document.querySelector('#meme-insert');
const inputText = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const memeImage = document.querySelector('#meme-image');
const container = document.querySelector('#meme-image-container');
const fire = document.querySelector('#fire');
const water = document.querySelector('#water');
const earth = document.querySelector('#earth');
const meme1 = document.querySelector('#meme-1');
const meme2 = document.querySelector('#meme-2');
const meme3 = document.querySelector('#meme-3');
const meme4 = document.querySelector('#meme-4');


inputText.addEventListener('keyup', () => {
  memeText.innerHTML = inputText.value;
});

// Reference: https://codepen.io/dsr/pen/abOmGZp
inputIMG.addEventListener('change', (event) => {
  if (event.target.files.length > 0) {
    const src = URL.createObjectURL(event.target.files[0]);
    memeImage.src = src;
  }
});

fire.addEventListener('click', () => {
  container.style.border = '3px dashed red';
});

water.addEventListener('click', () => {
  container.style.border = '5px double blue';
});

earth.addEventListener('click', () => {
  container.style.border = '6px groove green';
});

meme1.addEventListener('click', () => {
  memeImage.src = 'imgs/meme1.png';
});

meme2.addEventListener('click', () => {
  memeImage.src = 'imgs/meme2.png';
});

meme3.addEventListener('click', () => {
  memeImage.src = 'imgs/meme3.png';
});

meme4.addEventListener('click', () => {
  memeImage.src = 'imgs/meme4.png';
});
