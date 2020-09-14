  const textInput = document.querySelector('#text-input');
  textInput.addEventListener('keyup', () => {
    textOutput.innerText = textInput.value;
  });

