
 
/*  trexo copiado  */
 const textInput = document.getElementById('text-input');
  const memeInsert = document.getElementById('meme-insert');
  const img = document.querySelector('img');
  
  textInput.addEventListener('input', function () {
    const textImage = document.getElementById('meme-text');
    textImage.innerHTML = textInput.value;
  });

  memeInsert.addEventListener('input', function () {
    img.id = 'meme-image';
    img.src = URL.createObjectURL(this.files[0]);
  });
  
  /* fim de trexo copiado  objetivando simplificar e fazer funcionar  */
   
   

    function editarBorda(event) {
      let mudaBorda = '';
      switch (event.target.id) {
        case 'fire':
          mudaBorda = 'meme-image-container fire-border';
          break;
        case 'water':
          mudaBorda = 'meme-image-container water-border';
          break;
        case 'earth':
          mudaBorda = 'meme-image-container earth-border';
          break;
        default:
          mudaBorda = 'meme-image-container default-border';
      }
      document.getElementById('meme-image-container').className = mudaBorda;
    }
  
    const buttonElementos = document.getElementsByTagName('button');
    for (let index = 0; index < buttonElementos.length; index+=1) {
      buttonElementos[index].addEventListener('click',editarBorda);
    }

function meme1(){
 
   document.getElementById('meme-image').src="imgs/meme1.png";
}
function meme2(){
  document.getElementById('meme-image').src="imgs/meme2.png";
}
function meme3(){
  document.getElementById('meme-image').src="imgs/meme3.png";
}
function meme4(){
  document.getElementById('meme-image').src="imgs/meme4.png";
}

 

 


