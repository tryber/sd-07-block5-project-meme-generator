window.onload = function () {
  memeTextInput();
  insertImage()
};

function memeTextInput() {
  let inputText = document.querySelector("#text-input");
  let memeText = document.querySelector("#meme-text");
  inputText.addEventListener("keyup", function () {
    memeText.innerText = inputText.value;
  });
}

function insertImage() {
  let memeInsert = document.querySelector("#meme-insert");
  let memeImage = document.querySelector("#meme-image");
  memeInsert.addEventListener('change', function(event) {
    memeImage.src = URL.createObjectURL(event.target.files[0]);
  })
}
