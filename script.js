let memeText = document.getElementById('meme-text');

let inputText = document.getElementById('text-input');

function textonaCaixa(){
    memeText.innerHTML = inputText.value;
};

inputText.addEventListener('keyup',textonaCaixa);


let memeInsert = document.getElementById('meme-insert');
let lugarImagem = document.getElementById('meme-image');

function colocarImagem(){
    lugarImagem.src = memeInsert.value;
}

memeInsert.addEventListener('change',colocarImagem);



// Bonus

let btnMeme1 = document.getElementById('meme-1');
let btnMeme2 = document.getElementById('meme-2');
let btnMeme3 = document.getElementById('meme-3');
let btnMeme4 = document.getElementById('meme-4');

let containerImagem = document.getElementById('meme-image-container');

function trocaBordaBlue(){
    containerImagem.style.border =  "3px dashed rgb(255, 0, 0)";
 }

function trocaBordaRed(){
    containerImagem.style.border =  "5px double rgb(0, 0, 255)";
}

function trocaBordaGreen(){
    containerImagem.style.border =  "6px groove rgb (0, 128, 0)";
}



