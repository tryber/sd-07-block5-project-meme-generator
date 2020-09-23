function loadFile(event) {
  const loadImage = document.getElementById("meme-image");
  loadImage.src = URL.createObjectURL(event.target.files[0]);
}

const textInput = document.getElementById("text-input");

textInput.addEventListener("input", function () {
  const memeTextImage = document.getElementById("meme-text");
  memeTextImage.innerHTML = textInput.value
});

const buttonChoice = document.getElementById("meme-insert");

buttonChoice.addEventListener("change", function(event) {
  loadFile(event);
});
////////////////////////////////////////////////////////////
const btFire = document.getElementById('fire');

btFire.addEventListener('click', function (){
   document.getElementById('meme-image-container').className = 'container box-fire';
})

const btWater= document.getElementById('water');

btWater.addEventListener('click', function(b){
  document.getElementById('meme-image-container').className = 'container box-water';
})

const btEarth = document.getElementById('earth');

btEarth.addEventListener('click', function(){
  document.getElementById('meme-image-container').className = 'container box-earth';
})
///////////////////////////////////////////////////////////
const btMeme1 = document.getElementById('meme-1');
btMeme1.addEventListener('click', function() {
  const memeImg = document.getElementById('meme-image');
  memeImg.src = 'imgs/meme1.png';
})

const btMeme2 = document.getElementById('meme-2');
btMeme2.addEventListener('click', function() {
  const memeImg = document.getElementById('meme-image');
  memeImg.src = 'imgs/meme2.png';
})

const btMeme3 = document.getElementById('meme-3');
btMeme3.addEventListener('click', function() {
  const memeImg = document.getElementById('meme-image');
  memeImg.src = 'imgs/meme3.png';
})

const btMeme4 = document.getElementById('meme-4');
btMeme4.addEventListener('click', function() {
  const memeImg = document.getElementById('meme-image');
  memeImg.src = 'imgs/meme4.png';
})
