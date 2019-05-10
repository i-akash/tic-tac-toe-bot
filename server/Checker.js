module.exports=(board)=>{
    let cnt1=0,cnt2=0;
    for(let i=0;i<3;i++){
         if(board[i][i]===board[0][0] && board[0][0]!=="" )
              cnt1+=1;
         if(board[i][2-i]===board[0][2]  && board[0][2]!=="")
              cnt2+=1;              
    }

    if(cnt1===3)
       return {"player": board[0][0],"line":[{"x1":0,"y1":0},{"x2":2,"y2":2}]};
    if(cnt2===3)
       return {"player": board[0][2],"line":[{"x1":0,"y1":2},{"x2":2,"y2":0}]};
       

    for(let i=0;i<3;i++){
        let cnt=0;
        for(let j=0;j<3;j++){
            if(board[i][j]===board[i][0] && board[i][0]!=="")
              cnt+=1;
        }
        
        if(cnt===3)
           return {"player": board[i][0],"line":[{"x1":i,"y1":0},{"x2":i,"y2":2}]};
    }

    for(let i=0;i<3;i++){
        let cnt=0;
        for(let j=0;j<3;j++){
            if(board[j][i]===board[0][i] && board[0][i]!=="")
              cnt+=1;

        }
        
        if(cnt===3)
            return {"player": board[0][i],"line":[{"x1":0,"y1":i},{"x2":2,"y2":i}]};
    }

    return {"player":-1};
}

