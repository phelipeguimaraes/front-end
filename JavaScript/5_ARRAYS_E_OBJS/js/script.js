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
 console.log('------------------')*/

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