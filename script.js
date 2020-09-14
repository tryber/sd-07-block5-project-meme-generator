const script = document.querySelector('#text-input');
let setImage = document.querySelector('#meme-insert');
const picture = document.querySelector('#meme-image');

//Recupera o local onde quero minha string
script.addEventListener('keyup', function () {
  let test =   document.querySelector('#meme-text');
  test.innerText = script.value;
});

setImage.addEventListener('change', function(event){
    picture.src = URL.createObjectURL(event.target["files"][0]);
});

// adiciona os botões de estilo
let earth = document.querySelector('#container').childNodes[9]
let water = document.querySelector('#container').childNodes[7]
let fire = document.querySelector('#container').childNodes[5]
let container = document.querySelector("#container").childNodes[1].querySelector("#meme-image-container");

fire.addEventListener('click', function () {
    container.style.border = '3px dashed #DC143C';
});

water.addEventListener('click', function () {
    container.style.border = '5px double #00BFFF';
});

earth.addEventListener('click', function () {
    container.style.border = '5px groove #32CD32';
});