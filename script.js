function setSrcTemplate (origin, final) {
  final.src = origin.src;
  clearBorderTemplate();
}

function clearBorderTemplate() {
  let templateImages = document.querySelectorAll('.sample-img')

  for (const item of templateImages) {
    if (item.src === imgMeme.src) {
      item.style.border = '1px solid black'
    } else {
      item.style.border = ''
    }
  }
}

const btnInputImage = document.querySelector('#meme-insert')
const textInput = document.querySelector('#text-input')
const imgMeme = document.querySelector('#meme-image')
const textMeme = document.querySelector('#meme-text')
const buttonFire = document.querySelector('#fire')
const buttonWater = document.querySelector('#water')
const buttonEarth = document.querySelector('#earth')
const canvasMeme = document.querySelector('#meme-image-container')
const meme1Button = document.querySelector('#meme-1')
const meme2Button = document.querySelector('#meme-2')
const meme3Button = document.querySelector('#meme-3')
const meme4Button = document.querySelector('#meme-4')

btnInputImage.addEventListener('change', () => {
  imgMeme.src = window.URL.createObjectURL(btnInputImage.files[0])
});

textInput.addEventListener('input', () => {
  textMeme.textContent = textInput.value
});

buttonFire.addEventListener('click', () => {
  buttonFire.style.border = '5px ridge rgb(255, 0, 0)';
  canvasMeme.style.border = '3px dashed red';
  buttonWater.style.border = '';
  buttonEarth.style.border = '';
})

buttonWater.addEventListener('click', () => {
  buttonFire.style.border = '';
  canvasMeme.style.border = '5px double blue';
  buttonWater.style.border = '5px ridge rgb(0, 0, 255)';
  buttonEarth.style.border = '';
})

buttonEarth.addEventListener('click', () => {
  buttonFire.style.border = '';
  canvasMeme.style.border = '6px groove green';
  buttonWater.style.border = '';
  buttonEarth.style.border = '5px ridge rgb(0, 128, 0)';
})

meme1Button.addEventListener('click', () => {setSrcTemplate(meme1Button, imgMeme)
})
meme2Button.addEventListener('click', () => {setSrcTemplate(meme2Button, imgMeme)
})
meme3Button.addEventListener('click', () => {setSrcTemplate(meme3Button, imgMeme)
})
meme4Button.addEventListener('click', () => {setSrcTemplate(meme4Button, imgMeme)
})
