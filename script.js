
let inputText = document.getElementById("text-input");
inputText.addEventListener("input", function(){
    let showText = document.getElementById("meme-text");
    showText.innerHTML = inputText.value;
});

let inputImage = document.getElementById("meme-insert");
let memeImage = document.getElementById("meme-image");
inputImage.addEventListener("change", function(){
memeImage.src = window.URL.createObjectURL(this.files[0]);
});

// botão fire
function firebutton(){
    let container = document.getElementById("meme-image-container");
    container.style.border ="3px dashed red";
    }
let buttonfire = document.getElementById("fire");
buttonfire.addEventListener("click", firebutton);

// botão water
function waterbutton(){
    let container = document.getElementById("meme-image-container");
    container.style.border ="5px double blue";
    }
let buttonwater = document.getElementById("water");
buttonwater.addEventListener("click", waterbutton);

// botão earth
function earthbutton(){
    let container = document.getElementById("meme-image-container");
    container.style.border ="6px groove green";
    }
let buttonearth = document.getElementById("earth");
buttonearth.addEventListener("click", earthbutton);