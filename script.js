document.getElementById("text-input").addEventListener("keyup", function () {
  let text = document.getElementById("text-input").value;
  document.getElementById("meme-text").innerText = text;
});

let imageMeme = document.getElementById("meme-image");

document
  .getElementById("meme-insert")
  .addEventListener("change", function (meme) {
    imageMeme.src = URL.createObjectURL(meme.target.files[0]);
  });

document.getElementById("fire").addEventListener("click", function () {
  document.getElementById("meme-image-container").style.border =
    "3px dashed red";
});

document.getElementById("water").addEventListener("click", function () {
  document.getElementById("meme-image-container").style.border =
    "5px double blue";
});

document.getElementById("earth").addEventListener("click", function () {
  document.getElementById("meme-image-container").style.border =
    "6px groove green";
});

document.getElementById("meme-1").addEventListener("click", function () {
  imageMeme.src = document.getElementById("meme-1").src;
});

document.getElementById("meme-2").addEventListener("click", function () {
  imageMeme.src = document.getElementById("meme-2").src;
});

document.getElementById("meme-3").addEventListener("click", function () {
  imageMeme.src = document.getElementById("meme-3").src;
});

document.getElementById("meme-4").addEventListener("click", function () {
  imageMeme.src = document.getElementById("meme-4").src;
});

