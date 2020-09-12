window.onload = function(){
    //Declarando variáveis:
    let textMemeInput = document.getElementById("text-input");
    let inputImg = document.getElementById("meme-insert");
    let btnFire = document.getElementById("fire");
    let btnWater = document.getElementById("water");
    let btnEarth = document.getElementById("earth");
    let btnNormal = document.getElementById("normal");
    let meme1 = document.getElementById("meme-1");
    let meme2 = document.getElementById("meme-2");
    let meme3 = document.getElementById("meme-3");
    let meme4 = document.getElementById("meme-4");
    

    //Criando evento do texto
    textMemeInput.addEventListener("keyup", function(){
        let memeText = document.getElementById("meme-text");
        memeText.innerText = textMemeInput.value;
    });
    //Criando evento da imagem com a função URL.createObjectURL
    inputImg.addEventListener("change", function(event){
        let imgMeme = document.getElementById("meme-image");
        imgMeme.src = URL.createObjectURL(event.target.files[0]);
    });
    //Criando as bordas bônus com evento de click
    btnFire.addEventListener("click", function(){
        let border = document.getElementById("meme-image-container");
        border.style.border = "dashed red 3px"
    });
    btnWater.addEventListener("click", function(){
        let border = document.getElementById("meme-image-container");
        border.style.border = "double blue 5px"
    });
    btnEarth.addEventListener("click", function(){
        let border = document.getElementById("meme-image-container");
        border.style.border = "groove green 6px"
    });
    btnNormal.addEventListener("click", function(){
        let border = document.getElementById("meme-image-container");
        border.style.border = "solid black 1px"
    });
    //Criando evento para memes pré prontos
    meme1.addEventListener("click", function(){
        let imgMeme = document.getElementById("meme-image");
        imgMeme.src = "./imgs/meme1.png";
    });
    meme2.addEventListener("click", function(){
        let imgMeme = document.getElementById("meme-image");
        imgMeme.src = "./imgs/meme2.png";
    });
    meme3.addEventListener("click", function(){
        let imgMeme = document.getElementById("meme-image");
        imgMeme.src = "./imgs/meme3.png";
    });
    meme4.addEventListener("click", function(){
        let imgMeme = document.getElementById("meme-image");
        imgMeme.src = "./imgs/meme4.png";
    });














}