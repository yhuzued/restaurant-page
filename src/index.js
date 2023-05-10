// Import dependencies
import './assets/style.css'
import home from './home.js'
import navbar from './navbar.js'
import footer from './footer.js'
import about from './about.js'
import contact from './contact.js'
import menu from './menu.js'

// Initialize navbar, home and footer
navbar()
home()
footer()

// Get all the navigation menu items and add event listener to them
const navMenu = document.querySelectorAll('li')
const content = document.getElementById('content')

navMenu.forEach((li) => {
  li.addEventListener('click', () => {
    clickMenu(li)
  })
})

// Handle navigation menu click event
function clickMenu (li) {
  // Define the navigation menu with their corresponding actions
  const menuNavbar = [
    { menu: 'home', action: home },
    { menu: 'menu', action: menu },
    { menu: 'about', action: about },
    { menu: 'contact', action: contact }
  ]

  // Find the selected menu based on the clicked navigation menu item
  const selectedMenu = menuNavbar.find((item) => li.classList[0] === item.menu)

  // If the selected menu exists, clear the content area and execute the corresponding action
  if (selectedMenu) {
    content.innerHTML = ''
    selectedMenu.action()
  }
}
