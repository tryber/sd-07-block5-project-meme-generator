const textBox = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const imageBackground = document.getElementById('meme-insert');
const imagenFundo = document.getElementById('meme-image');
const buttonFire = document.getElementById('fire');
const buttonWater = document.getElementById('water');
const buttonEarth = document.getElementById('earth');
const containerMeme = document.getElementById('meme-image-container');
const memeSample1 = document.getElementById('meme-1');
const memeSample2 = document.getElementById('meme-2');
const memeSample3 = document.getElementById('meme-3');
const memeSample4 = document.getElementById('meme-4');


function textInMeme() {
  memeText.innerText = textBox.value;
}

textBox.addEventListener('input', textInMeme);

function memePhoto() {
  imagenFundo.src = URL.createObjectURL(imageBackground.files[0]);
}

function borderFire() {
  containerMeme.style.border = '3px dashed red';
}

function borderWater() {
  containerMeme.style.border = '5px double blue';
}

function borderEarth() {
  containerMeme.style.border = '6px groove green';
}

function goToContainer() {
  imagenFundo.src = this.src;
}

memeSample1.addEventListener('click', goToContainer);
memeSample2.addEventListener('click', goToContainer);
memeSample3.addEventListener('click', goToContainer);
memeSample4.addEventListener('click', goToContainer);

imageBackground.addEventListener('change', memePhoto);
buttonFire.addEventListener('click', borderFire);
buttonWater.addEventListener('click', borderWater);
buttonEarth.addEventListener('click', borderEarth);
