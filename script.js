/*
Nao entendi ... 
  fonte:https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
  Toda a parte do trabalho com o objeto URL foi copiado do stackoverflow link acima.
 */
let elements = [
  {
    type : 'div' ,
    id : "meme-text" ,
    father : "#meme-image-container"
  } ,
  {
    type : 'img' ,
    id : "meme-image" ,
    src : "" ,
    father : "#meme-image-container"
  } ,
  {
    type : 'div' ,
    id : "meme-1" ,
    class : "memeStar" ,
    father : "#exemplesMemes"
  } ,
  {
    type : 'div' ,
    id : "meme-2" ,
    class : "memeStar" ,
    father : "#exemplesMemes"
  } ,
  {
    type : 'div' ,
    id : "meme-3" ,
    class : "memeStar" ,
    father : "#exemplesMemes"
  } ,
  {
    type : 'div' ,
    id : "meme-4" ,
    class : "memeStar" ,
    father : "#exemplesMemes"
  } ,
  {
    type : 'button' ,
    id : "fire",
    class : "theme" ,
    father : "#meme-image-container"
  } , 
  {
    type : 'button' ,
    id : "water",
    class : "theme" ,
    father : "#meme-image-container"
  } , 
  {
    type : 'button' ,
    id : "earth",
    class : "theme" ,
    father : "#meme-image-container"
  }

] ;

/*
switch(element[j]) {

  case 'div' :
    createDiv(element);
    break;

  case 'button' :
    createButton(element);
    break;

  case 'img' : 
    createImg(element);
    break;
}*/

function createElement(object) {

  let element = document.createElement(object.type) ,
      father = document.querySelector(`${object.father}`);

  for(let i in object ){
    console.log(i);

    switch(i) {

      case 'id' :
        element.id = object.id;
        break;

      case 'class' :
        element.className = object.class;
        break;


      default :
      break;

    }
  }
   father.appendChild(element);

};

function createButton(object) {



};

function createImg(object) {




};

//function getClick(event) {};

function createElements(elementsList) {

  let list = elementsList;

  for( let i = 0 ; i < list.length; i++ ) {

      createElement(list[i])

  } ;
  
};

function outputImage(event) {

  let output = document.querySelector("#meme-image"),
      input  = event ;

  output.src = URL.createObjectURL(input.target.files[0]);

  output.onload = () => {

    URL.revokeObjectURL(output.src);

  };

};

function outputText() {

  let output = document.querySelector("#meme-text") ,
      input  = document.querySelector("#text-input") ;

      output.innerHTML = input.value;

};

function createEvents() {

  let text = document.querySelector("#text-input"),
      image = document.querySelector("#meme-insert");

  text.addEventListener("keyup", outputText);

  image.addEventListener("change", outputImage);

  

};

window.addEventListener('DOMContentLoaded', () => {

  createElements(elements);
  createEvents();

});

