window.onload = function(){
    configInput();
}
function configInput(){
    let textInput = document.querySelector("#text-input");
    textInput.addEventListener("input", function(inputText) {
        const text = inputText.target.value;
        const memeText = document.querySelector("#meme-text");
        memeText.innerText = text;
    });
}
window.addEventListener('load', function(){
    document.querySelector('input[type="file"]').addEventListener('change', function(){
        let img = document.getElementById("meme-image");
        img.src=URL.createObjectURL(this.files[0]);
    })
}); 


let button = document.getElementsByClassName('meme-insert');

window.addEventListener('mouseenter',function(){
document.getElementsByClassName('meme-insert').style.backgroundColor = "black";

} )