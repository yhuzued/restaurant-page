import roastChicken from './assets/ayam-bakar.jpg'
import satay from './assets/sate.jpg'

export default function menu () {
  const content = document.getElementById('content')
  const heading = document.createElement('h1')
  const mainMenu = document.createElement('div')

  mainMenu.classList.add('menu-section')
  heading.textContent = 'Menu'

  const figure = document.createElement('div')
  const menu1 = document.createElement('img')
  const caption = document.createElement('figcaption')

  menu1.src = roastChicken
  menu1.classList.add('menu-item')
  caption.textContent = 'Roasted Chicken'
  figure.append(menu1, caption)

  const figure2 = document.createElement('div')
  const menu2 = document.createElement('img')
  const caption2 = document.createElement('figcaption')

  caption2.textContent = 'Satay'
  menu2.src = satay
  menu2.classList.add('menu-item')
  figure2.append(menu2, caption2)

  mainMenu.append(figure, figure2)

  content.append(heading, mainMenu)
}
