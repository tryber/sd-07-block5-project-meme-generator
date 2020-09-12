// Meme input
const textInput = document.getElementById('text-input');
const memeInsert = document.getElementById('meme-insert');
// Meme Output
const memeText = document.getElementById('meme-text');
const memeImage = document.getElementById('meme-image');

// Buttons Fire Water Earth Default
const buttonDefault = document.getElementById('default');
const buttonEarth = document.getElementById('earth');
const buttonFire = document.getElementById('fire');
const buttonWater = document.getElementById('water');

// Memes Menu
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');

// Input Output functions
function limpaObjectURL() {
  URL.revokeObjectURL(memeImage.src);
}

function trocaTexto() {
  memeText.innerText = textInput.value;
}

function trocaImagem() {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = limpaObjectURL;
}

// Border functions
function borderDefault() {
  const dBorder = document.getElementById('meme-image-container');
  dBorder.style.border = '1px solid black';
}

function borderEarth() {
  const eBorder = document.getElementById('meme-image-container');
  eBorder.style.border = '6px groove green';
}

function borderFire() {
  const fBorder = document.getElementById('meme-image-container');
  fBorder.style.border = '3px dashed red';
}

function borderWater() {
  const wBorder = document.getElementById('meme-image-container');
  wBorder.style.border = '5px double blue';
}

// Memes Menu functions
function trocaMeme1() {
  memeImage.src = meme1.src;
}

function trocaMeme2() {
  memeImage.src = meme2.src;
}

function trocaMeme3() {
  memeImage.src = meme3.src;
}

function trocaMeme4() {
  memeImage.src = meme4.src;
}

// Input Output events
textInput.addEventListener('keyup', trocaTexto);
memeInsert.addEventListener('change', trocaImagem);

// Elemental Buttons events
buttonDefault.addEventListener('click', borderDefault);
buttonEarth.addEventListener('click', borderEarth);
buttonFire.addEventListener('click', borderFire);
buttonWater.addEventListener('click', borderWater);

// Memes Menu events
meme1.addEventListener('click', trocaMeme1);
meme2.addEventListener('click', trocaMeme2);
meme3.addEventListener('click', trocaMeme3);
meme4.addEventListener('click', trocaMeme4);
