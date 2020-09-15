const textOutput = document.querySelector('#meme-text');
const imageBox = document.querySelector('#meme-image-container');

//insesrir texto
document.querySelector('#text-input').addEventListener('keyup', (event) => {
  textOutput.innerHTML = event.target.value;
});

//inserir imagem
document.querySelector('#meme-insert').addEventListener('change', (event) => {
  const image = document.querySelector('#meme-image');
  image.src = URL.createObjectURL(event.target.files[0]);
});

//estilizar bordas
document.querySelector('.f').addEventListener('click', () => {
  imageBox.style.border = '3px dashed red';
});
document.querySelector('.w').addEventListener('click', () => {
  imageBox.style.border = '5px double blue';
});
document.querySelector('.e').addEventListener('click', () => {
  imageBox.style.border = '6px groove green';
});

//
const opImages = document.querySelectorAll('.images');
console.log(opImages.length);
for (let i = 0; i < opImages.length; i += 1) {
  opImages[i].addEventListener('click', () => {
    document.querySelector('#meme-image').src = opImages[i].src;
  });
}
