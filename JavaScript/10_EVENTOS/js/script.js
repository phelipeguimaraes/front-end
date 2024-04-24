// 1 - adicionando eventos
const btn = document.querySelector('#my-button')

btn.addEventListener('click', function() {
    console.log('Fui clicado!')
})

// 2 - removendo evento
const secondBtn = document.querySelector('#btn')
function imprimirMensagem() {
    console.log('Teste')
}

secondBtn.addEventListener('click', imprimirMensagem)

const thirdBtn = document.querySelector('#other-btn')
thirdBtn.addEventListener('click', () => {
    console.log('Evento removido')
    secondBtn.removeEventListener('click', imprimirMensagem)
})

// 3 - argumento do evento 
const myTitle = document.querySelector('#my-title')
myTitle.addEventListener('click', (event) => {
    console.log(event)
    console.log(event.offsetX) // posição do elemento no eixo X
    console.log(event.pointerType) // tipo de click, touch ou mouse
    console.log(event.target) // informação do elemento
})

// 4 - propagação
const containerBtn = document.querySelector('#btn-container')
const btnInsideContainer = document.querySelector('#div-btn')

containerBtn.addEventListener('click', () => {
    console.log('Evento 1')
})
btnInsideContainer.addEventListener('click', (e) => {
    e.stopPropagation() // exclusivamente vai executar só esse EVENTO! se clicar nele
    console.log('Evento 2')
})

// 5 - removendo evento padrão
const a = document.querySelector('a')
a.addEventListener('click', (e) => {
    e.preventDefault() // vai "remover" o evento, ou seja não vai ser executado

    console.log('Não alterou a página')
})

// 6 - eventos de tecla
document.addEventListener('keydown', (e) => {
    console.log(`Soltou a tecla ${e.key}`) // quando pressionado a tecla é ativada 
})
document.addEventListener('keyup', (e) => {
    console.log(`Soltou a tecla ${e.key}`) // quando é clicado a tecla é ativado
})

// 7 - eventos de mouse
const mouseEvents = document.querySelector('#mouse')
mouseEvents.addEventListener('mousedown', () => {
    console.log('Pressionou o botão')
})

mouseEvents.addEventListener('mouseup', () => {
    console.log('Soltou o botão')
})

mouseEvents.addEventListener('dblclick', () => {
    console.log('Clique duplo')
}) 

// 8 - movimento do mouse
/*document.addEventListener('mousemove', (e) => {
    console.log(`No eixo X: ${e.x}`)
    console.log(`No eixo Y: ${e.y}`)
})*/

// 9 - evento de scroll
window.addEventListener('scroll', (e) => {
    if(window.pageYOffset > 200) {
        console.log('Passamos de 200px')
    }
})