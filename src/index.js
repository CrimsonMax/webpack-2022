import dogs from "assets/dogs"
import './index.scss'

console.log('Hello!')

class myDog {
  name = 'Bobik'
}

const dog = new myDog

const paragraph = document.createElement('p')
paragraph.textContent = `My dog's name is ${dog.name}`

const app = document.querySelector('#root')

const headerOne = document.createElement('h1')
headerOne.textContent = 'Header One'

const unorderedList = document.createElement('ul')

unorderedList.className = 'dogs-container'

dogs.forEach(({name, image}) => {
  const listItem = document.createElement('li')
  const listDiv = document.createElement('div')
  const imageBlock = document.createElement('img')

  listItem.className = 'dogs-container-item'
  listDiv.className = 'dogs-container-item__name'
  imageBlock.className = 'dogs-container-item__image'

  listDiv.textContent = name
  imageBlock.src = image

  listItem.appendChild(listDiv)
  listItem.appendChild(imageBlock)

  unorderedList.appendChild(listItem)
})

app.append(headerOne, paragraph, unorderedList)