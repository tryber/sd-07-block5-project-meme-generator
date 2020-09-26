const inpText = document.querySelector('#text-input');
const previewText = document.querySelector('#meme-text');
const inpFile = document.querySelector('#meme-insert');
const memeContainer = document.querySelector('#meme-image-container');
const previewImage = memeContainer.querySelector('#meme-image');
const spanText = memeContainer.querySelector('.span-text');

const effectsContainer = document.querySelector('#effects');
const firstTemplate = document.querySelector('#meme-1');
const secondTemplate = document.querySelector('#meme-2');
const thirdTemplate = document.querySelector('#meme-3');
const fourthTemplate = document.querySelector('#meme-4');

const fire = document.querySelector('#fire');
const water = document.querySelector('#water');
const earth = document.querySelector('#earth');
const removeBtn = document.querySelector('#remove-btn');

inpFile.addEventListener('change', function () {
  if (this.files && this.files[0]) {
    spanText.style.display = 'none';
    previewImage.style.display = 'flex';
    previewImage.src = URL.createObjectURL(this.files[0]);
  } else {
    spanText.style.display = null;
    previewImage.style.display = null;
    previewImage.setAttribute('src', '');
  }
});

/* adiciona a imagem de forma mais complicada no me gusta
inpFile.addEventListener('change', function() {
  const file = this.files[0]
  if (file) {
    const reader = new FileReader()
    spanText.style.display = 'none'
    previewImage.style.display = 'flex'
    reader.addEventListener('load', function() {
      previewImage.setAttribute('src', this.result)
    })
    reader.readAsDataURL(file)
  } else {
    spanText.style.display = null
    previewImage.style.display = null
    previewImage.setAttribute('src', '')
  }
}) */

inpText.addEventListener('keyup', function () {
  if (inpText.value) {
    previewText.innerHTML = inpText.value;
  }
});

/* acho incrivel q por causa do code climade eu nao posso usar esse codigo todo... enfim fazer oq
function fire() {
  memeContainer.style.border = '3px dashed rgb(255, 0, 0)';
  memeContainer.style.borderRadius = '5px';
  memeContainer.style.boxShadow = '0px 0px 10px 2.5px red';
  effectsContainer.style.boxShadow = 'inset 0px 0px 20px red';
}

function water() {
  memeContainer.style.border = '5px double rgb(0, 0, 255)';
  memeContainer.style.borderRadius = '5px';
  memeContainer.style.boxShadow = '0px 0px 10px 2.5px blue';
  effectsContainer.style.boxShadow = 'inset 0px 0px 20px blue';
}

function earth() {
  memeContainer.style.border = '6px groove rgb(0, 128, 0)';
  memeContainer.style.borderRadius = '5px';
  memeContainer.style.boxShadow = '0px 0px 10px 2.5px rgb(0, 128, 0)';
  effectsContainer.style.boxShadow = 'inset 0px 0px 20px rgb(0, 128, 0)';
}

function remove() {
  memeContainer.style.border = null;
  memeContainer.style.borderRadius = null;
  memeContainer.style.boxShadow = null;
  effectsContainer.style.boxShadow = null;
} */

fire.addEventListener('click', function () {
  memeContainer.style.border = '3px dashed rgb(255, 0, 0)';
  memeContainer.style.borderRadius = '5px';
  memeContainer.style.boxShadow = '0px 0px 10px 2.5px red';
  effectsContainer.style.boxShadow = 'inset 0px 0px 20px red';
});

water.addEventListener('click', function () {
  memeContainer.style.border = '5px double rgb(0, 0, 255)';
  memeContainer.style.borderRadius = '5px';
  memeContainer.style.boxShadow = '0px 0px 10px 2.5px blue';
  effectsContainer.style.boxShadow = 'inset 0px 0px 20px blue';
});

earth.addEventListener('click', function () {
  memeContainer.style.border = '6px groove rgb(0, 128, 0)';
  memeContainer.style.borderRadius = '5px';
  memeContainer.style.boxShadow = '0px 0px 10px 2.5px rgb(0, 128, 0)';
  effectsContainer.style.boxShadow = 'inset 0px 0px 20px rgb(0, 128, 0)';
});

removeBtn.addEventListener('click', function () {
  memeContainer.style.border = null;
  memeContainer.style.borderRadius = null;
  memeContainer.style.boxShadow = null;
  effectsContainer.style.boxShadow = null;
});

firstTemplate.addEventListener('click', function () {
  /* code cilmate eu realmente te odeio (clickedImg era o parametro da funcao)
  const imgSrc = clickedImg.target.src;
  const imgArrey = imgSrc.match(/imgs[\/\\]([\w\d\s\.\-\(\)]+)$/);
  const img = imgArrey[0]; */
  spanText.style.display = 'none';
  previewImage.style.display = 'flex';
  previewImage.src = 'imgs/meme1.png';
});

secondTemplate.addEventListener('click', function () {
  /* code cilmate eu realmente te odeio
  const imgSrc = clickedImg.target.src;
  const imgArrey = imgSrc.match(/imgs[\/\\]([\w\d\s\.\-\(\)]+)$/);
  const img = imgArrey[0]; */
  spanText.style.display = 'none';
  previewImage.style.display = 'flex';
  previewImage.src = 'imgs/meme2.png';
});

thirdTemplate.addEventListener('click', function () {
  /* code cilmate eu realmente te odeio
  const imgSrc = clickedImg.target.src;
  const imgArrey = imgSrc.match(/imgs[\/\\]([\w\d\s\.\-\(\)]+)$/);
  const img = imgArrey[0]; */
  spanText.style.display = 'none';
  previewImage.style.display = 'flex';
  previewImage.src = 'imgs/meme3.png';
});

fourthTemplate.addEventListener('click', function () {
  /* code cilmate eu realmente te odeio
  const imgSrc = clickedImg.target.src;
  const imgArrey = imgSrc.match(/imgs[\/\\]([\w\d\s\.\-\(\)]+)$/);
  const img = imgArrey[0]; */
  spanText.style.display = 'none';
  previewImage.style.display = 'flex';
  previewImage.src = 'imgs/meme4.png';
});
