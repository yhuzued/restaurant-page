export default function contact () {
  const content = document.getElementById('content')
  const heading = document.createElement('h1')
  heading.textContent = 'Contact Us'

  const description = document.createElement('div')
  const textDescription = 'Thank you for visiting Saviora, a simple restaurant page that I created as an assignment for The Odin Project.'

  const paragraph = document.createElement('h2')
  paragraph.textContent = textDescription
  description.append(paragraph)

  content.append(heading, description)
}
