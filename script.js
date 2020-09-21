const textoDigitado = document.getElementById('text-input');

textoDigitado.addEventListener('input', function (event) {
  const textoMeme = document.getElementById('meme-text');
  const texto = event.target.value;
  textoMeme.innerText = texto;
});

const imagemInserida = document.getElementById('meme-insert');

function carregarImagem(event) {
  const imagemCarregada = document.getElementById('meme-image');
  imagemCarregada.src = URL.createObjectURL(event.target.files[0]);
}

imagemInserida.addEventListener('change', function (event) {
  carregarImagem(event);
});

const bordaFire = document.getElementById('fire');

bordaFire.addEventListener('click', function () {
  const quadro = document.getElementById('meme-image-container');
  quadro.style.border = '3px dashed red';
});

const bordaWater = document.getElementById('water');

bordaWater.addEventListener('click', function () {
  const quadro = document.getElementById('meme-image-container');
  quadro.style.border = '5px double blue';
});

const bordaEarth = document.getElementById('earth');

bordaEarth.addEventListener('click', function () {
  const quadro = document.getElementById('meme-image-container');
  quadro.style.border = '6px groove green';
});

const meme1 = document.getElementById('meme-1');

meme1.addEventListener('click', function () {
  const imagemCarregada = document.getElementById('meme-image');
  imagemCarregada.src = 'imgs/meme1.png';
});

const meme2 = document.getElementById('meme-2');

meme2.addEventListener('click', function () {
  const imagemCarregada = document.getElementById('meme-image');
  imagemCarregada.src = 'imgs/meme2.png';
});

const meme3 = document.getElementById('meme-3');

meme3.addEventListener('click', function () {
  const imagemCarregada = document.getElementById('meme-image');
  imagemCarregada.src = 'imgs/meme3.png';
});

const meme4 = document.getElementById('meme-4');

meme4.addEventListener('click', function () {
  const imagemCarregada = document.getElementById('meme-image');
  imagemCarregada.src = 'imgs/meme4.png';
});
