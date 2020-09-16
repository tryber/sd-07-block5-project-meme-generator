const input = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');

input.addEventListener('keyup', function () {
  memeText.innerText = input.value;
});

const button = document.querySelector('.red-border');
button.addEventListener('click', function () {
  (document.getElementById('meme-image-container').style.border = 'solid red');
});

const button2 = document.querySelector('.blue-border');
button2.addEventListener('click', function () {
  (document.getElementById('meme-image-container').style.border = 'solid blue');
});

const button3 = document.querySelector('.yellow-border');
button3.addEventListener('click', function () {
  (document.getElementById('meme-image-container').style.border = 'solid yellow');
});

const button4 = document.querySelector('.black-border');
button4.addEventListener('click', function () {
   (document.getElementById('meme-image-container').style.border = 'solid black');
});
