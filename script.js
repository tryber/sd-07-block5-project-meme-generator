const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const memeImgContainer = document.querySelector('#meme-image-container');
const fireButton = document.querySelector('#fire');
const waterButton = document.querySelector('#water');
const earthButton = document.querySelector('#earth');
const memeImage = document.querySelector('#meme-image');
const memeOne = document.querySelector('#meme-1');
const memeTwo = document.querySelector('#meme-2');
const memeThree = document.querySelector('#meme-3');
const memeFour = document.querySelector('#meme-4');

function colocaTextoDoMeme() {
  memeText.innerText = textInput.value;
}

textInput.addEventListener('input', colocaTextoDoMeme);
textInput.addEventListener('paste', colocaTextoDoMeme);
const openFile = function (event) {
  const input = event.target;

  const reader = new FileReader();
  reader.onload = function () {
    const dataURL = reader.result;
    const output = document.querySelector('#meme-image');
    output.src = dataURL;
  };
  reader.readAsDataURL(input.files[0]);
};

function changeBorderFire() {
  memeImgContainer.style.border = '3px dashed red';
}
fireButton.addEventListener('click', changeBorderFire);

function changeBorderWater() {
  memeImgContainer.style.border = '5px double blue';
}
waterButton.addEventListener('click', changeBorderWater);

function changeBorderEarth() {
  memeImgContainer.style.border = '6px groove green';
}
earthButton.addEventListener('click', changeBorderEarth);

function memeOneSelected() {
  memeImage.src = '/imgs/meme1.png';
}
memeOne.addEventListener('click', memeOneSelected);

function memeTwoSelected() {
  memeImage.src = '/imgs/meme2.png';
}
memeTwo.addEventListener('click', memeTwoSelected);

function memeThreeSelected() {
  memeImage.src = '/imgs/meme3.png';
}
memeThree.addEventListener('click', memeThreeSelected);

function memeFourSelected() {
  memeImage.src = '/imgs/meme4.png';
}
memeFour.addEventListener('click', memeFourSelected);
