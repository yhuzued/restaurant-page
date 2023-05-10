
export default function navbar () {
  const ul = document.createElement('ul')
  const elements = ['Home', 'Menu', 'About', 'Contact Us']

  elements.forEach((menu) => {
    const li = document.createElement('li')
    li.textContent = menu
    const classText = menu.split(' ')[0].toLowerCase() // first word of navbar menu
    li.classList.add(classText)
    ul.append(li)
  })

  const nav = document.querySelector('nav')
  nav.append(ul)
}
