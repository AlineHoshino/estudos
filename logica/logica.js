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
  let idadeInicio = 10;
  let idadeFim = 20;
  const limit = 9;
  let contador = 0;
  const idade100 = list7.filter(dev=> dev.age >= 100)
  if(idade100.length === 0){
    return false;
  }
  while(contador < limit){
    let bool = true;
    for(let i= 0; i < list7.length; i ++){
      if(list7[i]['age'] >= idadeInicio && list7[i]['age'] < idadeFim ){
        bool = false;
      }
    }
    if( bool){
      return false;
    }
    contador++
    idadeInicio+=10
    idadeFim+=10
  }
  return true;
}

 function find_max(nums) {
  let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
   for (let num of nums) {
   if (num > max_num) {
    max_num = num
   }
   }
   return max_num;
   }
  

   console.log(find_max([1,2,3,4,5]))

   function solution(str, ending){
    return str.endsWith(ending)
    
  }

  console.log(solution('abcde','abc'))

  function gimme(triplet) {
    const copyArray = [...triplet]
    const order = copyArray.sort((a,b) => a -b)
    const numberMiddle = order[1];
    const index = triplet.indexOf(numberMiddle)
    return index
  }

  console.log(gimme([2,1,3]))

//   function removeEveryOther(arr){
//     const array = []
//   for(let i = 0; i< arr.length; i++){
//     if(arr.length === 1){
//       return arr
//     }else{ 
//      return  array.push(arr[i === (i%2 ===0)])
//     }
//   }
//   }

//  console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function findMultiples(integer, limit) {
  const qtyLoops = Math.floor(limit/integer)
  const array = []
  for( let i = 1; i <= qtyLoops; i++){
    array.push(integer*i)
  }
  return array
}

console.log(findMultiples(4,27))

function areYouPlayingBanjo(name) {
  if(name.startsWith('R') || name.startsWith('r')){
    return name + ' plays banjo'
  }else {
    return name + ' does not play banjo'
  }
}

function areYouPlayingBanjo2(name) {
  return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}

console.log(areYouPlayingBanjo2('Ronald'))

function stickyCalc (operation, val1, val2){
  const roundVal1 = Math.round(val1)
  const roundVal2 = Math.round(val2)
  const valString =roundVal1.toString()
  const val2String = roundVal2.toString()
  const concatString = valString +val2String
  console.log(concatString,'aqui')
switch(operation){
  case '+':
    return Number(concatString) + val2;
    break;
  case '-':
    return Number(concatString) - val2;
    break;
  case '*':
    return Number(concatString) * val2;
    break;
  case '/':
    return Math.round(Number(concatString) / val2);
    break;
    default:
      console.log('sorry')
}
}


console.log(stickyCalc('/',433,930))

function betterThanAverage(classPoints, yourPoints) {
 const soma = classPoints.reduce((acc, curr) => (acc + curr)) 
 if(soma/classPoints.length > yourPoints){
   return false;
 }
 return true;
}


console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))


function stringMerge(string1, string2, letter){
  const split = string1. split('')
  const indice = split.indexOf(letter)
  const firtsPart =  split.slice(0,(indice))
  const split2 = string2.split('')
  const indice2 = split2.indexOf(letter)
  const final =  string2.substring(indice2, split2.length)
  const FirstPartString = firtsPart.join('').toString();
  const 
  const palavra = FirstPartString + final
  return palavra;
}

stringMergeSolution= (a, b, l) => a.slice(0, a.indexOf(l)) + b.slice(b.indexOf(l));
console.log((stringMergeSolution("person","here",'e')));


function sum(...args) {
  const array = [...args]
  return array.reduce((a,b) => a+b,0)
}

console.log((sum(12, 1, 1, 1, 1, 1, 1)))


function sum2() {
  var total = 0;
  for(var i in arguments){
    total += arguments[i];
  }
  return total;
}

console.log(sum2(12, 1, 1, 1, 1, 1, 1))