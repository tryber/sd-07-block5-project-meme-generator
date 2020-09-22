window.onload = function () {;
textMeme();
}

function textMeme() {
  let textInput = document.getElementById('text-input');
  textInput.addEventListener('input', function (event) {
    // recuperar o valor digitado
    let text = event.target.value;
    // recuperar onde vou colocar o texto
    let memeText = document.getElementById('meme-text');
    // colocar o texto no lugar
    memeText.innerText = text;
  });
}

let foto = function (event) {
  let memeImage = document.getElementById('meme-image');
  memeImage.src = window.URL.createObjectURL(event.target.files[0]);
};

let memeInsert = document.getElementById('meme-insert');
memeInsert.addEventListener('change', foto);

