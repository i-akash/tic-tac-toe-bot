const winOptions={
    width: 500,
    height: 550,
    minWidth:500,
    minHeight:500,
    maxWidth:850,
    maxHeight:800,
    show: false,
}

const InitState={
    board:[
        ["","",""],
        ["","",""],
        ["","",""]
    ],
    player:true,
    winner:"",
    countTurn:0
}

module.exports={winOptions,InitState};