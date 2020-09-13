// Input e pré-visualização do texto inserido pelo usuário

let inputText = document.getElementById("text-input");

inputText.addEventListener("input", function() {
    let previewText = document.getElementById("meme-text");
    previewText.innerHTML = inputText.value;
})

// Input e pré-visualização da imagem inserida pelo usuário via input file

let inputImage = document.getElementById('meme-insert')
let setImage = document.getElementById('meme-image')
inputImage.addEventListener('change', function (event) {
    setImage.src = URL.createObjectURL(event.target.files[0]);
    setImage.onload = function () {
        URL.revokeObjectURL(setImage.src)
    }
})

// Adicionando configurações de borda ao clicar nos botões

function bordaFire() {
    document.getElementById('meme-image-container').style.borderWidth = '3px'
    document.getElementById('meme-image-container').style.borderStyle = 'dashed'
    document.getElementById('meme-image-container').style.borderColor = 'red'  
}

function bordaWater() {
    document.getElementById('meme-image-container').style.borderWidth = '5px'
    document.getElementById('meme-image-container').style.borderStyle = 'double'
    document.getElementById('meme-image-container').style.borderColor = 'blue'  
}

function bordaEarth() {
    document.getElementById('meme-image-container').style.borderWidth = '6px'
    document.getElementById('meme-image-container').style.borderStyle = 'groove'
    document.getElementById('meme-image-container').style.borderColor = 'green'  
}

// Adicionando os templetes ao clicar nas miniaturas dos memes

let meme1 = document.getElementById('meme-1')
meme1.addEventListener('click', function(event) {
    setImage.src = event.target.src
})

let meme2 = document.getElementById('meme-2')
meme2.addEventListener('click', function(event) {
    setImage.src = event.target.src
})

let meme3 = document.getElementById('meme-3')
meme3.addEventListener('click', function(event) {
    setImage.src = event.target.src
})

let meme4 = document.getElementById('meme-4')
meme4.addEventListener('click', function(event) {
    setImage.src = event.target.src
})