window.onload = function(){
    
    let textInput = document.getElementById('text-input')
    textInput.addEventListener('keyup',function(){
        document.getElementById('meme-text').innerText = textInput.value;
    })
    document.querySelector('#meme-insert').addEventListener('change', function (event) {
        let img = document.querySelector('#meme-image');
        img.src = URL.createObjectURL(event.target.files[0]);
      });
      //https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977

      document.querySelector('.fire').addEventListener('click',function(){
          document.getElementById('meme-image-container').style.borderWidth = "5px"
          document.getElementById('meme-image-container').style.borderStyle = "groove"
          document.getElementById('meme-image-container').style.borderColor = "red"
      })
      document.querySelector('.water').addEventListener('click',function(){
        document.getElementById('meme-image-container').style.borderWidth = "5px"
        document.getElementById('meme-image-container').style.borderStyle = "dashed"
        document.getElementById('meme-image-container').style.borderColor = "blue"
    })
    document.querySelector('.earth').addEventListener('click',function(){
        document.getElementById('meme-image-container').style.borderWidth = "5px"
        document.getElementById('meme-image-container').style.borderStyle = "double"
        document.getElementById('meme-image-container').style.borderColor = "yellow"
    })
    document.getElementById('bob').addEventListener('click', function(){
        document.getElementById('meme-image-container').style.backgroundImage = "url('https://i.pinimg.com/originals/b3/bc/ba/b3bcba3595d4a5ca68059d32e521e867.jpg')";
    })
    document.getElementById('boo').addEventListener('click', function(){
        document.getElementById('meme-image-container').style.backgroundImage = "url('https://i.pinimg.com/564x/b6/4f/d7/b64fd7e8d4d0a9d101e021de234894e7.jpg')";
    })
    document.getElementById('menino').addEventListener('click', function(){
        document.getElementById('meme-image-container').style.backgroundImage = "url('https://img.buzzfeed.com/buzzfeed-static/static/2018-07/27/13/asset/buzzfeed-prod-web-03/sub-buzz-29377-1532713199-2.png?downsize=600:*&output-format=auto&output-quality=auto')";
    })
    document.getElementById('carminha').addEventListener('click', function(){
        document.getElementById('meme-image-container').style.backgroundImage = "url('https://img.buzzfeed.com/buzzfeed-static/static/2018-07/27/13/asset/buzzfeed-prod-web-01/sub-buzz-13964-1532713312-1.png?downsize=600:*&output-format=auto&output-quality=auto')";
    })



    
}