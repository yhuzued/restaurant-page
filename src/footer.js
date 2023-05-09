export default function footer () {
  const footer = document.createElement('div')
  footer.textContent = 'Craete by Yusuf Subastian'

  const content = document.querySelector('#content')
  content.append(footer)
}
