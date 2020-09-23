function getText(){
    const textInput = document.getElementById('text-input');
    const memeText = document.getElementById('meme-text');
    textInput.addEventListener('input', () => {
      memeText.innerHTML = textInput.value;
    });
  }
  
  
  function imageUploadURL(){
    const memeImageUpload = document.getElementById('meme-insert');
    memeImageUpload.addEventListener('change', () => {
      const reader = new FileReader();
      reader.onload = (e) => {
        document.getElementById('meme-image').src = e.target.result;
      };
      reader.readAsDataURL(memeImageUpload.files[0]);
    });
  }  