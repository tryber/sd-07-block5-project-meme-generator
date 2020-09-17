const inputImage = document.getElementById('meme-insert');
const image = document.getElementById('meme-image');
const container = document.getElementById('meme-image-container');
const buttonFire = document.getElementById('fire');
const buttonWater = document.getElementById('water');
const buttonEarth = document.getElementById('earth');
const replacementMemeOne = document.getElementById('meme-1');
const replacementMemeTwo = document.getElementById('meme-2');
const replacementMemeThree = document.getElementById('meme-3');
const replacementMemeFour = document.getElementById('meme-4');


document.getElementById('text-input').addEventListener('keyup', function () {
  document.getElementById('meme-text').innerText = inputText.value;
});

inputImage.addEventListener('change', function (event) {
  image.src = URL.createObjectURL(event.target.files[0]);
  image.onload = function () {
    URL.revokeObjectURL(image.src);
  };
});

buttonFire.addEventListener('click', function () {
  container.style.border = '3px dashed red';
});

buttonWater.addEventListener('click', function () {
  container.style.border = '5px double blue';
});

buttonEarth.addEventListener('click', function () {
  container.style.border = '6px groove green';
});

replacementMemeOne.addEventListener('click', function () {
  image.src = replacementMemeOne.src;
});

replacementMemeTwo.addEventListener('click', function () {
  image.src = replacementMemeTwo.src;
});

replacementMemeThree.addEventListener('click', function () {
  image.src = replacementMemeThree.src;
});

replacementMemeFour.addEventListener('click', function () {
  image.src = replacementMemeFour.src;
});
