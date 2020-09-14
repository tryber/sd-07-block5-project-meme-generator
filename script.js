let container = document.getElementById('meme-image-container');
let image = document.getElementById('meme-image');
let inputImage =document.getElementById('meme-insert');


let meme1 = document.getElementById('meme-1');
let meme2 = document.getElementById('meme-2');
let meme3 = document.getElementById('meme-3');
let meme4 = document.getElementById('meme-4');


function myFunction() {
  var x = document.getElementById("text-input").value;
  document.getElementById("meme-text").innerHTML = x;
}

inputImage.addEventListener('change', function() {
  inputImage = inputImage.value;
  image.src = URL.createObjectURL(event.target.files[0]);
})

let buttonFire = document.getElementById('fire');
let buttonWater = document.getElementById('water');
let buttonEarth = document.getElementById('earth');

buttonFire.addEventListener('click', function() {
  container.style.border = '3px dashed rgb(255, 0, 0)';
});

buttonWater.addEventListener('click', function() {
  container.style.border = '5px double rgb(0, 0, 255)';
});

buttonEarth.addEventListener('click', function() {
  container.style.border = '6px groove rgb(0, 128, 0)'
});

meme1.addEventListener('click', function(){
  image.src = meme1.src;

})

meme2.addEventListener('click', function(){
  image.src = meme2.src;

})

meme3.addEventListener('click', function(){
  image.src = meme3.src;

})

meme4.addEventListener('click', function(){
  image.src = meme4.src;

})


