// console.log('Olá Mundo')

// let a;
// let gato="miau";
// gato=a;
// a="au-au"

// console.log(gato)

let frase ="Primeira linha \n Segunda linha"
console.log(frase)

let one ="1"
console.log(one +"1")
console.log(1+1)
// strings concatenam 
console.log(2=="2");
console.log(2==="2");// compara valor e tipo

// Operadores lógicos => &&, || , negativo !

var str ='Valor "texto entre aspas" qualquer'
// se quero colocar um texto entre aspas use aspas simples antes
console.log(str)

let a = "3.5";
let b = "6";

let c = parseFloat(a) +parseFloat(b)

console.log(c)
// let numero= parseInt(prompt("digite um número"))
//prompt vem como string
// let dobro = 2 * numero;
// alert(`O dobro de ${numero} é ${dobro}` )

function solution(n) {
  let result=0
  const x= n.toString().split("")
  for(i=0;i<x.length;i++){
    result+=x[i]
  }
  return result
  }

solution(20)// mandando executar a funcao

let alunos =["Igor", "Maria", "José"]

for(let i=0; i<alunos.length;i++){
  console.log(alunos[i])
}

for(let i in alunos){
  console.log(i)
}

function solution(divisor, bound) {
  let x= Math.floor(bound/divisor)
  return x*divisor;
  }

  
  function solution2(n, firstNumber) {
    let resposta=(firstNumber + n / 2) % n;
    console.log(resposta)
    return resposta
}


solution2(12,3)

// let aluno = {
//   nome:"Joao",
//   nota:[5,8],
//   media: function(n1,n2){
//     return (n1 +n2)/2
//   }
// }


function calcMedia(n1,n2){
  return (n1 +n2)/2
}
let aluno = {
  nome:"Joao",
  nota:[5,8],
  media: calcMedia,
}


aluno.matricula = 12345;
console.log(aluno["nome"])
console.log(aluno)
console.log(aluno.media(aluno.nota[0], aluno.nota[1]))


let novaProp = "sobrenome"

aluno[novaProp] = "Oliveira";