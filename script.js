function insertImage() {
  let imageInput = document.querySelector("#meme-insert");
  let imageOutput = document.querySelector("#meme-image");
  imageInput.addEventListener("change", function() {          
    imageOutput.src = URL.createObjectURL(this.files[0]);
  });
}

function insertText() {
  let textInput = document.querySelector("#text-input");
  let textOutput = document.querySelector("#meme-text");
  textInput.addEventListener("keyup", function() {
    textOutput.innerText = textInput.value;
  });
}

function borderFire() {
  let btnFire = document.querySelector("#fire");
  btnFire.addEventListener("click", function() {
    let border = document.querySelector("#meme-image-container");
    border.className = "border-fire";
  });
}

function borderWater() {
  let btnWater = document.querySelector("#water");
  btnWater.addEventListener("click", function() {
    let border = document.querySelector("#meme-image-container");
    border.className = "border-water";
  });
}

function borderEarth() {
  let btnEarth = document.querySelector("#earth");
  btnEarth.addEventListener("click", function() {
    let border = document.querySelector("#meme-image-container");
    border.className = "border-earth";
  });
}

function meme1() {
  let meme = document.querySelector("#meme-1");
  let imageOutput = document.querySelector("#meme-image");
  meme.addEventListener("click", function() {          
    imageOutput.src = meme.src;
  });
}

function meme2() {
  let meme = document.querySelector("#meme-2");
  let imageOutput = document.querySelector("#meme-image");
  meme.addEventListener("click", function() {          
    imageOutput.src = meme.src;
  });
}

function meme3() {
  let meme = document.querySelector("#meme-3");
  let imageOutput = document.querySelector("#meme-image");
  meme.addEventListener("click", function() {          
    imageOutput.src = meme.src;
  });
}

function meme4() {
  let meme = document.querySelector("#meme-4");
  let imageOutput = document.querySelector("#meme-image");
  meme.addEventListener("click", function() {          
    imageOutput.src = meme.src;
  });
}