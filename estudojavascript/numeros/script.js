let x= 2;
console.log(x++)
console.log(x);
console.log(++x);

let idade = '28';
+idade;
console.log( typeof +idade)
-idade;
console.log(-idade);

// o - na frente de uma variável torna o número negativo

var soma = '100' + 50; // 10050
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * '2'; // 200
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)

console.log(isNaN(divisao))// retorna true
let possuifaculdade = true;
console.log(+possuifaculdade)

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total)
// Crie duas expressões que retornem NaN

let pesoTotal= ('pw1'/2)
console.log(isNaN(pesoTotal))
console.log(pesoTotal)
// Somar a string '200' com o número 50 e retornar 250
let twoHundred = '200'
let fifth = 50
console.log(+twoHundred + fifth)
// Incremente o número 5 e retorne o seu valor incrementado
let y = 5
console.log(y++)
console.log(y)
// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)
let newPeso = +numero/2