window.onload = function () {
    setupImageInput();
    setupTextInput();
}

// apresentar o texto do input no meme-image-container
function setupTextInput() {
    let textInput = document.querySelector("#text-input");
    //textInput.addEventListener("keydown", function(event) -- form alternativa
    textInput.addEventListener("input", function (event) {
        // recuperar o texto digitado
        let text = event.target.value;
        // recuperar o elemento html
        let memeTextParagraph = document.querySelector("#meme-text");
        // atribuir o texto no elemento html
        memeTextParagraph.innerText = text;
    })
}

function setupImageInput() {
    // https://www.youtube.com/watch?v=VElnT8EoEEM&t=612s
    let memeInsert = document.getElementById("meme-insert");
    let memeImageContainer = document.getElementById("meme-image-container");
    let memeImage = memeImageContainer.querySelector(".meme-image");

    memeInsert.addEventListener("change", function () {
        let image = this.files[0];

        if (image) {
            let reader = new FileReader();
            memeImage.style.display = "block";

            reader.addEventListener("load", function () {
                memeImage.setAttribute("src", this.result);
            })

            reader.readAsDataURL(image);
        } else {
            memeImage.style.display = null;
            memeImage.setAttribute("src", "");
        }
    })
}

