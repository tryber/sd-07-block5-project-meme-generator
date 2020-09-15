document.querySelector('#text-input').setAttribute('maxlength', 60);
const textInputBox = document.querySelector('#text-input');
const loadImage = document.querySelector('#meme-insert');
const earth = document.querySelector('#earth');
const water = document.querySelector('#water');
const fire = document.querySelector('#fire');
const frog = document.querySelector('#meme-1');
const lol = document.querySelector('#meme-2');
const homer = document.querySelector('#meme-3');
const omg = document.querySelector('#meme-4');

loadImage.addEventListener('change', function (event) {
  const image = document.getElementById('meme-image');
  image.src = URL.createObjectURL(event.target.files[0]);
});

textInputBox.addEventListener('keyup', function () {
  const textInput = document.querySelector('#text-input').value;
  const textMeme = document.querySelector('#meme-text');
  textMeme.innerText = textInput;
});

frog.addEventListener('click', function () {
  document.getElementById('meme-image').src = '/projects/block-05/sd-07-block5-project-meme-generator/imgs/meme1.png';
});

lol.addEventListener('click', function () {
  document.getElementById('meme-image').src = '/projects/block-05/sd-07-block5-project-meme-generator/imgs/meme2.png';
});

homer.addEventListener('click', function () {
  document.getElementById('meme-image').src = '/projects/block-05/sd-07-block5-project-meme-generator/imgs/meme3.png';
});

omg.addEventListener('click', function () {
  document.getElementById('meme-image').src = '/projects/block-05/sd-07-block5-project-meme-generator/imgs/meme4.png';
});

fire.addEventListener('click', function () {
  document.getElementById('meme-image-container').style.border = 'dashed 3px red';
});

water.addEventListener('click', function () {
  document.getElementById('meme-image-container').style.border = 'double 5px blue';
});

earth.addEventListener('click', function () {
  document.getElementById('meme-image-container').style.border = 'groove 6px green';
});
