const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const fileSelector = document.getElementById('meme-insert');
const imageMeme = document.getElementById('meme-image');

textInput.addEventListener('input', function updateValue(event) {
  memeText.textContent = event.target.value;
});
//exibe a imagem no container
fileSelector.addEventListener('change', function (event) {
  const file = event.target.files[0];
  imageMeme.src = URL.createObjectURL(file);
});