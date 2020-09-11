

let areaTexto = document.querySelector("#text-input")
areaTexto.addEventListener("input", textoMeme)

function textoMeme(){
    let memeTelaTexto = document.querySelector("#meme-text")
    memeTelaTexto.innerHTML = areaTexto.value
}

let inputImg = document.querySelector("#meme-insert")
inputImg.addEventListener("change",imgUse)

function imgUse(){
    console.log("funciona carai")
    

    console.log(inputImg)
    let memeImage = document.querySelector("#meme-image")
    memeImage.src = URL.createObjectURL(event.target.files[0])
}

let prememe = document.querySelectorAll(".prememe")
for (let i = 0; i < prememe.length; i += 1) {
    prememe[i].addEventListener("click", prememef)
}
function prememef() {
    let memeImage = document.querySelector("#meme-image")
    console.log(event.target.id)
    switch (event.target.id) {
        case "meme-1": memeImage.src = "/imgs/meme1.png"
        break
        case "meme-2": memeImage.src = "/imgs/meme2.png"
        break
        case "meme-3": memeImage.src = "/imgs/meme3.png"
        break
        case "meme-4": memeImage.src = "/imgs/meme4.png"
        break
    }

}

let saidaTexto = document.getElementById('meme-text');
function trocaTextoA () {
    
    saidaTexto.innerText = caixaTexto.value;
  }
saidaTexto.addEventListener('click', trocaTextoA);

let fire = document.querySelector("#fire")
fire.addEventListener("click", firefn)

let water = document.querySelector("#water")
water.addEventListener("click", waterfn)

let earth = document.querySelector("#earth")
earth.addEventListener("click", earthfn)

function firefn(){
    let memeTela = document.querySelector("#meme-image-container")
    memeTela.style.border = "dashed 3px red"
}
function waterfn(){
    let memeTela = document.querySelector("#meme-image-container")
    memeTela.style.border = "double 5px blue"
}
function earthfn(){
    let memeTela = document.querySelector("#meme-image-container")
    memeTela.style.border = "groove 6px green"
}