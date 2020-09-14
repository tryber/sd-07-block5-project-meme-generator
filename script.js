function loadFile(event) {
  const memeImage = document.getElementById('meme-image');
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = function () {
    URL.revokeObjectURL(memeImage.src); // free memory
  };
};

const TextButton = document.querySelector('#text-input');
TextButton.addEventListener('keyup', function () {
  const text = document.getElementById('text-input').value;
  const textInput = document.getElementById('meme-text');
  textInput.innerHTML = text;
});

const memeConteiner = document.querySelector('#meme-image-container');

const fireButton = document.querySelector('#fire');
fireButton.addEventListener('click', function () {
  memeConteiner.style.border = '3px dashed red';
});

const waterButton = document.querySelector('#water');
waterButton.addEventListener('click', function () {
  memeConteiner.style.border = '5px double blue';
});

const earthButton = document.querySelector('#earth');
earthButton.addEventListener('click', function () {
  memeConteiner.style.border = '6px groove green';
});
