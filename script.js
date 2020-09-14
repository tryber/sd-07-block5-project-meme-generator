
//inserção de texto na imagem
const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
textInput.addEventListener('input', function() {
memeText.innerText = textInput.value;
});
//Inserção de imagem no container
const memeInsert = document.querySelector('#meme-insert');
const memeImage = document.querySelector('# meme-image');
memeInsert.addEventListener('change', function(event) {

    memeImage.src = URL.createObjectURL(event.target.files[0]);
    memeImage.onload = function (){
URL.revokeObjectURL(memeImage.src);
    };
});

const pictureOne = document.querySelector('#meme-1');
pictureOne.addEventListener('click', function(){
memeImage.src = pictureOne.src;
});

const pictureTwo = document.querySelector('#meme-2');
pictureOne.addEventListener('click', function(){
memeImage.src = pictureOne.src;
});

const pictureTree = document.querySelector('#meme-3');
pictureOne.addEventListener('click', function(){
memeImage.src = pictureOne.src;
});

const pictureFour = document.querySelector('#meme-4');
pictureOne.addEventListener('click', function(){
memeImage.src = pictureOne.src;
});