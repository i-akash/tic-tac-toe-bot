const MinMax=require('./MinMax')
const player="O"

function BestMove(board){
   let bestVal=-1000;
   bestMove={}

   for(let i=0;i<3;i++){
       for(let j=0;j<3;j++){
           if(board[i][j]===""){
               board[i][j]=player;
               let movVal=MinMax(board,1,false);
               board[i][j]="";
               
               console.log(i," ",j," ",movVal);
               
               if(movVal>bestVal){
                   bestVal=movVal;
                   bestMove.x=i;
                   bestMove.y=j;
               }
           }
       }
   }

   return bestMove;
}


module.exports=BestMove;