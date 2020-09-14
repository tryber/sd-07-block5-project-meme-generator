let uploadButton = document.getElementById("meme-insert");
let imageContainer = document.getElementById("meme-image");
let textInput = document.getElementById("text-input")
let textmeme = document.getElementById("meme-text")
uploadButton.addEventListener("change", function(){
    imageContainer.src = URL.createObjectURL(uploadButton.files[0]);
    console.log("amendoin");
});
textInput.addEventListener("keyup", function(){
    textmeme.innerText = textInput.value;

})
alert("amém");