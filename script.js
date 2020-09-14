const defaultMeme = document.querySelector('#meme-image');

//  Getting the input value and placing it in the image.
document.querySelector('input#text-input').addEventListener('input', function () {
  document.querySelector('#meme-text').innerText = document.querySelector('input#text-input').value;
});

//  Changing the border.
const containerBorder = document.querySelector('#meme-image-container');

/*
---Buttons
--Fire
--Water
--Earth
--Reset
*/
document.querySelector('#fire').addEventListener('click', function () {
  containerBorder.style.border = '3px dashed red';
});

document.querySelector('#water').addEventListener('click', function () {
  containerBorder.style.border = '5px double blue';
});

document.querySelector('#earth').addEventListener('click', function () {
  containerBorder.style.border = '6px groove green';
});

document.querySelector('#reset').addEventListener('click', function () {
  containerBorder.style.border = '1px solid black';
});

/*
---Default Imgs
*/

document.querySelector('#meme-1').addEventListener('click', function () {
  defaultMeme.src = document.querySelector('#meme-1').src;
});

document.querySelector('#meme-2').addEventListener('click', function () {
  defaultMeme.src = document.querySelector('#meme-2').src;
});

document.querySelector('#meme-3').addEventListener('click', function () {
  defaultMeme.src = document.querySelector('#meme-3').src;
});

document.querySelector('#meme-4').addEventListener('click', function () {
  defaultMeme.src = document.querySelector('#meme-4').src;
});
