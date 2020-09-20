window.onload = function(){
  setupMemeTextInput();
}

function setupMemeTextInput (){
  let textInput = document.querySelector("#text-input");
    textInput.addEventListener("input", function(event){
    let text = event.target.value;
    let memeTextP = document.querySelector("#meme-text");
    memeTextP.innerText = text;
  });
}

function setupImage(){
  let imageInput = document.querySelector("#meme-insert");
  imageInput.addEventListener("click", function(){
    
    let memeImage = document.querySelector("#meme-image");
    /*
    .style.backgroundColor = window.getComputedStyle(meme-image-container).backgroundColor;
    */
  })
}

var loadFile = function(event) {
  var reader = new FileReader();
  reader.onload = function(){
    var output = document.getElementById(`meme-image`);
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};
