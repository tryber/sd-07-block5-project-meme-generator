const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
textInput.addEventListener('input', function () {
    memeText.innerText = textInput.value;
  });
  
  const imageInsert = document.querySelector('meme-insert');

  imageInsert.addEventListener('input', function(){
imageInsert.id = "meme-image"
img.src = URL.createObjectURL(this.file[0]);


  })
