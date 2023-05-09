
export default function navbar () {
  const ul = document.createElement('ul')
  const elements = ['Home', 'About', 'Menu', 'Contact Us']

  elements.forEach((menu) => {
    const li = document.createElement('li')
    li.textContent = menu
    ul.append(li)
  })

  const nav = document.querySelector('nav')
  nav.append(ul)
}
