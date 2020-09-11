let textInput = document.querySelector("#text-input");
let memeText = document.querySelector("#meme-text");
let memeImageContainer = document.querySelector("meme-image-container");

function outText(){
    memeText.innerText = textInput.value;
}



textInput.addEventListener("input", outText);


