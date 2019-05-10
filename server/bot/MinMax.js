const Checker=require('../Checker')
const player='O',opponent="X"

function evaluate(board){
    let winner=Checker(board);
    
    if(winner.player===player)return 10;
    else if(winner.player===opponent) return -10;
    else return 0;
}

function isVacant(board){
    for(let row=0;row<3;row++){
        for(let column=0;column<3;column++){
            if(board[row][column]==="")
                return true;
        }
    }
    return false;
}

function minmax(board,depth,maximizer,alpha,beta){
      let score=evaluate(board);
      
      if(score===10)return (score-depth);
      if(score===-10)return (score+depth);
      if(isVacant(board)===false)return 0;


      if(maximizer){
         let best=-1000;

          for(let i=0;i<3;i++){
              for(let j=0;j<3;j++){
                    if(board[i][j]===""){
                        board[i][j]=player;
                        best=Math.max(best,minmax(board,depth+1,false))
                        board[i][j]="";

                        alpha=Math.max(alpha,best);

                        if(beta<=alpha)return best;
                    }
              }
          }
          return best;
      }else{
        let best=1000;

        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                  if(board[i][j]===""){
                      board[i][j]=opponent;
                      best=Math.min(best,minmax(board,depth+1,true))
                      board[i][j]="";

                      beta=Math.min(beta,best);
                      if(beta<=alpha)return best;
                  }
            }
        }
        return best;
      }
}



module.exports=minmax