export default function about () {
  const content = document.getElementById('content')

  const heading = document.createElement('h1')
  heading.textContent = 'About'

  const description = document.createElement('div')
  description.classList.add('description')

  const textDescription = [
    'We are a family-friendly restaurant that serves delicious dishes from around the world.',
    'Whether you\'re looking for a hearty breakfast, a satisfying lunch, or a decadent dinner, we have something for everyone.',
    'Come and enjoy our cozy atmosphere, our friendly staff, and our amazing entertainment',
    'At Savoria, we make every meal a memorable one!'
  ]

  textDescription.forEach((text) => {
    const paragraph = document.createElement('h2')
    paragraph.textContent = text
    description.append(paragraph)
  })

  content.append(heading, description)
}
