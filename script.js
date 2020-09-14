//Inserindo variáveis (let) nas tag's selecionadas do html
let inputTag = document.querySelector("#meme-insert");
let inputText = document.querySelector("#text-input");
let imgMeme = document.querySelector("#meme-image");
let memeText = document.querySelector("#meme-text");

//Essa função pega as informaçõs que o usuário digitou no teclado
inputText.addEventListener("keyup", function () {
  memeText.innerHTML = inputText.value;
});

//Função que muda a tribuição da imagem selecionada
inputTag.addEventListener("change", function () {
  imgMeme.src = URL.createObjectURL(this.files[0]);
});
