const caixaTexto = document.querySelector('#text-input');
const memeTexto = document.querySelector('#meme-text');

function escreverMeme () {
    memeTexto.innerText = caixaTexto.value;
}

caixaTexto.addEventListener("input", escreverMeme);

var loadFile = function(event) {
	var image = document.getElementById('meme-image');
	image.src = URL.createObjectURL(event.target.files[0]);
};