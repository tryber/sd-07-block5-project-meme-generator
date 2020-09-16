const inputText = document.getElementById('text-input');
inputText.addEventListener('input', function () {
  const memeText = document.getElementById('meme-text');
  memeText.innerHTML = inputText.value;
});
const inputImg = document.getElementById('meme-insert');
const imgElement = document.getElementById('meme-image');
inputImg.addEventListener('change', function () {
  const url = URL.createObjectURL(inputImg.files[0]);
  imgElement.src = url;
});
