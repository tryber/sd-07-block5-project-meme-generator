var texto = document.querySelector("#text-input");
var textoMeme = document.querySelector("#meme-text");
var fogo = document.querySelector("#fire");
var agua = document.querySelector("#water");
var terra =document.querySelector("#earth");
var borda = document.querySelector(".container");

function textoAqui() {
    textoMeme.innerText = texto.value;
}

function botaoFogo () {
    borda.style.border = '3px dashed red';
}
function botaoAgua () {
    borda.style.border = '5px double blue'; //borda azul, com 5 pixels do tipo double
}
function botaoTerra () {
    borda.style.border = '6px groove green'; //groove, verde e com 6 pixels.
}

var loadFile = function (event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
        URL.revokeObjectURL(output.src) // free memory
    }
};

texto.addEventListener('input', textoAqui);
fogo.addEventListener('click', botaoFogo);
agua.addEventListener('click', botaoAgua);
terra.addEventListener('click', botaoTerra);