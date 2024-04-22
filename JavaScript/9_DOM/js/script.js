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

// 8 - replaceChild
const h2 = document.createElement('h2')
h2.textContent = 'Meu novo título!' // método para escever no elemento
header.replaceChild(h2, title) // método para trocar elementos, h2 vai para o lugar do title

// 9 - createTextNode

const myText = document.createTextNode("Agora vamos colocar mais um título") // Método de criar um texto
console.log(myText)

const h3 = document.createElement('h3')
h3.appendChild(myText)
console.log(h3)
mainContainer.appendChild(h3)

// 10 - trabalhando com atributos
const firstLink = navLinks.querySelector('a')
console.log(firstLink)

firstLink.setAttribute('href', 'https://www.facebook.com') // metodo para mudar os valores
console.log(firstLink.getAttribute('href')) // metodo para ler
firstLink.setAttribute('target', '_blank')

// 11 - altura e largura
const footer = document.querySelector('footer')
 
console.log(footer.offsetWidth) // largura do elemento com a borda
console.log(footer.offsetHeight) // altura do elemento com a borda

console.log(footer.clientWidth) // largura do elemento sem a borda
console.log(footer.clientHeight) // altura do elemento sem a borda

// 12 - posição do elemento
const product1 = products[0]
console.log(product1.getBoundingClientRect())

// 13 - CSS com JS
mainContainer.style.color = 'red'
mainContainer.style.backgroundColor = '#333'
mainContainer.style.paddingBottom = '15px'

// 14 - alterando estilos de varios elementos
for(const li of listaItens) {
    li.style.backgroundColor = 'red'
}