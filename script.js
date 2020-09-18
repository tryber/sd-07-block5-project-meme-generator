const insertTextOnImage = (event) => {
  const text = event.target.value;
  const memeTextP = document.querySelector("#meme-text")
  memeTextP.innerText = text;
}

const addBorderStyle = (event) => {
  const memeImageContainer = document.querySelector("#meme-image-container")
  const eventOriginById = event.target.id
  switch (eventOriginById) {
    case "fire":
      memeImageContainer.style.border = "3px dashed red"
      break;
    case "water":
      memeImageContainer.style.border = "5px double blue"
      break;
    case "earth":
      memeImageContainer.style.border = "6px groove green"
      break;
  }
}


const insertImage = (event) => {
  const memeImageImg = document.querySelector("#meme-image");
  memeImageImg.src = window.URL.createObjectURL(event.target.files[0])
  memeImageImg.onload = () => {
    URL.revokeObjectURL(memeImageImg.src) // free memory
  }
}

const insertDefaultImage = (event) => {
  const memeImageImg = document.querySelector("#meme-image")
  const eventOriginById = event.target.id;
  switch (eventOriginById) {
    case "meme-1":
      memeImageImg.src = "/imgs/meme1.png"
      break;
    case "meme-2":
      memeImageImg.src = "/imgs/meme2.png"
      break;
    case "meme-3":
      memeImageImg.src = "/imgs/meme3.png"
      break;
    case "meme-4":
      memeImageImg.src = "/imgs/meme4.png"
      break;
  }
}

const handleControllerEvents = (...types) => {
  for (const type of types) {
    switch (type) {
      case "click":
        controllerEventsOnClicks(type)
        break;
      case "input":
        controllerEventsOnInputs(type);
        break;
      case "change":
        controllerEventsOnChanges(type);
        break;
    }
  }
}

const controllerEventsOnClicks = (type) => {
  document.addEventListener(type, (event) => {
    const eventOriginByData = event.target.dataset.event;
    switch (eventOriginByData) {
      case "addBorderButton":
        addBorderStyle(event);
        break;
      case "addDefaultImage":
        insertDefaultImage(event);
        break;
    }
  })
}

const controllerEventsOnInputs = (type) => {
  document.addEventListener(type, (event) => {
    const eventOriginByData = event.target.dataset.event;
    switch (eventOriginByData) {
      case "insertTextInput":
        insertTextOnImage(event);
        break;
    }
  })
}

const controllerEventsOnChanges = (type) => {
  document.addEventListener(type, (event) => {
    const eventOriginByData = event.target.dataset.event;
    switch (eventOriginByData) {
      case "insertMemeInput":
        insertImage(event);
        break;
    }
  })
}

window.onload = () => {
  handleControllerEvents("click", "input", "change")
}
