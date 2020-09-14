window.onload = function () {
  let img = document.querySelector('img')
  let upload = document.querySelector('#meme-insert')
  let text = document.querySelector('#text-input')
  let memeText = document.querySelector('#meme-text')
  let imageContainer = document.querySelector('#meme-image-container')
  let fireBtn = document.querySelector('#fire')
  let waterBtn = document.querySelector('#water')
  let earthBtn = document.querySelector('#earth')

  let openImage = function(event) {
    img.src = URL.createObjectURL(event.target.files[0]);
    img.width = 'fit-content'; 
  };
  
  upload.addEventListener('change', openImage)

  text.addEventListener('input', function() {
    memeText.innerText = text.value
  })

  fireBtn.addEventListener('click', function() {
    imageContainer.style.border = 'dashed 3px Red'
  })

  waterBtn.addEventListener('click', function() {
    imageContainer.style.border = 'double 5px Blue'
  })

  earthBtn.addEventListener('click', function() {
    imageContainer.style.border = 'groove 6px Green'
  })
}
  
