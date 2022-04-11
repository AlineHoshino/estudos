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

var list = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];

function countLanguages(list) {
  var result = {}
  for(var i=0;i<list.length;i++){
    if(result[list[i].language]==undefined){
      result[list[i].language]=1
      } else {
      result[list[i].language]++
      }
     } 
  return result
}
console.log(countLanguages(list))

function getFirstPython(list1){
  const existDevPython =list1.find(dev => dev.language === 'Python')
  if(existDevPython){
  return `${existDevPython.firstName}, ${existDevPython.country}`
  }else {
      return `There will be no Python developers`
    }
  }

  const obj ={

  }

if(obj['name'] === undefined)[
      obj['name'] ='Aline'
]

  console.log(obj)

  var list5 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
  ];

  function isSameLanguage(list5) {
   const languages = list5.map(dev => dev.language)[0]
   console.log(languages)
    const bool = list5.every(dev => dev.language === languages)
    return bool
  }

  console.log(isSameLanguage(list5))

  var list6 = [
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 41, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
  ];

  function findSenior(list6) {
let moreOld = list6[0]['age'] ;
let array =[]
for(let i = 1;i < list6.length; i++){
  if(list6[i].age >moreOld){
    moreOld = list6[i].age
  }
}
  for(let i = 0;i < list6.length; i++){
    if(moreOld === list6[i]['age'] ){
      array.push(list6[i])
      }
    }
return array
}


var list6 = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 41, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];


// function findSenior(list6) {
//   var maxAge = Math.max(...list6.map(person => person.age));
//   return list6.filter(person => person.age === maxAge);
// }
// console.log(findSenior(list6))

// vi esse código no codewars e achei legal a resolução 

const closestMultiple10 = num => {
  let result = num/10;
  const round = Math.round(result)
  const roundMultipy10 = round *10
  return roundMultipy10
};

console.log(closestMultiple10(54))

function howManyDalmations(number){
  
  var dogs = ["Hardly any", "More than a handful!" , "Woah that's a lot of dogs!" , "101 DALMATIONS!!!"];
 if(number === 1){
   return dogs[0]
 }
if(number >1 &&  number<=50){
  return dogs[1]
}
  if(number >51 && number<101){
    return dogs[2]
  }
  else{
    return dogs[3]
  }
}

console.log(howManyDalmations(100))


var list7 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
  { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
  { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
];

function isAgeDiverse(list7){
  let bool = true;
  for(let i= 0; i < list7.length; i ++){
    if(list7[i]['age'] > 10 && list7[i]['age'] < 20 ){
      bool = false;
    }
  }
  if( bool){
    return false;
  }
  bool = true;
  for(let i= 0; i < list7.length; i ++){
    if(list7[i]['age'] >= 20 && list7[i]['age'] < 30 ){
      bool = false;
    }
  }
  if( bool){
    return false;
  }
  bool = true;
  for(let i= 0; i < list7.length; i ++){
    if(list7[i]['age'] >= 30 && list7[i]['age'] < 40 ){
      bool = false;
    }
  }
  if( bool){
    return false;
  }
  return true;
}

function longest(words) {
const biggestworld = words.map(w => w.length)
console.log(biggestworld)
return NumberBiggestWorld = Math.max(...biggestworld)
}

console.log(longest(['simple', 'is', 'better', 'than', 'complex']))

function sortByBinaryOnes(list){
  const binary =list.map(num => num.toString(2))
  const sortBinary = binary.sort((a,b) => {
    if()
  })
  console.log(sortBinary)
}
console.log(sortByBinaryOnes([1,15,5,7,3]))