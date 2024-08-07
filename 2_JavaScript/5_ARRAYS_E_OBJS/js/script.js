/*// 1 - Arrays
 const lista = [1, 2, 3, 4, 5]
 console.log(lista)
 console.log(typeof lista)

 const itens = ['Phelipe', true, 23.4]
 console.log(itens)
 console.log('------------------')

 // 2 - mais sobre arrays
 const arr = ['a', 'b', 'c', 'd', 'e']
 console.log(arr[3])
 console.log(arr[43])

 // 2 - propriedades
 const numbers = [5, 3 ,4]
 console.log(numbers.length)
 console.log(numbers['length'])

 const myName = 'Phelipe'
 console.log(myName.length)
 console.log('------------------')

 // 3 - métodos
 const otherNumbers = [1, 2, 3]
 const otherNumbers2 = [4, 5, 6]
 const allNumbers = otherNumbers.concat(otherNumbers2)
 console.log(allNumbers)

 const text = 'Algum texto'
 console.log(text.toUpperCase())
 console.log(typeof text.toUpperCase)
 console.log(text.indexOf('m'))
 console.log('------------------')

 // 4 - Obejtos 
 const person = {
    name: 'Phelipe',
    age: 19,
    job: 'Programador'
 }
console.log(person)
console.log(person.name)
console.log(person.name.length)
console.log(typeof person)
console.log('------------------')

// 5 - criando e deletando propriedades
const car = {
    engine: 2.0,
    brand: 'VW',
    model: 'Tiguan',
    km: 20000
}
console.log(car)
car.doors = 4
console.log(car)
delete car.km
console.log(car)
console.log('------------------')

// 6 - mais sobre objetos

const obj = {
    a: 'teste',
    b: true
}

console.log(obj)
console.log(obj instanceof Object)

const obj2 = {
    c: []
}

Object.assign(obj2, obj)
console.log(obj2)
console.log(obj)
console.log('------------------')

// 7 - conhecendo melhor os objetos
console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(car))
console.log(Object.entries(car))
console.log('------------------')

// 8 - Mutação
const a = {
    name: 'Phelipe'
}

const b = a 
console.log(a)
console.log(b)
console.log(a === b)
a.age = 19
console.log(a)
console.log(b)

delete b.age
console.log(a)
console.log(b)
console.log('------------------')

// 9 - loop em array
const users = ['Phelipe', 'Yuri', 'Dudu', 'Mosquito']
for(let i = 0; i < users.length; i++) {
    console.log(`Listando o usuário ${users[i]}`)
}
console.log('------------------')

// 10 - push e pop
const array = ['a', 'b', 'c']
array.push('d')
console.log(array)
console.log(array.length)

array.pop()
console.log(array)

const itemRemovido = array.pop()
console.log(itemRemovido)
console.log(array)

array.push('z', 'x', 'y')
console.log(array)
console.log('------------------')

// 11 - shift e unshift
const letters = ['a', 'b', 'c']
const letter = letters.shift()
console.log(letter)
console.log(letters)

letters.unshift('p', 'q', 'r')
letters.unshift('s')
console.log(letters)
console.log('------------------')


// 12 - indexOf e lastIndexOf
const myElements = ['Morango', 'Maçã', 'Abacate', 'Pêra', 'Abacate']
console.log(myElements.indexOf('Maçã'))
console.log(myElements.indexOf('Abacate'))

console.log(myElements[2])
console.log(myElements[myElements.indexOf('Abacate')])

console.log(myElements.lastIndexOf('Abacate'))

console.log(myElements.indexOf('Mamão'))
console.log(myElements.lastIndexOf('Mamão'))
console.log('------------------')

// 13 - slice
const testeSlice = ['a', 'b', 'c', 'd', 'e', 'f']
const subArray = testeSlice.slice(2, 4)
console.log(testeSlice)
console.log(subArray)
const subArray2 = testeSlice.slice(2, 4 + 1)
console.log(subArray2)
const subArray3 = testeSlice.slice(10, 20)
console.log(subArray3)
const subArray4 = testeSlice.slice(2)
console.log(subArray4)
console.log('------------------')

// 14 - forEach
const nums = [1, 2, 3, 4, 5]

nums.forEach((num) => {
    console.log(`O número é ${num}`)
})

const posts = [
    {title:'Primeiro post', category: 'PHP'},
    {title:'Segundo post', category: 'JavaScript'},
    {title:'Terceiro post', category: 'Python'}
]

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title} da categoria ${post.category}`)
})
console.log('---------------------------')

const names = ['Phelipe', 'Neto', 'Gabi', 'Leandro', 'Júlia']
names.forEach((name) => {
    console.log(`Me chamo ${name}`)
})
console.log('------------------------')

const apresentation = [
    {name: names[0], idade: '19 anos'},
    {name: names[1], idade: '21 anos'},
    {name: names[4], idade: '28 anos'},
]

apresentation.forEach((apresen) => {
    console.log(`Meu nome é: ${apresen.name} e tenho ${apresen.idade}`)
})
console.log('------------------------')

// 15 - includes

const brands = ['BMW', 'VW', 'Fiat']
console.log(brands.includes('Fiat'))
console.log(brands.includes('Honda'))

if(brands.includes('BMW')) {
    console.log('Há carros da marca BMW')
}
console.log('------------------------')

// 16 - reverse
const reverseTeste = [1, 2, 3, 4, 5]
reverseTeste.reverse()
console.log(reverseTeste)
console.log('------------------------')


// 18 - trim
const trimTest = ' testando \n '
console.log(trimTest)
console.log(trimTest.trim())
console.log(trimTest.length)
console.log(trimTest.trim().length)
console.log('------------------------')

// 19 - padstart
const testePadStart = '1'
const newNumber = testePadStart.padStart(4, '0')

console.log(testePadStart)
console.log(newNumber)

const testePadEnd = newNumber.padEnd(10, '0')
console.log(testePadEnd)
console.log('------------------------')

//20 - split
const frase = 'O rato roeu a roupa do rei de Roma'
const arrayDaFrase = frase.split(' ')

console.log(arrayDaFrase)

const frase2 = 'O Palmeiras num tem mundial e nunca vai ter mundial!'
console.log(frase2.split(' '))
console.log('------------------------')

// 21 - join
const fraseDeNovo = arrayDaFrase.join(' ')
console.log(fraseDeNovo)

const itensParaComprar = ['Mouse', 'Teclado', 'Monitor']
const fraseDecompra = `Precisamos comprar: ${itensParaComprar.join(', ')}.`
console.log(fraseDecompra)
console.log('------------------------')

// 22 - repeat
const palavra = 'Testando '
console.log(palavra.repeat(5))
console.log('------------------------')

// 23 - rest operator
const somaInfinita = (...args) => {
    let total = 0

    for(let i = 0; i < args.length; i++) {
        total += args[i]
    }

    return total
}

console.log(somaInfinita(1, 2, 4))
console.log(somaInfinita(1, 23, 43, 4321, 3245435))

const somaInfinita2 = (...arg) => {
    let totally = 0
    for(let y = 0; y < arg.length; y++) {
        totally += arg[y]  
        return totally
    }
}
console.log(somaInfinita2(12, 4, 5))
console.log('------------------------')

// 24- for of
const somaInfinita3 = (...args) => {
    let total = 0
    for(num of args) {
        total += num
    }
    return total
}
console.log(somaInfinita3(7, 2, 8))
console.log(somaInfinita3(4,5,1,22,56))
console.log('------------------------')

// 25 - destructuring em objetos
const userDetails = {
    firstName: 'Phelipe',
    lastName: 'Guimarães',
    job: 'Programador'
}

const {firstName, lastName, job} = userDetails
console.log(firstName, lastName, job)

// renomear variaveis
const {firstName: primeiroNome} = userDetails
console.log(primeiroNome)
console.log(firstName)
console.log('------------------------')

// 26 - destructuring com arrays
const myList = ['Motoca', 'Carro', 'Skate', 'Bike']
const [veiculoA, veiculoB, veiculoC, veiculoD] = myList
console.log(veiculoA, veiculoB, veiculoC, veiculoD)
console.log('------------------------')*/

// 27 - JSON
const myJson = '{"name": "Phelipe", "age": 19, "skills": ["HTML", "CSS", "JavaScript"]}'
console.log(myJson)
console.log(typeof myJson)

// 28 - JSON para objetos e objetos para JSON
const myObject = JSON.parse(myJson)
console.log(myObject)
console.log(myObject.name)
console.log(typeof myObject)

// json invalido
const badjson = '{"name": Phelipe, "age": 19}'
// const myBadObject = JSON.parse(badjson)
myObject.isOpenToWork = true
console.log(myObject)

const myNewJson = JSON.stringify(myObject)
console.log(myNewJson)
console.log(typeof myNewJson)
