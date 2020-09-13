window.onload = function() {
  const input = document.getElementById('meme-insert').addEventListener('change',fileLoad);
  function fileLoad(event) {
    const memeImage = document.getElementById("meme-image");
    memeImage.src = URL.createObjectURL(event.target.files[0]);
    memeImage.onload = function() {
    URL.revokeObjectURL(memeImage.src) // free memory
    }
  }
  const textMeme = document.getElementById('text-input');
  textMeme.addEventListener('keyup', function(){
    const texto = document.getElementById('meme-text');
      texto.textContent = textMeme.value

  });
  let backgroundColorButtons = document.querySelectorAll("#cores>button")
  for (let i = 0; i < backgroundColorButtons.length; i += 1) {
    backgroundColorButtons[i].addEventListener("click", function(event) {
      setBackgroundColor(event.target.innerHTML)
    })
  }

  function setBackgroundColor(color) {

      let container = document.getElementById('meme-image-container');
      let caixaAlta = color.toUpperCase();
      if(caixaAlta == 'FIRE') {

          container.style.borderColor = "rgb(255, 0, 0)";
          container.style.borderWidth = '3px';
          container.style.borderStyle = 'dashed';
      }
      else if (caixaAlta == 'WATER') {
          container.style.borderColor = "rgb(0, 0, 255)";
          container.style.borderWidth = '5px';
          container.style.borderStyle = 'double';

      }
      else if(caixaAlta == 'EARTH') {
          container.style.border = "rgb(0, 128, 0)";
          container.style.borderWidth = '6px';
          container.style.borderStyle = 'groove';

      }
    }
      document.getElementById("meme-1").src = "imgs/meme1.png";
      document.getElementById("meme-2").src = "imgs/meme2.png";
      document.getElementById("meme-3").src = "imgs/meme3.png";
      document.getElementById("meme-4").src = "imgs/meme4.png";
      let imgsClick = document.querySelectorAll("#memePronto>img");
      for (let i = 0; i < imgsClick.length; i += 1) {

          imgsClick[i].addEventListener("click", function(event) {
              inserirImg(event.target.src)
          })

       }
       function inserirImg(eventSrc) {

          let memeImage = document.getElementById("meme-image");
          memeImage.src = eventSrc;
     }
}
