// EXERCÍCIO 1
// Faça as 4 operações básica com base nos números 2 e 4:
// Ao final de cada operação imprima na tela no seguinte formato: 
// Soma: 2 + 4 = x
// Subtração : 2 - 4 = x
// Divisão: 2 / 4 = x
// Multiplicação: 2 * 4 = x

let num1 = 2;
let num2 = 4;
let x;
 x = num1 + num2

console.log(`Soma: 2+4 = ${x}`);
console.log('Soma: 2+4 = ' + (num1 + num2))// gabarito do Gus

x = num1 - num2

console.log(`Subtração: 2-4 = ${x}`)

x = num1/num2

console.log(`Divisão:2 / 4 = ${x}`)

x = num1*num2

console.log(`Multiplicação: 2*4 = ${x}`)

// Elaborar um programa que leia o valor de um jantar . Calcula a taxa do garçom e o valor total a ser pago

  let janta = 80;
  let taxa = (janta * 0.1);
  let total = janta + taxa;


console.log(`Valor do jantar: R$${janta},00`);
console.log(`Taxa do garçom: R$${taxa},00`);
console.log(`Total a pagar: R$${total},00`);

var list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Pythonss' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];

function getFirstPython(list1){
const existDevPython =list1.find(dev => dev.language === 'Python')
if(existDevPython){    
return `${existDevPython.firstName}, ${existDevPython.country}`
}else {
    return `There will be no Python developers`
  }
}

console.log(getFirstPython(list1))