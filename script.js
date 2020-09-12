function updateText(text) {
    document.querySelector('#meme-image-container p').innerText = text.target.value;
}
  
function updatePhoto(files) {
    const img = document.querySelector('#meme-image');
    const objectURL = window.URL.createObjectURL(files[0]);
    img.src = objectURL;
    img.onload = function () {
      window.URL.revokeObjectURL(this.src);
  };
} 

document.body.onload = function () {
  document.querySelector('#text-input').addEventListener('input', updateText);
  document.querySelector('#meme-insert').addEventListener('change', (e) => updatePhoto(e.target.files));
};