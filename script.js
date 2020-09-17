const inputText = document.getElementById('text-input');
const imageMeme = document.getElementById('meme-image');
const getDivImage = document.getElementById('meme-image-container');

inputText.oninput = function () {
  const getParagraph = document.getElementById('meme-text');
  const textInput = inputText.value;
  getParagraph.innerText = textInput;
};

function loadFile(event) {
    imageMeme.src = URL.createObjectURL(event.target.files[0]);
    imageMeme.onload = function () {
    URL.revokeObjectURL(imageMeme.src);
  };
  getDivImage.style.backgroundImage = imageMeme.src;
}

document.getElementById('meme-insert').addEventListener('change', loadFile);
