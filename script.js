//  1
const textBox = document.querySelector('#text-input');
const textPresentation = document.querySelector('#meme-text');
function showOnImg() {
  textPresentation.innerHTML = textBox.value;
}

textBox.addEventListener('input', showOnImg);

//  2
const source = document.querySelector('#meme-insert');
const image = document.querySelector('#meme-image');
function showTheImg(event) {
  image.src = URL.createObjectURL(event.target.files[0]);
}

source.addEventListener('change', showTheImg);

//  6
const butFire = document.querySelector('#fire');
const butWater = document.querySelector('#water');
const butEarth = document.querySelector('#earth');
const container = document.querySelector('#meme-image-container');

butFire.addEventListener('click', function () {
  container.style.border = '3px dashed red';
});

butWater.addEventListener('click', function () {
  container.style.border = '5px double blue';
});

butEarth.addEventListener('click', function () {
  container.style.border = '6px groove green';
});


//  7
const meme1 = document.querySelector('#meme-1');
const meme2 = document.querySelector('#meme-2');
const meme3 = document.querySelector('#meme-3');
const meme4 = document.querySelector('#meme-4');
const meme5 = document.querySelector('#meme-5');

meme1.addEventListener('click', function () {
  image.src = meme1.src;
});

meme2.addEventListener('click', function () {
  image.src = meme2.src;
});

meme3.addEventListener('click', function () {
  image.src = meme3.src;
});

meme4.addEventListener('click', function () {
  image.src = meme4.src;
});

meme5.addEventListener('click', function () {
  image.src = meme5.src;
});
