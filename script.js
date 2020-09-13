  /** Idéia retirada de: https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#Example_Using_object_URLs_to_display_images */

  const chooseImage = document.getElementById('meme-insert');
  const tagText = document.getElementById('text-input');
  const tagContainer = document.getElementById('meme-image-container');
  const tagImg = document.getElementById('meme-image');
  const tagTextMeme = document.getElementById('meme-text');

  const tagButtonFire = document.getElementById('fire');
  const tagButtonWater = document.getElementById('water');
  const tagButtonEarth = document.getElementById('earth');

  tagButtonFire.addEventListener('click', function () {
    tagContainer.style.border = '3px dashed rgb(255, 0, 0)';
    tagContainer.style.boxShadow = '4px 4px 4px black';
    tagContainer.style.backgroundColor = 'rgb(255, 0, 0)';
  });

  tagButtonWater.addEventListener('click', function () {
    tagContainer.style.border = '5px double rgb(0, 0, 255)';
    tagContainer.style.boxShadow = '4px 4px 4px black';
    tagContainer.style.backgroundColor = 'rgb(0, 0, 255)';
  });

  tagButtonEarth.addEventListener('click', function () {
    tagContainer.style.border = '6px groove rgb(0, 128, 0)';
    tagContainer.style.boxShadow = '4px 4px 4px black';
    tagContainer.style.backgroundColor = 'rgb(0, 128, 0)';
  });

  tagText.addEventListener('keyup', function () {
    tagTextMeme.innerText = tagText.value;
  });

  /** fonte: https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#Example_Using_object_URLs_to_display_images */
  chooseImage.addEventListener('change', function () {
    for (let i = 0; i < this.files.length; i += 1) { // pesquisar de onde saiu esse files
      tagImg.src = URL.createObjectURL(this.files[i]);
      tagContainer.appendChild(tagImg);
    }
  });

  const tagMeme1 = document.getElementById('meme-1');
  const tagMeme2 = document.getElementById('meme-2');
  const tagMeme3 = document.getElementById('meme-3');
  const tagMeme4 = document.getElementById('meme-4');


  tagMeme1.addEventListener('click', function () {
    tagTextMeme.innerText = 'Nossa! Muito engraçado!';
    tagImg.src = './imgs/meme1.png';
  });

  tagMeme2.addEventListener('click', function () {
    tagTextMeme.innerText = 'Juro que não vou rir!';
    tagImg.src = './imgs/meme2.png';
  });

  tagMeme3.addEventListener('click', function () {
    tagTextMeme.innerText = 'Sai Satã! Chuta irmões, que é macumbra!';
    tagImg.src = './imgs/meme3.png';
  });

  tagMeme4.addEventListener('click', function () {
    tagTextMeme.innerText = 'Não sei o que está acontecendo? Sou inocente!';
    tagImg.src = './imgs/meme4.png';
  });
