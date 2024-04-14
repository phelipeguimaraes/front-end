// 1 - setTimeout
console.log('Ainda não executou')

setTimeout(function() {
    console.log('Requisição assíncrona')
}, 2000)

console.log('Ainda não executou 2')

// 2 - setInterval
// console.log('Ainda não começou')

// setInterval(function() {
//    console.log('Intervalo assíncrono')
// }, 3000)

// console.log('Ainda não começou 2')

// 3 - Promise
console.log('=====================================')
const promessa = Promise.resolve(5 + 5)
console.log('Algum código')

promessa.then(value => {
    console.log(`A soma é ${value}`)
    return value
})
.then((value) => value - 1)
.then((value) => console.log(`Agora é ${value}`))

console.log('Outro código')

const human = Promise.resolve('coração')
console.log('teste 1')

human.then(value => {
    console.log(`Necessitamos de um ${value}`)
    return value
})
const cr7 = Promise.resolve(885)
cr7.then(value => {
    console.log(`Esse robozâo possui ${value} gols.`)
})

console.log('teste 2')

// 4 - falha na promise

Promise.resolve(4 * 'ss')
.then((n) => {
    if(Number.isNaN(n)) {
        throw new Error('Valores inválidos')
    }
})
.catch((err) => console.log(`Um erro ocorreu: ${err}`))

Promise.resolve(5 * 7)
.then((nn) => { 
    if (nn === 25) {
        console.log(`Boa acertou ${nn}`)
    }
    else {
        throw new Error('Erro encontrado!!')
    }
})
.catch((erro) => console.log(`Tente novamente: ${erro}`))