let inputText = document.querySelector("#text-input");
let memeText = document.querySelector("#meme-text");
let memeContainer = document.querySelector('#meme-image-container');
let buttonsMeme = document.querySelectorAll(".buttons");

inputText.addEventListener("keyup", function(){
    memeText.innerText = inputText.value;
}
);

let inputMeme = document.querySelector("#meme-insert");
let memeImage = document.querySelector("#meme-image");

inputMeme.addEventListener("change", function(){
    memeImage.src = URL.createObjectURL(event.target.files[0]);
    memeImage.onload = function() {
        URL.revokeObjectURL(memeImage.src);
      }
}
);

function switchBorderMeme (){
    for(let index = 0; index < buttonsMeme.length; index += 1){
        buttonsMeme[index].addEventListener('click', function(){
            if(index === 0){
                memeContainer.style.border = "3px dashed red";
            }else if (index === 1){
                memeContainer.style.border = "5px double blue";
            }else{
                memeContainer.style.border = "6px groove green";
            }
        });
    }
}

document.querySelector("#meme-1").addEventListener('click', function(){
    memeImage.src = 'imgs/meme1.png';
})

document.querySelector("#meme-2").addEventListener('click', function(){
    memeImage.src = 'imgs/meme2.png';
})

document.querySelector("#meme-3").addEventListener('click', function(){
    memeImage.src = 'imgs/meme3.png';
})

document.querySelector("#meme-4").addEventListener('click', function(){
    memeImage.src = 'imgs/meme4.png';
})

switchBorderMeme();

