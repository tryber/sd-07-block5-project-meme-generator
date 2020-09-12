// Função para inserir o texto do input no container 'meme-image-container'

const text = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

function insertText() {
  memeText.innerText = text.value;
}

text.addEventListener('keyup', insertText);

// Função para inserir o arquivo(imagem) do input no container 'meme-image-container'

const image = document.getElementById('meme-insert');
const imageOutput = document.getElementById('meme-image');

image.addEventListener('change', function (event) {
  imageOutput.src = URL.createObjectURL(event.target.files[0]);
});

const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');
const getBorder = document.getElementById('meme-image-container');

// Funções para estilizar a borda do container 'meme-image-container':

function redBorder() {
  getBorder.style.border = '3px dashed red';
}

function blueBorder() {
  getBorder.style.border = '5px double blue';
}

function greenBorder() {
  getBorder.style.border = '6px groove green';
}

fireButton.addEventListener('click', redBorder);
waterButton.addEventListener('click', blueBorder);
earthButton.addEventListener('click', greenBorder);

// Função para colocar imagens pré definidas no container 'meme-image-container':

const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');

function showsInTheContainer1() {
  imageOutput.src = meme1.src;
}

function showsInTheContainer2() {
  imageOutput.src = meme2.src;
}

function showsInTheContainer3() {
  imageOutput.src = meme3.src;
}

function showsInTheContainer4() {
  imageOutput.src = meme4.src;
}

meme1.addEventListener('click', showsInTheContainer1);
meme2.addEventListener('click', showsInTheContainer2);
meme3.addEventListener('click', showsInTheContainer3);
meme4.addEventListener('click', showsInTheContainer4);
