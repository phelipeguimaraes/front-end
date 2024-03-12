// 1 - Number
console.log(typeof 2);
console.log(typeof 14.3);
console.log(typeof -23);
console.log("----------------------------");

// 2 - Operações Aritméticas
console.log(2 + 4);
console.log(10 - 5);
console.log(5 * 4);
console.log(9 / 3);
console.log(5 + (4 * 2));
console.log("----------------------------");

// 3 - Special numbers
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log( 12 * "oxi");
console.log(typeof NaN);
console.log("----------------------------");

// 4 - Strings
console.log("textos");
console.log(`Mais um texto`);
console.log('23')

console.log(typeof "textos");
console.log(typeof `Mais um texto`);
console.log(typeof '23')
console.log("----------------------------");

// 5 - Símbolos especiais em string
console.log("Testando a \n quebra de linha");
console.log("Espaçamento \t de tab");
console.log("----------------------------");

// 6 - Concatenação
console.log("Oi" + " tudo bem?" + " fazendo?");

// 7 - Template Strings
console.log(`A soma de 2 + 2 é: ${2 + 2}`);
console.log(`Podemos executar qualquer coisa aqui ${console.log("testando")}`);
console.log("----------------------------");

// 8 - Boolean
console.log(true);
console.log(20 > 10);
console.log(5 > 10);
console.log(typeof false);
console.log("----------------------------");

// 9 - Comparações 
console.log(5 <= 5);
console.log(5 < 5);
console.log(10 == 10);
console.log(10 == 9);
console.log(10 != 9);
console.log("----------------------------");

// 10 - Idêntico
console.log(9 == '9');
console.log( 9 + '9');
console.log(9 === '9');
console.log(9 != '9');
console.log(9 !== '9');
console.log("----------------------------");

// 11 - Operadores lógicos
console.log(true && true)
console.log(true && false)
console.log(5 > 2 && 2 < 10)
console.log(5 > 2 || 'Phelipe' === 1)
console.log(5 < 2 || 5 > 100)
console.log(!false)
console.log(!10 > 5)
console.log("----------------------------");

// 12 - Empty values
console.log(typeof null, typeof undefined)
console.log(null === undefined)
console.log(null == undefined)
console.log(null == false)
console.log(undefined == false)
console.log("----------------------------");

// 13 - Mudança de tipos
console.log(5 * null)
console.log('teste' * 'opa')
console.log('10' + 1)
console.log('10' - 9)