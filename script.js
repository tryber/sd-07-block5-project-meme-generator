// Acompanhando a explicação do GUGA junto com o colega Ander
let inputText = document.getElementById("text-input");
inputText.addEventListener("input", function() {
    let memeText = document.getElementById("meme-text");
    memeText.innerHTML = inputText.value;
});

// linha de comando melhorado no plantão do GUGA com o colega Rodrigo Pardo
//Antes
/*let updateFile = function(event) {
    let imageMeme = document.querySelector("#meme-image");
    imageMeme.src = URL.createObjectURL(event.target.files[0]);
    imageMeme.onload = function() {
        URL.revokeObjectURL(imageMeme.src)
    };
};*/
//Agora
const update = document.getElementById("meme-insert");
const imageMeme = document.getElementById("meme-image");
update.addEventListener("change", function() {
    imageMeme.src = window.URL.createObjectURL(this.files[0]);
});
// Reformulando o código para menor comparando com os projetos dos Colegas, me deparei com algo mais sofisticado quanto ao colega Daniel Duarte
//Alterando a formatação de forma direta do elemento.
// Antes
/*const btnRed = document.getElementById("fire")
btnRed.addEventListener("click", function() {
    memeBorder,className = "redborder";
});*/
//Agora
let memeBorder = document.getElementById("meme-image-container");
const btnRed = document.getElementById("fire")
btnRed.addEventListener("click", function() {
    memeBorder.style.border = '3px dashed red';
});
const btnBlue = document.getElementById("water")
btnBlue.addEventListener("click", function() {
    memeBorder.style.border = '5px double blue';
});
const btnGreen = document.getElementById("earth")
btnGreen.addEventListener("click", function() {
    memeBorder.style.border = '6px groove green';
});
const mene1 = document.getElementById("meme-1")
mene1.addEventListener('click', function () {
    document.querySelector('#meme-image').src = mene1.src;
});
const mene2 = document.getElementById("meme-2")
mene2.addEventListener('click', function () {
    document.querySelector('#meme-image').src = mene2.src;
});
const mene3 = document.getElementById("meme-3")
mene3.addEventListener('click', function () {
    document.querySelector('#meme-image').src = mene3.src;
});
const mene4 = document.getElementById("meme-4")
mene4.addEventListener('click', function () {
    document.querySelector('#meme-image').src = mene4.src;
});