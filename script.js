function changeImage() {
  let backgroundImage = document.getElementById("meme-insert").files[0];
  let image = document.getElementById("meme-image");
  image.src = URL.createObjectURL(backgroundImage);
}

function changeText() {
  let memeText = document.getElementById("text-input").value;
  document.getElementById("meme-text").innerHTML = memeText;
}

function fire() {
  let container = document.getElementById("meme-image-container");
  container.style.border = "3px dashed red";
}

function water() {
  let container = document.getElementById("meme-image-container");
  container.style.border = "5px double blue";
}

function earth() {
  let container = document.getElementById("meme-image-container");
  container.style.border = "6px groove green";
}

document
  .getElementById("imgOptions")
  .addEventListener("click", function (img) {
    let imageToUse = img.target.src;
    let container = document.getElementById("meme-image");
    container.src = imageToUse;
  });
