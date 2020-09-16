window.onload = function() {
  setupMemeTextInput();  
}
function setupMemeTextInput() {
	let textInput = document.querySelector("#text-input")
	textInput.addEventListener("input", function(event) {
		let text = event.target.value;
		let memeTextP = document.querySelector("#meme-text");
		memeTextP.innerHTML = text;
	})
}
let memeInsert = document.getElementById("meme-insert");
let image = document.getElementById("meme-image");
memeInsert.addEventListener("change", function() {
	image.src = window.URL.createObjectURL(this.files[0]);
})
