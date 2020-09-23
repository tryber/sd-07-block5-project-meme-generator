let textMeme = document.getElementById('text-input');
let memeText = document.getElementById('meme-text');
let memeInsert = document.getElementById('meme-insert');
let buttons = document.querySelectorAll('button');
let memesImages = document.querySelectorAll('.memes-images');

textMeme.addEventListener('keyup', function (){
  memeText.innerText = textMeme.value;
});


for(let button of buttons){
  button.addEventListener('click', function () {
    let memeImageContainer = document.getElementById('meme-image-container');
    let border = window.getComputedStyle(button, null)
    .getPropertyValue("border");
    memeImageContainer.style.border = border;  
  });
}

for (let memePronto of memesImages) {
  
  memePronto.addEventListener('click', function (){
    console.log(memePronto.src);
    document.getElementById('meme-image').src = memePronto.src;
  })
} 