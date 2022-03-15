let lista = document.getElementById("lista");
lista.dataset.n=3
//let num = parseInt(lista.getAttribute("data-num"));
let num = parseInt(lista.dataset.n);
let conteudo = '';
for( let i =0; i< num; i++){
  console.log(conteudo)
  conteudo+="<li>" + i + "</li>"
}

lista.innerHTML = conteudo;