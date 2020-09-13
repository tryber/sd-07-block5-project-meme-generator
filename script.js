const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
textInput.addEventListener('input', function () {
  memeText.innerHTML = textInput.value;
});
const memeInsert = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');
memeInsert.addEventListener('change', function (event) {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = function () {
    URL.revokeObjectURL(memeImage.src);
  };
}); // Input text and upload image.
const memeBorder = document.querySelector('#meme-image-container');
const fireButton = document.querySelector('#fire');
fireButton.addEventListener('click', function () {
  memeBorder.style.border = '3px dashed red';
});
const waterButton = document.querySelector('#water');
waterButton.addEventListener('click', function () {
  memeBorder.style.border = '5px double blue';
});
const earthButton = document.querySelector('#earth');
earthButton.addEventListener('click', function () {
  memeBorder.style.border = '6px groove green';
});  // Adds border
const picture1 = document.querySelector('#meme-1');
picture1.addEventListener('click', function () {
  memeImage.src = picture1.src;
});
const picture2 = document.querySelector('#meme-2');
picture2.addEventListener('click', function () {
  memeImage.src = picture2.src;
});
const picture3 = document.querySelector('#meme-3');
picture3.addEventListener('click', function () {
  memeImage.src = picture3.src;
});
const picture4 = document.querySelector('#meme-4');
picture4.addEventListener('click', function () {
  memeImage.src = picture4.src;
}); // Adds images defined
