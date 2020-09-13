
window.onload = function() {
    let caixaTexto = document.querySelector('#text-input');
            
    caixaTexto.addEventListener('input', function(){
        console.log(caixaTexto)
        let saidaTexto = document.querySelector('#meme-text');
        saidaTexto.innerHTML = caixaTexto.value;
    });

 
}


function trocarImg(event){
    const imagem = document.getElementById('meme-image');
    imagem.src = URL.createObjectURL(event.target.files[0]);

}
let recebeImg = document.querySelector("#meme-insert")
recebeImg.addEventListener("input",trocarImg)