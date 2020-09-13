// Inicio de váriaveis globais

// Container principal;

const container = document.querySelector('#meme-image-container');

// Container image;

const image = document.querySelector('#meme-image');

// inputs

let inputImage = document.querySelector('#meme-insert');
const message = document.querySelector('#text-input');

// eventList best memes;

const meme1 = document.querySelector('#meme-1');
const meme2 = document.querySelector('#meme-2');
const meme3 = document.querySelector('#meme-3');
const meme4 = document.querySelector('#meme-4');
const meme5 = document.querySelector('#meme-5');
const meme6 = document.querySelector('#meme-6');
const meme7 = document.querySelector('#meme-7');

// botoes que altera borda;

const buttonEarth = document.querySelector('#earth');
const buttonWater = document.querySelector('#water');
const buttonFire = document.querySelector('#fire');

// Inicio de funções

// Capturando e printando o texto;

message.addEventListener('keyup', function () {
  const text = message.value;
  document.querySelector('#meme-text').innerText = text;
});

// capturando e inserindo a imagem;

// evento 'change' quando alterar o valor;

inputImage.addEventListener('change', function (event) {
  inputImage = inputImage.value;

// https://developer.mozilla.org/pt-BR/docs/Web/API/URL/createObjectURL#Syntax <<< Cria um objeto URL(event.targe) vai me retornar caminho do evento change .files me retorna um array de arquivos, o selecionado é o primeiro do array

  image.src = URL.createObjectURL(event.target.files[0]);
});

// alterando bordas

buttonFire.addEventListener('click', function () {
  container.style.border = '3px dashed rgb(255 , 0 , 0)';
});

buttonWater.addEventListener('click', function () {
  container.style.border = '5px double rgb(0 , 0 , 255)';
});

buttonEarth.addEventListener('click', function () {
  container.style.border = '6px groove rgb(0 , 128 , 0)';
});

// best memes;

meme1.addEventListener('click', function () {
  image.src = meme1.src;
});

meme2.addEventListener('click', function () {
  image.src = meme2.src;
});

meme3.addEventListener('click', function () {
  image.src = meme3.src;
});

meme4.addEventListener('click', function () {
  image.src = meme4.src;
});

meme5.addEventListener('click', function () {
  image.src = meme5.src;
});

meme6.addEventListener('click', function () {
  image.src = meme6.src;
});

meme7.addEventListener('click', function () {
  image.src = meme7.src;
});
