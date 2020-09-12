const textInput = document.getElementById('text-input');
textInput.addEventListener('keyup', function () {
  document.getElementById('meme-text').innerText = textInput.value;
});

const insertImage = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');
insertImage.addEventListener('change', function () {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = function () {
    URL.revokeObjectURL(memeImage.src);
  };
});

const imgContainer = document.getElementById('meme-image-container');
const effectButtonFire = document.getElementById('fire');
effectButtonFire.addEventListener('click', function () {
  imgContainer.style.border = '3px dashed red';
});

const effectButtonWater = document.getElementById('water');
effectButtonWater.addEventListener('click', function () {
  imgContainer.style.border = '5px double blue';
});

const effectButtonEarth = document.getElementById('earth');
effectButtonEarth.addEventListener('click', function () {
  imgContainer.style.border = '6px groove green';
});

const insertImgList1 = document.getElementById('meme-1');
insertImgList1.addEventListener('click', function () {
  memeImage.src = insertImgList1.src;
});

const insertImgList2 = document.getElementById('meme-2');
insertImgList2.addEventListener('click', function () {
  memeImage.src = insertImgList2.src;
});
const insertImgList3 = document.getElementById('meme-3');
insertImgList3.addEventListener('click', function () {
  memeImage.src = insertImgList3.src;
});

const insertImgList4 = document.getElementById('meme-4');
insertImgList4.addEventListener('click', function () {
  memeImage.src = insertImgList4.src;
});
