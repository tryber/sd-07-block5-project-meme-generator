const input = document.getElementById('text-input');
input.addEventListener('keyup', function () {
  const input = document.getElementById('text-input').value;
  const showInput = document.getElementById('meme-text');
  showInput.innerText = input;
});

const output = document.getElementById('meme-insert');
output.addEventListener('change', function (event) {
  const showImage = document.getElementById('meme-image');
  showImage.src = URL.createObjectURL(event.target.files[0]);
  showImage.onload = function () {
    URL.revokeObjectURL(showImage.src);
  };
});
