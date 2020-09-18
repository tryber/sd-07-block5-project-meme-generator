const textInput = document.querySelector("#text-input");
const memeInsert = document.querySelector("#meme-insert");
const memeImage = document.querySelector("#meme-image");
const pElement = document.querySelector("#meme-text");
const imageCanvas = document.querySelector("#imageCanvas");


//https://github.com/jsun034/FabricJS_Tutorial/blob/master/index.js



//let ctx = imageCanvas.getContext('2d');
let fileReader = new FileReader();
let canvas = new fabric.Canvas("imageCanvas");
let img = new Image();
let teste;

//canvas.setWidth(450)



function handleImage(e) {


  fileReader.onload = function (event) {

    memeImage.onload = function () {
      ctx.drawImage(memeImage, 0, 0);

    }
    memeImage.src = event.target.result;
  }
  fileReader.readAsDataURL(e.target.files[0]);
}


function handleImage2(e) {


  fileReader.onload = function (event) {

    img.onload = function () {
      let imgInstance = new fabric.Image(img)
      imgInstance.scale(0.5)
      teste = imgInstance
      canvas.add(imgInstance);

    }
    img.src = event.target.result;

  }
  fileReader.readAsDataURL(e.target.files[0]);
}

memeInsert.addEventListener('change', handleImage2);

/* let teste = document.querySelector("canvas")
let coisa = teste.toDataURL(); */




textInput.addEventListener("change", function () {
  pElement.innerHTML = textInput.value;

})



/* memeInsert.addEventListener("change", function () {
  teste = memeInsert.files[0];
  memeImage.src = URL.createObjectURL(memeInsert.files[0]);

  memeImage.onload = function () {
    URL.revokeObjectURL(memeImage.src);
  }

}) */

/* function loadFunction(event) {
  event.addEventListener
} */
