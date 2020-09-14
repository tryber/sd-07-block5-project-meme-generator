// Recupera os elementos HTML por ID.
const textInput = document.querySelector('#text-input');
const textOutput = document.querySelector('#meme-text');
const imgInput = document.getElementById('meme-insert');
const imgOutput = document.getElementById('meme-image');
const btnFire = document.querySelector('#fire');
const btnWater = document.querySelector('#water');
const btnEarth = document.querySelector('#earth');
const divMemeImageContainer = document.getElementById('meme-image-container');
const divBorderButtons = document.getElementById('divBorderButtons');
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');

// Cria URL única para documento local recebendo no parametro dados do evento onchange.
function loadImage(event) {
  imgOutput.src = URL.createObjectURL(event.target.files[0]);
  // Assim que os dados do arquivo estiverem carregados a URL é descartada .
  imgOutput.onload = () => {
    URL.revokeObjectURL(imgOutput.src);
  };
}
// Adiciona escutador de eventos no input da imagem.
imgInput.addEventListener('change', loadImage);
// Adiciona escutador de eventos no input do texto.
textInput.addEventListener('keyup', () => {
  textOutput.innerText = textInput.value;
});

// Requisito bônus bordas personalizadas
btnFire.addEventListener('click', () => {
  divMemeImageContainer.className = 'meme-image-container fire-border';
});
btnFire.addEventListener('mousemove', () => {
  divBorderButtons.className = 'div-border-buttons fire-border';
});
btnFire.addEventListener('mouseout', () => {
  divBorderButtons.className = 'div-border-buttons';
});

btnWater.addEventListener('click', () => {
  divMemeImageContainer.className = 'meme-image-container water-border';
});
btnWater.addEventListener('mousemove', () => {
  divBorderButtons.className = 'div-border-buttons water-border';
});
btnWater.addEventListener('mouseout', () => {
  divBorderButtons.className = 'div-border-buttons';
});

btnEarth.addEventListener('click', () => {
  divMemeImageContainer.className = 'meme-image-container earth-border';
});
btnEarth.addEventListener('mousemove', () => {
  divBorderButtons.className = 'div-border-buttons earth-border';
});
btnEarth.addEventListener('mouseout', () => {
  divBorderButtons.className = 'div-border-buttons';
});

// Requisito bônus memes famosos
meme1.addEventListener('click', () => {
  imgOutput.src = './imgs/meme1.png';
});
meme1.addEventListener('mousemove', () => {
  meme1.className = 'thumbnails fire-border';
});
meme1.addEventListener('mouseout', () => {
  meme1.className = 'thumbnails';
});

meme2.addEventListener('click', () => {
  imgOutput.src = './imgs/meme2.png';
});
meme2.addEventListener('mousemove', () => {
  meme2.className = 'thumbnails fire-border';
});
meme2.addEventListener('mouseout', () => {
  meme2.className = 'thumbnails';
});

meme3.addEventListener('click', () => {
  imgOutput.src = './imgs/meme3.png';
});
meme3.addEventListener('mousemove', () => {
  meme3.className = 'thumbnails fire-border';
});
meme3.addEventListener('mouseout', () => {
  meme3.className = 'thumbnails';
});

meme4.addEventListener('click', () => {
  imgOutput.src = './imgs/meme4.png';
});
meme4.addEventListener('mousemove', () => {
  meme4.className = 'thumbnails fire-border';
});
meme4.addEventListener('mouseout', () => {
  meme4.className = 'thumbnails';
});
