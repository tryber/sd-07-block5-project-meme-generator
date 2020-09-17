// Função para colocar foto no meme
const carregaFoto = document.getElementById('meme-insert');
carregaFoto.addEventListener('input', function (event) {
  const url = URL.createObjectURL(event.target.files[0]);
  const saida = document.getElementById('meme-image');
  saida.src = url;
});
// Função para colocar texto no meme
const lbltexto = document.getElementById('text-input');
lbltexto.addEventListener('input', function () {
  const texto = document.getElementById('text-input').value;
  document.getElementById('meme-text').innerHTML = texto;
});
// Função para borda vermelha tracejada
const borda1 = document.getElementById('fire');
borda1.addEventListener('click', function () {
  const borda = document.getElementById('meme-image-container');
  borda.style.border = '3px dashed red';
});
// Função para borda dupla azul
const borda2 = document.getElementById('water');
borda2.addEventListener('click', function () {
  const borda = document.getElementById('meme-image-container');
  borda.style.border = '5px double blue';
});
// Função para borda verde groove
const borda3 = document.getElementById('earth');
borda3.addEventListener('click', function () {
  const borda = document.getElementById('meme-image-container');
  borda.style.border = '6px groove green';
});
// Função para usar imagem miniatura 1
const mini1 = document.getElementById('meme-1');
mini1.addEventListener('click', function () {
  const pre1 = document.getElementById('meme-1').src;
  document.getElementById('meme-image').src = pre1;
});
// Função para usar imagem miniatura 2
const mini2 = document.getElementById('meme-2');
mini2.addEventListener('click', function () {
  const pre2 = document.getElementById('meme-2').src;
  document.getElementById('meme-image').src = pre2;
});
// Função para usar imagem miniatura 3
const mini3 = document.getElementById('meme-3');
mini3.addEventListener('click', function () {
  const pre3 = document.getElementById('meme-3').src;
  document.getElementById('meme-image').src = pre3;
});
// Função para usar imagem miniatura 4
const mini4 = document.getElementById('meme-4');
mini4.addEventListener('click', function () {
  const pre4 = document.getElementById('meme-4').src;
  document.getElementById('meme-image').src = pre4;
});
