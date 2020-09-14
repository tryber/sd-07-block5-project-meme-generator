// fonte https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
const loadFile = function (event) {
  const output = document.getElementById('meme-image');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function () {
    URL.revokeObjectURL(output.src); // free memory
  };
};
/* --------------------------------------------------------- */
const textInput = document.getElementById('text-input');
textInput.addEventListener('keyup', function () {
  document.getElementById('meme-text').innerHTML = textInput.value;
});

const memeInsert = document.getElementById('meme-insert');
memeInsert.addEventListener('change', loadFile);

const fireButton = document.getElementById('fire');
fireButton.addEventListener('click', function () {
  document.getElementById('meme-image-container').style.border = '3px dashed red';
});

const waterButton = document.getElementById('water');
waterButton.addEventListener('click', function () {
  document.getElementById('meme-image-container').style.border = '5px double blue';
});

const earthButton = document.getElementById('earth');
earthButton.addEventListener('click', function () {
  document.getElementById('meme-image-container').style.border = '6px groove green';
});

const memeOne = document.getElementById('meme-1');
memeOne.addEventListener('click', function () {
  document.getElementById('meme-image').src = './imgs/meme1.png';
});

const memeTwo = document.getElementById('meme-2');
memeTwo.addEventListener('click', function () {
  document.getElementById('meme-image').src = './imgs/meme2.png';
});

const memeThree = document.getElementById('meme-3');
memeThree.addEventListener('click', function () {
  document.getElementById('meme-image').src = './imgs/meme3.png';
});

const memeFour = document.getElementById('meme-4');
memeFour.addEventListener('click', function () {
  document.getElementById('meme-image').src = './imgs/meme4.png';
});
