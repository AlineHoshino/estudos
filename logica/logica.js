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