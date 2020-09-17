const inputText = document.getElementById('text-input');

inputText.addEventListener ('input', function (){
    const showText = document.getElementById('meme-text');
showText.innerHTML = inputText.value;
});

const loadFile = function(event) {
  let output = document.getElementById("meme-image")
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
        URL.revokeObjectURL(output.src);
}
}

let chooseFile = document.getElementById("meme-insert");
chooseFile.addEventListener('change', loadFile);

let buttonFire = getElementById("fire");
let buttonWater = getElementById("water");
let buttonEarth = getElementById("earth");
let memeImageContainer = getElementById("meme-image-container")

buttonFire.addEventListener("click", function () {
    memeImageContainer.style.border = "3px dashed red";
})

buttonWater.addEventListener("click", function () {
    memeImageContainer.style.border = "5px double blue";
})

buttonEarth.addEventListener("click", function () {
    memeImageContainer.style.border = "6px groove green";
})
