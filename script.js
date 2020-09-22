
function showImage(event) {
    document.querySelector('#meme-image').src = URL.createObjectURL(event.target.files[0]);
}

function azul() {
    document.getElementById('meme-image-container').style.border = '5px double blue';
}

function verde() {
    document.getElementById('meme-image-container').style.border = '6px groove green';
}

function vermelho() {
    document.getElementById('meme-image-container').style.border='3px dashed red';
}

document.getElementById('text-input').addEventListener("keyup", function(){
    document.getElementById('meme-text').innerText = document.getElementById('text-input').value;
});

function mostraminiatura(event)
{
    document.querySelector('#meme-image').src = event.target.src;
}

document.getElementById('text-input').addEventListener("keyup", function(){
    document.getElementById('meme-text').innerText = document.getElementById('text-input').value;
});