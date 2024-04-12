// 1 - setTimeout
console.log('Ainda não executou')

setTimeout(function() {
    console.log('Requisição assíncrona')
}, 2000)

console.log('Ainda não executou 2')

// 2 - setInterval
console.log('Ainda não começou')

setInterval(function() {
    console.log('Intervalo assíncrono')
}, 3000)

console.log('Ainda não começou 2')