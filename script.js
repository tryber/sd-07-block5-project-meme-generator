window.onload = function () {
  const textMemeIn = document.getElementById('text-input');
  const chooseImage = document.getElementById('meme-insert');
  const textMemeOut = document.getElementById('meme-text');
  const containerImage = document.getElementById('meme-image');
  let bF = document.getElementById('fire');
  let bW = document.getElementById('water');
  let bE = document.getElementById('earth');
  
  textMemeIn.addEventListener('keyup', function () { textMemeOut.innerText = textMemeIn.value; });
  
  chooseImage.addEventListener('change', function () {
    containerImage.src = URL.createObjectURL(chooseImage.files[0]);
  });
  bF.addEventListener('click', function () {
    bF = document.getElementById('meme-image-container'); bF.style.border = '3px dashed red';
  });
  bW.addEventListener('click', function () {
    bW = document.getElementById('meme-image-container'); bW.style.border = '5px double blue';
  });
  bE.addEventListener('click', function () {
    bE = document.getElementById('meme-image-container'); bE.style.border = '6px groove green';
  });
  const buttons = document.querySelectorAll('.memes');
  for (let i = 0; i < buttons.length; i += 1) { buttons[i].addEventListener('click', function () { containerImage.src = buttons[i].src; }); }
};
