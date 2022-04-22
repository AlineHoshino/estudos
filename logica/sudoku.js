

  function validSolution(board){
  for(i =0; i < 9; i ++){
    somaLinha = 0;
    somaColuna = 0;  
    for(j=0; j< 9; j++){
        console.log(board[i][j])
        somaLinha+=board[i][j]
        somaColuna+=board[j][i]
      }
      if(somaLinha !== 45 || somaColuna !==45 || validMatriz(board) === false){
          return false
      }  
  }
  return true;
}

const validMatriz =(board) =>{
    let inicioi=0;
    let limiti=2;
    let limitj = 2;
    let inicioj =0;
    for(let k = 0; k<3; k++){
        
        if(k===1){
            limitj = 2;
            inicioj =0;
            limiti = 5;
            inicioi =3;
        }
        if(k ===2){
            limitj = 2;
            inicioj =0;
            limiti= 8
            inicioi=6
        }
        while(limitj <=8){
          let somaMatriz =0
            for(i =inicioi; i <=limiti ; i ++){
                for(j=inicioj; j<=limitj; j++){
                  somaMatriz+=board[j][i]
                  console.log(board[j][i])
                }
              }
              if(somaMatriz !== 45){
                return false
              }  
              limitj+=3
              inicioj+=3;
              }
            }
return true;
    }


console.log(validMatriz([
    [5, 3, 2, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]]))


