const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');
const imgContainer = document.getElementById('meme-image-container');
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');
const memeImage = document.getElementById('meme-image');
const memeInsert = document.getElementById('meme-insert');

textInput.addEventListener('input', function () {
  memeText.innerText = textInput.value;
});

memeInsert.addEventListener('input', function (event) {
  const leitor = new FileReader();
  leitor.onload = function () {
    const saida = document.getElementById('meme-image');
    saida.src = leitor.result;
  };
  leitor.readAsDataURL(event.target.files[0]);
});

fire.addEventListener('click', function () {
  imgContainer.style.border = '3px dashed red';
});

water.addEventListener('click', function () {
  imgContainer.style.border = '5px double blue';
});

earth.addEventListener('click', function () {
  imgContainer.style.border = '6px groove green';
});

meme1.addEventListener('click', function () {
  memeImage.src = 'imgs/meme1.png';
});

meme2.addEventListener('click', function () {
  memeImage.src = 'imgs/meme2.png';
});

meme3.addEventListener('click', function () {
  memeImage.src = 'imgs/meme3.png';
});

meme4.addEventListener('click', function () {
  memeImage.src = 'imgs/meme4.png';
});
