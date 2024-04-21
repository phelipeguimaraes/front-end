// 1 - movendo-se pelo DOM
console.log(document.body)
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[1].childNodes)
console.log(document.body.childNodes[1].childNodes[1].textContent)

// 2 - selecionando por tag
const listaItens = document.getElementsByTagName('li')
console.log(listaItens)

// 3 - selecionando elemento por id
const title = document.getElementById("title")
console.log(title)

// 4 - selecionado elementos por classe
const products = document.getElementsByClassName('product')
console.log(products)

// 5 - selecionando os elementos por CSS
const productsQuery = document.querySelectorAll('.product')
console.log(productsQuery)

const mainContainer = document.querySelector('#main-container')
console.log(mainContainer)

// 6 - insertBefore
const p = document.createElement('p') // método criando elemento (criando o paragrafo)
console.log(p)

const header = title.parentElement // elemento pai
console.log(header)

header.insertBefore(p, title) // elemento antes do outro (paragrafo ante do title)

// 7 - appendChild
const navLinks = document.querySelector('nav ul')
const li = document.createElement('li')
navLinks.appendChild(li) // método para adiconar um elemento dentro do elemento pai, vai o último