
const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeInsert = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');
const memeImageContainer = document.getElementById('meme-image-container');

const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');

const memeOne = document.getElementById('meme-1');
const memeTwo = document.getElementById('meme-2');
const memeThree = document.getElementById('meme-3');
const memeFour = document.getElementById('meme-4');

fireButton.addEventListener('click', function () {
  memeImageContainer.style.border = '3px dashed red';
});

waterButton.addEventListener('click', function () {
  memeImageContainer.style.border = '5px double blue';
});

earthButton.addEventListener('click', function () {
  memeImageContainer.style.border = '6px groove green';
});

inputText.addEventListener('keyup', function () {
  memeText.innerText = inputText.value;
});

memeInsert.addEventListener('change', function (event) {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
});

function chooseMiniature(event) {
  memeImage.src = event.target.src;
}

memeOne.addEventListener('click', chooseMiniature);
memeTwo.addEventListener('click', chooseMiniature);
memeThree.addEventListener('click', chooseMiniature);
memeFour.addEventListener('click', chooseMiniature);
