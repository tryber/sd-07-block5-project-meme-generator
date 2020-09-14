const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

textInput.addEventListener('input', function updateValue(event) {
  memeText.textContent = event.target.value;
});
