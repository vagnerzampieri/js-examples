import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

const Card = () => {
  const Card = document.createElement('div')
  Card.setAttribute('class', 'card')

  const button = document.createElement('button')
  button.setAttribute('id', 'counter')

  Card.appendChild(button)

  return Card
}

const ReadTheDocs = () => {
  const ReadTheDocs = document.createElement('p')
  ReadTheDocs.setAttribute('class', 'read-the-docs')

  ReadTheDocs.textContent = `Click on the Vite and TypeScript logos to learn more`

  return ReadTheDocs
}

const ImagesWithLink = (href: string, logo: string, type: string, klass: string) => {
  const ImagesWithLink = document.createElement('a')
  ImagesWithLink.setAttribute('href', href)
  ImagesWithLink.setAttribute('target', '_blank')

  const Images = document.createElement('img')
  Images.setAttribute('src', logo)
  Images.setAttribute('class', `logo ${klass}`)
  Images.setAttribute('alt', `${type} logo`)

  ImagesWithLink.appendChild(Images)

  return ImagesWithLink
}

const App = () => {
  const App = document.createElement('container')

  App.innerHTML = `<h1>Vite + TypeScript</h1>`

  return App
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = App().outerHTML
document.querySelector<HTMLDivElement>('container')!.prepend(
  ImagesWithLink('https://vitejs.dev', viteLogo, 'Vite', 'vanilla')
)

document.querySelector<HTMLDivElement>('a')!.after(
  ImagesWithLink('https://www.typescriptlang.org/', typescriptLogo, 'TypeScript', '')
)

document.querySelector<HTMLDivElement>('h1')!.after(ReadTheDocs())
document.querySelector<HTMLDivElement>('.read-the-docs')!.before(Card())

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
