//  organizando variáveis de entrada
const textInput = document.getElementById('text-input');
const memeInput = document.getElementById('meme-insert');
const container = document.getElementById('meme-image-container');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');
const memeSuggestions = document.querySelectorAll('.meme-example');

//  container
const memeImage = document.getElementById('meme-image');

//  escrevendo em meme-image-container
textInput.addEventListener('keyup', function () {
  const memeText = document.getElementById('meme-text');
  memeText.innerHTML = textInput.value;
});

//  colocando imagem em meme-image-container (upload)
memeInput.addEventListener('change', function (event) {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
});

//  borda de fogo
fireButton.addEventListener('click', function () {
  container.style.border = '3px dashed red';
});

//  borda de água
waterButton.addEventListener('click', function () {
  container.style.border = '5px double blue';
});

//  borda de terra
earthButton.addEventListener('click', function () {
  container.style.border = '6px groove green';
});

//  botoes de sugestão
for (let index = 0; index < memeSuggestions.length; index += 1) {
  memeSuggestions[index].addEventListener('click', function () {
    const suggestionId = `meme-${index + 1}`;
    const suggestion = document.getElementById(suggestionId);
    memeImage.src = suggestion.src;
  });
}
