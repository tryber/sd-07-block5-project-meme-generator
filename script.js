window.onload = function() {
    /* Onde eu pego a informação e onde eu jogo a informação*/
    let textToBeInserted = document.querySelector("#text-input"); /* Pega elemento HTML pela seleção de seu Id */
    let textToBeShown = document.querySelector("#meme-text"); /* Local onde o texto deverá aparecer */
    textToBeInserted.addEventListener("keyup", insertText); /* Atribuindo um evento para quando houver um input na caixa de texto */
 
    function insertText() { /* Criando função onde o usuário vai inserir a informação na caixa de texto */
        textToBeShown.innerText = textToBeInserted.value; /* O que o usuário escrever entrará como valor innerText dentro do innerHTML do meme-text */
    }

    /* Como colocar a imagem na div */
    let imageSrc = document.querySelector("#meme-insert"); /* Pega HTML pelo Id onde imagem será escolhida */
    let imageBox = document.querySelector("#meme-image"); /* Local que apresentará a imagem */
    let imageContainer = document.querySelector("#meme-image-container");

    imageSrc.addEventListener("change", insertImage); /*  */
    
    function insertImage() { /*  */
        imageBox.src = window.URL.createObjectURL(imageSrc.files[0]); /* Buscando a fonte da seleção da imagem */
    }

    /* Como colocar as pequenas imagens na div */
    let image1 = document.querySelector("#meme-1");
    let image2 = document.querySelector("#meme-2");
    let image3 = document.querySelector("#meme-3");
    let image4 = document.querySelector("#meme-4");

    image1.addEventListener("click", function () {
        imageBox.src = event.target.src;
    });
    image2.addEventListener("click", function () {
        imageBox.src = event.target.src;
    });
    image3.addEventListener("click", function () {
        imageBox.src = event.target.src;
    });
    image4.addEventListener("click", function () {
        imageBox.src = event.target.src;
    });
    /* https://stackoverflow.com/questions/41052871/how-get-the-image-src-value/41054319 */

    /* Como mudar as bordas */
    let borderWater = document.querySelector("#water");
    let borderFire = document.querySelector("#fire");
    let borderEarth = document.querySelector("#earth");

    borderWater.addEventListener("click", function () {
        imageContainer.style.border = "double 5px blue";
       
    });
    borderFire.addEventListener("click", function () {
        imageContainer.style.border = "dashed 3px red"; 
       
    });
    borderEarth.addEventListener("click", function () {
        imageContainer.style.border = "groove 6px green";    
    });
}