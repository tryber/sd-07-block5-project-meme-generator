const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
// const memeInsert = document.getElementById('meme-insert');

textInput.addEventListener('input', function () {
  memeText.innerText = textInput.value;
});

// Resolução baseada na dica do exercício
let loadFile = function (event) {
  let reader = new FileReader();
  reader.onload = function () {
    let memeImage = document.getElementById('meme-image');
    memeImage.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};
