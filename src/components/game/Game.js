import React, { Component } from 'react'
import {ipcRenderer} from 'electron'
import {Modal} from 'react-bootstrap'
import Board from './Board';
import '../styles/Game.css'

class Game extends React.Component {




constructor(props){
      super(props);
       this.state={
        board:[
            ["","",""],
            ["","",""],
            ["","",""]
        ],
        boardRef:[
          [React.createRef(),React.createRef(),React.createRef()],
          [React.createRef(),React.createRef(),React.createRef()],
          [React.createRef(),React.createRef(),React.createRef()]
        ],
        player:true,
        winner:"",
        countTurn:0,
        modal:false,
        modalText:"Your turn !!"
      }
      this.onReply();
}
    
    
    

onClick=async ({x,y})=>{
      let board=this.state.board;
      
      if(board[x][y]!==""){
        ipcRenderer.send("on double");
        return;
      }
      this.setState({modal:true});
      setTimeout(()=>this.setState({modal:false}),500);
      
      let ps=this.state.player ? "X" :"O";
      console.log(ps);
      console.log("  : ",this.state.countTurn)
      board[x][y]=ps;
      await this.setState({board,player:!this.state.player,countTurn:this.state.countTurn+1});
      this.onCheck();
}

onCheck=()=>{
      let winner=ipcRenderer.sendSync("on check",this.state.board);
      console.log("winner ",winner);
      
      if(winner.player==="X")
          {
            console.log("akash------------------: ",this.state.boardRef[winner.line[0].x1][winner.line[0].y1].getBoundingClientRect());
            
            this.setState({winner:"player 1"});
            ipcRenderer.send("on win","player 1")
            this.onReply();
          }
      else if(winner.player==="O"){
           console.log("akash------------------: ",this.state.boardRef[0][0])
            this.setState({winner:"player 2"});
            ipcRenderer.send("on win","player 2")
            this.onReply();
      }
      else if(this.state.countTurn===9)
          {
             ipcRenderer.send("on finished","no winner")
             this.onReply();
          }
      else{
        if(this.state.player===false){
                this.onBot();
          }
       }      
    }

onReply=()=>{
  
  ipcRenderer.on("new game",(event,arg)=>{
               this.setState(arg)                
         })
    }

   onBot=async()=>{
          let wait=2;
          setTimeout(()=>wait=wait-1,1000);      
          let move=ipcRenderer.sendSync("on best move",this.state.board);
          wait=Math.max(0,wait);          
          setTimeout(()=>this.onClick(move),wait*1000)
   } 

     
render(){
      return(
        <div className="container">
         <div className="control">
              <label>Turn : {this.state.player ? "player 1" : "player 2"}</label>
              <br/>
              <label>Winner : {this.state.winner}</label>
        </div>
          <Board onClick={this.onClick} board={this.state.board} boardRef={this.state.boardRef} turn={this.state.player}></Board>   
        </div>
        )
    }
}


export default Game;

