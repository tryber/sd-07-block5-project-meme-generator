function changeText() {
  const textInput = document.querySelector('#text-input');
  const memeText = document.querySelector('#meme-text');
  memeText.innerText = `${textInput.value}`;
}
// https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
function changeImage(event) {
  const memeImageContainer = document.querySelector('#meme-image-container');
  const memeInsert = document.querySelector('#meme-insert');
  const memeImage = document.querySelector('#meme-image');
  const memeText = document.querySelector('#meme-text');
  if (event.target.id === 'meme-insert') {
    memeImage.src = URL.createObjectURL(memeInsert.files[0]);
  } else {
    memeImage.src = `${event.target.src}`;
  }
  memeImage.onload = function () {
    // URL.revokeObjectURL(memeImage.src); // free memory
    memeImage.style.height = `${memeImage.naturalHeight}px`;
    memeImage.style.width = `${memeImage.naturalWidth}px`;
    memeImageContainer.style.height = `${memeImage.naturalHeight}px`;
    memeImageContainer.style.width = `${memeImage.naturalWidth}px`;
    memeText.style.marginTop = `${memeImage.naturalHeight - 100}px`;
  };
}
function changeBorder(event) {
  const memeImageContainer = document.querySelector('#meme-image-container');
  const element = event.target.id;
  if (element === 'fire') {
    memeImageContainer.style.border = '3px dashed red';
  } else if (element === 'water') {
    memeImageContainer.style.border = '5px double blue';
  } else {
    memeImageContainer.style.border = '6px groove green';
  }
}
window.onload = function () {
  const textInput = document.querySelector('#text-input');
  const memeInsert = document.querySelector('#meme-insert');
  const meme1 = document.querySelector('#meme-1');
  const meme2 = document.querySelector('#meme-2');
  const meme3 = document.querySelector('#meme-3');
  const meme4 = document.querySelector('#meme-4');
  const buttonFire = document.querySelector('#fire');
  const buttonWater = document.querySelector('#water');
  const buttonEarth = document.querySelector('#earth');
  textInput.addEventListener('input', changeText);
  memeInsert.addEventListener('change', changeImage);
  meme1.addEventListener('click', changeImage);
  meme2.addEventListener('click', changeImage);
  meme3.addEventListener('click', changeImage);
  meme4.addEventListener('click', changeImage);
  buttonFire.addEventListener('click', changeBorder);
  buttonWater.addEventListener('click', changeBorder);
  buttonEarth.addEventListener('click', changeBorder);
};
