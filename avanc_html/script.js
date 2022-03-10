let lista = document.getElementById("lista");
console.log(lista);
let num = parseInt(lista.getAttribute("num"));
console.log(num)
let conteudo = '';
for( let i =0; i< num; i++){
  conteudo+="<li>" + i + "</li>"
}

lista.innerHTML = conteudo;