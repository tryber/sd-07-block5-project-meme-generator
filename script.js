window.onload = function(){
    configInput();
}
function configInput(){
    let textInput = document.querySelector("#text-input");
    textInput.addEventListener("input", function(inputText) {
        let text = inputText.target.value;
        let memeText = document.querySelector("#meme-text");
        memeText.innerText = text;
    });
}
window.addEventListener('load', function(){
    document.querySelector('input[type="file"]').addEventListener('change', function(){
        let img = document.getElementById("meme-image");
        img.src=URL.createObjectURL(this.files[0]);
    })
});