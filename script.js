function loadFile(event) {
  let output = document.getElementById('meme-image');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function() {
    URL.revokeObjectURL(output.src);
  };
};

let writeText = document.getElementById('text-input');
let showText = document.getElementById('meme-text');
function inputText() {
  showText.innerText = writeText.value;
}

writeText.addEventListener('keyup', inputText);