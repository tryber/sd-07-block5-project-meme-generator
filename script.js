//  Declarando elemento img que contém a imagem do meme para manipular
const imageInsert = document.getElementById('meme-image');

//  Inserindo imagem por seleção de arquivo no dispositivo
const memeInsert = document.querySelector('#meme-insert');
memeInsert.addEventListener('change', function (event) {
  imageInsert.src = URL.createObjectURL(event.target.files[0]);
  imageInsert.onload = function () {
    URL.revokeObjectURL(imageInsert.src);
  };
});

//  Selecionando a miniatura 1 para implementar evento
const miniatura1 = document.querySelector('#meme-1');
miniatura1.addEventListener('click', function (event) {
  imageInsert.src = event.target.src;
});

//  Selecionando a miniatura 2 para implementar evento
const miniatura2 = document.querySelector('#meme-2');
miniatura2.addEventListener('click', function (event) {
  imageInsert.src = event.target.src;
});

//  Selecionando a miniatura 3 para implementar evento
const miniatura3 = document.querySelector('#meme-3');
miniatura3.addEventListener('click', function (event) {
  imageInsert.src = event.target.src;
});

//  Selecionando a miniatura 4 para implementar evento
const miniatura4 = document.querySelector('#meme-4');
miniatura4.addEventListener('click', function (event) {
  imageInsert.src = event.target.src;
});

//  Inserindo texto no meme
const textInput = document.querySelector('#text-input');
textInput.addEventListener('input', function () {
  if (textInput.value.length <= 60) {
    const memeText = document.querySelector('#meme-text');
    memeText.innerText = textInput.value;
  }
});

//  Selecionando a DIV que será estilizada pelos botões
const divMeme = document.querySelector('#meme-image-container');

//  Implementando a função do botão fire
const fire = document.querySelector('#fire');
fire.addEventListener('click', function () {
  divMeme.style.border = '3px dashed red';
});

//  Implementando a função do botão water
const water = document.querySelector('#water');
water.addEventListener('click', function () {
  divMeme.style.border = '5px double blue';
});

//  IMplementando a função do botão Earth
const earth = document.querySelector('#earth');
earth.addEventListener('click', function () {
  divMeme.style.border = '6px groove green';
});
