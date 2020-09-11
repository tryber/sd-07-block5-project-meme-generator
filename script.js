window.onload = function() {

    // Function that load the Photo to Meme
    let loadPhoto = function(event) {
        let divMemeImage = document.getElementById('meme-image');
        divMemeImage.src = URL.createObjectURL(event.target.files[0]);
        divMemeImage.onload = function() {
            URL.revokeObjectURL(divMemeImage.src) // free memory
        }
    }

    // Function that apply text on meme
    let applyText = function() {
        // get input text
        let textInput = document.getElementById("text-input").value;
        console.log("textMeme");
        // put text on meme
        let memeText = document.getElementById("meme-text");
        memeText.innerText = textInput;
    }

    // Function that apply border on meme-image-container
    let applyBorder = function(event) {
        let borderClassName = "default-border";
        // define the class
        switch(event.target) {
            case fire:
                borderClassName = "fire-border";
                break;
            case water:
                borderClassName = "water-border";
                break;
            case earth:
                borderClassName = "earth-border";
                break;
        }
        // apply the class
        document.getElementById("meme-image-container").className = borderClassName;
    }

    // Get Element meme-insert and assign the event loadPhoto
    document.getElementById("meme-insert").addEventListener("change",loadPhoto);
    
    // Get Element meme-input and assign the event applyText
    document.getElementById("text-input").addEventListener("input",applyText);

    // Get All buttons and assign the event applyBorder
    for (let buttonElement of document.getElementsByTagName("button")) {
        buttonElement.addEventListener("click",applyBorder);
    }
}
