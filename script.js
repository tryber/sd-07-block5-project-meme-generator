let divDoMeme = document.querySelector("#meme-image-container");
let caixaTexto = document.querySelector("#text-input");
let botaoDaFoto = document.querySelector("#meme-insert");
let containerDoMeme = document.getElementById("meme-image-container");
let divDaImagem = document.querySelector("#meme-image");
let divDoTexto = document.querySelector("#meme-text");
let tagImg = document.querySelector("#preview-image");
let botaoVermelho = document.querySelector("#fire");
let botaoAzul = document.querySelector("#water");
let botaoVerde = document.querySelector("#earth");
function aparecerTexto (){
    divDoTexto.innerText=caixaTexto.value;
                
}
caixaTexto.addEventListener("keyup", aparecerTexto);


function aparecerImagem (event) {
     tagImg.src=URL.createObjectURL(event.target.files[0]);
    
}
function vermelho (){
    containerDoMeme.style.border= "3px dashed red";
}
botaoVermelho.addEventListener("click", vermelho);

function azul (){
    containerDoMeme.style.border= "5px double blue";
}
botaoAzul.addEventListener("click", azul);

function verde (){
    containerDoMeme.style.border= "6px groove green";
}
botaoVerde.addEventListener("click", verde);
