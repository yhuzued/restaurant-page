export default function home () {
  const container = document.getElementById('content')
  const header = document.createElement('h1')
  const desc = document.createElement('h2')

  header.textContent = 'Savoria'
  header.classList.add('head')
  desc.textContent = 'Where flavor meets fun! Welcome to Savoria - our restaurant is all about great food, good vibes, and unforgettable memories. Come join the feast!'
  container.append(header, desc)
}
