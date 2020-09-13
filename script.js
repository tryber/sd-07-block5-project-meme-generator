const textInput = document.getElementById('text-input');
const memeInsert = document.getElementById('meme-insert');
const memeImageContainer = document.getElementById('meme-image-container');
const memeText = document.getElementById('meme-text');
const memeImage = document.getElementById('meme-image');
const buttonFire = document.getElementById('fire');
const buttonWater = document.getElementById('water');
const buttonEarth = document.getElementById('earth');
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');
const img1 = '/imgs/meme1.png';
const img2 = '/imgs/meme2.png';
const img3 = '/imgs/meme3.png';
const img4 = '/imgs/meme4.png';

function loadFile(url) {
  if (typeof url === 'object') {
    memeImage.style.backgroundImage = `url(${URL.createObjectURL(url)})`;
  } else {
    memeImage.style.backgroundImage = `url(${url})`;
    memeImage.setAttribute('src', url);
  }
}

function writeText() {
  memeText.innerText = textInput.value;
}

function changeBorder(event) {
  if (event.target.id === 'fire') {
    memeImageContainer.style.border = '3px dashed red';
  } else if (event.target.id === 'water') {
    memeImageContainer.style.border = '5px double blue';
  } else {
    memeImageContainer.style.border = '6px groove green';
  }
}

memeInsert.addEventListener('change', () => loadFile(memeInsert.files[0]));
textInput.addEventListener('input', writeText);
buttonFire.addEventListener('click', changeBorder);
buttonWater.addEventListener('click', changeBorder);
buttonEarth.addEventListener('click', changeBorder);
meme1.addEventListener('click', () => loadFile(img1));
meme2.addEventListener('click', () => loadFile(img2));
meme3.addEventListener('click', () => loadFile(img3));
meme4.addEventListener('click', () => loadFile(img4));
