const frase = document.getElementById('text-input');
const linha = document.getElementById('meme-text');
frase.addEventListener('keyup', function(event) {
    linha.innerHTML = event.target.value;
})
const foto = document.getElementById('meme-insert');
const painel = document.getElementById('meme-image');

foto.addEventListener('change', function() {
    painel.src = window.URL.createObjectURL(this.files[0]);
})
