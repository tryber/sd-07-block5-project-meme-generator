let container = document.getElementById('meme-image-container');
let imageMeme = document.querySelector('#meme-image');

let textoDigitado = document.querySelector('#text-input');
textoDigitado.addEventListener('input', function(){
  const textoMeme = document.querySelector('#meme-text');
  textoMeme.innerText = textoDigitado.value;
});

const memeInsert = document.querySelector('#meme-insert');
memeInsert.addEventListener('change', function(memeSelecionado){
  imageMeme.src = URL.createObjectURL(memeSelecionado.target.files[0]);
});

const buttonFire = document.getElementById('fire');
buttonFire.addEventListener('click', function(){
  container.style.border = '3px dashed red';
});

const buttonWater = document.getElementById('water');
buttonWater.addEventListener('click', function(){
  container.style.border = '5px double blue';
});

const buttonEarth = document.getElementById('earth');
buttonEarth.addEventListener('click', function(){
  container.style.border = '6px groove green';
});

const miniMeme1 = document.getElementById('meme-1');
miniMeme1.addEventListener('click', function(){
  imageMeme.src = 'imgs/meme1.png';
});

const miniMeme2 = document.getElementById('meme-2');
miniMeme2.addEventListener('click', function(){
  imageMeme.src = 'imgs/meme2.png';
});

const miniMeme3 = document.getElementById('meme-3');
miniMeme3.addEventListener('click', function(){
  imageMeme.src = 'imgs/meme3.png';
});
const miniMeme4 = document.getElementById('meme-4');
miniMeme4.addEventListener('click', function(){
  imageMeme.src = 'imgs/meme4.png';
});
