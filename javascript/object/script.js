
function calcMedia(){
  return (this.notas[0] +this.notas[1])/2;
}

let aluno = {
  nome:"Aline",
  notas:[7,8],
  media: calcMedia,
}

console.log(aluno.media());

let a = {
  nome: "Igor",
  sobrenome:"Lacreda"
}

// 2 maneira de criar objeto através de funcao

function obj(nome, sobrenome){
  return {nome, sobrenome,}
}

console.log(obj("Caio", "Justino"))

// 3 maneira de cirar objeto 

//representa esta instância
function obj2(n,s){
  this.nome=n;
  this.sobrenome=s;

}

// só que essa função não retorna nada, então precisamos criar um novo objeto 

let student = new obj2("Aline", "Eiko")

console.log(student)
console.log(student.nome)
//Data
let d = new Date();

console.log(d)

let data = new Date(2021, 07, 03,15)
//07 corresponde a agosto porque é um array de mês 2021-ano, 07 - mes agosto 03 , dia, 15 hora
console.log(data)
let milisegundo = new Date(0)
console.log(milisegundo)

let dia = new Date("sep 05 2020 23:25")
console.log(dia)

let dia2 = new Date("05/25/1999")
console.log(dia2.getFullYear())

const numero = [4]

numero.push(5)

console.log(numero)

const obj3 = {}
obj3.nome= "aline"

console.log(obj3)