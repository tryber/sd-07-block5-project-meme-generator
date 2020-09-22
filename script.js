let txtin = document.getElementById("text-input");
let txtout = document.getElementById("meme-text");
let imgin = document.getElementById("meme-insert");
let imgout = document.getElementById("meme-image");
let finalmeme = document.getElementById("meme-image-container");

// Atualizar o texto
function textUpdate(i) {
  txtout.innerText = i.target.value;
}
document.body.onload = function () {
  txtin.addEventListener("input", textUpdate);
};
// Atualizar a imagem do meme
imgin.addEventListener("change", function (event) {
  imgout.src = URL.createObjectURL(event.target.files[0]);
});
