window.onload = function() {
    // recebe o texto escrito no box e imprime ele na caixa do meme    
    let textInput = document.querySelector("#text-input");

    function recebeFrase() {
        let textBox = document.querySelector("#meme-text");
        textBox.innerHTML = textInput.value;   
    }

    textInput.addEventListener("keyup", recebeFrase);
}

// recebe upload da imagem e imprime na caixa do meme
function recebeImagem(event) {
    let memeImage = document.querySelector("#meme-image");
    memeImage.src = URL.createObjectURL(event.target.files[0]);
}