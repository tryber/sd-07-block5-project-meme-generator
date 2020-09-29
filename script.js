window.onload = function () {

  function memeTxt() {
    const memeText = document.getElementById('text-input').value;
    document.getElementById('meme-text').innerText = memeText;
    return document.getElementById('meme-text').innerText;
  }

  function memeImg() {
    const memeFile = document.getElementsByTagName('input')[1].files[0];
    const memeURL = URL.createObjectURL(memeFile);
    document.getElementsByTagName('img')[0].src = memeURL;
    return document.getElementsByTagName('img')[0].src;
  }

  document.getElementById('text-input').addEventListener('keyup', memeTxt);
  document.getElementById('meme-insert').addEventListener('change', memeImg);
};
