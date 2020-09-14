const getInputText = document.getElementById('text-input');
const getDivImage = document.getElementById('meme-image-container');
const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');
const memeImage = document.getElementById('meme-image');
const imgMeme1 = document.getElementById('meme-1');
const imgMeme2 = document.getElementById('meme-2');
const imgMeme3 = document.getElementById('meme-3');
const imgMeme4 = document.getElementById('meme-4');

getInputText.oninput = function () {
  const getParagraph = document.getElementById('meme-text');
  const textInput = getInputText.value;
  getParagraph.innerText = textInput;
};

function loadFile(event) {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = function () {
    URL.revokeObjectURL(memeImage.src);
  };
  getDivImage.style.backgroundImage = memeImage.src;
}

document.getElementById('meme-insert').addEventListener('change', loadFile);

btnFire.addEventListener('click', function () {
  const styles = '3px dashed red';
  getDivImage.style.border = styles;
});

btnWater.addEventListener('click', function () {
  const styles = '5px double blue';
  getDivImage.style.border = styles;
});

btnEarth.addEventListener('click', function () {
  const styles = '6px groove green';
  getDivImage.style.border = styles;
});

function getSrc(tagName) {
  const src = tagName.src;
  return src;
}

imgMeme1.addEventListener('click', function () {
  const srcImage = getSrc(imgMeme1);
  memeImage.src = srcImage;
});

imgMeme2.addEventListener('click', function () {
  const srcImage = getSrc(imgMeme2);
  memeImage.src = srcImage;
});

imgMeme3.addEventListener('click', function () {
  const srcImage = getSrc(imgMeme3);
  memeImage.src = srcImage;
});

imgMeme4.addEventListener('click', function () {
  const srcImage = getSrc(imgMeme4);
  memeImage.src = srcImage;
});
