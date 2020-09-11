document.querySelector('#text-input').addEventListener('keyup', function () {
  document.querySelector('#meme-text').innerHTML = document.querySelector('#text-input').value;
});

document.querySelector('#meme-insert').addEventListener('change', function (event) {
  const img = document.querySelector('#meme-image');
  img.src = URL.createObjectURL(event.target.files[0]);
}); /* get code helper on https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977 */


document.querySelector('#fire').addEventListener('click', function () {
  const container = document.querySelector('.meme-image-container');

  container.style.border = '3px dashed red';
});

document.querySelector('#water').addEventListener('click', function () {
  const container = document.querySelector('.meme-image-container');

  container.style.border = '5px double blue';
});

document.querySelector('#earth').addEventListener('click', function () {
  const container = document.querySelector('.meme-image-container');

  container.style.border = '6px groove green';
});

document.querySelector('#meme-1').addEventListener('click', function () {
  const img = document.querySelector('#meme-image');
  img.src = document.querySelector('#meme-1').src;
});

document.querySelector('#meme-2').addEventListener('click', function () {
  const img = document.querySelector('#meme-image');
  img.src = document.querySelector('#meme-2').src;
});

document.querySelector('#meme-3').addEventListener('click', function () {
  const img = document.querySelector('#meme-image');
  img.src = document.querySelector('#meme-3').src;
});

document.querySelector('#meme-4').addEventListener('click', function () {
  const img = document.querySelector('#meme-image');
  img.src = document.querySelector('#meme-4').src;
});
