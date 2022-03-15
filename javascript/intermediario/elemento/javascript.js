let paragrafos = document.getElementsByClassName("paragrafo")

console.log(paragrafos)

let p=document.getElementById("p1")
p.innerHTML = "<h1>tem um h1 de fato dentro do p </h1>"

let p2=document.getElementById("p2")
console.log(p2.innerText)
console.log(p2.textContent)


let atributo =p.getAttribute("meuatt")
console.log(atributo)

p.setAttribute("meuatt","olá")
