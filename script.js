// Arquivo com os scripts da página

// let textInput = document.getElementById("text-input").innerText;
let textInput = document.querySelector('#text-input');
console.log(textInput);
let textMeme = document.getElementById("meme-text");

textInput.addEventListener("input",trocaTexto);

function trocaTexto () {
    textMeme.innerText = textInput.value;
}
  
function loadFile (event) {
    var output = document.getElementById("meme-image");
    output.src = URL.createObjectURL(event.target.files[0]);
};


// const caixaTexto = document.querySelector('.caixa-texto');
// const caixaUm = document.querySelector('.caixa1');

// function trocaTextoA () {
//   caixaUm.innerText = caixaTexto.value;
// }

// //Crie seu event listener abaixo:
// caixaTexto.addEventListener("input",trocaTextoA);


// URL.createObjectURL(event.target.files[0]); 
