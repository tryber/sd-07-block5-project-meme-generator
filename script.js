// criado variaveis
const yourtext = document.getElementById("text-input");
let youtcontent = document.getElementById("meme-text");

/*
configura uma função que será chamada sempre que o evento especificado for entregue ao destino.
referencia 
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener 
*/

yourtext.addEventListener("keyup", function(typeLetters){
    youtcontent.innerText = typeLetters.target.value;
})

// criado variavel para guarda a imagem e a url
let yourImg = document.getElementById("meme-insert");
let imageContent = document.getElementById("meme-image");


// função para enviar a image para o id meme-image
yourImg.addEventListener("change", function(){
    imageContent.src = window.URL.createObjectURL(this.files[0]);
})

//criado variavel para guarda o meme-image-container
let container =  document.getElementById("meme-image-container");

//substituir a borda do meme-image-container com botão fire"
document.getElementById("fire").onclick = function(){
container.style.border = "3px dashed rgb(255,0,0)";
}

//substituir a borda do meme-image-container com botão water
document.getElementById("water").onclick = function(){
    container.style.border = "5px double rgb(0,0,255)";
    }

//substituir a borda do meme-image-container com botão earth
document.getElementById("earth").onclick = function(){
    container.style.border = "6px groove rgb(0,128,0)";
    }
    
