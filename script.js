let loadFile = function(event) {
    let output = document.getElementById("meme-image")
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
    URL.revokeObjectURL(output.src)
    }
};

let textInputInit = document.querySelector("#text-input");
textInputInit.addEventListener("keyup", function () {
    let textInput = document.querySelector("#text-input").value;
    let textOutput = document.querySelector("#meme-text");
    textOutput.innerText = textInput ;
});

document.querySelector('#text-input').setAttribute('maxlength',60);

let imageContainer = document.getElementById("meme-image-container");

let fireButton = document.getElementById("fire")
fireButton.addEventListener("click", function () {
    imageContainer.style.border = "3px dashed red"
});

let waterButton = document.getElementById("water")
waterButton.addEventListener("click", function () {
    imageContainer.style.border = "5px double blue"
});

let earthButton = document.getElementById("earth")
earthButton.addEventListener("click", function () {
    imageContainer.style.border = "6px groove green"
});

let memeImage = document.getElementById("meme-image");

let meme1 = document.getElementById("meme-1")
meme1.addEventListener("click", function () {
    memeImage.src = meme1.src
});

let meme2 = document.getElementById("meme-2")
meme2.addEventListener("click", function () {
    memeImage.src = meme2.src
});

let meme3 = document.getElementById("meme-3")
meme3.addEventListener("click", function () {
    memeImage.src = meme3.src
});

let meme4 = document.getElementById("meme-4")
meme4.addEventListener("click", function () {
    memeImage.src = meme4.src
});