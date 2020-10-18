const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const fileInput = document.getElementById('meme-insert');
const image = document.getElementById('meme-image');
const memeContainer = document.querySelector('#meme-image-container');
const fireButton = document.querySelector('#fire');
const waterButton = document.querySelector('#water');
const earthButton = document.querySelector('#earth');
const starterMemes = document.querySelectorAll('section')[3];

textInput.addEventListener('input', function(event){
    memeText.innerText = event.target.value;
});

function changeImage(event){
    if (event.target.type === 'file'){
        image.src = URL.createObjectURL(event.target.files[0]);
    } else{
        image.src = event.target.src;
    }
}

fileInput.addEventListener('change', function (event){
    changeImage(event);
});

starterMemes.addEventListener('click', function (event){
    changeImage(event);
});

function customizeContainer(element){
    memeContainer.classList.remove(...memeContainer.classList);
    memeContainer.classList.add('container');

    switch (element){
        case 'fire':
            memeContainer.classList.add('fire');
            break;
        case 'water':
            memeContainer.classList.add('water');
            break;
        case 'earth':
            memeContainer.classList.add('earth');
            break;
        default:
            break;    
                    
    }
}

fireButton.addEventListener('click', function(){
    customizeContainer('fire');
});

waterButton.addEventListener('click', function (){
    customizeContainer('water');
})

earthButton.addEventListener('click', function (){
    customizeContainer('earth');
});