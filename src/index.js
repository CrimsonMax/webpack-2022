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

app.append(headerOne, paragraph)