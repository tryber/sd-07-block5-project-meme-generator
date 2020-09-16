let textMeme = document.getElementById("text-input");

textMeme.addEventListener("input", function(event){
    let memeText = event.target.value;
    let memeFinal = document.getElementById("meme-text");
    console.log(memeFinal)
    memeFinal.innerText = memeText;
});

let imgMeme = document.getElementById("meme-insert");
let imgDisplay = document.getElementById("meme-image");
imgMeme.addEventListener("change",function(){
    imgDisplay.src = window.URL.createObjectURL(this.files[0]);
});