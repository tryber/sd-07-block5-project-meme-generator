let inputText = document.querySelector('#text-input');
let inputImage = document.querySelector('#meme-insert');
let containerBorder = document.querySelector('#meme-image-container');
let image = document.querySelector('#meme-image');

inputText.addEventListener('keyup', function(){
  document.querySelector('#meme-text').innerText = inputText.value;
});

document.querySelector('#meme-1').addEventListener('click', function(event){
  image.src = event.target.src;
});

document.querySelector('#meme-2').addEventListener('click', function(event){
  image.src = event.target.src;
});

document.querySelector('#meme-3').addEventListener('click', function(event){
  image.src = event.target.src;
});

document.querySelector('#meme-4').addEventListener('click', function(event){
  image.src = event.target.src;
});

inputImage.addEventListener('change', function (event){
  image.src = URL.createObjectURL(event.target.files[0]);
  image.onload = function() {
    URL.revokeObjectURL(image.src);
  }
});

let fire = document.querySelector('#fire')
fire.addEventListener('click', function(){
  containerBorder.style.border = '3px dashed red';
})

let water = document.querySelector('#water')
water.addEventListener('click', function(){
  containerBorder.style.border = '5px double blue';
})

let earth = document.querySelector('#earth')
earth.addEventListener('click', function(){
  containerBorder.style.border = 'groove 6px green';
})

