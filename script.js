const loadImage = function (event) {
  const output = document.getElementById('meme-image');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function () {
    URL.revokeObjectURL(output.src);
  };
};
// preparar input do Meme text
window.onload = function () {
  const inputText = document.getElementById('text-input');
  const memeText = document.getElementById('meme-text');

  inputText.addEventListener('input', function () {
    memeText.innerHTML = inputText.value;
  });
};

const container = document.getElementById('meme-image-container');
const fireButton = document.getElementById('fire');
fireButton.style.backgroundColor = 'rgb(255 , 0 , 0)';
fireButton.addEventListener('click', function () {
  container.style.border = '3px dashed rgb(255 , 0 , 0)';
});
const waterButton = document.getElementById('water');
waterButton.style.backgroundColor = 'rgb(0 , 0 , 255)';
waterButton.addEventListener('click', function () {
  container.style.border = '5px double rgb(0 , 0 , 255)';
});
const earthButton = document.getElementById('earth');
earthButton.style.backgroundColor = 'rgb(0 , 128 , 0)';
earthButton.addEventListener('click', function () {
  container.style.border = '6px groove rgb(0 , 128 , 0)';
});
