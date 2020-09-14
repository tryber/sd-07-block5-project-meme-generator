// Configurando ponte entre HTML e JS
const container = document.getElementById("meme-image-container");
const textInput = document.getElementById("text-input");
const memeText = document.getElementById("meme-text");
const memeInsert = document.getElementById("meme-insert");
const chooseAFile = document.getElementById("chooseAFile");
const status = document.getElementById("status");
const memeImage = document.getElementById("meme-image");
const meme1 = document.getElementById("meme-1");
const meme2 = document.getElementById("meme-2");
const meme3 = document.getElementById("meme-3");
const meme4 = document.getElementById("meme-4");
const meme5 = document.getElementById("meme-5");
const meme6 = document.getElementById("meme-6");
const meme7 = document.getElementById("meme-7");
const meme8 = document.getElementById("meme-8");

// Recebendo a imagem e Mudando o status
chooseAFile.addEventListener("click", function() {
  memeInsert.click();
});
memeInsert.addEventListener("change", function(event) {
  if (memeInsert.value) {
    status.innerHTML = memeInsert.value.match(
      /[\/\\]([\w\d\s\.\-\(\)]+)$/
    )[1];
    memeImage.src = URL.createObjectURL(event.target.files[0]);
    memeImage.onload = function() {
      URL.revokeObjectURL(memeImage.src)
    };
  } else {
    status.innerHTML = "No file.png chosen.";
  }
});

// Inserindo Texto
textInput.addEventListener("keyup", function () {
  memeText.innerHTML = textInput.value;
});

// Mudanças de moldura
fire.addEventListener("click", function () {
  container.style.border = "3px dashed red";
});
water.addEventListener("click", function () {
  container.style.border = "5px double blue";
});
earth.addEventListener("click", function () {
  container.style.border = "6px groove green";
});
air.addEventListener("click", function () {
  container.style.border = "7px dotted gray";
});
theFifthElement.addEventListener("click", function () {
  container.style.border = "7px solid yellow";
});

// Arquivo de memes
meme1.addEventListener("click", function() {
    status.innerHTML = "Meme 1 do Arquivo";
    memeImage.setAttribute('src', meme1.src);
});
meme2.addEventListener("click", function() {
    status.innerHTML = "Meme 2 do Arquivo";
    memeImage.setAttribute('src', meme2.src);
});

meme3.addEventListener("click", function() {
    status.innerHTML = "Meme 3 do Arquivo";
    memeImage.setAttribute('src', meme3.src);
});

meme4.addEventListener("click", function() {
    status.innerHTML = "Meme 4 do Arquivo";
    memeImage.setAttribute('src', meme4.src);
});

meme5.addEventListener("click", function() {
    status.innerHTML = "Meme 5 do Arquivo";
    memeImage.setAttribute('src', meme5.src);
});

meme6.addEventListener("click", function() {
    status.innerHTML = "Meme 6 do Arquivo";
    memeImage.setAttribute('src', meme6.src);
});

meme7.addEventListener("click", function() {
    status.innerHTML = "Meme 7 do Arquivo";
    memeImage.setAttribute('src', meme7.src);
});

meme8.addEventListener("click", function() {
    status.innerHTML = "Meme 8 do Arquivo";
    memeImage.setAttribute('src', meme8.src);
});