//Visualizar texto do input no canvas da imagem-meme
let textInput = document.getElementById('text-input');
let memeText = document.getElementById('meme-text');

textInput.addEventListener('input', function() {
    memeText.innerText = textInput.value;
})

// O site deve permitir que quem usa faça upload de uma imagem de seu computador.
let imgInput = document.getElementById('meme-insert');
let imgMeme = document.getElementById('meme-image');

imgInput.addEventListener('change',function(event){
    imgMeme.src = URL.createObjectURL(event.target.files[0]);
    imgMeme.onload = function () {
        URL.revokeObjectURL(imgMeme.src);
    }
})

// Customize a borda da foto com esse 3 botões;
let fireButton = document.getElementById('fire');
let waterButton = document.getElementById('water');
let earthButton = document.getElementById('earth');
let memeBorder = document.getElementById('meme-image-container');

fireButton.addEventListener('click', function () {
    memeBorder.style.border = '3px dashed red';
})

waterButton.addEventListener('click', function () {
    memeBorder.style.border = '5px double blue';
})

earthButton.addEventListener('click', function () {
    memeBorder.style.border = '6px groove green';
})