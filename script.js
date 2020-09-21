let textInput = document.getElementById("text-input")
let memeText = document.getElementById("meme-text")
let memeImage = document.getElementById("meme-image")


function ReceiveText(){
    memeText.innerText = textInput.value;
}
function ReceiveImage(){
    memeImage.src = URL.createObjectURL(event.target.files[0])
}
// testar fazer com addEventListener(input para o texto e change para URL)