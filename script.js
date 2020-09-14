function loadFile(event) {
   const loadImage = document.getElementById("meme-image");
   loadImage.src = URL.createObjectURL(event.target.files[0]);
 }
 
 const textInput = document.getElementById("text-input");
 
 textInput.addEventListener("input", function () {
   const memeTextImage = document.getElementById("meme-text");
   memeTextImage.innerHTML = textInput.value
 });
 
 const buttonChoice = document.getElementById("meme-insert");
 
 buttonChoice.addEventListener("change", function(event) {
   loadFile(event);
 });