import { encryptButton,
  decryptButton,
  initialContainer,
  output,
  darkToggle,
  copyButton,
  lightImage,
  darkImage } from "./elements.js"

import { Controllers } from "./Controllers.js"


const controllers = new Controllers()

let resultString

darkToggle.addEventListener('change', () =>{
  document.body.classList.toggle('dark')

  if (document.body.classList.contains('dark')) {
    lightImage.classList.add('hide');
    darkImage.classList.remove('hide');
  } else {
    lightImage.classList.remove('hide');
    darkImage.classList.add('hide');
  }

})

encryptButton.addEventListener("click", () => {
  const { value } = document.querySelector('.text-input')
  
  if (controllers.textVerify(value)) {
    return
  }

  if (value === "") {
    alert("Você precisa escrever um texto!")
    return
  }

  initialContainer.classList.add('hide')
  
  copyButton.classList.remove('hide')

  resultString = controllers.encrypt(value)
  output.innerHTML = resultString
})

decryptButton.addEventListener("click", () => {
  const { value } = document.querySelector('.text-input')

  if (controllers.textVerify(value)) {
    return;
  }

  if (value === "") {
    alert("Você precisa escrever um texto!")
    return
  }

  initialContainer.classList.add('hide')
  
  resultString = controllers.decrypt(value)

  output.innerHTML = resultString
})

copyButton.addEventListener("click", () => {
  controllers.copyToClipboard(resultString)
})

