
// Font: https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
let fileImag = function (event) {
    let output = document.getElementById('meme-image');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
        URL.revokeObjectURL(output.src) // free memory
    }
};

let textInsid = document.getElementById('text-input');
textInsid.addEventListener('keyup', function(){
    document.getElementById('meme-text').innerText = textInsid.value;
});

let insidMeme = document.getElementById('meme-insert');
insidMeme.addEventListener('change', fileImag);