const title = document.querySelector('#page-title')
const btn = document.querySelector('#mode-selector')
const body = document.querySelector('body')
const footer = document.querySelector('footer')
const darkModeClass = 'dark-mode'

const changeMode = () => {
  changeClasses()
  changeText()
}

const changeClasses = () => {
  body.classList.toggle(darkModeClass)
  footer.classList.toggle(darkModeClass)
  btn.classList.toggle(darkModeClass)
  title.classList.toggle(darkModeClass)
}


const changeText = () => {
  const darkMode = 'Dark Mode '
  const lightMode = 'Light Mode '
  
  if (body.classList.contains(darkModeClass)){
    title.textContent = darkMode + 'ON'
    btn.textContent = lightMode
    return
  } 

  title.textContent = lightMode + 'ON'
  btn.textContent = darkMode  
}

btn.addEventListener('click', changeMode)
