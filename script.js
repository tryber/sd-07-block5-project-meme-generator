function createReader() {
  const headerPage = document.createElement('header');
  headerPage.className = 'head-class';
  document.body.appendChild(headerPage);

  const titleProject = document.createElement('h1');
  titleProject.innerHTML = 'MEME GENERATOR';
  titleProject.className = 'title';
  headerPage.appendChild(titleProject);
}

const nameNewDiv = ['textInputDiv', 'fileInputDiv', 'memeContainer', 'buttonDiv', 'memeMiniDiv'];
const nameClassNewDiv = ['div-input-text', 'div-input-file', 'meme-container', 'div-button', 'div-mini-meme'];

function createPageStructure(textInputDiv, nameClassDiv) {
  const sectionMain = document.createElement('section');
  sectionMain.className = 'main';
  document.body.appendChild(sectionMain);

  for (let index = 0; index < textInputDiv.length; index += 1) {
    if (textInputDiv[index] === 'memeContainer') {
      textInputDiv[index] = document.createElement('div');
      textInputDiv[index].className = nameClassDiv[index];
      textInputDiv[index].setAttribute('id', 'meme-image-container');
      sectionMain.appendChild(textInputDiv[index]);
    } else {
      textInputDiv[index] = document.createElement('div');
      textInputDiv[index].className = nameClassDiv[index];
      sectionMain.appendChild(textInputDiv[index]);
    }
  }
}

function createPageElementsText(elementsForText) {
  const inputLabelText = document.createElement('label');
  inputLabelText.setAttribute('for', 'text-input');
  inputLabelText.innerHTML = '1. Insira o texto: ';
  elementsForText[0].appendChild(inputLabelText);

  const inputText = document.createElement('input');
  inputText.className = 'text-input';
  inputText.setAttribute('id', 'text-input');
  inputText.setAttribute('type', 'text');
  inputText.setAttribute('maxlength', 60);
  elementsForText[0].appendChild(inputText);

  const textImage = document.createElement('p');
  textImage.className = 'meme-text';
  textImage.setAttribute('id', 'meme-text');
  textImage.innerText = 'Texto do MEME!';
  elementsForText[2].appendChild(textImage);
}

function createPageElementsImage(elementsForImage) {
  const inputLabelFile = document.createElement('label');
  inputLabelFile.setAttribute('for', 'file-input');
  inputLabelFile.innerHTML = '2. Inserir imagem: ';
  elementsForImage[1].appendChild(inputLabelFile);

  const inputFileButton = document.createElement('input');
  inputFileButton.className = 'meme-insert-class';
  inputFileButton.setAttribute('id', 'meme-insert');
  inputFileButton.setAttribute('type', 'file');
  elementsForImage[1].appendChild(inputFileButton);

  const viewImage = document.createElement('img');
  viewImage.className = 'meme-image';
  viewImage.setAttribute('id', 'meme-image');
  viewImage.setAttribute('src', 'https://picsum.photos/500/400');
  elementsForImage[2].appendChild(viewImage);
}

function createPageElementsButton(elementsForButton) {
  const listIds = ['fire', 'water', 'earth'];

  for (let index = 0; index < listIds.length; index += 1) {
    const newButton = document.createElement('button');
    newButton.className = listIds[index];
    newButton.setAttribute('id', listIds[index]);
    newButton.innerText = listIds[index].toLocaleUpperCase();
    elementsForButton[3].appendChild(newButton);
  }
}

createReader();
createPageStructure(nameNewDiv, nameClassNewDiv);
createPageElementsText(nameNewDiv);
createPageElementsImage(nameNewDiv);
createPageElementsButton(nameNewDiv);

function insertText() {
  const newTextInsert = document.querySelector('#text-input');
  newTextInsert.addEventListener('input', function () {
    if (newTextInsert.value.length <= 60) {
      const pushText = document.querySelector('#meme-text');
      pushText.innerText = newTextInsert.value;
    }
  });
}

function insertImage() {
  const viewImageInsert = document.getElementById('meme-image');
  const newImageInsert = document.getElementById('meme-insert');
  newImageInsert.addEventListener('change', function (event) {
  // URL.createObjectURL() = Adicionar a referência ao Ojeto do arquivo
    viewImageInsert.src = URL.createObjectURL(event.target.files[0]);
    viewImageInsert.onload = function () {
  // Remover a referência ao arquivo - Verificar real necessidade
      URL.revokeObjectURL(viewImageInsert.src);
    };
  });
}
insertText();
insertImage();

function alterMainBorderAndImage() {
  const getDivMeme = document.getElementById('meme-image-container');
  const viewImageMain = document.getElementById('meme-image');
  document.body.addEventListener('click', function (event) {
    if (event.target.nodeName === 'BUTTON') {
      const buttonClicked = event.target.textContent.toLocaleLowerCase();
      if (buttonClicked === 'fire') {
        getDivMeme.style.border = '3px dashed red';
      } else if (buttonClicked === 'water') {
        getDivMeme.style.border = '5px double blue';
      } else {
        getDivMeme.style.border = '6px groove green';
      }
    } else if (event.target.nodeName === 'IMG') {
      viewImageMain.src = event.target.alt;
    }
  });
}
alterMainBorderAndImage();

function createPageElementsMiniatures() {
  const aside = document.createElement('aside');
  aside.className = 'aside-class';
  document.body.appendChild(aside);
  for (let index = 1; index <= 4; index += 1) {
    const imgMiniature = document.createElement('img');
    imgMiniature.className = 'miniature-img';
    imgMiniature.setAttribute('id', `meme-${index}`);
    imgMiniature.setAttribute('src', `imgs/meme${index}.png`);
    imgMiniature.setAttribute('alt', `imgs/meme${index}.png`);
    aside.appendChild(imgMiniature);
  }
}
createPageElementsMiniatures();
