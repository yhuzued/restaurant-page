export default function footer () {
  const footer = document.querySelector('footer')
  const textFooter = document.createElement('p')
  textFooter.textContent = 'Created by Yusuf'
  footer.append(textFooter)
}
