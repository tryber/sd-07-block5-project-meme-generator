let loadFile = function (event) { // Function taken from: https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
    let output = document.getElementById('meme-image');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
        URL.revokeObjectURL(output.src) // free memory
    }
}

let textFill = document.getElementById('text-input');
let text = document.getElementById('meme-text');
textFill.addEventListener('keyup', function () {
    text.innerText = textFill.value;
});

let image1 = document.getElementById('image1');
image1.addEventListener('click', function(){
    let imagem = document.getElementById('meme-image');
    imagem.src = image1.src;
})

let image2 = document.getElementById('image2');
image2.addEventListener('click', function(){
    let imagem = document.getElementById('meme-image');
    imagem.src = image2.src;
})

let image3 = document.getElementById('image3');
image3.addEventListener('click', function(){
    let imagem = document.getElementById('meme-image');
    imagem.src = image3.src;
})

let image4 = document.getElementById('image4');
image4.addEventListener('click', function(){
    let imagem = document.getElementById('meme-image');
    imagem.src = image4.src;
})

let fire = document.getElementById('fire');
fire.addEventListener('click', function() {
    let imagem = document.getElementById('meme-image-container');
    imagem.style.border = "3px dashed rgb(255, 0, 0)";
})

let water = document.getElementById('water');
water.addEventListener('click', function() {
    let imagem = document.getElementById('meme-image-container');
    imagem.style.border = "5px double rgb(0, 0, 255)";
    imagem.style.backgroundColor = "rgb(0, 0, 255)";
})

let earth = document.getElementById('earth');
earth.addEventListener('click', function() {
    let imagem = document.getElementById('meme-image-container');
    imagem.style.border = "6px groove rgb(0, 255, 0)";
    imagem.style.backgroundColor = "rgb(0, 128, 0)";
})

let clear = document.getElementById('clear');
clear.addEventListener('click', function(){
    let imagem = document.getElementById('meme-image-container');
    imagem.style.border = "1px solid rgb(0, 0, 0)";
    imagem.style.backgroundColor = "rgb(255, 255, 255)"
})