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