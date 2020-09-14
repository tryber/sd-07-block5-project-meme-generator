let input = document.querySelector("#text-input");
let memeText = document.querySelector("#meme-text");

input.addEventListener("keyup", function() {
    memeText.innerText = input.value;
});