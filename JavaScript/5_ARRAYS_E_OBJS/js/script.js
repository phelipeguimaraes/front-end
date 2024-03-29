// 1 - Arrays
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