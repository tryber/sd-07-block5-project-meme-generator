let img = document.getElementById("meme-image");
let input = document.getElementById("meme-insert");
let text = document.getElementById("text-input");
let memetext = document.getElementById("meme-text");
let fire = document.getElementById("fire");
let water = document.getElementById("water");
let earth = document.getElementById("earth");
let container = document.getElementById("meme-image-container");
let bmeme1 = document.getElementById("meme-1");
let bmeme2 = document.getElementById("meme-2");
let bmeme3 = document.getElementById("meme-3");
let bmeme4 = document.getElementById("meme-4");


container.style.borderWidth = "1px";
container.style.borderStyle = "solid";
container.style.borderColor = "black";
container.style.backgroundColor = "white";
container.style.position = "relative";

// carrega a imagem selecionada
input.addEventListener('change', function() {
    img.src =  URL.createObjectURL(input.files[0]);
    img.style.height="300px";
    img.style.width="300px"
})

// transfere o texto digitado para o meme-text
text.addEventListener("input", function() {
    memetext.innerText = text.value;
});

// As bordas devem ser acrescentadas ao container, identificado como `meme-image-container`;
fire.addEventListener("click", function() {
    // container.className = "fireborder";
    container.style.border = "3px dashed rgb(255, 0, 0)";
});

// As bordas devem ser acrescentadas ao container, identificado como `meme-image-container`;
water.addEventListener("click", function() {
    //container.className = "waterborder";
    container.style.border = "5px double rgb(0, 0, 255)";
});

// As bordas devem ser acrescentadas ao container, identificado como `meme-image-container`;
earth.addEventListener("click", function() {
    //container.className = "earthborder";
    container.style.border = "6px groove rgb(0, 128, 0)";
    
});

// As imagens devem aparecer dentro do container de forma análoga às imagens enviadas por _upload_ para a página.
bmeme1.addEventListener("click", function() {
    img.src =  "imgs/meme1.png";
});

// As imagens devem aparecer dentro do container de forma análoga às imagens enviadas por _upload_ para a página.
bmeme2.addEventListener("click", function() {
    img.src =  "imgs/meme2.png";
});

// As imagens devem aparecer dentro do container de forma análoga às imagens enviadas por _upload_ para a página.
bmeme3.addEventListener("click", function() {
    img.src =  "imgs/meme3.png";
});

// As imagens devem aparecer dentro do container de forma análoga às imagens enviadas por _upload_ para a página.
bmeme4.addEventListener("click", function() {
    img.src =  "imgs/meme4.png";
});
