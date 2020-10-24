const textImput = document.getElementById('text-input');
const memeText = document.createElement("p");
const container = document.querySelector(".container");

textImput.addEventListener("keyup", function () {
  memeText.innerText = textImput.value;
});

memeText.id = 'meme-text';
container.appendChild(memeText);

const memeInsert = document.querySelector("#meme-insert");
const img = document.createElement("img");
memeInsert.addEventListener("change", function () {
  img.src = URL.createObjectURL(this.files[0]);
  img.className = "meme-image";
  img.id = "meme-image";
  container.appendChild(img);
});
const fire = document.querySelector("#fire");
fire.addEventListener("click", function(){
  container.style.border = "3px dashed red";
  
});

const water = document.querySelector("#water");
water.addEventListener("click", function(){
  container.style.border = "5px double blue";
});

const earth =document.querySelector("#earth");
earth.addEventListener("click", function(){
  container.style.border = "6px groove green";
});

const meme1 = document.querySelector("#meme-1");
meme1.addEventListener("click", function(){
  img.src = meme1.src;
  img.className = "meme-image";
  img.id = "meme-image";
  container.appendChild(img);

});

const meme2 = document.querySelector("#meme-2");
meme2.addEventListener("click", function(){
  img.src = meme2.src;
  img.className = "meme-image";
  img.id = "meme-image";
  container.appendChild(img);

});
const meme3 = document.querySelector("#meme-3");
meme3.addEventListener("click", function(){
  img.src = meme3.src;
  img.className = "meme-image";
  img.id = "meme-image";
  container.appendChild(img);

});

const meme4 = document.querySelector("#meme-4");
meme4.addEventListener("click", function(){
  img.src = meme4.src;
  img.className = "meme-image";
  img.id = "meme-image";
  container.appendChild(img);

});