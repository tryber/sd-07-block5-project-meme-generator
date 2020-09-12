//CÓDIGO DOS BOTÕES QUE TROCAM AS BORDAS
window.onload=function(){
    let botaoUm=document.getElementById('water');
    let botaoDois=document.getElementById('fire');
    let botaoTres=document.getElementById('earth');
    let conteinerImagem=document.getElementById('meme-image-container');
    let espacoMeme=document.getElementById('meme-image');
    let memeUm=document.getElementById('meme-1');
    let memeDois=document.getElementById('meme-2');
    let memeTres=document.getElementById('meme-3');
    let memequatro=document.getElementById('meme-4');
    let caixaTexto=document.getElementById('text-input')
    let textoMeme=document.getElementById('meme-text');
    let botaoCarregar=document.getElementById('meme-insert');

    memeUm.src='./imgs/meme1.png';
    memeDois.src='./imgs/meme2.png';
    memeTres.src='./imgs/meme3.png';
    memequatro.src='./imgs/meme4.png'
            
    botaoUm.addEventListener('click', function(){
        conteinerImagem.style.borderColor='blue';
        conteinerImagem.style.borderWidth='5px';
        conteinerImagem.style.borderStyle='double';
    })

    botaoDois.addEventListener('click', function(){
        conteinerImagem.style.borderColor='red';
        conteinerImagem.style.borderWidth='3px';
        conteinerImagem.style.borderStyle='dashed';
    })

    botaoTres.addEventListener('click', function(){
        conteinerImagem.style.borderColor='green';
        conteinerImagem.style.borderWidth='6px';
        conteinerImagem.style.borderStyle='groove';
    })

    memeUm.addEventListener('click',function(){
        espacoMeme.src='./imgs/meme1.png';
    })

    memeDois.addEventListener('click',function(){
        espacoMeme.src='./imgs/meme2.png';        
    })

    memeTres.addEventListener('click',function(){
        espacoMeme.src='./imgs/meme3.png';
    })

    memequatro.addEventListener('click',function(){
        espacoMeme.src='./imgs/meme4.png';
    })    

    caixaTexto.addEventListener('keyup', function(){
        textoMeme.innerText=caixaTexto.value;        
    })
}
