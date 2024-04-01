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
console.log('------------------')*/

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