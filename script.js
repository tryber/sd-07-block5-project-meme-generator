window.onload = function() {
    const memeInsert = document.getElementById("meme-insert");
    const txtInput = document.getElementById("text-input");
    const memeImageContainer = document.querySelector("#meme-image-container");
    const memeText = document.getElementById("meme-text");
    const memeImage = document.getElementById("meme-image");
    const btFire = document.getElementById("fire");
    const btWater = document.getElementById("water");
    const btEarth = document.getElementById("earth");
    const meme1 = document.getElementById("meme-1");
    const meme2 = document.getElementById("meme-2");
    const meme3 = document.getElementById("meme-3");
    const meme4 = document.getElementById("meme-4");

    // configurações de estilos
    memeImageContainer.style.backgroundColor='white';
    memeImageContainer.style.width='400px';
    memeImageContainer.style.height='350px';
    memeImageContainer.style.border='solid 1px black';
    memeImageContainer.style.position='relative';   
    
    // configurações de estilos
    memeText.style.textShadow ='#000 5px 5px 5px';
    memeText.style.fontSize='30px';
    memeText.style.color='white';
    memeText.style.textTransform='uppercase';
    memeText.style.maxWidth='inherit'; /*Tamanho maximo do pai*/
    memeText.style.position='absolute';
    memeText.style.top='130px'; 
     // configuração de estilos
    memeImage.style.position='relative';
   
    
  
    /*Upload de imagem*/
   /*aprendi com esse video:https://www.youtube.com/watch?v=VElnT8EoEEM*/
    memeInsert.addEventListener("change", function (){
        const file = this.files[0];
        if (file) {
           const reader = new FileReader();           
           reader.addEventListener("load", function(){            
                let urlImage = this.result;
                changeMeme(urlImage);// função que muda imagem  
           });
           reader.readAsDataURL(file);
        }
       
    });
    txtInput.addEventListener("keyup", function (){
        let txt = this.value;
        txt.upperCase;        
        memeText.innerText=txt;              
    });
    btFire.addEventListener("click", function (){
        memeImageContainer.style.border='dashed 3px red';     
    });

    btWater.addEventListener("click", function (){
        memeImageContainer.style.border='double 5px blue';     
    });

    btEarth.addEventListener("click", function (){
        memeImageContainer.style.border='groove 6px green';     
    });

    meme1.addEventListener("click", function (){
        let urlImage = this.getAttribute('src');
        changeMeme(urlImage);
        
        });
    meme2.addEventListener("click", function (){
        let urlImage = this.getAttribute('src');
        changeMeme(urlImage); 
    });
    meme3.addEventListener("click", function (){
        let urlImage = this.getAttribute('src');
        changeMeme(urlImage);
    });
    meme4.addEventListener("click", function (){
        let urlImage = this.getAttribute('src');
        changeMeme(urlImage);
    });

    function changeMeme(urlImage){
        memeImage.setAttribute('src', urlImage);
        memeImage.style.width="100%";
        memeImage.style.height="100%";
    }    

}




