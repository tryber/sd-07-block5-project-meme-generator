const textImage = document.getElementById('text-input');
const imageMeme = document.getElementById('meme-image');
const insertImage = document.getElementById('meme-insert')

textImage.addEventListener('keyup', function(){
    const text = textImage.value;
    document.getElementById('meme-text').innerText = text;
});


insertImage.addEventListener('change', function(){
    const image = URL.createObjectURL(insertImage.files[0]);
    imageMeme.src = image;
});

const meme1 = document.getElementById('meme1');
const meme2 = document.getElementById('meme2');
const meme3 = document.getElementById('meme3');
const meme4 = document.getElementById('meme4');


meme1.addEventListener('click',function(){
    imageMeme.src = meme1.src;
})
meme2.addEventListener('click',function(){
    imageMeme.src = meme2.src;
})
meme3.addEventListener('click',function(){
    imageMeme.src = meme3.src;
})
meme4.addEventListener('click',function(){
    imageMeme.src = meme4.src;
})