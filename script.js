let caixaDeTexto = document.getElementById("text-input");
let textoDiv = document.getElementById("meme-text");

caixaDeTexto.addEventListener("keyup", function () {
  textoDiv.innerHTML = caixaDeTexto.value;
})

//Método tirado do link: https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977

var loadFile = function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById('meme-image');
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};

let borderColorButtons = document.querySelectorAll("#btns-container>ul>li>button");
let content = document.getElementById("meme-image-container");
content.style.border = localStorage.getItem("borderType");

for (let i = 0; i < borderColorButtons.length; i += 1) {
  if (i == 0) {
    borderColorButtons[i].addEventListener("click", function () {
      let content = document.getElementById("meme-image-container");
      content.style.border = "3px dashed red";
      localStorage.setItem("borderType", content.style.border);

    })
  } else if (i == 1) {
    borderColorButtons[i].addEventListener("click", function () {
      let content = document.getElementById("meme-image-container");
      content.style.border = "5px double blue";
      localStorage.setItem("borderType", content.style.border);
    })
  } else {
    borderColorButtons[i].addEventListener("click", function () {
      let content = document.getElementById("meme-image-container");
      content.style.border = "6px groove green";
      localStorage.setItem("borderType", content.style.border);
    })
  }
}

// let memeUm = document.getElementById("meme-1");
// let image = document.getElementById("meme-image");

let imgsArray = document.querySelectorAll("#imgs-containeir>ul>li>img");

// memeUm.addEventListener('click', function(){
//   image.src = memeUm.src
// })

for (let index = 0; index < imgsArray.length; index += 1) {
  let image = document.getElementById("meme-image")
  if (index == 0) {
    imgsArray[index].addEventListener('click', function () {
      image.src = imgsArray[index].src;
    })
  } else if (index == 1) {
    imgsArray[index].addEventListener('click', function () {
      image.src = imgsArray[index].src;
    })

  } else if (index == 2) {
    imgsArray[index].addEventListener('click', function () {
      image.src = imgsArray[index].src;
    })

  } else {
    imgsArray[index].addEventListener('click', function () {
      image.src = imgsArray[index].src;
    })
  }
}
