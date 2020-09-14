const inputImage = document.querySelector('#meme-insert');
const inputText = document.querySelector('#text-input');
const memeImage = document.querySelector('#meme-image');
const memeText = document.querySelector('#meme-text');

inputImage.addEventListener('change', function (event) {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
});

inputText.addEventListener('keyup', function () {
  memeText.innerText = inputText.value;
  memeText.className = 'text-input';
});