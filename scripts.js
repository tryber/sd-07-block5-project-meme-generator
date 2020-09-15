window.onload = function(){
    const containerMeme = document.querySelector("#meme-image-container");
    const textInput = document.querySelector("#text-input");
    const textToPhoto = document.querySelector("#meme-text");
    const fotoInput = document.querySelector("#meme-insert");
    const imgPhoto = document.querySelector("#meme-image");
    const btFire = document.querySelector("#fire");
    const btWater = document.querySelector("#water");
    const btEarth = document.querySelector("#earth");
    const sectionButtons = document.querySelector("#buttons")
    fotoInput.addEventListener("change",function(event){
        let file = event.target.files[0];
        let url = URL.createObjectURL(file);
        imgPhoto.src=url;
    });
    textInput.addEventListener("keyup",function(event){
        textToPhoto.innerHTML = textInput.value;

    });
    fire.addEventListener("click", function(){
        containerMeme.style.border = '3px dashed red';
    });
    water.addEventListener("click", function(){
        containerMeme.style.border = '5px double blue';
    });
    earth.addEventListener("click", function(){
        containerMeme.style.border = '6px groove green';
    });
}



