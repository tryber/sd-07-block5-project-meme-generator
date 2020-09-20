const cont = document.querySelector('#meme-image-container');
const inputText = document.querySelector('#text-input');
const insertMeme = document.querySelector('#meme-insert');
const memeText = document.querySelector('#meme-text');
const imageMeme = document.querySelector('#meme-image');

inputText.addEventListener('keyup', function () {
  memeText.innerHTML = inputText.value;
});

insertMeme.addEventListener('change', (event) => {
  const arquivos = event.target.files[0];
  imageMeme.src = URL.createObjectURL(arquivos);
  imageMeme.onload = function () {
    URL.revokeObjectURL(imageMeme.src);
  };
});

const botaoFire = document.querySelector('#fire');
botaoFire.addEventListener('click', function () {
  cont.style.border = 'dashed 3px red';
  imageMeme.style.border = 'dashed 3px red';
});

const botaoWater = document.querySelector('#water');
botaoWater.addEventListener('click', function () {
  cont.style.border = 'double 5px blue';
  imageMeme.style.border = 'double 5px blue';
});

const botaoEarth = document.querySelector('#earth');
botaoEarth.addEventListener('click', function () {
  cont.style.border = 'groove 6px green';
  imageMeme.style.border = 'groove 6px green';
});

const image = document.querySelectorAll('#sessao img');
for (let index = 0; index < image.length; index += 1) {
  image[index].addEventListener('click', (event) => {
    const imagens = event.path[0];
    imageMeme.src = imagens.src;
  });
}
