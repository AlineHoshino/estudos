let adulto = document.getElementById("adult");
let children = document.getElementById("children");
let hour = document.getElementById("hour");
let button = document.getElementById("calcular");
let result = document.getElementById("resultado");
button.addEventListener("click",calcular);

function calcular(){
let adultoValue = adulto.value;
let childrenValue= children.value;
let duration = hour.value;
let totalMeat = qtMeat(duration) * adultoValue + (qtMeat(duration)/2 * childrenValue)
let totalBeer = qtBeer(duration) *adultoValue
let totalDrink = qtRefri(duration) *adultoValue +(qtRefri(duration)/2 * childrenValue)
result.innerHTML=`<p>🥩${totalMeat/1000} kg de carne</p>`
result.innerHTML+=`<p>🍺${Math.ceil(totalBeer/355)} latas de cerveja</p>`
result.innerHTML+=`<p>🥤${Math.ceil(totalDrink/2000)} Pet's 2L de Bebidas </p>`
}


function qtMeat(duration){
  if(duration >= 6){
    return 650;
}else {
  return 400;
}
}

function qtBeer(duration){
  if(duration >= 6){
    return 2000;
}else {
  return 1200;
}
}

function qtRefri(duration){
  if(duration >=6){
    return 1500;
  }else {
    return 1000;
  }
}