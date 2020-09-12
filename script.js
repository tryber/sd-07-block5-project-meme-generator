//  Trata evento de inserção de texto sobre a imagem
document.querySelector('#text-input').setAttribute('maxlength', 60);
const textInputBox = document.querySelector('#text-input');
textInputBox.addEventListener('keyup', function () {
  const textInput = document.querySelector('#text-input').value;
  const textMeme = document.querySelector('#meme-text');
  textMeme.innerText = textInput;
});
//  Trata evento de inserção de imagem pelo usuário
const memeImage = document.querySelector('#meme-image');
const memeInput = document.querySelector('#meme-insert');
function upLoadImg(event) {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
}
memeInput.addEventListener('change', upLoadImg);
// Trata evento de trocar a borda do conteiner conforme usuário escolhe
const imageBox = document.querySelector('#meme-image-container');
const btnFire = document.querySelector('#fire');
btnFire.addEventListener('click', function () {
  imageBox.style.border = 'dashed 3px  red';
});
const btnWater = document.querySelector('#water');
btnWater.addEventListener('click', function () {
  imageBox.style.border = 'double 5px  blue';
});
const btnEarth = document.querySelector('#earth');
btnEarth.addEventListener('click', function () {
  imageBox.style.border = 'groove 6px  green';
});
//  Trata o evento de trocar imagem por uma escolhida pelo usuário na página
//  botões
const btnMeme1 = document.querySelector('#btn-meme1');
const btnMeme2 = document.querySelector('#btn-meme2');
const btnMeme3 = document.querySelector('#btn-meme3');
const btnMeme4 = document.querySelector('#btn-meme4');
//  inputs
const meme1 = document.querySelector('#meme-1');
const meme2 = document.querySelector('#meme-2');
const meme3 = document.querySelector('#meme-3');
const meme4 = document.querySelector('#meme-4');
//  funções de troca
btnMeme1.addEventListener('click', function () {
  memeImage.src = meme1.src;
});
btnMeme2.addEventListener('click', function () {
  memeImage.src = meme2.src;
});
btnMeme3.addEventListener('click', function () {
  memeImage.src = meme3.src;
});
btnMeme4.addEventListener('click', function () {
  memeImage.src = meme4.src;
});
