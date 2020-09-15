let meme_image = document.getElementById('meme-image');
let textInput = document.getElementById('text-input');
let text = document.getElementById('meme-text');

function loadFile(event){
  meme_image.src = URL.createObjectURL(event.target.files[0]);
  meme_image.onload = function() {
    URL.revokeObjectURL(output.src);
  }
}

textInput.addEventListener('keyup', function loadtext(){
  text.innerText = textInput.value;
});


