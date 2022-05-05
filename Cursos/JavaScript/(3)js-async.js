const baseURL = 'https://thatcopy.pw/catapi/rest/'
const catBtn = document.querySelector('#change-cat')
const catImg = document.querySelector('#cat')

const getCats = async () => {
  try {
    const response = await fetch(baseURL)
    const data = await response.json()

    return data.webpurl  
  } catch (error) {
    console.log(error.message)
  }
}

const loadImg = async () => {
  catImg.src = await getCats()
} 

catBtn.addEventListener('click', loadImg)

loadImg()