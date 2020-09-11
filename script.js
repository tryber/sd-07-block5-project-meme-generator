let imageOnScreen = document.getElementById("meme-image")
let imageInput = document.getElementById("meme-insert")
let button = document.getElementById("button-generate")

// -------------- CARREGANDO A IMAGEM NA TELA -------------- //

imageInput.addEventListener("change", showImage) // O change é ativado quando se muda o estado em que tá o input

function showImage() {
    let file = this.files[0] // O this chama o arquivo em que ele subordinado no momento, nesso caso o imageInput, e esse Files[0] é por que quando o inputu seleciona o file ele retorna como um objeto, e a peimeira chave desse objeto é o nome dele.
    
    if (file) {
        const reader = new FileReader() // O FileReader lê os files de um objeto, como eu escolhi o file 0 do objeto ali em cima.
        
        reader.readAsDataURL(file) // Você tem que determinar a forma que ele vai ler o seu file, no caso eu determino a baixo que quero que ele leia como uma URL
        
        reader.addEventListener("load", function() { // E quando tudo for carregado essa function dá o atributo src para a imagem.
            imageOnScreen.setAttribute("src", this.result)
        })
        
    }
}

// -------------- COLOCAR TEXTO SOBRE A IMAGEM -------------- //

let text = document.getElementById("text-input")
let container = document.getElementById("meme-text")

text.addEventListener("keyup", mostrarTexto)

function mostrarTexto() {
    container.innerHTML = text.value
}

