const memeText = document.getElementById('meme-text')
const inputText = document.getElementById('text-input')
const insertFile = document.getElementById('meme-insert')
const memeImage = document.getElementById('meme-image')
const container = document.getElementById('meme-image-container')

//botões de estilo de borda
const fireButton = document.getElementById('fire')
const waterButton = document.getElementById('water')
const earthButton = document.getElementById('earth')


inputText.addEventListener("keyup",function(){
    memeText.innerText = inputText.value
})

insertFile.addEventListener("change",function(event){
    let file = event.target.files[0];
    let url = URL.createObjectURL(file);
    memeImage.src = url;
})

fireButton.addEventListener("click",function(){
    container.classList.remove('earth')
    container.classList.remove('water')
    container.classList.toggle('fire')
})

waterButton.addEventListener("click", function(){
    container.classList.remove('earth')
    container.classList.remove('fire')
    container.classList.toggle('water')
})

earthButton.addEventListener("click", function(){
    container.classList.remove('water')
    container.classList.remove('fire')
    container.classList.toggle('earth')
})

