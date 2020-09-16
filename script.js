const container = document.getElementById('meme-image-container');

const imgInput = document.querySelector('#meme-insert');
const imgMeme = document.querySelector('#meme-image');

const inputText = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');

const buttonFire = document.querySelector('#fire');
const buttonWater = document.querySelector('#water');
const buttonEarth = document.querySelector('#earth');

inputText.addEventListener ('input', function () {
    memeText.innerText = inputText.value;
});

imgInput.addEventListener ('change', function (event) {
    // essa parte aqui foi pega das dicas fornecidas
  imgMeme.src = URL.createObjectURL (event.target.files[0]);
  imgMeme.onload = function () {
    URL.revokeObjectURL(imgMeme.src);
    }
});

buttonFire.addEventListener ('click', function () {
  container.style.border = '3px dashed rgb(255, 0, 0)';
});

buttonWater.addEventListener ('click', function () {
  container.style.border = '5px double rgb(0, 0, 255)';
});

buttonEarth.addEventListener ('click', function () {
  container.style.border = '6px groove rgb(0, 128, 0)';
});