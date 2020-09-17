function onLoadText() {
  const texto = document.getElementById('text-input').value;
  document.getElementById('meme-text').innerHTML = texto;
}
function onLoadImg() {
  const imagem = document.getElementById('meme-image');
  imagem.src = URL.createObjectURL(event.target.files[0]);
  imagem.onload = function () {
    URL.revokeObjectURL(imagem.src);
  };
}
function changeBorderFire() {
  document.getElementById('meme-image-container').style.border = '3px dashed red';
}
function changeBorderWater() {
  document.getElementById('meme-image-container').style.border = '5px double blue';
}
function changeBorderEarth() {
  document.getElementById('meme-image-container').style.border = '6px groove green';
}
function selectImg1() {
  const url = document.getElementById('meme-1').src;
  const img = document.getElementById('meme-image');
  img.src = url;
}
function selectImg2() {
  const url = document.getElementById('meme-2').src;
  const img = document.getElementById('meme-image');
  img.src = url;
}
function selectImg3() {
  const url = document.getElementById('meme-3').src;
  const img = document.getElementById('meme-image');
  img.src = url;
}
function selectImg4() {
  const url = document.getElementById('meme-4').src;
  const img = document.getElementById('meme-image');
  img.src = url;
}
