window.onload = function() {
  let inputText = document.getElementById('text-input')
  let memeText = document.getElementById('meme-text')

  
inputText.addEventListener('keyup', function() {
  memeText.innerText = inputText.value
})

}