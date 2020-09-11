document.getElementById('text-input').addEventListener('keyup', function () {
    document.getElementById('meme-text').innerText = document.getElementById('text-input').value;
})

let loadFile = function (event) {
    //localiza onde a imagem será exibida.  
    let memeImage = document.getElementById('meme-image');
    //muda a atibuicao src da imagem itilizando manipulacao de eventose o RL.createObjectURL.   
    memeImage.src = URL.createObjectURL(event.target.files[0]);
    //libera a memoria apos a imagem ser carregada na pagina    
    memeImage.onload = function () {
        URL.revokeObjectURL(memeImage.src);
    }
};

//interacoes dos botoes que mudam a borda do container  
let memeContainer = document.getElementById('meme-image-container');

let botaoFire = document.getElementById('fire');
botaoFire.addEventListener('click', function () {
    memeContainer.style.border = "dashed 3px rgb(255, 0, 0)"
});

let botaoWater = document.getElementById('water');
botaoWater.addEventListener('click', function () {
    memeContainer.style.border = "double 5px rgb(0, 0, 255)"
});

let botaoEarth = document.getElementById('earth');
botaoEarth.addEventListener('click', function () {
    memeContainer.style.border = "groove 6px rgb(0, 128, 0)"
});

//eventos com memes famosos ja carregados 
let meme1 = document.getElementById('meme-1');
let meme2 = document.getElementById('meme-2');
let meme3 = document.getElementById('meme-3');
let meme4 = document.getElementById('meme-4');

meme1.addEventListener('click', function () {
    document.getElementById('meme-image').src = meme1.src
});

meme2.addEventListener('click', function () {
    document.getElementById('meme-image').src = meme2.src
});

meme3.addEventListener('click', function () {
    document.getElementById('meme-image').src = meme3.src
});

meme4.addEventListener('click', function () {
    document.getElementById('meme-image').src = meme4.src
});
