export default function home () {
  const container = document.getElementById('content')

  const header = document.createElement('h1')
  header.textContent = 'Savoria'

  const description = document.createElement('div')

  const tagline = ['Where flavor meets fun!', 'Our restaurant is all about great food, good vibes, and unforgettable memories']
  tagline.forEach((text) => {
    const paragraph = document.createElement('h2')
    paragraph.textContent = text
    description.append(paragraph)
  })

  header.classList.add('head')

  container.append(header, description)
}
