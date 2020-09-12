// adicionando texto ao meme
const memeText = document.querySelector('#meme-text');

const textInput = document.querySelector('#text-input');

function updateMemeText() {
  memeText.innerHTML = textInput.value;
}

textInput.addEventListener('keyup', updateMemeText);

// utilizou-se essa referencia para autoload de imagem
// https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
const memeImage = document.getElementById('meme-image');

const loadFile = function (event) {
  const img = event.target.files[0];

  memeImage.src = URL.createObjectURL(img);

  memeImage.onload = function () {
    URL.revokeObjectURL(memeImage.src);
  };
};

// customização de bordas
const memeImageContainer = document.getElementById('meme-image-container');

const fire = document.querySelector('#fire');
fire.addEventListener('click', function () {
  memeImageContainer.style.border = '3px dashed red';
});

const water = document.querySelector('#water');
water.addEventListener('click', function () {
  memeImageContainer.style.border = '5px double blue';
});

const earth = document.querySelector('#earth');
earth.addEventListener('click', function () {
  memeImageContainer.style.border = '6px groove green';
});

// imagens pre carregadas inserted

const meme1 = document.getElementById('meme-1');
meme1.addEventListener('click', function () {
  memeImage.src = 'imgs/meme1.png';
});

const meme2 = document.getElementById('meme-2');
meme2.addEventListener('click', function () {
  memeImage.src = 'imgs/meme2.png';
});

const meme3 = document.getElementById('meme-3');
meme3.addEventListener('click', function () {
  memeImage.src = 'imgs/meme3.png';
});

const meme4 = document.getElementById('meme-4');
meme4.addEventListener('click', function () {
  memeImage.src = 'imgs/meme4.png';
});
