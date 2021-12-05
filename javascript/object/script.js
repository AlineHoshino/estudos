
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
