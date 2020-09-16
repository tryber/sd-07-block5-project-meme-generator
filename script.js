let inputMemeText = document.getElementById('text-input');
let inputMemeImage = document.getElementById('meme-insert');
let containerMeme = document.getElementById('meme-image-container');
let newMemeText = document.getElementById('meme-text');

let btnFire = document.getElementById('fire');
let btnWater = document.getElementById('water');
let btnEarth = document.getElementById('earth');

function createText(){
  let memeTextArea = document.createElement('div');
  memeTextArea.id = 'meme-text';

  containerMeme.append(memeTextArea);
}

function createImg(){
  let imgMeme = document.createElement('img');
  imgMeme.id = 'meme-image';
  imgMeme.alt = 'Meme Image';

  containerMeme.append(imgMeme);
}

function findText(){
  let textMeme = document.getElementById('meme-text');

  if( textMeme != null) {
    return true;
  }else{
    return false;
  }
}

function findImg(){
  let imageMeme = document.getElementById('meme-image');

  if( imageMeme != null) {
    return true;
  }else{
    console.log('nao achou foto');
    return false;
  }
}

function loadImg(e){

  if( !findImg() ) {
    createImg()
  }
  let imgMeme = document.getElementById('meme-image');

  imgMeme.src = URL.createObjectURL(e.target.files[0]);
  imgMeme.onload = function(){
    URL.revokeObjectURL(imgMeme.src);
  }

  imgMeme.addEventListener('load', resizeDiv);
}

function resizeDiv(e){
  let widthImg = e.path[0].clientWidth;
  let heightImg = e.path[0].clientHeight;

  const px = 'px';

  containerMeme.style.height = (heightImg) + px;
  containerMeme.style.width = (widthImg) + px;

  newMemeText.style.maxWidth = widthImg + px;
}

function fillText(e){
    let memeText = document.getElementById('meme-text');

    if( !findText() ){
      createText();
      let newMemeText = document.getElementById('meme-text');

      newMemeText.innerText = inputMemeText.value;
    }else{
      memeText.innerText = inputMemeText.value;
    }

}

function boardEvent(e){
  let typeButton = e.srcElement.id;

  switch (typeButton) {
    case 'fire':
      containerMeme.style.border = '3px dashed rgb(255, 0, 0)';
      break;
    case 'water':
      containerMeme.style.border = '5px double rgb(0, 0, 255)';
      break;
    case 'earth':
      containerMeme.style.border = '6px groove rgb(0, 128, 0)';
      break;

    default:
      break;
  }
}

inputMemeText.addEventListener('keyup', fillText);
inputMemeImage.addEventListener('change', loadImg);

btnEarth.addEventListener('click', boardEvent);
btnFire.addEventListener('click', boardEvent);
btnWater.addEventListener('click', boardEvent);
