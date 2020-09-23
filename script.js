function loadFile(event) {
    let divImage = document.getElementById("meme-image");
    let source = URL.createObjectURL(event.target.files[0]);
    //O novo objeto URL representa o objeto File passado como argumento
    //fonte https://developer.mozilla.org/pt-BR/docs/Web/API/URL/createObjectURl
    divImage.innerHTML = `<img  src='${source}'                            
                        </img>`;
    // Adicionando á div a tag img, carregando com src do objeto passado como argumento.
}
//A função em onload="imageOption()" nunca vai ser chamada com src vazio. O onload é disparado justamente quando algo é carregado. Com o src vazio, esse algo é inexistente.
//fonte https://pt.stackoverflow.com/questions/276808/carregar-imagem-via-javascript

window.onload = function() {
    let buttonImage = document.getElementById("meme-insert");
    buttonImage.addEventListener("change", function(event) {
        loadFile(event);
    });

    let inputText = document.getElementById("text-input");
    let memeText = document.getElementById("meme-text");

    inputText.addEventListener("input", function() {
        memeText.innerHTML = inputText.value;
    });
};
//consultei o pull requeste de Luciano Brechon - Turma 07 da Trybe para compreender melhor as funções.
// link do pull realizado por  Luciano: https://github.com/tryber/sd-07-block5-project-meme-generator/pulls/Berchon