const catchMeme1 = document.querySelector('#meme-1')
const catchMeme2 = document.querySelector('#meme-2');
const catchMeme3 = document.querySelector('#meme-3');
const catchMeme4 = document.querySelector('#meme-4');
let memeImageContainer = document.querySelector('#meme-image-container');
let textInput = document.querySelector('#text-input');
let memeText = document.querySelector('#meme-text');
let imgInput = document.getElementById('meme-insert');
let imgOutput = document.getElementById('meme-image');

function inputText () {
    memeText = document.querySelector('#meme-text');
    textInput = document.querySelector('#text-input');
    textInput.addEventListener('change', () => {
    memeText.innerHTML =  textInput.value;
    });
}

function limiteTheSize (obj) { //w3school
    obj.value = obj.value.substring(0,60); //Aqui eu pego o valor e só deixo o os 60 primeiros caracteres de valor no input
}

function loadImage(event) {  //Dica obtida no escopo do projeto.
  imgOutput.src = URL.createObjectURL(event.target.files[0]);
  // Assim que os dados do arquivo estiverem carregados a URL é descartada .
  imgOutput.onload = () => {
    URL.revokeObjectURL(imgOutput.src);
  };
}

imgInput.addEventListener('change', loadImage);
textInput.addEventListener('keyup', () => {
  memeText.innerText = textInput.value;
});

//MDN https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications 
//insert this code, for all files img.
const fileSelect = document.getElementById("fileSelect"),
    fileElem = document.getElementById("fileElem"),
    fileList = document.getElementById("fileList");

fileSelect.addEventListener("click", function (e) {
  if (fileElem) {
    fileElem.click();
  }
  e.preventDefault(); // prevent navigation to "#"
}, false);

fileElem.addEventListener("change", handleFiles, false); 

function handleFiles() {
  if (!this.files.length) {
    fileList.innerHTML = "<p>No files selected!</p>";
  } else {
    fileList.innerHTML = "";
    const list = document.createElement("ul");
    fileList.appendChild(list);
    for (let i = 0; i < this.files.length; i++) {
      const li = document.createElement("li");
      list.appendChild(li);
      
      const img = document.createElement("img");
      img.src = URL.createObjectURL(this.files[i]);
      img.height = 60;
      img.onload = function() {
        URL.revokeObjectURL(this.src);
      }
      imgOutput.src = img.src;
      li.appendChild(img);
      const info = document.createElement("span");
      info.innerHTML = this.files[i].name + ": " + this.files[i].size + " bytes";
      li.appendChild(info);
    }
  }
}

function borderRed () {
    const buttonFire = document.querySelector('#fire')
    buttonFire.addEventListener('click', () => {
    memeImageContainer.style.border = '3px dashed red';
    });
}

function borderWater () {
    const buttonWater = document.querySelector('#water')
    buttonWater.addEventListener('click', () => {
    memeImageContainer.style.border = '5px double blue';
    });
}

function borderEarth () {
    const buttonEarth = document.querySelector('#earth')
    buttonEarth.addEventListener('click', () => {
      memeImageContainer.style.border = '6px groove green';
    });
}

function Reset () {
  const buttonReset = document.querySelector('#reset')
  buttonReset.addEventListener('click', () => {
    memeImageContainer.style.border = '1px solid black';
  })
}

function catchImageMemes () {
  catchMeme1.addEventListener('click', function(){
    imgOutput.src = './imgs/meme1.png'
  });
  catchMeme2.addEventListener('click', function(){
    imgOutput.src = './imgs/meme2.png'
  });
  catchMeme3.addEventListener('click', function(){
    imgOutput.src = './imgs/meme3.png'
  });
  catchMeme4.addEventListener('click', function(){
    imgOutput.src = './imgs/meme4.png'
  });
}

window.onload = () => {
    inputText ()
    borderRed ()
    borderWater ()
    borderEarth ()
    Reset ()
    catchImageMemes ()
};
